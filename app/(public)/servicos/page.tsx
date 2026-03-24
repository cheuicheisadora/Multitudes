import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Serviços — Multitudes Consultoria',
  description:
    'Seis módulos de consultoria política: diagnóstico territorial, inteligência eleitoral, comunicação integrada, compliance, operação de pleito e assessoria de mandato.',
}

const modules = [
  {
    num: '01',
    title: 'Diagnóstico & Posicionamento',
    hook: 'Antes de gastar um real em campanha, você precisa saber exatamente onde está.',
    description:
      'Mapeamos o território eleitoral com dados reais: perfil do eleitorado, histórico de votação por seção, forças e vulnerabilidades do candidato e dos adversários. O resultado é um diagnóstico preciso que orienta todas as decisões estratégicas seguintes.',
    deliverables: [
      'Pesquisa qualitativa de percepção de imagem',
      'Análise de dados eleitorais históricos por zona',
      'Mapa de forças políticas e adversários locais',
      'Relatório de posicionamento estratégico',
      'Definição de narrativa e mensagem central',
    ],
  },
  {
    num: '02',
    title: 'Inteligência Territorial',
    hook: 'Nem todo voto custa o mesmo. Descubra onde cada real rende mais.',
    description:
      'Identificamos os territórios com maior potencial de retorno eleitoral para que os recursos da campanha sejam alocados onde a diferença de votos é maior. Cruzamos dados geográficos, socioeconômicos e históricos para construir um plano de priorização com precisão cirúrgica.',
    deliverables: [
      'Mapeamento eleitoral por zona, seção e bairro',
      'Análise de coeficiente e desempenho histórico',
      'Plano de priorização territorial com metas por área',
      'Mapeamento de lideranças e influências comunitárias',
      'Dashboard de monitoramento atualizado em tempo real',
    ],
  },
  {
    num: '03',
    title: 'Comunicação Integrada',
    hook: 'Mensagem certa, canal certo, momento certo — sem contradições.',
    description:
      'Coordenamos todas as frentes de comunicação — digital, mídia tradicional, material de campo e presença pública — para que o eleitor ouça uma voz consistente em qualquer ponto de contato. A estratégia é orientada por dados e ajustada semanalmente conforme o cenário evolui.',
    deliverables: [
      'Calendário editorial integrado para todos os canais',
      'Estratégia e produção de conteúdo para redes sociais',
      'Plano de mídia offline: rádio, TV e material gráfico',
      'Monitoramento de menções, reputação e adversários',
      'Protocolo de gestão de crise comunicacional',
    ],
  },
  {
    num: '04',
    title: 'Conformidade Legal Eleitoral',
    hook: 'Irregularidade em campanha custa votos, dinheiro e, às vezes, o mandato.',
    description:
      'Estruturamos toda a parte jurídica e contábil da campanha para que o candidato foque em ganhar sem susto. Do planejamento de arrecadação à prestação de contas final, cada passo segue as normas do TSE com rigor e antecipação.',
    deliverables: [
      'Planejamento de arrecadação e orçamento de campanha',
      'Estruturação completa de prestação de contas',
      'Orientação sobre doações, FUNDO ESPECIAL e limites legais',
      'Revisão de materiais e peças para conformidade eleitoral',
      'Acompanhamento contínuo das resoluções e normativas do TSE',
    ],
  },
  {
    num: '05',
    title: 'Operação Eleitoral',
    hook: 'O dia do pleito é o momento de executar — sem improvisos.',
    description:
      'Coordenamos toda a operação do dia da eleição: fiscais treinados, transporte de eleitores, comunicação em tempo real entre coordenadores e análise de resultado seção por seção conforme as urnas fecham. Cada hora conta.',
    deliverables: [
      'Plano detalhado de operação no dia do pleito',
      'Treinamento de coordenadores, líderes e fiscais de urna',
      'Sistema de comunicação integrado em tempo real',
      'Logística e gestão de transporte de eleitores',
      'Análise de resultado por seção em tempo real',
    ],
  },
  {
    num: '06',
    title: 'Mandato Estratégico',
    hook: 'Eleito, o mandato começa — e a próxima campanha também.',
    description:
      'Mantemos a inteligência política ativa durante o mandato para que cada decisão reforce o capital eleitoral do parlamentar ou gestor. Comunicação, agenda, posicionamento em votações e monitoramento de reputação contínuos.',
    deliverables: [
      'Monitoramento semanal de redes sociais e reputação',
      'Relatórios periódicos de cenário e opinião pública',
      'Estratégia de comunicação e pauta do mandato',
      'Análise de desempenho legislativo e impacto público',
      'Assessoria estratégica contínua para decisões-chave',
    ],
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Conversa estratégica',
    desc: 'Entendemos o contexto da sua campanha ou mandato sem compromisso. Nenhuma solução genérica.',
  },
  {
    step: '2',
    title: 'Diagnóstico e proposta',
    desc: 'Indicamos quais módulos fazem sentido para o seu momento e estruturamos uma proposta objetiva.',
  },
  {
    step: '3',
    title: 'Execução com acompanhamento',
    desc: 'Nossa equipe embarca no projeto com entregas claras, prazos definidos e acesso direto aos especialistas.',
  },
]

