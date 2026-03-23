import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Método',
  description:
    'Conheça em profundidade as 5 etapas do método Multitudes de estratégia política: do diagnóstico à operação eleitoral.',
}

const steps = [
  {
    number: '01',
    title: 'Diagnóstico e construção da identidade política',
    description: [
      'Análise qualitativa do candidato: trajetória, posicionamento, percepção pública e potencial eleitoral.',
      'Pesquisa de campo e análise de dados para compreender o eleitorado, suas demandas e o mapa de forças políticas locais.',
      'Construção da narrativa e identidade: o que o candidato representa, para quem fala e como se diferencia.',
      'Definição do posicionamento estratégico e da mensagem central da campanha.',
    ],
  },
  {
    number: '02',
    title: 'Inteligência eleitoral e planejamento territorial',
    description: [
      'Mapeamento detalhado dos colégios eleitorais com análise histórica de votação.',
      'Identificação de zonas de crescimento potencial e regiões de consolidação.',
      'Definição das prioridades territoriais e alocação eficiente de recursos.',
      'Análise da correlação de forças locais e mapeamento de lideranças comunitárias.',
    ],
  },
  {
    number: '03',
    title: 'Estrutura financeira e conformidade legal eleitoral',
    description: [
      'Planejamento orçamentário realista alinhado ao potencial de arrecadação.',
      'Orientação sobre fontes de financiamento permitidas pela legislação eleitoral.',
      'Estruturação da prestação de contas e conformidade com as normas do TSE.',
      'Gestão de riscos legais e prevenção de irregularidades que possam ameaçar a candidatura.',
    ],
  },
  {
    number: '04',
    title: 'Execução integrada e comunicação multicanal',
    description: [
      'Calendário editorial integrado para todos os canais: redes sociais, imprensa, campo e eventos.',
      'Produção de conteúdo orientado por dados: o que funciona para o público-alvo definido.',
      'Monitoramento contínuo do ambiente digital: menções, tendências e crises emergentes.',
      'Adaptação das mensagens em tempo real conforme o feedback do campo e as métricas digitais.',
    ],
  },
  {
    number: '05',
    title: 'Reta final e operação eleitoral',
    description: [
      'Intensificação estratégica nos últimos 30 dias: prioridades, recursos e mensagem de fechamento.',
      'Coordenação da operação no dia do pleito: fiscais, boca de urna e transporte.',
      'Gestão de crises em tempo real e resposta rápida a movimentos adversários.',
      'Acompanhamento dos resultados e análise pós-eleição para aprendizado institucional.',
    ],
  },
]

export default function MetodoPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Nossa Abordagem
          </p>
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
            O Método Multitudes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Um processo estruturado e testado em dezenas de campanhas para transformar
            candidaturas em vitórias e mandatos em legados.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-[-4rem] w-0.5 bg-border hidden sm:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-black text-accent shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-3">
                    <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                    <ul className="mt-4 space-y-3">
                      {step.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl bg-primary p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground">
              Quer aplicar este método na sua candidatura?
            </h3>
            <p className="mt-3 text-primary-foreground/70">
              Entre em contato e agende uma conversa com nossa equipe.
            </p>
            <Button asChild variant="accent" size="lg" className="mt-6">
              <Link href="/contato">
                Fale Conosco
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
