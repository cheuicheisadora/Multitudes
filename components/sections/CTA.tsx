import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle, ArrowRight } from 'lucide-react'

export function CTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5511999999999'
  const whatsappMsg = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os serviços da Multitudes Consultoria.'
  )

  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
          Pronto para levar sua campanha ao próximo nível?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Entre em contato com a equipe da Multitudes e descubra como podemos transformar
          estratégia em resultados.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="xl" variant="accent">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/contato">
              Enviar Briefing
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