export default function ServicosPage() {
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
            O que fazemos
          </p>
          <h1
            className="text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Inteligência eleitoral do diagnóstico<br className="hidden sm:block" /> à vitória.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--muted)' }}>
            Seis módulos complementares que cobrem cada fase da campanha.
            Contrate o que você precisa agora — ou monte um pacote completo desde o início.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { value: '47+', label: 'Campanhas assessoradas' },
              { value: '14',  label: 'Estados atendidos' },
              { value: '6',   label: 'Módulos especializados' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--red)' }}
                >
                  {value}
                </p>
                <p className="mt-0.5 text-xs" style={{ color: 'var(--muted)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Módulos ──────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 max-w-xl">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Módulos
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Cada módulo resolve um problema real.
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Podem ser contratados de forma independente ou combinados conforme o estágio da
              campanha. Não vendemos pacotes que não fazem sentido para o seu contexto.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="card-hover flex flex-col rounded-[3px] p-6"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Number + Title */}
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className="shrink-0 text-2xl font-bold leading-none"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--red)' }}
                  >
                    {mod.num}
                  </span>
                  <h3
                    className="text-base font-semibold leading-tight"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
                  >
                    {mod.title}
                  </h3>
                </div>

                {/* Hook */}
                <p
                  className="mb-3 text-xs font-medium italic leading-snug"
                  style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
                >
                  "{mod.hook}"
                </p>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {mod.description}
                </p>

                {/* Divider */}
                <div
                  className="mb-4"
                  style={{ height: '1px', background: 'var(--border)' }}
                  aria-hidden
                />

                {/* Deliverables */}
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
                >
                  Entregáveis
                </p>
                <ul className="flex-1 space-y-2">
                  {mod.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-1 shrink-0 text-xs leading-none"
                        style={{ color: 'var(--red)' }}
                        aria-hidden
                      >
                        ›
                      </span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--fg)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-xl">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Processo
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Como funciona a contratação
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-3" style={{ background: 'var(--border)' }}>
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="p-8"
                style={{ background: 'var(--surface)' }}
              >
                <span
                  className="mb-4 block text-4xl font-bold"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--red)' }}
                >
                  {item.step}
                </span>
                <h3
                  className="mb-2 text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Próximo passo
          </p>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Não sabe por qual módulo começar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Nossa equipe analisa o estágio da sua campanha e indica a combinação de módulos com
            maior impacto para o seu contexto. Sem jargão, sem venda casada.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contato"
              className="inline-block rounded-[3px] px-6 py-3 text-sm font-semibold text-white transition-colors"
              style={{ background: 'var(--red)' }}
              onMouseEnter={undefined}
            >
              Conversa estratégica gratuita
            </Link>
            <a
              href="https://wa.me/5561992560616?text=Olá,%20vim%20pela%20página%20de%20serviços%20da%20Multitudes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[3px] border px-6 py-3 text-sm font-medium transition-colors hover:text-white"
              style={{ borderColor: 'var(--border-2)', color: 'var(--muted)' }}
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
