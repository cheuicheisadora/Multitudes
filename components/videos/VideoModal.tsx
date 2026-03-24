'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface Props {
  videoId: string
  title:   string
  onClose: () => void
}

export function VideoModal({ videoId, title, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement
    setTimeout(() => closeRef.current?.focus(), 50)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(7,10,16,0.95)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative w-full max-w-4xl">
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-xs transition-colors hover:text-white"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          aria-label="Fechar vídeo"
        >
          <X className="h-4 w-4" />
          ESC
        </button>

        <div className="overflow-hidden rounded-[4px]" style={{ border: '1px solid var(--border-2)' }}>
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        <p
          className="mt-3 text-sm"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-display)' }}
        >
          {title}
        </p>
      </div>
    </div>
  )
}
