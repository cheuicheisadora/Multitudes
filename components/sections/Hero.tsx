import { getLatestPoliticalNews, formatNewsAge } from '@/lib/news'
import { PoliticalTicker } from '@/components/hero/PoliticalTicker'
import { BriefingTrigger } from '@/components/hero/BriefingTrigger'

export async function Hero() {
  const news = await getLatestPoliticalNews(12)

  const updatedAgo = news.length > 0
    ? `atualizado ${formatNewsAge(news[0].pubDate)}`
    : 'ao vivo'

  return (
    <section
      className="grain relative overflow-hidden"
      style={{
        background: 'var(--bg)',
        minHeight: '100vh',
      }}
    >
      {/* Dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(192,57,43,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />

      {/* Red top accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(90deg, transparent, var(--red), transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16 items-center py-24 lg:py-20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <p
              className="hero-eyebrow text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Consultoria Política Estratégica
            </p>

            {/* Headline */}
            <h1
              className="hero-headline mt-6 font-bold leading-[1.05] tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--fg)',
                fontSize: 'clamp(40px, 6vw, 76px)',
              }}
            >
              Campanhas que vencem não{' '}
              <span style={{ color: 'var(--fg)' }}>nascem do improviso.</span>
            </h1>

            {/* Divider */}
            <div
              className="hero-divider mt-8 shrink-0"
              style={{
                width: '60px',
                height: '3px',
                background: 'var(--red)',
                borderRadius: '2px',
              }}
              aria-hidden
            />

            {/* Subheadline */}
            <p
              className="hero-sub mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--muted)' }}
            >
              A Multitudes combina inteligência eleitoral, análise territorial,
              monitoramento de redes e execução integrada para organizar
              candidaturas competitivas no Brasil.
            </p>

            {/* CTAs */}
            <div className="hero-ctas mt-10 flex flex-wrap items-center gap-3">
              <BriefingTrigger />
              <a
                href="/newsletter"
                className="btn-ghost inline-flex items-center gap-2 rounded-[3px] px-5 py-3 text-sm font-medium"
              >
                Assinar newsletter
              </a>
            </div>

            {/* Microcopy */}
            <p
              className="hero-microcopy mt-5 text-xs"
              style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
            >
              ou envie um e-mail direto:{' '}
              <a
                href="mailto:Adaocand@gmail.com"
                style={{ color: 'var(--muted)' }}
                className="transition-colors hover:text-white"
              >
                Adaocand@gmail.com
              </a>
            </p>

            {/* Stats badge */}
            <div
              className="hero-panel mt-14 flex flex-wrap gap-8"
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '24px',
              }}
            >
              {[
                { value: '47+', label: 'Campanhas assessoradas' },
                { value: '14',  label: 'Estados atendidos' },
                { value: '100%', label: 'Orientado por dados' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--red)' }}
                  >
                    {value}
                  </p>
                  <p
                    className="mt-1 text-xs"
                    style={{ color: 'var(--muted)' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — ticker card */}
          <div
            className="hero-panel h-[480px] overflow-hidden rounded-[4px] lg:h-[560px]"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-2)',
              boxShadow: '0 0 40px rgba(192,57,43,0.08)',
            }}
          >
            <PoliticalTicker items={news} updatedAgo={updatedAgo} />
          </div>
        </div>
      </div>
    </section>
  )
}
