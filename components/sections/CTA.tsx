import Link from 'next/link'

export function CTA() {
  return (
    <section className="grain relative overflow-hidden bg-background py-32">
      {/* Topographic echo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Cdefs%3E%3Cstyle%3E.c%7Bfill:none;stroke:%23c9a84c;stroke-width:0.5%7D%3C/style%3E%3C/defs%3E%3Cellipse class='c' cx='250' cy='250' rx='240' ry='180'/%3E%3Cellipse class='c' cx='250' cy='250' rx='190' ry='140'/%3E%3Cellipse class='c' cx='250' cy='250' rx='140' ry='100'/%3E%3Cellipse class='c' cx='250' cy='250' rx='90' ry='60'/%3E%3Cellipse class='c' cx='250' cy='250' rx='40' ry='25'/%3E%3C/svg%3E")`,
          backgroundSize: '500px 500px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Campanhas competitivas<br />
          não nascem do improviso.
        </h2>
        <p className="mt-6 text-lg text-muted">
          Nascem de método, leitura e direção.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-[6px] bg-primary px-8 py-4 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Agendar reunião estratégica
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 rounded-[6px] border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Assinar newsletter
          </Link>
        </div>
      </div>
    </section>
  )
}
