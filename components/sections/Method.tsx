import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico e Identidade Política',
    description:
      'Definimos quem o candidato é, como é percebido e que narrativa pode torná-lo competitivo. Posicionamento, identidade verbal, leitura de alianças e espaço político a ocupar.',
  },
  {
    number: '02',
    title: 'Inteligência Eleitoral e Planejamento',
    description:
      'Mapeamos territórios, concorrência, públicos e metas de crescimento. Análise de pesquisas, segmentação do eleitorado e cruzamento de dados para decisões fundamentadas.',
  },
  {
    number: '03',
    title: 'Estrutura Financeira e Conformidade Legal',
    description:
      'Organizamos orçamento, fluxo de recursos e aderência às regras eleitorais. Planejamento financeiro, operacional e acompanhamento de prestação de contas.',
  },
  {
    number: '04',
    title: 'Execução Integrada e Comunicação',
    description:
      'Redes sociais, agenda de campo, coordenação de mensagem, resposta rápida e materiais de campanha funcionando como um sistema único.',
  },
  {
    number: '05',
    title: 'Reta Final e Operação Eleitoral',
    description:
      'Mobilização, presença territorial, proteção de narrativa e organização do dia da eleição. Protocolos de crise e reforço de mensagem na hora decisiva.',
  },
]

export function Method() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Nossa Abordagem
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Método em 5 Etapas
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-0 top-4 hidden h-full w-px bg-border lg:block" style={{ left: '1.5rem' }} />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative grid grid-cols-1 gap-6 border-b border-border py-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12"
              >
                {/* Number bullet */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium text-primary transition-colors group-hover:border-primary">
                  {step.number}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>

                {/* Large decorative number */}
                <div
                  className="hidden select-none font-serif text-[120px] font-bold leading-none lg:block"
                  style={{ color: 'var(--primary-muted)' }}
                  aria-hidden
                >
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/metodo"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            Ver método completo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
