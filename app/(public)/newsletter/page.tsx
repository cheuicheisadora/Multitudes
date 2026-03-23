import type { Metadata } from 'next'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { db } from '@/lib/db'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'Assine a newsletter da Multitudes e receba análises políticas, pesquisas eleitorais e inteligência estratégica.',
}

interface Edition {
  id: string
  title: string
  summary: string | null
  publishedAt: Date
  url: string
}

async function getEditions(): Promise<Edition[]> {
  try {
    return await db.edition.findMany({ orderBy: { publishedAt: 'desc' } })
  } catch {
    return []
  }
}

export default async function NewsletterPage() {
  const editions = await getEditions()

  return (
    <div>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Newsletter
          </p>
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
            Inteligência política no seu e-mail
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Análises eleitorais, pesquisas e comentários semanais sobre o cenário político
            brasileiro.
          </p>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground">Assinar gratuitamente</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sem spam. Cancele quando quiser.
                </p>
                <div className="mt-6">
                  <NewsletterForm variant="stacked" />
                </div>
              </div>
            </div>

            {/* Editions archive */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Edições anteriores
              </h2>

              {editions.length === 0 ? (
                <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground">
                  <p>As edições anteriores serão listadas aqui em breve.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {editions.map((edition) => (
                    <a
                      key={edition.id}
                      href={edition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent group"
                    >
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {new Date(edition.publishedAt).toLocaleDateString('pt-BR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {edition.title}
                        </h3>
                        {edition.summary && (
                          <p className="mt-1 text-sm text-muted-foreground">{edition.summary}</p>
                        )}
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent mt-1 transition-colors" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
