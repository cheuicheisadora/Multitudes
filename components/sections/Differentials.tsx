const differentials = [
  {
    num:   '01',
    title: 'Método, não improviso',
    desc:  'Cada etapa tem entregáveis claros, cronograma definido e indicadores de acompanhamento. Nada é decidido no feeling.',
  },
  {
    num:   '02',
    title: 'Adaptação brasileira',
    desc:  'Consultoria eleitoral pensada para o contexto político, territorial, regulatório e cultural do Brasil — não uma versão importada.',
  },
  {
    num:   '03',
    title: 'Inteligência integrada',
    desc:  'Dados, narrativa, território e monitoramento digital funcionando como um sistema único, orientado pelo mesmo diagnóstico.',
  },
]

export function Differentials() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Por que a Multitudes
          </p>
          <h2
            className="text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {differentials.map((item) => (
            <div key={item.num}>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
              >
                {item.num}
              </p>
              <h3
                className="mt-4 text-2xl font-bold leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
              >
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
