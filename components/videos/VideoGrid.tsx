'use client'

import { useState } from 'react'
import type { YTVideo } from '@/lib/youtube'
import { parseDuration, formatViews } from '@/lib/youtube'
import { LiteYouTube } from './LiteYouTube'
import { VideoModal } from './VideoModal'

interface Props {
  featured: YTVideo
  rest:     YTVideo[]
}

export function VideoGrid({ featured, rest }: Props) {
  const [modal, setModal] = useState<YTVideo | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">
        {/* Featured */}
        <div>
          <LiteYouTube
            videoId={featured.id}
            title={featured.title}
            thumbnail={featured.thumbnail}
          />
          <div className="mt-4">
            <h3
              className="text-lg font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)' }}
            >
              {featured.title}
            </h3>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-xs" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>
                {parseDuration(featured.duration)}
              </span>
              <span className="text-xs" style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}>
                {formatViews(featured.viewCount)} views
              </span>
            </div>
          </div>
        </div>

        {/* Rest: vertical list */}
        <div className="flex flex-col gap-3">
          {rest.slice(0, 5).map((video) => (
            <button
              key={video.id + video.title}
              onClick={() => setModal(video)}
              className="group flex items-start gap-3 rounded-[3px] p-2 text-left transition-colors hover:bg-white/5"
            >
              {/* Thumbnail mini */}
              <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: 'rgba(7,10,16,0.6)' }}
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="line-clamp-2 text-xs font-medium leading-snug"
                  style={{ color: 'var(--fg)' }}
                >
                  {video.title}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
                >
                  {parseDuration(video.duration)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modal && (
        <VideoModal
          videoId={modal.id}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}
