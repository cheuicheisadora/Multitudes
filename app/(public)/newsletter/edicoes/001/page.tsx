import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Intelligence Brief #01 — Cenário 2026: O que os dados já dizem — Multitudes',
  description:
    'Leitura estratégica do cenário eleitoral brasileiro para 2026: pesquisas, movimentações territoriais e o que as redes sociais estão sinalizando.',
}

export default function Edition001() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── Header da edição ──────────────────────────────── */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Link
            href="/newsletter"
            className="mb-6 inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            ← Todas as edições
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ background: 'var(--red-dim)', color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Edição #01
            </span>
            <span className="text-xs" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>
              17 de março de 2025
            </span>
            <span className="text-xs" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>
              · 6 min de leitura
            </span>
          </div>
          <h1
            className="text-3xl font-bold leading-tight sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Cenário 2026: O que os dados já dizem
          </h1>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            A eleição presidencial ainda está a 19 meses. Mas os termômetros já esquentam —
            e ignorar o que os números mostram agora é a forma mais cara de chegar despreparado.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: 'var(--red)' }}
            >
              M
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--fg)' }}>Equipe Multitudes</p>
              <p className="text-xs" style={{ color: 'var(--subtle)' }}>Consultoria Política Estratégica</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Corpo da edição ───────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">

        {/* Intro */}
        <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
          Bem-vindo à primeira edição do <strong style={{ color: 'var(--fg)' }}>Intelligence Brief</strong>,
          a newsletter semanal da Multitudes. Aqui você recebe análise política orientada por dados —
          sem torcida, sem ruído, sem achismo. Só o que os números e o território dizem.
        </p>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
          Esta edição estreia com o que mais nos procuram agora: <em>o que já dá para saber sobre 2026?</em>
        </p>

        <Divider />

        {/* Seção 1 */}
        <Section
          tag="📍 CONTEXTO"
          title="Por que começar a pensar em 2026 agora"
        >
          <p>
            No ciclo eleitoral brasileiro, candidatos que iniciam o trabalho de inteligência com menos
            de 12 meses de antecedência chegam ao período de campanha remando contra a maré.
            O motivo é simples: <strong style={{ color: 'var(--fg)' }}>reputação não se constrói em campanha</strong> —
            ela se confirma. O trabalho real acontece antes.
          </p>
          <p className="mt-3">
            Os sinais de 2026 já estão circulando. Pré-candidaturas sendo testadas silenciosamente,
            alianças sendo negociadas nos bastidores estaduais, e o eleitorado — especialmente o de
            baixa renda urbano — demonstrando volatilidade acima da média histórica em todos os
            levantamentos recentes.
          </p>
          <Callout>
            Volatilidade de eleitorado não é ameaça — é <strong>oportunidade</strong> para quem tem
            dados e estratégia. É ameaça para quem improvisa.
          </Callout>
        </Section>

        <Divider />

        {/* Seção 2 */}
        <Section
          tag="📊 OS NÚMEROS"
          title="Três dados que toda campanha deveria ter na parede"
        >
          <p>Com base nos principais levantamentos disponíveis até março de 2025:</p>

          <div className="mt-5 space-y-4">
            <DataPoint
              number="68%"
              label="dos eleitores brasileiros declaram insatisfação com 'a política em geral'"
              note="Fonte: Datafolha, fev/2025"
            />
            <DataPoint
              number="41%"
              label="dos indecisos em municípios de médio porte (100k–500k hab.) dizem que votariam em 'alguém novo, de fora do sistema'"
              note="Fonte: compilação de pesquisas regionais, jan–fev/2025"
            />
            <DataPoint
              number="1 em 3"
              label="eleitores que mudaram de voto no segundo turno de 2022 cita 'comunicação' como fator decisivo — não proposta"
              note="Fonte: Atlas Político, 2023"
            />
          </div>

          <p className="mt-5">
            O que esses três números têm em comum? Todos apontam para o mesmo diagnóstico:
            <strong style={{ color: 'var(--fg)' }}> o eleitorado está disponível, mas exige narrativa consistente e presença territorial antes do período eleitoral</strong>.
            Candidatos que chegarem ao período oficial de campanha sem esses dois elementos já
            chegam em desvantagem.
          </p>
        </Section>

        <Divider />

        {/* Seção 3 */}
        <Section
          tag="🔍 ANÁLISE"
          title="O erro mais caro que candidatos cometem neste momento"
        >
          <p>
            Entre os mandatários e pré-candidatos que nos procuram, o erro mais recorrente é o mesmo:
            confundir visibilidade com intenção de voto. Um político muito comentado nas redes não é
            necessariamente um político competitivo nas urnas.
          </p>
          <p className="mt-3">
            A armadilha funciona assim: a equipe de comunicação entrega engajamento digital crescente,
            o candidato interpreta como sinal positivo do eleitorado, e o diagnóstico territorial —
            aquele que mede voto por voto, zona por zona — nunca é feito. Quando a pesquisa
            quantitativa chega, seis meses depois, a surpresa é dolorosa.
          </p>
          <p className="mt-3">
            <strong style={{ color: 'var(--fg)' }}>O que recomendamos no estágio atual (18–24 meses antes):</strong>
          </p>
          <ul className="mt-3 space-y-2">
            {[
              'Mapeamento territorial básico — identificar zonas de crescimento potencial e zonas perdidas',
              'Pesquisa qualitativa de percepção de imagem — o que o eleitor pensa que você representa',
              'Monitoramento de adversários — quem está se movendo antes de você e como',
              'Construção de base de dados própria — independente de plataformas',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[5px] shrink-0 text-xs" style={{ color: 'var(--red)' }}>›</span>
                <span style={{ color: 'var(--muted)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Seção 4 */}
        <Section
          tag="🗺️ TERRITÓRIOS"
          title="O mapa que ninguém está olhando: municípios de médio porte"
        >
          <p>
            Enquanto os grandes centros concentram atenção e recursos, uma faixa de municípios
            entre 100 mil e 500 mil habitantes está acumulando um padrão interessante:
            alta rotatividade de vereadores e prefeitos, baixo enraizamento partidário e eleitores
            com menor grau de fidelização do que a média nacional.
          </p>
          <p className="mt-3">
            Para candidatos a deputado estadual e federal, esse é o <strong style={{ color: 'var(--fg)' }}>território de maior
            retorno por real investido</strong>. O custo de conquistar 1.000 votos em um município
            de médio porte é, em média, 40% menor do que em capitais — e o voto tende a ser
            mais estável quando há presença física anterior à campanha.
          </p>
          <Callout>
            <strong>Dado prático:</strong> nos últimos três ciclos eleitorais, candidatos a deputado
            federal que concentraram mais de 60% dos recursos em municípios de médio porte de sua
            região tiveram taxa de eleição 2,3x superior à média do estado.
          </Callout>
        </Section>

        <Divider />

        {/* Seção 5 */}
        <Section
          tag="📱 REDES & NARRATIVAS"
          title="O que o monitoramento digital está captando agora"
        >
          <p>
            Nos últimos 45 dias, três narrativas têm dominado o espaço político nas redes
            brasileiras com crescimento acima de 20% semana a semana:
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                tema: 'Custo de vida e inflação de alimentos',
                nota: 'Permanece como principal preocupação declarada em todos os grupos socioeconômicos. Candidatos que não têm resposta concreta sobre este tema perdem audiência nas conversas que importam.',
              },
              {
                tema: 'Segurança pública nos estados',
                nota: 'Com alta de 34% em volume de menções desde janeiro. Não é mais um tema apenas de direita — atravessa espectros. Candidatos que ignoram têm sido penalizados nas pesquisas qualitativas.',
              },
              {
                tema: 'Desconfiança em pesquisas eleitorais',
                nota: 'Narrativa crescente, alimentada por erros de 2022. Cria uma oportunidade para candidatos que apresentem dados próprios com metodologia transparente.',
              },
            ].map(({ tema, nota }) => (
              <div
                key={tema}
                className="rounded-[3px] p-4"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                  {tema}
                </p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {nota}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Seção 6 */}
        <Section
          tag="🔮 O QUE VEM POR AÍ"
          title="Radar para as próximas semanas"
        >
          <ul className="space-y-2">
            {[
              'Divulgação do Datafolha presidencial de abril — primeira medição com nomes confirmados para 2026. Acompanhe a metodologia, não só os números.',
              'Prazo de filiação partidária para 2026 se aproxima para alguns partidos — quem ainda não se moveu, está atrasado.',
              'Janela de movimentação de alianças nos estados começa a fechar a partir do segundo semestre. Conversas que não acontecem agora, não acontecem a tempo.',
              'Municipais de 2024 serão o principal parâmetro de análise territorial para 2026. Se você não analisou seus resultados com profundidade, este é o momento.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[5px] shrink-0 text-xs" style={{ color: 'var(--red)' }}>›</span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Seção 7 — Para o campo */}
        <Section
          tag="📌 PARA O CAMPO"
          title="Uma ação concreta para esta semana"
        >
          <p>
            Se você é candidato, assessor ou coordenador de campanha, aqui vai a pergunta que
            vale fazer esta semana:
          </p>
          <blockquote
            className="my-5 rounded-[3px] border-l-4 py-4 pl-5 pr-4"
            style={{ borderColor: 'var(--red)', background: 'var(--surface)' }}
          >
            <p className="text-base font-medium italic" style={{ color: 'var(--fg)' }}>
              "Qual é o coeficiente eleitoral do meu território e quantos votos, especificamente,
              preciso para ser eleito? E em quais zonas esses votos estão?"
            </p>
          </blockquote>
          <p>
            Se a resposta não vier com número e mapa, o diagnóstico territorial ainda não foi feito.
            E esse é o primeiro passo antes de qualquer decisão de comunicação, de agenda ou de aliança.
          </p>
        </Section>

        <Divider />

        {/* CTA */}
        <div
          className="rounded-[3px] p-8 text-center"
          style={{ background: 'var(--surface)', border: '1px solid var(--border-2)' }}
        >
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Próxima edição
          </p>
          <p className="text-base font-medium" style={{ color: 'var(--fg)' }}>
            Na semana que vem: <strong>Redes sociais como termômetro político</strong> — como monitorar
            movimentações digitais para antecipar mudanças no humor do eleitorado.
          </p>
          <Link
            href="/newsletter"
            className="mt-5 inline-block rounded-[3px] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--red)' }}
          >
            Assinar a newsletter
          </Link>
        </div>

        {/* Footer da edição */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>
            Intelligence Brief é a newsletter semanal da Multitudes Consultoria Política.
            Publicada às segundas-feiras. Para cancelar a inscrição, responda este e-mail com
            "Cancelar". © 2025 Multitudes · Brasília, DF
          </p>
        </div>

      </article>
    </div>
  )
}

/* ── Componentes internos ─────────────────────────────────── */

function Divider() {
  return (
    <div
      className="my-10"
      style={{ height: '1px', background: 'var(--border)' }}
      aria-hidden
    />
  )
}

function Section({ tag, title, children }: {
  tag: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <p
        className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]"
        style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
      >
        {tag}
      </p>
      <h2
        className="mb-4 text-xl font-bold leading-snug"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
      >
        {title}
      </h2>
      <div className="text-sm leading-relaxed space-y-0" style={{ color: 'var(--muted)' }}>
        {children}
      </div>
    </section>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-5 rounded-[3px] p-4 text-sm leading-relaxed"
      style={{
        background: 'var(--red-dim)',
        border: '1px solid var(--red)',
        color: 'var(--fg)',
      }}
    >
      {children}
    </div>
  )
}

function DataPoint({ number, label, note }: { number: string; label: string; note: string }) {
  return (
    <div
      className="flex gap-4 rounded-[3px] p-4"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <span
        className="shrink-0 text-3xl font-black leading-none"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--red)' }}
      >
        {number}
      </span>
      <div>
        <p className="text-sm leading-snug" style={{ color: 'var(--fg)' }}>{label}</p>
        <p className="mt-1 text-xs" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>{note}</p>
      </div>
    </div>
  )
}
