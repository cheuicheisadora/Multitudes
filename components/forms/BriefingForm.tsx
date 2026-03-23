'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CONTEXTS = [
  'Candidatura a Vereador',
  'Candidatura a Prefeito',
  'Candidatura a Deputado Estadual',
  'Candidatura a Deputado Federal',
  'Candidatura a Senador',
  'Candidatura a Governador',
  'Mandato em exercício',
  'Assessoria / Equipe de campanha',
  'Pesquisa eleitoral',
  'Outro',
]

const STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
  'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

interface BriefingFormProps {
  onSuccess?: () => void
}

export function BriefingForm({ onSuccess }: BriefingFormProps) {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      context: (form.elements.namedItem('context') as HTMLSelectElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      state: (form.elements.namedItem('state') as HTMLSelectElement).value,
      source: 'briefing',
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        toast.error(err.error ?? 'Erro ao enviar.')
        return
      }

      toast.success('Briefing enviado! Entraremos em contato.')
      form.reset()
      onSuccess?.()
    } catch {
      toast.error('Erro de conexão.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="br-name">Nome *</Label>
        <Input id="br-name" name="name" placeholder="Seu nome" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="br-email">E-mail *</Label>
        <Input id="br-email" name="email" type="email" placeholder="seu@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="br-context">Contexto político *</Label>
        <select
          id="br-context"
          name="context"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Selecione...</option>
          {CONTEXTS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="br-city">Cidade</Label>
          <Input id="br-city" name="city" placeholder="São Paulo" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="br-state">Estado</Label>
          <select
            id="br-state"
            name="state"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">UF</option>
            {STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <Button type="submit" size="lg" variant="accent" className="w-full" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar Briefing'}
      </Button>
    </form>
  )
}
