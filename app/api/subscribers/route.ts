import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { subscriberSchema } from '@/lib/validations'
import { sendWelcomeNewsletter } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = subscriberSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const subscriber = await db.subscriber.upsert({
      where: { email: parsed.data.email },
      update: { name: parsed.data.name },
      create: parsed.data,
    })

    sendWelcomeNewsletter(subscriber).catch(console.error)

    return NextResponse.json({ success: true, id: subscriber.id }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/subscribers]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const subscribers = await db.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(subscribers)
  } catch (error) {
    console.error('[GET /api/subscribers]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
