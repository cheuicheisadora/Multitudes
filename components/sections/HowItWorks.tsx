'use client'

import { useState } from 'react'
import { BriefingModal } from '@/components/modals/BriefingModal'

const steps = [
  {
    num:  '1',
    title: 'Briefing inicial',
    desc:  'Você preenche um formulário rápido descrevendo candidatura, território e momento político. Nenhum compromisso ainda.',
  },
  {
    num:  '2',
    title: 'Conversa estratégica',
    desc:  'Agendamos uma reunião de diagnóstico — presencial ou remota — para entender o cenário em profundidade.',
  },
  {
    num:  '3',
    title: 'Proposta personalizada',
    desc:  'Com base no diagnóstico, apresentamos um escopo de trabalho, metodologia e investimento adequados ao seu contexto.',
  },
  {
    num:  '4',
    title: 'Execução integrada',
    desc:  'Começamos o trabalho com cronograma, entregáveis claros e comunicação contínua ao longo de toda a campanha.',
  },
]

export function HowItWorks() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section
        className="py-24"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 max-w-xl">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Processo
            </p>
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Como começamos a trabalhar
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative p-6"
                style={{
                  borderTop: '3px solid var(--border)',
                }}
              >
                {/* Number */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: 'var(--red-dim)',
                    color: 'var(--red)',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid var(--red)',
                  }}
                >
                  {step.num}
                </div>

                {/* Arrow connector (not last) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-9 right-0 hidden lg:block"
                    aria-hidden
                    style={{ color: 'var(--border-2)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}

                <h3
                  className="mb-2 text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
                >
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setOpen(true)}
              className="btn-red inline-flex items-center gap-2 rounded-[3px] px-8 py-4 text-sm font-semibold text-white"
            >
              Iniciar conversa estratégica →
            </button>
            <p className="mt-3 text-xs" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>
              Sem compromisso · Resposta em até 24h
            </p>
          </div>
        </div>
      </section>

      <BriefingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
