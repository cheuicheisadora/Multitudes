const differentials = [
  {
    number: '01',
    title: 'Método, não improviso',
    description: 'Cada etapa tem entregáveis claros. Nada é decidido no feeling.',
  },
  {
    number: '02',
    title: 'Adaptação brasileira',
    description:
      'Consultoria eleitoral pensada para o contexto político, territorial e regulatório do Brasil.',
  },
  {
    number: '03',
    title: 'Inteligência integrada',
    description:
      'Dados, narrativa, território e monitoramento digital funcionando como um sistema único.',
  },
]

export function Differentials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Por que a Multitudes
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {differentials.map((item) => (
            <div key={item.number}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {item.number}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
