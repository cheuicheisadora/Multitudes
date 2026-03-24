'use client'

import { useState } from 'react'
import { parseDuration, formatViews, timeAgo, type YTVideo } from '@/lib/youtube'
import { VideoModal } from './VideoModal'

interface Props {
  video:    YTVideo
  featured?: boolean
}

export function VideoCard({ video, featured = false }: Props) {
  const [modalOpen, setModalOpen] = useState(false)
  const isNew = Date.now() - new Date(video.publishedAt).getTime() < 86_400_000

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={`group w-full cursor-pointer overflow-hidden rounded-[3px] border text-left transition-all duration-200 hover:border-[--border-2] ${featured ? 'md:col-span-2' : ''}`}
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        aria-label={`Reproduzir: ${video.title}`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden" style={{ background: 'var(--surface-2)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" aria-hidden />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full opacity-90 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100"
              style={{ background: 'var(--red)', boxShadow: '0 0 24px rgba(139,0,112,0.5)' }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-6 w-6" aria-hidden>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>

          {/* Duration badge */}
          <span
            className="absolute bottom-2 right-2 rounded px-2 py-0.5 text-xs text-white"
            style={{ background: 'rgba(0,0,0,0.8)', fontFamily: 'var(--font-mono)' }}
          >
            {parseDuration(video.duration)}
          </span>

          {/* New badge */}
          {isNew && (
            <span
              className="absolute left-2 top-2 animate-pulse rounded px-2 py-0.5 text-xs text-white"
              style={{ background: 'var(--red)', fontFamily: 'var(--font-mono)' }}
            >
              ● NOVO
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p
            className="mb-2 text-xs"
            style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
          >
            {video.channelTitle}
          </p>
          <h3
            className={`line-clamp-2 font-semibold leading-snug ${featured ? 'text-xl' : 'text-sm'}`}
            style={{ color: 'var(--fg)', fontFamily: 'var(--font-display)' }}
          >
            {video.title}
          </h3>
          <div
            className="mt-3 flex items-center gap-3 text-xs"
            style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
          >
            <span>{formatViews(video.viewCount)} views</span>
            <span>·</span>
            <span>{timeAgo(video.publishedAt)}</span>
          </div>
        </div>
      </button>

      {modalOpen && (
        <VideoModal
          videoId={video.id}
          title={video.title}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
