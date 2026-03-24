'use client'

const services = [
  {
    icon: '◉',
    title: 'Diagnóstico político',
    desc: 'Mapeamento completo do território: perfil de eleitorado, histórico de votação e análise de forças e vulnerabilidades antes de qualquer decisão.',
  },
  {
    icon: '◎',
    title: 'Pesquisa eleitoral',
    desc: 'Pesquisas quantitativas e qualitativas, rastreamento de imagem e intenção de voto para decisões baseadas em dados reais, não intuição.',
  },
  {
    icon: '◈',
    title: 'Estratégia de campanha',
    desc: 'Plano estratégico integrado: mensagem central, segmentação de público, calendário tático e prioridades por território.',
  },
  {
    icon: '◇',
    title: 'Comunicação política',
    desc: 'Narrativa de campanha coesa, identidade visual e conteúdo para cada canal — com consistência de tom do digital ao material de campo.',
  },
  {
    icon: '◆',
    title: 'Monitoramento digital',
    desc: 'Escuta ativa de redes sociais, rastreamento de narrativas em circulação e inteligência sobre movimentos dos adversários.',
  },
  {
    icon: '◐',
    title: 'Coordenação de campo',
    desc: 'Estruturação de comitês, treinamento de lideranças territoriais e organização de operações de campo com metas claras.',
  },
  {
    icon: '◑',
    title: 'Gestão de crise',
    desc: 'Protocolos de resposta rápida, comunicação de crise e proteção de imagem — antes que o problema vire manchete.',
  },
  {
    icon: '○',
    title: 'Mandato e governança',
    desc: 'Assessoria contínua para mandatários: comunicação, agenda e posicionamento que constroem capital eleitoral durante o mandato.',
  },
]

export function ServicesSection() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              O que fazemos
            </p>
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Serviços
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Módulos especializados que cobrem cada fase — do diagnóstico inicial à operação no dia do pleito.
            </p>
          </div>
          <a
            href="/servicos"
            className="shrink-0 text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'var(--muted)' }}
          >
            Ver detalhes e entregáveis →
          </a>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: 'var(--border)' }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover relative p-6"
              style={{ background: 'var(--bg)' }}
            >
              <div
                className="mb-4 text-2xl"
                style={{ color: 'var(--red)' }}
                aria-hidden
              >
                {service.icon}
              </div>
              <h3
                className="mb-2 text-sm font-semibold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
              >
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
