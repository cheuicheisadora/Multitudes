'use client'

import { useState } from 'react'
import { BriefingModal } from '@/components/modals/BriefingModal'

export function BriefingTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-[3px] px-5 py-3 text-sm font-semibold text-white transition-colors"
        style={{ backgroundColor: 'var(--red)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--red-hover)')}
        onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--red)')}
      >
        Conversa estratégica
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
      <BriefingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
