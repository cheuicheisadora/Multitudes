import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Método — Multitudes Consultoria',
  description:
    'As 5 etapas do método Multitudes: do diagnóstico territorial à operação eleitoral. Um processo estruturado e testado em dezenas de campanhas.',
}

const steps = [
  {
    number: '01',
    title: 'Diagnóstico e construção da identidade política',
    description: [
      'Análise qualitativa do candidato: trajetória, posicionamento, percepção pública e potencial eleitoral.',
      'Pesquisa de campo e análise de dados para compreender o eleitorado, suas demandas e o mapa de forças políticas locais.',
      'Construção da narrativa e identidade: o que o candidato representa, para quem fala e como se diferencia.',
      'Definição do posicionamento estratégico e da mensagem central da campanha.',
    ],
  },
  {
    number: '02',
    title: 'Inteligência eleitoral e planejamento territorial',
    description: [
      'Mapeamento detalhado dos colégios eleitorais com análise histórica de votação.',
      'Identificação de zonas de crescimento potencial e regiões de consolidação.',
      'Definição das prioridades territoriais e alocação eficiente de recursos.',
      'Análise da correlação de forças locais e mapeamento de lideranças comunitárias.',
    ],
  },
  {
    number: '03',
    title: 'Estrutura financeira e conformidade legal eleitoral',
    description: [
      'Planejamento orçamentário realista alinhado ao potencial de arrecadação.',
      'Orientação sobre fontes de financiamento permitidas pela legislação eleitoral.',
      'Estruturação da prestação de contas e conformidade com as normas do TSE.',
      'Gestão de riscos legais e prevenção de irregularidades que possam ameaçar a candidatura.',
    ],
  },
  {
    number: '04',
    title: 'Execução integrada e comunicação multicanal',
    description: [
      'Calendário editorial integrado para todos os canais: redes sociais, imprensa, campo e eventos.',
      'Produção de conteúdo orientado por dados: o que funciona para o público-alvo definido.',
      'Monitoramento contínuo do ambiente digital: menções, tendências e crises emergentes.',
      'Adaptação das mensagens em tempo real conforme o feedback do campo e as métricas digitais.',
    ],
  },
  {
    number: '05',
    title: 'Reta final e operação eleitoral',
    description: [
      'Intensificação estratégica nos últimos 30 dias: prioridades, recursos e mensagem de fechamento.',
      'Coordenação da operação no dia do pleito: fiscais, boca de urna e transporte.',
      'Gestão de crises em tempo real e resposta rápida a movimentos adversários.',
      'Acompanhamento dos resultados e análise pós-eleição para aprendizado institucional.',
    ],
  },
]

export default function MetodoPage() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Nossa abordagem
          </p>
          <h1
            className="text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            O Método Multitudes
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--muted)' }}>
            Um processo estruturado e testado em dezenas de campanhas para transformar
            candidaturas em vitórias e mandatos em legados.
          </p>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 py-10"
                style={{ borderBottom: index < steps.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-7 top-[4.5rem] hidden h-full w-px sm:block"
                    style={{ background: 'var(--border)' }}
                    aria-hidden
                  />
                )}

                {/* Number circle */}
                <div
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-black"
                  style={{
                    background: 'var(--surface)',
                    border: '2px solid var(--red)',
                    color: 'var(--red)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h2
                    className="text-xl font-bold leading-snug"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
                  >
                    {step.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {step.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: 'var(--red)' }}
                          aria-hidden
                        />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA block ──────────────────────────────────────── */}
          <div
            className="mt-16 rounded-[4px] p-10 text-center"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-2)',
            }}
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Próximo passo
            </p>
            <h3
              className="text-2xl font-bold sm:text-3xl"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Quer aplicar este método na sua candidatura?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Entre em contato e agende uma conversa estratégica com nossa equipe.
              Sem script de vendas — só uma análise honesta do seu cenário.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-[3px] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: 'var(--red)' }}
              >
                Fale conosco
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 rounded-[3px] border px-6 py-3 text-sm font-medium transition-colors hover:text-white"
                style={{ borderColor: 'var(--border-2)', color: 'var(--muted)' }}
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
