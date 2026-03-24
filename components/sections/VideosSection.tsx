import type { YTVideo } from '@/lib/youtube'
import { parseDuration, formatViews } from '@/lib/youtube'
import { VideoGrid } from '@/components/videos/VideoGrid'

interface Props {
  videos: YTVideo[]
}

export function VideosSection({ videos }: Props) {
  if (videos.length === 0) return null

  const [featured, ...rest] = videos

  return (
    <section
      className="py-24"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              Conteúdo
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Vídeos recentes
            </h2>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'var(--muted)' }}
          >
            Ver canal →
          </a>
        </div>

        {/* Video grid with modals */}
        <VideoGrid featured={featured} rest={rest} />
      </div>
    </section>
  )
}
