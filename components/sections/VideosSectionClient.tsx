'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { LiteVideoEmbed } from '@/components/videos/LiteVideoEmbed'

const CATEGORIES = ['Todos', 'Pesquisas', 'Debates', 'Cenário', 'Redes', 'Campanhas']

interface Video {
  id: string
  title: string
  url: string
  platform: string
  category: string
  thumbnail: string | null
  publishedAt: string
}

async function fetchVideos(category?: string): Promise<Video[]> {
  const url =
    category && category !== 'Todos'
      ? `/api/videos?category=${encodeURIComponent(category)}`
      : '/api/videos'
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch videos')
  return res.json()
}

export function VideosSectionClient() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['videos-home', activeCategory],
    queryFn: () => fetchVideos(activeCategory),
  })

  const featured = videos[0]
  const secondary = videos.slice(1, 4)

  return (
    <div>
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-[4px] border px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider transition-colors ${
              activeCategory === cat
                ? 'border-primary bg-primary-muted text-primary'
                : 'border-border text-muted hover:border-primary hover:text-primary'
            }`}
            style={activeCategory === cat ? { backgroundColor: 'var(--primary-muted)' } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="aspect-video animate-pulse rounded-lg bg-surface lg:col-span-2" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video animate-pulse rounded-lg bg-surface" />
            ))}
          </div>
        </div>
      )}

      {!isLoading && videos.length === 0 && (
        <p className="py-12 text-center text-muted">
          Nenhum vídeo encontrado nesta categoria.
        </p>
      )}

      {!isLoading && videos.length > 0 && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured video */}
          {featured && (
            <div className="lg:col-span-2">
              <LiteVideoEmbed
                url={featured.url}
                platform={featured.platform}
                title={featured.title}
                thumbnail={featured.thumbnail}
                large
              />
              <div className="mt-3">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {featured.category}
                </span>
                <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                  {featured.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {new Date(featured.publishedAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          )}

          {/* Secondary videos */}
          {secondary.length > 0 && (
            <div className="flex flex-col gap-4">
              {secondary.map((video) => (
                <div key={video.id} className="flex gap-3">
                  <div className="w-32 shrink-0">
                    <LiteVideoEmbed
                      url={video.url}
                      platform={video.platform}
                      title={video.title}
                      thumbnail={video.thumbnail}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">
                      {video.category}
                    </span>
                    <h4 className="mt-0.5 text-sm font-semibold leading-snug text-foreground line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {new Date(video.publishedAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
