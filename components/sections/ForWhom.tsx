const audiences = [
  {
    title: 'Pré-candidatos',
    description: 'Que precisam estruturar a candidatura antes de entrar em campanha.',
  },
  {
    title: 'Candidatos em campanha',
    description: 'Que querem método, não improviso, nas semanas decisivas.',
  },
  {
    title: 'Equipes políticas',
    description: 'Coordenadores, tesoureiros e assessores que precisam de suporte técnico.',
  },
  {
    title: 'Mandatários',
    description: 'Que buscam análise para posicionamento e comunicação contínua.',
  },
  {
    title: 'Partidos e grupos',
    description: 'Que precisam organizar múltiplas candidaturas com eficiência.',
  },
  {
    title: 'Analistas e assessores',
    description: 'Que consomem conteúdo político de qualidade.',
  },
]

export function ForWhom() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Público-alvo
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Para quem é
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            A Multitudes trabalha com quem leva política a sério.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group bg-background p-6 transition-colors hover:bg-surface"
            >
              <div
                className="mb-4 h-px w-6 transition-all duration-300 group-hover:w-10"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
