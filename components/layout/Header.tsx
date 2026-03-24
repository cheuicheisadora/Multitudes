'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BriefingModal } from '@/components/modals/BriefingModal'

const navLinks = [
  { href: '/metodo',     label: 'Método' },
  { href: '/servicos',   label: 'Serviços' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/videos',     label: 'Vídeos' },
  { href: '/contato',    label: 'Contato' },
]

export function Header() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const [modalOpen, setModalOpen]       = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-border'
            : 'border-b border-transparent',
        )}
        style={{
          backdropFilter: 'blur(16px)',
          background: 'rgba(7, 10, 16, 0.88)',
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Multitudes — página inicial">
            <span
              className="pulse-red h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: 'var(--red)' }}
              aria-hidden
            />
            <span
              className="font-display text-lg font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Multitudes
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-[3px] px-4 py-2 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: 'var(--red)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--red-hover)')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--red)')}
            >
              Conversa estratégica
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            style={{ color: 'var(--fg)' }}
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            'overflow-hidden border-t border-border md:hidden transition-all duration-300',
            mobileOpen ? 'max-h-screen' : 'max-h-0 border-transparent',
          )}
          style={{ background: 'var(--surface)' }}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => { setMobileOpen(false); setModalOpen(true) }}
                className="w-full rounded-[3px] py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--red)' }}
              >
                Conversa estratégica
              </button>
              <a
                href="https://wa.me/5561992560616?text=Olá,%20vim%20pelo%20site%20da%20Multitudes."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-[3px] border py-3 text-center text-sm font-medium"
                style={{ borderColor: 'var(--border-2)', color: 'var(--fg)' }}
                onClick={() => setMobileOpen(false)}
              >
                WhatsApp: (61) 9256-0616
              </a>
            </div>
          </nav>
        </div>
      </header>

      <BriefingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
