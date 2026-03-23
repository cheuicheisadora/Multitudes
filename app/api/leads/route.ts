import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { leadSchema } from '@/lib/validations'
import { sendLeadNotification, sendContactConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const lead = await db.lead.upsert({
      where: { email: parsed.data.email },
      update: {
        name: parsed.data.name,
        phone: parsed.data.phone,
        role: parsed.data.role,
        city: parsed.data.city,
        state: parsed.data.state,
        context: parsed.data.context,
        source: parsed.data.source,
      },
      create: parsed.data,
    })

    // Fire and forget emails — don't fail the request if email fails
    sendLeadNotification(lead).catch(console.error)
    sendContactConfirmation({ name: lead.name, email: lead.email }).catch(console.error)

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/leads]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const leads = await db.lead.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(leads)
  } catch (error) {
    console.error('[GET /api/leads]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
