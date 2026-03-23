import Link from 'next/link'

const services = [
  {
    title: 'Diagnóstico Político',
    description:
      'Leitura do ambiente, do candidato e do território antes de qualquer decisão. Ponto de partida para campanhas que não improvisam.',
  },
  {
    title: 'Posicionamento e Narrativa',
    description:
      'Construção da identidade política, da mensagem central e da linguagem da candidatura. O que o candidato diz, como diz e para quem.',
  },
  {
    title: 'Inteligência Eleitoral',
    description:
      'Análise de pesquisas, mapeamento territorial, segmentação de eleitorado e monitoramento de concorrência com metodologia própria.',
  },
  {
    title: 'Planejamento Territorial',
    description:
      'Divisão do território por potencial de voto, priorização de zonas e organização da presença de campo com critério analítico.',
  },
  {
    title: 'Monitoramento de Redes',
    description:
      'Rastreamento de narrativas, detecção de movimentações digitais, análise de engajamento e alertas em tempo real sobre o ambiente online.',
  },
  {
    title: 'Comunicação de Campanha',
    description:
      'Coordenação de mensagem entre redes sociais, agenda de campo, materiais e assessoria de imprensa. Coerência em todos os canais.',
  },
  {
    title: 'Produção de Conteúdo Político',
    description:
      'Vídeos curtos, análises, comentários e materiais para diferentes plataformas. Conteúdo com direção estratégica, não apenas volume.',
  },
  {
    title: 'Coordenação Estratégica',
    description:
      'Integração entre equipes, fornecedores e frentes de campanha. A consultoria que garante que o plano seja executado como foi desenhado.',
  },
]

export function ServicesSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              O que fazemos
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Serviços
            </h2>
          </div>
          <Link
            href="/servicos"
            className="shrink-0 text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            Ver todos os serviços →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface p-6 transition-colors hover:bg-surface-raised"
            >
              <div
                className="mb-4 h-px w-8 transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <h3 className="font-serif text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
