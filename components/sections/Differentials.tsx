import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart2, Users, Shield, Zap, Globe, BookOpen } from 'lucide-react'

const differentials = [
  {
    icon: BarChart2,
    title: 'Dados, não achismos',
    description:
      'Cada decisão estratégica é fundamentada em pesquisa eleitoral, análise de dados e inteligência territorial.',
  },
  {
    icon: Users,
    title: 'Equipe multidisciplinar',
    description:
      'Politólogos, comunicadores, especialistas em dados e operadores de campanha trabalhando de forma integrada.',
  },
  {
    icon: Shield,
    title: 'Conformidade legal',
    description:
      'Expertise em legislação eleitoral para garantir que sua campanha opere dentro das regras e evite riscos.',
  },
  {
    icon: Zap,
    title: 'Execução ágil',
    description:
      'Capacidade de adaptação rápida às mudanças do cenário político, com processos eficientes e ágeis.',
  },
  {
    icon: Globe,
    title: 'Presença nacional',
    description:
      'Experiência em diferentes regiões e contextos políticos brasileiros, do interior à capital.',
  },
  {
    icon: BookOpen,
    title: 'Método documentado',
    description:
      'Processos claros e documentados que garantem transparência, aprendizado contínuo e replicabilidade.',
  },
]

export function Differentials() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Por que a Multitudes
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nossos diferenciais</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-border bg-card">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-base text-foreground">{title}</CardTitle>
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
