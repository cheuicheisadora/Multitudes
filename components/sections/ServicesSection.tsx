const services = [
  {
    icon: '◉',
    title: 'Diagnóstico político',
    desc: 'Mapeamento completo do território eleitoral, análise de forças e vulnerabilidades.',
  },
  {
    icon: '◎',
    title: 'Pesquisa eleitoral',
    desc: 'Pesquisas quantitativas e qualitativas, rastreamento de imagem e intenção de voto.',
  },
  {
    icon: '◈',
    title: 'Estratégia de campanha',
    desc: 'Plano estratégico integrado: mensagem, segmentação, calendário e prioridades táticas.',
  },
  {
    icon: '◇',
    title: 'Comunicação política',
    desc: 'Narrativa de campanha, identidade visual, scripts e materiais para todos os canais.',
  },
  {
    icon: '◆',
    title: 'Monitoramento digital',
    desc: 'Análise de redes sociais, rastreamento de narrativas e inteligência de adversários.',
  },
  {
    icon: '◐',
    title: 'Coordenação de campo',
    desc: 'Estruturação de comitês, treinamento de lideranças e organização territorial.',
  },
  {
    icon: '◑',
    title: 'Gestão de crise',
    desc: 'Protocolos de resposta rápida, comunicação de crise e proteção de imagem.',
  },
  {
    icon: '○',
    title: 'Mandato e governança',
    desc: 'Assessoria para mandatários: comunicação, agenda e posicionamento pós-eleição.',
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
          </div>
          <a
            href="/servicos"
            className="text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'var(--muted)' }}
          >
            Ver todos os serviços →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--border)' }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 transition-colors"
              style={{ background: 'var(--bg)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'var(--surface)'
                el.style.borderLeft = '3px solid var(--red)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'var(--bg)'
                el.style.borderLeft = ''
              }}
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
