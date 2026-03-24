import type { Metadata } from 'next'
import { getLatestVideos } from '@/lib/youtube'
import { VideoGrid } from '@/components/videos/VideoGrid'

export const metadata: Metadata = {
  title: 'Vídeos',
  description:
    'Análises rápidas, pesquisas eleitorais, debates e comentários semanais sobre o cenário político.',
}

export default async function VideosPage() {
  const videos = await getLatestVideos(12)
  const [featured, ...rest] = videos

  return (
    <div>
      <div
        className="py-16"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            Conteúdo
          </p>
          <h1
            className="text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
          >
            Biblioteca de Vídeos
          </h1>
          <p className="mt-4 max-w-2xl text-base" style={{ color: 'var(--muted)' }}>
            Análises rápidas, pesquisas eleitorais, debates e comentários semanais sobre o cenário
            político brasileiro.
          </p>
        </div>
      </div>

      <div className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featured ? (
            <VideoGrid featured={featured} rest={rest} />
          ) : (
            <p style={{ color: 'var(--muted)' }}>Nenhum vídeo disponível no momento.</p>
          )}
        </div>
      </div>
    </div>
  )
}
