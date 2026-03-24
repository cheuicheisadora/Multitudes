import { NewsletterForm } from '@/components/forms/NewsletterForm'

export function NewsletterSection() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: editorial copy */}
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Publicação semanal
            </p>
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Inteligência política<br />
              na sua caixa de entrada.
            </h2>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Toda semana: análise de cenário eleitoral, monitoramento de pesquisas,
              movimentos dos partidos e o que os dados dizem antes da mídia perceber.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Análise de cenários eleitorais 2026',
                'Leitura de pesquisas e metodologias',
                'Monitoramento de narrativas digitais',
                'Bastidores da política brasileira',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: 'var(--red)' }}
                    aria-hidden
                  />
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 rounded-[3px] p-5"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--red)',
              }}
            >
              <p
                className="mb-1 text-xs uppercase tracking-widest"
                style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
              >
                Lead magnet
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--fg)', fontFamily: 'var(--font-display)' }}>
                Guia: Como ler uma pesquisa eleitoral sem ser enganado
              </p>
              <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>
                PDF exclusivo para novos assinantes — metodologia, vieses e perguntas certas.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex flex-col justify-center">
            <div
              className="rounded-[4px] p-8"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-2)',
              }}
            >
              <h3
                className="mb-6 text-xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
              >
                Assinar gratuitamente
              </h3>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
