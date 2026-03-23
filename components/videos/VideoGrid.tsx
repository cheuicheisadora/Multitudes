'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { LiteVideoEmbed } from './LiteVideoEmbed'

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

export function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const { data: videos = [], isLoading, isError } = useQuery({
    queryKey: ['videos', activeCategory],
    queryFn: () => fetchVideos(activeCategory),
  })

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
                ? 'border-primary text-primary'
                : 'border-border text-muted hover:border-primary hover:text-primary'
            }`}
            style={activeCategory === cat ? { backgroundColor: 'var(--primary-muted)' } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video animate-pulse rounded-lg bg-surface" />
          ))}
        </div>
      )}

      {isError && (
        <p className="py-12 text-center text-muted">
          Erro ao carregar vídeos. Tente novamente.
        </p>
      )}

      {!isLoading && !isError && videos.length === 0 && (
        <p className="py-12 text-center text-muted">
          Nenhum vídeo encontrado nesta categoria.
        </p>
      )}

      {!isLoading && !isError && videos.length > 0 && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <LiteVideoEmbed
                url={video.url}
                platform={video.platform}
                title={video.title}
                thumbnail={video.thumbnail}
              />
              <div className="mt-3">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {video.category}
                </span>
                <h3 className="mt-1 font-serif text-base font-bold leading-snug text-foreground">
                  {video.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {new Date(video.publishedAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
