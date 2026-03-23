import { MessageCircle, Calendar, Search, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    number: '1',
    title: 'Entre em contato',
    description: 'Preencha o formulário de briefing ou nos envie uma mensagem pelo WhatsApp.',
  },
  {
    icon: Search,
    number: '2',
    title: 'Diagnóstico inicial',
    description: 'Nossa equipe analisa seu contexto e prepara uma visão preliminar do cenário.',
  },
  {
    icon: Calendar,
    number: '3',
    title: 'Reunião estratégica',
    description: 'Apresentamos nossa abordagem e alinhamos objetivos, prazo e escopo de trabalho.',
  },
  {
    icon: Rocket,
    number: '4',
    title: 'Execução',
    description: 'Trabalhamos juntos com método, acompanhamento contínuo e ajustes em tempo real.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Processo
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Como funciona o contato
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-3/4 -translate-x-1/2 bg-border lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="relative flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg">
                  <Icon className="h-7 w-7 text-accent" />
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                    {number}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
