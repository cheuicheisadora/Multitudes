'use client'

import { useState } from 'react'

const steps = [
  {
    num:   '01',
    title: 'Diagnóstico territorial',
    tags:  ['pesquisa', 'dados', 'mapeamento'],
    desc:  'Análise profunda do território eleitoral: perfil socioeconômico dos eleitores, histórico de votação, forças e vulnerabilidades do candidato versus adversários.',
  },
  {
    num:   '02',
    title: 'Inteligência eleitoral',
    tags:  ['pesquisa quantitativa', 'pesquisa qualitativa', 'painel'],
    desc:  'Pesquisas de intenção de voto, grupos focais, rastreamento de imagem e monitoramento contínuo de cenários para alimentar decisões táticas.',
  },
  {
    num:   '03',
    title: 'Posicionamento estratégico',
    tags:  ['narrativa', 'mensagem', 'segmentação'],
    desc:  'Construção de plataforma eleitoral baseada em dados reais: mensagem principal, territórios prioritários, públicos-alvo e arquitetura de comunicação.',
  },
  {
    num:   '04',
    title: 'Execução integrada',
    tags:  ['digital', 'campo', 'mídia'],
    desc:  'Coordenação de todos os canais — redes sociais, rádio e TV, material de campo, eventos — com consistência de mensagem e cadência estratégica.',
  },
  {
    num:   '05',
    title: 'Monitoramento contínuo',
    tags:  ['métricas', 'ajuste', 'relatório'],
    desc:  'Acompanhamento semanal de indicadores eleitorais, análise de redes sociais e ajuste de rota em tempo real conforme o cenário evolui.',
  },
]

export function Method() {
  const [active, setActive] = useState(0)

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
            Como trabalhamos
          </p>
          <h2
            className="text-4xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Método Multitudes
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            Cinco etapas integradas que transformam dados em votos e estratégia em resultado.
          </p>
        </div>

        {/* Desktop: horizontal accordion */}
        <div className="hidden gap-1 lg:flex" style={{ minHeight: '340px' }}>
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActive(i)}
              className="group relative flex flex-col overflow-hidden rounded-[3px] transition-all duration-500"
              style={{
                flex: active === i ? '5' : '1',
                background: active === i ? 'var(--surface-2)' : 'var(--bg)',
                border: '1px solid var(--border)',
                borderLeft: active === i ? '3px solid var(--red)' : '1px solid var(--border)',
                padding: '28px 20px',
                textAlign: 'left',
                minWidth: 0,
              }}
            >
              <span
                className="text-4xl font-bold leading-none"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: active === i ? 'var(--red)' : 'var(--border-2)',
                  transition: 'color 0.4s',
                }}
              >
                {step.num}
              </span>

              <span
                className="mt-4 block text-sm font-semibold leading-tight"
                style={{
                  color: active === i ? 'var(--fg)' : 'var(--muted)',
                  fontFamily: 'var(--font-display)',
                  writingMode: active === i ? 'horizontal-tb' : 'vertical-rl',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.4s',
                }}
              >
                {step.title}
              </span>

              {active === i && (
                <div className="mt-5 flex-1">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full px-2 py-0.5 text-xs"
                        style={{
                          background: 'var(--red-dim)',
                          color: 'var(--red)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {step.desc}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col gap-2 lg:hidden">
          {steps.map((step, i) => (
            <div key={step.num} style={{ border: '1px solid var(--border)', borderRadius: '3px' }}>
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                className="flex w-full items-center gap-4 p-4 text-left"
                style={{ background: active === i ? 'var(--surface-2)' : 'transparent' }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: active === i ? 'var(--red)' : 'var(--border-2)',
                    minWidth: '40px',
                  }}
                >
                  {step.num}
                </span>
                <span
                  className="flex-1 text-sm font-semibold"
                  style={{ color: 'var(--fg)', fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  style={{
                    color: 'var(--subtle)',
                    transform: active === i ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s',
                  }}
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {active === i && (
                <div className="px-4 pb-4">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full px-2 py-0.5 text-xs"
                        style={{
                          background: 'var(--red-dim)',
                          color: 'var(--red)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {step.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
