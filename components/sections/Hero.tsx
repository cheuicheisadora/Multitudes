import Link from 'next/link'

export function Hero() {
  return (
    <section className="grain relative min-h-screen overflow-hidden bg-background">
      {/* Topographic grid SVG */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cdefs%3E%3Cstyle%3E.c%7Bfill:none;stroke:%23c9a84c;stroke-width:0.5%7D%3C/style%3E%3C/defs%3E%3Cellipse class='c' cx='300' cy='300' rx='280' ry='200'/%3E%3Cellipse class='c' cx='300' cy='300' rx='230' ry='160'/%3E%3Cellipse class='c' cx='300' cy='300' rx='180' ry='120'/%3E%3Cellipse class='c' cx='300' cy='300' rx='130' ry='80'/%3E%3Cellipse class='c' cx='300' cy='300' rx='80' ry='40'/%3E%3Cellipse class='c' cx='150' cy='150' rx='120' ry='80'/%3E%3Cellipse class='c' cx='150' cy='150' rx='80' ry='50'/%3E%3Cellipse class='c' cx='150' cy='150' rx='40' ry='25'/%3E%3Cellipse class='c' cx='450' cy='450' rx='130' ry='90'/%3E%3Cellipse class='c' cx='450' cy='450' rx='90' ry='60'/%3E%3Cellipse class='c' cx='450' cy='450' rx='50' ry='30'/%3E%3C/svg%3E")`,
          backgroundSize: '600px 600px',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="animate-fade-in-up delay-100 mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Consultoria Política Estratégica
          </p>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-200 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Campanhas que vencem<br />
            não nascem do{' '}
            <em className="not-italic" style={{ borderBottom: '2px solid var(--primary)' }}>
              improviso.
            </em>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-300 mt-8 max-w-xl text-lg leading-relaxed text-muted">
            A Multitudes combina inteligência eleitoral, análise territorial,
            monitoramento de redes e execução integrada para organizar
            candidaturas competitivas no Brasil.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 rounded-[6px] bg-primary px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Agendar conversa estratégica
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded-[6px] border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Assinar newsletter
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap items-center gap-8 border-t border-border pt-8">
            <div>
              <p className="font-mono text-3xl font-medium text-primary">47</p>
              <p className="mt-1 text-xs text-muted">Campanhas assessoradas</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-mono text-3xl font-medium text-primary">15+</p>
              <p className="mt-1 text-xs text-muted">Estados atendidos</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-mono text-3xl font-medium text-primary">100%</p>
              <p className="mt-1 text-xs text-muted">Orientado por dados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
