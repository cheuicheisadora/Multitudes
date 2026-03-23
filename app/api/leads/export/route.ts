import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const leads = await db.lead.findMany({ orderBy: { createdAt: 'desc' } })

    const headers = ['ID', 'Nome', 'E-mail', 'Telefone', 'Cargo', 'Cidade', 'Estado', 'Mensagem', 'Origem', 'Data']
    const rows = leads.map((l: { id: string; name: string; email: string; phone: string | null; role: string | null; city: string | null; state: string | null; context: string | null; source: string | null; createdAt: Date }) => [
      l.id,
      l.name,
      l.email,
      l.phone ?? '',
      l.role ?? '',
      l.city ?? '',
      l.state ?? '',
      (l.context ?? '').replace(/,/g, ';'),
      l.source ?? '',
      l.createdAt.toISOString(),
    ])

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n')

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="leads.csv"',
      },
    })
  } catch (error) {
    console.error('[GET /api/leads/export]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
