import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico e construção da identidade política',
    description:
      'Análise profunda do território, do eleitorado e do candidato. Construção da narrativa política e posicionamento estratégico com base em pesquisa qualitativa e quantitativa.',
  },
  {
    number: '02',
    title: 'Inteligência eleitoral e planejamento territorial',
    description:
      'Mapeamento detalhado dos colégios eleitorais, análise de dados históricos de votação e elaboração do plano de priorização territorial para máxima eficiência de recursos.',
  },
  {
    number: '03',
    title: 'Estrutura financeira e conformidade legal eleitoral',
    description:
      'Planejamento orçamentário, orientação sobre financiamento de campanha, conformidade com a legislação eleitoral e gestão dos recursos de forma transparente e eficiente.',
  },
  {
    number: '04',
    title: 'Execução integrada e comunicação multicanal',
    description:
      'Coordenação da comunicação digital e presencial, gestão de redes sociais, produção de conteúdo orientado por dados e monitoramento contínuo do ambiente político.',
  },
  {
    number: '05',
    title: 'Reta final e operação eleitoral',
    description:
      'Intensificação da campanha nos momentos decisivos, coordenação da operação no dia do pleito, gestão de crise e acompanhamento em tempo real dos resultados.',
  },
]

export function Method() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Nossa Abordagem
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Método em 5 Etapas
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e testado para transformar candidaturas em vitórias e mandatos em legados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.number}
              className={`relative border-border bg-card ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <CardHeader>
                <span className="text-4xl font-black text-accent opacity-40">{step.number}</span>
                <CardTitle className="text-lg text-foreground mt-2">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="default" size="lg">
            <Link href="/metodo">
              Ver método completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
