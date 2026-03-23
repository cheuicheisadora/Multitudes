import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Vote, Building2, Users2, LineChart } from 'lucide-react'

const audiences = [
  {
    icon: Vote,
    title: 'Pré-candidatos',
    description:
      'Para quem está avaliando entrar na política e precisa de diagnóstico, posicionamento e orientação estratégica antes mesmo de lançar a candidatura.',
  },
  {
    icon: Building2,
    title: 'Candidatos em campanha',
    description:
      'Suporte completo durante o período eleitoral: planejamento, comunicação, território, monitoramento e operação.',
  },
  {
    icon: Users2,
    title: 'Equipes de campanha',
    description:
      'Para coordenadores, marqueteiros e assessores que precisam de metodologia, ferramentas e apoio especializado para organizar a operação.',
  },
  {
    icon: LineChart,
    title: 'Mandatos e gabinetes',
    description:
      'Parlamentares e gestores que precisam de inteligência política contínua, monitoramento de redes e comunicação estratégica durante o mandato.',
  },
]

export function ForWhom() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Público-alvo
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Para quem é</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A Multitudes trabalha com quem leva política a sério.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {audiences.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-border bg-card">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
