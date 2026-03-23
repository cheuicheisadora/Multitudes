import Link from 'next/link'
import { VideosSectionClient } from './VideosSectionClient'

export function VideosSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Curadoria Editorial
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Análises desta semana
            </h2>
          </div>
          <Link
            href="/videos"
            className="shrink-0 text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            Ver todos os vídeos →
          </Link>
        </div>

        <VideosSectionClient />
      </div>
    </section>
  )
}
