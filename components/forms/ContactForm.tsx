'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
  'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      role: (form.elements.namedItem('role') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      state: (form.elements.namedItem('state') as HTMLSelectElement).value,
      context: (form.elements.namedItem('context') as HTMLTextAreaElement).value,
      source: 'contato',
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        toast.error(err.error ?? 'Erro ao enviar. Tente novamente.')
        return
      }

      setSent(true)
      toast.success('Mensagem enviada! Retornaremos em breve.')
      form.reset()
    } catch {
      toast.error('Erro de conexão. Verifique sua internet.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="mb-4 text-4xl">✅</div>
        <h3 className="text-xl font-semibold text-foreground">Contato recebido!</h3>
        <p className="mt-2 text-muted-foreground">
          Nossa equipe analisará seu briefing e retornará em breve.
        </p>
        <Button className="mt-6" onClick={() => setSent(false)}>
          Enviar novo contato
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome *</Label>
          <Input id="name" name="name" placeholder="Seu nome completo" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Cargo / Projeto</Label>
          <Input id="role" name="role" placeholder="Ex: Pré-candidato, Vereador..." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" name="city" placeholder="São Paulo" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <select
            id="state"
            name="state"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Selecione...</option>
            {STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="context">Mensagem / Contexto político</Label>
        <Textarea
          id="context"
          name="context"
          placeholder="Descreva seu projeto, candidatura ou necessidade..."
          rows={5}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar Briefing'}
      </Button>
    </form>
  )
}
