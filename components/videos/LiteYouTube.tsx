'use client'

import { useState } from 'react'

interface Props {
  videoId: string
  title:   string
  thumbnail?: string
}

export function LiteYouTube({ videoId, title, thumbnail }: Props) {
  const [activated, setActivated] = useState(false)
  const thumb = thumbnail ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  if (activated) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-[3px]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          style={{ border: 'none' }}
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setActivated(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-[3px]"
      aria-label={`Reproduzir: ${title}`}
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-70"
        style={{ background: 'rgba(7,10,16,0.4)' }}
        aria-hidden
      />

      {/* Play button */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
          style={{ background: 'var(--red)', boxShadow: '0 0 24px rgba(181,23,158,0.5)' }}
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="white" aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
