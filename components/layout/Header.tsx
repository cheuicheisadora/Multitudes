'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/metodo', label: 'Método' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/videos', label: 'Vídeos' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/sobre', label: 'Sobre' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-accent tracking-tight">Multitudes</span>
          <span className="hidden text-sm text-primary-foreground opacity-60 sm:inline">
            Consultoria
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-primary">
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'border-t border-border bg-primary md:hidden',
          mobileOpen ? 'block' : 'hidden'
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground opacity-80 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline" size="sm" className="mt-2 border-accent text-accent hover:bg-accent hover:text-primary w-full">
            <Link href="/contato" onClick={() => setMobileOpen(false)}>Fale Conosco</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
