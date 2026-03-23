import { db } from '@/lib/db'

interface Subscriber {
  id: string
  email: string
  name: string | null
  createdAt: Date
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    return await db.subscriber.findMany({ orderBy: { createdAt: 'desc' } })
  } catch {
    return []
  }
}

export default async function InscritosPage() {
  const subscribers = await getSubscribers()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Inscritos Newsletter</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {subscribers.length} inscrito(s)
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {['Nome', 'E-mail', 'Data de inscrição'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subscribers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                    Nenhum inscrito ainda.
                  </td>
                </tr>
              ) : (
                subscribers.map((s) => (
                  <tr key={s.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium text-foreground">{s.name ?? '—'}</td>
                    <td className="px-4 py-3 text-muted-foreground">{s.email}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {new Date(s.createdAt).toLocaleDateString('pt-BR')}
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
