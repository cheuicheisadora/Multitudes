import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'A tese institucional da Multitudes Consultoria: por que existe, o que acredita e como pensa estratégia política.',
}

export default function SobrePage() {
  return (
    <div>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Tese Institucional
          </p>
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
            Sobre a Multitudes
          </h1>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground">Por que existimos</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              A política brasileira carece de método. Decisões estratégicas são tomadas com base em
              intuição, tradição e achismo — quando deveriam ser fundamentadas em dados, pesquisa e
              análise rigorosa. A Multitudes nasceu para mudar isso.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">O que acreditamos</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Acreditamos que campanhas bem organizadas e mandatos bem conduzidos fazem diferença
              real na vida das pessoas. Por isso levamos a sério a qualidade do trabalho que
              entregamos: cada análise, cada recomendação e cada plano de campanha é construído com
              rigor e compromisso com os resultados.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Acreditamos também que a transparência é inegociável. O político que trabalha com a
              Multitudes sabe exatamente o que estamos fazendo, por que estamos fazendo e quais
              resultados esperamos.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Como pensamos estratégia política</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Estratégia política não começa no jingle nem no material gráfico. Começa no
              diagnóstico: quem é o candidato, para quem ele fala, o que o eleitorado quer ouvir e
              como o cenário está estruturado. Só depois de responder essas perguntas com dados é
              que faz sentido pensar em execução.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nossa metodologia é iterativa: planejamos, executamos, medimos e ajustamos. O cenário
              político muda rápido, e uma consultoria que não consegue se adaptar em tempo real não
              está prestando serviço — está prestando desserviço.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Com quem trabalhamos</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Trabalhamos com candidatos de diferentes partidos e ideologias, do interior à capital,
              do vereador ao governador. O denominador comum não é o espectro político — é o
              compromisso com fazer política de forma séria, ética e orientada por resultados.
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-muted p-8">
            <h3 className="text-xl font-bold text-foreground">Quer trabalhar conosco?</h3>
            <p className="mt-2 text-muted-foreground">
              Entre em contato para uma conversa inicial sem compromisso.
            </p>
            <Button asChild size="lg" className="mt-4">
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
