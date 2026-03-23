import { db } from '@/lib/db'
import Link from 'next/link'
import { Users, Mail, Video, TrendingUp } from 'lucide-react'

async function getStats() {
  try {
    const [leads, subscribers, videos] = await Promise.all([
      db.lead.count(),
      db.subscriber.count(),
      db.video.count(),
    ])
    return { leads, subscribers, videos }
  } catch {
    return { leads: 0, subscribers: 0, videos: 0 }
  }
}

interface Lead {
  id: string
  name: string
  email: string
  source: string | null
  createdAt: Date
}

async function getRecentLeads(): Promise<Lead[]> {
  try {
    return await db.lead.findMany({ take: 5, orderBy: { createdAt: 'desc' } })
  } catch {
    return []
  }
}

export default async function AdminDashboard() {
  const [stats, recentLeads] = await Promise.all([getStats(), getRecentLeads()])

  const statCards = [
    { icon: Users, label: 'Total de Leads', value: stats.leads, href: '/admin/leads', color: 'text-accent' },
    { icon: Mail, label: 'Inscritos Newsletter', value: stats.subscribers, href: '/admin/inscritos', color: 'text-accent' },
    { icon: Video, label: 'Vídeos Publicados', value: stats.videos, href: '/admin/videos', color: 'text-accent' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <a
          href="/api/leads/export"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <TrendingUp className="h-4 w-4" />
          Exportar leads CSV
        </a>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
        {statCards.map(({ icon: Icon, label, value, href }) => (
          <Link
            key={href}
            href={href}
            className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{label}</p>
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
          </Link>
        ))}
      </div>

      {/* Recent leads */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Leads recentes</h2>
          <Link href="/admin/leads" className="text-sm text-accent hover:underline">
            Ver todos
          </Link>
        </div>
        {recentLeads.length === 0 ? (
          <p className="text-muted-foreground text-sm">Nenhum lead ainda.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Nome</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">E-mail</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Origem</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="py-3 font-medium text-foreground">{lead.name}</td>
                    <td className="py-3 text-muted-foreground">{lead.email}</td>
                    <td className="py-3 text-muted-foreground">{lead.source ?? '—'}</td>
                    <td className="py-3 text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
