import { db } from '@/lib/db'
import { TrendingUp } from 'lucide-react'

interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  role: string | null
  city: string | null
  state: string | null
  context: string | null
  source: string | null
  createdAt: Date
}

async function getLeads(): Promise<Lead[]> {
  try {
    return await db.lead.findMany({ orderBy: { createdAt: 'desc' } })
  } catch {
    return []
  }
}

export default async function LeadsPage() {
  const leads = await getLeads()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Leads</h1>
          <p className="text-sm text-muted-foreground mt-1">{leads.length} lead(s) cadastrado(s)</p>
        </div>
        <a
          href="/api/leads/export"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <TrendingUp className="h-4 w-4" />
          Exportar CSV
        </a>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {['Nome', 'E-mail', 'Telefone', 'Cargo', 'Cidade/UF', 'Mensagem', 'Origem', 'Data'].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-left font-medium text-muted-foreground">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                    Nenhum lead ainda.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{lead.email}</td>
                    <td className="px-4 py-3 text-muted-foreground">{lead.phone ?? '—'}</td>
                    <td className="px-4 py-3 text-muted-foreground">{lead.role ?? '—'}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {[lead.city, lead.state].filter(Boolean).join('/') || '—'}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                      {lead.context ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{lead.source ?? '—'}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
