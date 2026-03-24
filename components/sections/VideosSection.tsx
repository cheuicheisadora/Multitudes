import { getLatestPoliticsVideos } from '@/lib/youtube'
import { VideoCard } from '@/components/videos/VideoCard'

export async function VideosSection() {
  const videos = await getLatestPoliticsVideos(6)

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
              ● Curadoria semanal
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              Análises desta semana
            </h2>
          </div>
          <a
            href="/videos"
            className="hidden text-sm font-medium transition-colors hover:text-white md:block"
            style={{ color: 'var(--muted)' }}
          >
            Ver todas as análises →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured && <VideoCard video={featured} featured />}
          {rest.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="/videos"
            className="text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            Ver todas as análises →
          </a>
        </div>
      </div>
    </section>
  )
}
