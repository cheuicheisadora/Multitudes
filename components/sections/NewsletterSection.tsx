import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { FileText, TrendingUp, Eye } from 'lucide-react'

const benefits = [
  { icon: TrendingUp, text: 'Análises eleitorais semanais' },
  { icon: Eye, text: 'Monitoramento do cenário político' },
  { icon: FileText, text: 'Pesquisas e dados exclusivos' },
]

export function NewsletterSection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Newsletter
            </p>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Inteligência política no seu e-mail
            </h2>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              Receba análises políticas, pesquisas eleitorais e inteligência estratégica diretamente
              na sua caixa de entrada. Conteúdo produzido por quem entende o campo.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4">
              <p className="text-sm font-semibold text-accent">🎁 Bônus de boas-vindas</p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Ao se inscrever, receba gratuitamente nosso relatório de entrada com o panorama
                eleitoral atual.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-card p-8 shadow-xl">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Assine gratuitamente
            </h3>
            <NewsletterForm variant="stacked" />
          </div>
        </div>
      </div>
    </section>
  )
}
