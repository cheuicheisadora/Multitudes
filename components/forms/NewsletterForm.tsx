'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

export function NewsletterForm({ variant = 'stacked', className }: NewsletterFormProps) {
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
    }

    try {
      const res = await fetch('/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        toast.error(err.error ?? 'Erro ao inscrever. Tente novamente.')
        return
      }

      setSubscribed(true)
      toast.success('Inscrição confirmada! Verifique seu e-mail.')
      form.reset()
    } catch {
      toast.error('Erro de conexão. Verifique sua internet.')
    } finally {
      setLoading(false)
    }
  }

  if (subscribed) {
    return (
      <div className={`rounded-lg border border-border bg-card p-6 text-center ${className}`}>
        <p className="font-semibold text-foreground">Inscrição confirmada! 🎉</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Confira seu e-mail para baixar o relatório de boas-vindas.
        </p>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
          className="flex-1"
        />
        <Button type="submit" variant="accent" disabled={loading}>
          {loading ? '...' : 'Inscrever'}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <Label htmlFor="nl-name">Nome</Label>
        <Input id="nl-name" name="name" placeholder="Seu nome" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="nl-email">E-mail *</Label>
        <Input id="nl-email" name="email" type="email" placeholder="seu@email.com" required />
      </div>
      <Button type="submit" size="lg" variant="accent" className="w-full" disabled={loading}>
        {loading ? 'Inscrevendo...' : 'Assinar Newsletter Gratuita'}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Sem spam. Cancele quando quiser.
      </p>
    </form>
  )
}
