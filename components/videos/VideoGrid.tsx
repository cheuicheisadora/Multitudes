'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Badge } from '@/components/ui/badge'
import { VideoEmbed } from './VideoEmbed'

const CATEGORIES = [
  'Todas',
  'Análises rápidas',
  'Pesquisas eleitorais',
  'Debates',
  'Monitoramento de redes',
  'Cenário político',
  'Comentários da semana',
]

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
  const url = category && category !== 'Todas'
    ? `/api/videos?category=${encodeURIComponent(category)}`
    : '/api/videos'
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch videos')
  return res.json()
}

export function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState('Todas')

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
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'border-accent bg-accent text-primary'
                : 'border-border bg-card text-muted-foreground hover:border-accent hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video rounded-lg bg-muted animate-pulse" />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-center text-muted-foreground py-12">
          Erro ao carregar vídeos. Tente novamente.
        </p>
      )}

      {!isLoading && !isError && videos.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          Nenhum vídeo encontrado nesta categoria.
        </p>
      )}

      {!isLoading && !isError && videos.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="space-y-3">
              <VideoEmbed url={video.url} platform={video.platform} title={video.title} />
              <div>
                <Badge variant="secondary" className="mb-2 text-xs">{video.category}</Badge>
                <h3 className="font-medium text-foreground text-sm leading-snug">{video.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
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
