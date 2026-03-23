import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { videoSchema } from '@/lib/validations'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const videos = await db.video.findMany({
      where: category ? { category } : undefined,
      orderBy: { publishedAt: 'desc' },
    })

    return NextResponse.json(videos)
  } catch (error) {
    console.error('[GET /api/videos]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = videoSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const video = await db.video.create({
      data: {
        ...parsed.data,
        publishedAt: parsed.data.publishedAt ? new Date(parsed.data.publishedAt) : new Date(),
      },
    })

    return NextResponse.json(video, { status: 201 })
  } catch (error) {
    console.error('[POST /api/videos]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
