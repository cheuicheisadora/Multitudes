'use client'

import { useState } from 'react'
import Image from 'next/image'

interface LiteVideoEmbedProps {
  url: string
  platform: string
  title: string
  thumbnail: string | null
  large?: boolean
}

function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function LiteVideoEmbed({ url, platform, title, thumbnail, large = false }: LiteVideoEmbedProps) {
  const [activated, setActivated] = useState(false)

  if (platform === 'youtube') {
    const videoId = getYouTubeId(url)
    if (!videoId) {
      return (
        <div className="aspect-video rounded-lg bg-surface flex items-center justify-center text-muted text-sm">
          Vídeo indisponível
        </div>
      )
    }

    const thumbUrl =
      thumbnail ??
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    if (activated) {
      return (
        <div className="aspect-video overflow-hidden rounded-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      )
    }

    return (
      <button
        onClick={() => setActivated(true)}
        className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-surface"
        aria-label={`Reproduzir: ${title}`}
      >
        <Image
          src={thumbUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 128px'}
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/40 transition-opacity duration-300 group-hover:bg-background/20" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${large ? 'h-16 w-16' : 'h-10 w-10'}`}
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="var(--background)"
              className={large ? 'h-6 w-6 translate-x-0.5' : 'h-4 w-4 translate-x-0.5'}
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    )
  }

  return (
    <div className="aspect-video rounded-lg bg-surface flex items-center justify-center text-muted text-sm">
      Plataforma não suportada
    </div>
  )
}
