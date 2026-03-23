import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { MessageCircle, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Multitudes Consultoria. Preencha o briefing e nossa equipe retornará em breve.',
}

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Para conversas rápidas e urgências',
    value: 'Disponível no botão flutuante',
  },
  {
    icon: Mail,
    title: 'E-mail',
    description: 'Para briefings e proposta formal',
    value: 'contato@multitudes.com.br',
  },
  {
    icon: Clock,
    title: 'Tempo de resposta',
    description: 'Respondemos todos os contatos',
    value: 'Em até 48 horas úteis',
  },
]

export default function ContatoPage() {
  return (
    <div>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Fale Conosco
          </p>
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
            Vamos conversar
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Preencha o briefing abaixo. Nossa equipe analisa cada contato com cuidado e retorna
            com uma visão preliminar do seu cenário.
          </p>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Info */}
            <div className="space-y-8">
              {contactInfo.map(({ icon: Icon, title, description, value }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm font-semibold text-foreground">Sigilo garantido</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Todas as informações compartilhadas conosco são tratadas com absoluta
                  confidencialidade.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Briefing de contato</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
