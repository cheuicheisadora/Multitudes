'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod/v4'
import { toast } from 'sonner'
import { X, Loader2 } from 'lucide-react'

const schema = z.object({
  name:    z.string().min(2, 'Nome obrigatório'),
  email:   z.email('E-mail inválido'),
  phone:   z.string().min(8, 'Telefone obrigatório'),
  role:    z.string().min(1, 'Selecione uma opção'),
  city:    z.string().optional(),
  context: z.string().min(10, 'Descreva brevemente o contexto político'),
})

type FormData = z.infer<typeof schema>

interface Props {
  open:    boolean
  onClose: () => void
}

export function BriefingModal({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLInputElement>(null)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  // Focus trap + Escape
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement
    setTimeout(() => firstFocusRef.current?.focus(), 50)

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
  }, [open, onClose])

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...data, source: 'briefing' }),
      })
      if (!res.ok) throw new Error()
      toast.success('Recebemos seu briefing! Entraremos em contato em breve.')
      reset()
      onClose()
    } catch {
      toast.error('Erro ao enviar. Tente novamente ou fale pelo WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  const inputStyle = {
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    color: 'var(--fg)',
    borderRadius: '3px',
    padding: '10px 12px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: 'var(--muted)',
    marginBottom: '6px',
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(7,10,16,0.9)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de briefing"
    >
      <div
        className="modal-enter relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[4px]"
        style={{ background: 'var(--surface)', border: '1px solid var(--border-2)' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Briefing inicial
            </p>
            <h2
              className="mt-1 text-xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Conversa estratégica
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
            style={{ color: 'var(--muted)' }}
            aria-label="Fechar modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4" noValidate>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label style={labelStyle}>Nome *</label>
              <input
                {...register('name')}
                ref={firstFocusRef as React.Ref<HTMLInputElement>}
                placeholder="Seu nome completo"
                style={inputStyle}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1 text-xs" style={{ color: 'var(--red)' }}>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label style={labelStyle}>E-mail *</label>
              <input
                {...register('email')}
                type="email"
                placeholder="seu@email.com"
                style={inputStyle}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 text-xs" style={{ color: 'var(--red)' }}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label style={labelStyle}>Telefone *</label>
              <input
                {...register('phone')}
                type="tel"
                placeholder="(61) 99999-9999"
                style={inputStyle}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="mt-1 text-xs" style={{ color: 'var(--red)' }}>
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label style={labelStyle}>Perfil *</label>
              <select
                {...register('role')}
                style={{ ...inputStyle, cursor: 'pointer' }}
                aria-invalid={!!errors.role}
              >
                <option value="">Selecione</option>
                <option value="pre-candidato">Pré-candidato</option>
                <option value="candidato">Candidato em campanha</option>
                <option value="equipe">Equipe de campanha</option>
                <option value="mandato">Mandatário</option>
                <option value="partido">Partido / grupo</option>
                <option value="outro">Outro</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-xs" style={{ color: 'var(--red)' }}>
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label style={labelStyle}>Cidade / Estado</label>
            <input
              {...register('city')}
              placeholder="Ex: Brasília, DF"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Contexto político *</label>
            <textarea
              {...register('context')}
              rows={3}
              placeholder="Descreva brevemente a candidatura, o território e o momento político..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
              aria-invalid={!!errors.context}
            />
            {errors.context && (
              <p className="mt-1 text-xs" style={{ color: 'var(--red)' }}>
                {errors.context.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-[3px] py-3 text-sm font-semibold text-white transition-colors disabled:opacity-60"
            style={{ backgroundColor: submitting ? 'var(--red)' : 'var(--red)' }}
          >
            {submitting ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
            ) : (
              'Enviar briefing →'
            )}
          </button>

          <p className="text-center text-xs" style={{ color: 'var(--subtle)' }}>
            ou envie um e-mail para{' '}
            <a href="mailto:Adaocand@gmail.com" style={{ color: 'var(--muted)' }}>
              Adaocand@gmail.com
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
