import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Módulos de serviço da Multitudes Consultoria: inteligência eleitoral, comunicação, planejamento territorial e operação.',
}

const services = [
  {
    title: 'Diagnóstico & Posicionamento',
    badge: 'Módulo 1',
    description:
      'Para candidatos que precisam entender o cenário antes de tomar decisões estratégicas.',
    deliverables: [
      'Pesquisa qualitativa de percepção',
      'Análise de dados eleitorais históricos',
      'Mapa de forças políticas locais',
      'Relatório de posicionamento estratégico',
      'Narrativa e mensagem central',
    ],
  },
  {
    title: 'Inteligência Territorial',
    badge: 'Módulo 2',
    description:
      'Para campanhas que precisam maximizar o retorno sobre recursos com priorização territorial.',
    deliverables: [
      'Mapeamento por zona eleitoral',
      'Análise de coeficiente e desempenho histórico',
      'Plano de priorização territorial',
      'Mapeamento de lideranças comunitárias',
      'Dashboard de monitoramento eleitoral',
    ],
  },
  {
    title: 'Comunicação Integrada',
    badge: 'Módulo 3',
    description:
      'Para candidatos que precisam de uma estratégia de comunicação coesa e orientada por dados.',
    deliverables: [
      'Calendário editorial multicanal',
      'Produção de conteúdo para redes sociais',
      'Monitoramento de menções e reputação',
      'Estratégia de mídia offline e online',
      'Gestão de crise comunicacional',
    ],
  },
  {
    title: 'Conformidade Legal Eleitoral',
    badge: 'Módulo 4',
    description:
      'Para campanhas que precisam de segurança jurídica e prestação de contas sem riscos.',
    deliverables: [
      'Planejamento de arrecadação',
      'Estrutura de prestação de contas',
      'Orientação sobre doações e FUNDO ESPECIAL',
      'Revisão de materiais para conformidade',
      'Acompanhamento das normas do TSE',
    ],
  },
  {
    title: 'Operação Eleitoral',
    badge: 'Módulo 5',
    description:
      'Para campanhas na reta final que precisam de coordenação operacional precisa.',
    deliverables: [
      'Plano de operação no dia do pleito',
      'Treinamento de coordenadores e fiscais',
      'Sistema de comunicação em tempo real',
      'Gestão de transporte de eleitores',
      'Análise de resultados em tempo real',
    ],
  },
  {
    title: 'Mandato Estratégico',
    badge: 'Módulo 6',
    description:
      'Para parlamentares e gestores que querem inteligência política contínua no mandato.',
    deliverables: [
      'Monitoramento de redes sociais',
      'Análise de desempenho legislativo',
      'Gestão de imagem e comunicação',
      'Relatórios periódicos de cenário político',
      'Assessoria estratégica contínua',
    ],
  },
]

export default function ServicosPage() {
  return (
    <div>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            O que oferecemos
          </p>
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">Serviços</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Módulos que podem ser contratados de forma independente ou combinados em um pacote
            completo, de acordo com as necessidades da sua campanha ou mandato.
          </p>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-border flex flex-col">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{service.badge}</Badge>
                  <CardTitle className="mt-3 text-xl text-foreground">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Entregáveis
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-xl bg-muted p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Não sabe por onde começar?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Entre em contato. Nossa equipe analisa seu contexto e recomenda a combinação de módulos
              mais adequada ao seu projeto.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contato">Solicitar orientação</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
