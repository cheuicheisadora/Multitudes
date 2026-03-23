import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle, Calendar, Mail } from 'lucide-react'

export function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5511999999999'
  const whatsappMsg = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os serviços da Multitudes Consultoria.'
  )

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Consultoria Política Estratégica
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Estratégia política para campanhas, mandatos e análises que precisam de{' '}
            <span className="text-accent">método, mensagem e direção.</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
            A Multitudes organiza candidaturas e interpreta o ambiente político com inteligência
            eleitoral, posicionamento estratégico, comunicação integrada, monitoramento de redes e
            execução orientada por dados.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="xl" variant="accent">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contato">
                <Calendar className="h-5 w-5" />
                Agendar Reunião
              </Link>
            </Button>
            <Button asChild size="xl" variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/newsletter">
                <Mail className="h-5 w-5" />
                Newsletter
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold text-accent">+50</p>
              <p className="text-sm text-primary-foreground/60">Campanhas assessoradas</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="text-2xl font-bold text-accent">15+</p>
              <p className="text-sm text-primary-foreground/60">Estados atendidos</p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="text-2xl font-bold text-accent">100%</p>
              <p className="text-sm text-primary-foreground/60">Orientado por dados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
