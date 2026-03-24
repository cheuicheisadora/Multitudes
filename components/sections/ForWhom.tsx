const audiences = [
  {
    title: 'Pré-candidatos',
    desc:  'Que precisam estruturar a candidatura antes de entrar em campanha. Diagnóstico, posicionamento e plano estratégico.',
    icon:  '◎',
  },
  {
    title: 'Candidatos em campanha',
    desc:  'Disputando eleições e que precisam de inteligência eleitoral, pesquisa e coordenação estratégica em tempo real.',
    icon:  '◉',
  },
  {
    title: 'Equipes de campanha',
    desc:  'Coordenadores, marqueteiros e líderes que precisam de metodologia, dados e suporte para tomada de decisão.',
    icon:  '◈',
  },
  {
    title: 'Mandatários',
    desc:  'Vereadores, deputados e prefeitos que querem manter posicionamento estratégico e se preparar para a próxima disputa.',
    icon:  '◇',
  },
  {
    title: 'Partidos e grupos',
    desc:  'Diretórios regionais, grupos políticos e movimentos que precisam de inteligência coletiva e estratégia territorial.',
    icon:  '◆',
  },
  {
    title: 'Assessores e consultores',
    desc:  'Profissionais políticos que querem ferramentas analíticas e metodologia para ampliar sua capacidade de entrega.',
    icon:  '○',
  },
]

export function ForWhom() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Para quem
          </p>
          <h2
            className="text-4xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Quem atendemos
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Trabalhamos com atores políticos que levam estratégia a sério.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-[3px] p-6"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="mb-4 text-xl" style={{ color: 'var(--red)' }} aria-hidden>
                {a.icon}
              </div>
              <h3
                className="mb-2 text-sm font-semibold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
              >
                {a.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
