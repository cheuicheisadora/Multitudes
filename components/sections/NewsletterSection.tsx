import { NewsletterForm } from '@/components/forms/NewsletterForm'

export function NewsletterSection() {
  return (
    <section
      className="py-24"
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '2px solid var(--primary)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Editorial copy */}
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Intelligence Brief · Semanal
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Análise política que você não vai encontrar em outro lugar.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Toda semana: leitura estratégica do ambiente político, interpretação de pesquisas
              eleitorais, análise de debates e relatórios de monitoramento de redes sociais. Para
              quem toma decisões políticas com seriedade.
            </p>

            {/* Lead magnet */}
            <div className="mt-8 rounded-[6px] border border-border bg-surface-raised p-5">
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                📄 Bônus de boas-vindas
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Ao se inscrever, você recebe o relatório:{' '}
                <span className="font-medium text-foreground">
                  "Como ler uma pesquisa eleitoral sem ser enganado"
                </span>
              </p>
            </div>

            <p className="mt-6 text-xs text-muted">
              Lido por assessores, candidatos e analistas políticos.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-[6px] border border-border bg-surface-raised p-8">
            <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
              Assine gratuitamente
            </h3>
            <NewsletterForm variant="stacked" />
          </div>
        </div>
      </div>
    </section>
  )
}
