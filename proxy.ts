import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization')

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Autenticação necessária', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Multitudes Admin"',
        },
      })
    }

    const base64 = authHeader.slice('Basic '.length)
    const decoded = Buffer.from(base64, 'base64').toString('utf-8')
    const [username, password] = decoded.split(':')

    const validUser = process.env.ADMIN_USERNAME ?? 'admin'
    const validPass = process.env.ADMIN_PASSWORD ?? ''

    if (username !== validUser || password !== validPass) {
      return new NextResponse('Credenciais inválidas', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Multitudes Admin"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
