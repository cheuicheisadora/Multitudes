'use client'

import type { NewsItem } from '@/lib/news'
import { formatNewsAge } from '@/lib/news'

interface Props {
  items:      NewsItem[]
  updatedAgo: string
}

export function PoliticalTicker({ items, updatedAgo }: Props) {
  if (items.length === 0) {
    return (
      <div
        className="flex h-full items-center justify-center text-sm"
        style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
      >
        Conectando ao feed...
      </div>
    )
  }

  // Duplicate items for infinite scroll
  const doubled = [...items, ...items]

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 shrink-0"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="pulse-red h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--red)' }}
            aria-hidden
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)' }}
          >
            AO VIVO — INTELIGÊNCIA POLÍTICA
          </span>
        </div>
        <span
          className="text-xs"
          style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
        >
          {updatedAgo}
        </span>
      </div>

      {/* Scrolling items */}
      <div className="relative flex-1 overflow-hidden">
        <ul className="ticker-scroll space-y-0" aria-live="polite">
          {doubled.map((item, i) => (
            <li
              key={i}
              className="border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-white/5"
              >
                <span
                  className="mt-0.5 shrink-0 text-xs"
                  style={{ color: 'var(--subtle)', fontFamily: 'var(--font-mono)' }}
                >
                  {formatNewsAge(item.pubDate)}
                </span>
                <span
                  className="flex-1 text-sm leading-snug line-clamp-2"
                  style={{ color: 'var(--fg)' }}
                >
                  {item.title}
                </span>
                <span
                  className="shrink-0 text-xs"
                  style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}
                >
                  {item.source}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
