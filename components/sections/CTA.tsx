'use client'

import { useState } from 'react'
import { BriefingModal } from '@/components/modals/BriefingModal'

export function CTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section
        className="grain relative overflow-hidden py-32"
        style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        {/* Dot-grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(192,57,43,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.5,
          }}
        />

        {/* Red glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          style={{
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(192,57,43,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Pronto para começar?
          </p>

          <h2
            className="text-4xl font-bold leading-tight sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Estratégia política começa com uma conversa honesta.
          </h2>

          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Sem script de vendas. Sem promessas impossíveis. Só uma análise real
            do seu cenário e do que pode ser feito.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="btn-red inline-flex items-center gap-2 rounded-[3px] px-8 py-4 text-sm font-semibold text-white"
            >
              Conversa estratégica →
            </button>
            <a
              href="https://wa.me/5561992560616?text=Olá,%20vim%20pelo%20site%20da%20Multitudes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-[3px] px-8 py-4 text-sm font-medium"
            >
              WhatsApp direto
            </a>
          </div>

          <p
            className="mt-8 text-xs"
            style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
          >
            47+ campanhas assessoradas · 14 estados · Desde 2018
          </p>
        </div>
      </section>

      <BriefingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
