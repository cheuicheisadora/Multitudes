import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { VideoGrid } from '@/components/videos/VideoGrid'

export const metadata: Metadata = {
  title: 'Vídeos',
  description:
    'Análises rápidas, pesquisas eleitorais, debates e comentários semanais sobre o cenário político.',
}

export default function VideosPage() {
  return (
    <div>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Conteúdo
          </p>
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
            Biblioteca de Vídeos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Análises rápidas, pesquisas eleitorais, debates e comentários semanais sobre o cenário
            político brasileiro.
          </p>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Providers>
            <VideoGrid />
          </Providers>
        </div>
      </div>
    </div>
  )
}
