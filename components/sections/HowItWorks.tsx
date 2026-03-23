import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Conversa inicial',
    description: 'Entendemos o projeto, o território e o momento político.',
  },
  {
    number: '2',
    title: 'Leitura preliminar',
    description: 'Análise rápida do ambiente e das oportunidades da candidatura.',
  },
  {
    number: '3',
    title: 'Proposta de atuação',
    description: 'Escopo, cronograma e forma de trabalho adaptados ao seu contexto.',
  },
  {
    number: '4',
    title: 'Início do trabalho',
    description: 'Execução com acompanhamento próximo e comunicação direta.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Processo
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Como funciona o contato
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              <div
                className="absolute left-full top-4 hidden h-px w-full bg-border lg:block"
                style={{ transform: 'translateX(-50%)', width: 'calc(100% - 3rem)' }}
                aria-hidden
              />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-raised font-mono text-sm font-medium text-primary">
                {step.number}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 border-t border-border pt-10">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-[6px] bg-primary px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Solicitar diagnóstico inicial
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
