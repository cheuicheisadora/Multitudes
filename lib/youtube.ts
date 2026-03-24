const YT_BASE = 'https://www.googleapis.com/youtube/v3'

export interface YTVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
  viewCount: string
  duration: string
  embedUrl: string
  watchUrl: string
}

export async function getLatestVideos(count = 6): Promise<YTVideo[]> {
  const apiKey    = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    console.warn('[YouTube] YOUTUBE_API_KEY ou YOUTUBE_CHANNEL_ID não configurados.')
    return FALLBACK_VIDEOS.slice(0, count)
  }

  try {
    const uploadsId = channelId.replace(/^UC/, 'UU')

    const listRes = await fetch(
      `${YT_BASE}/playlistItems?part=contentDetails&playlistId=${uploadsId}&maxResults=${count}&key=${apiKey}`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
      }
    )

    if (!listRes.ok) throw new Error(`playlistItems API retornou ${listRes.status}`)

    const listData = (await listRes.json()) as {
      items?: Array<{ contentDetails: { videoId: string } }>
    }
    const videoIds = (listData.items ?? []).map((item) => item.contentDetails.videoId)

    if (videoIds.length === 0) return FALLBACK_VIDEOS.slice(0, count)

    const detailRes = await fetch(
      `${YT_BASE}/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(',')}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    )

    if (!detailRes.ok) throw new Error(`videos API retornou ${detailRes.status}`)

    const detailData = (await detailRes.json()) as {
      items?: Array<{
        id: string
        snippet: {
          title: string
          description: string
          publishedAt: string
          thumbnails: {
            maxres?: { url: string }
            high?: { url: string }
            medium?: { url: string }
            default?: { url: string }
          }
        }
        statistics?: { viewCount?: string }
        contentDetails?: { duration?: string }
      }>
    }

    return (detailData.items ?? []).map((item): YTVideo => {
      const t = item.snippet.thumbnails
      return {
        id:          item.id,
        title:       item.snippet.title,
        description: item.snippet.description ?? '',
        publishedAt: item.snippet.publishedAt,
        thumbnail:   t.maxres?.url ?? t.high?.url ?? t.medium?.url ?? t.default?.url ?? '',
        viewCount:   item.statistics?.viewCount ?? '0',
        duration:    item.contentDetails?.duration ?? 'PT0S',
        embedUrl:    `https://www.youtube.com/embed/${item.id}`,
        watchUrl:    `https://www.youtube.com/watch?v=${item.id}`,
      }
    })
  } catch (err) {
    console.error('[YouTube] Erro ao buscar vídeos:', err)
    return FALLBACK_VIDEOS.slice(0, count)
  }
}

/** "PT5M30S" → "5:30" */
export function parseDuration(iso: string): string {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!m) return ''
  const h   = parseInt(m[1] ?? '0')
  const min = parseInt(m[2] ?? '0')
  const s   = parseInt(m[3] ?? '0')
  if (h > 0) return `${h}:${String(min).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${min}:${String(s).padStart(2, '0')}`
}

/** "1500000" → "1.5M" ou "250000" → "250K" */
export function formatViews(n: string): string {
  const v = parseInt(n)
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`
  if (v >= 1_000)     return `${(v / 1_000).toFixed(0)}K`
  return String(v)
}

const FALLBACK_VIDEOS: YTVideo[] = [
  {
    id:          'dQw4w9WgXcQ',
    title:       'Como ler uma pesquisa eleitoral sem ser enganado',
    description: 'Análise metodológica de pesquisas eleitorais brasileiras.',
    publishedAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
    thumbnail:   'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewCount:   '12400',
    duration:    'PT10M00S',
    embedUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    watchUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id:          'dQw4w9WgXcQ',
    title:       'Análise de cenário: o que os números dizem antes do debate',
    description: 'Leitura estratégica do cenário político nacional.',
    publishedAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    thumbnail:   'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewCount:   '8900',
    duration:    'PT8M20S',
    embedUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    watchUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id:          'dQw4w9WgXcQ',
    title:       'Monitoramento de redes: o que as bolhas não deixam você ver',
    description: 'Como mapear narrativas digitais em campanhas políticas.',
    publishedAt: new Date(Date.now() - 9 * 24 * 3600 * 1000).toISOString(),
    thumbnail:   'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewCount:   '5200',
    duration:    'PT6M45S',
    embedUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    watchUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id:          'dQw4w9WgXcQ',
    title:       'Debate eleitoral: como avaliar desempenho além da torcida',
    description: 'Metodologia para análise técnica de debates políticos.',
    publishedAt: new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString(),
    thumbnail:   'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewCount:   '7100',
    duration:    'PT12M10S',
    embedUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    watchUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id:          'dQw4w9WgXcQ',
    title:       'Inteligência territorial: por que o mapa eleitoral mente',
    description: 'Análise de dados territoriais para campanhas municipais.',
    publishedAt: new Date(Date.now() - 18 * 24 * 3600 * 1000).toISOString(),
    thumbnail:   'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewCount:   '4300',
    duration:    'PT9M30S',
    embedUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    watchUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id:          'dQw4w9WgXcQ',
    title:       'Comunicação de campanha: consistência beats volume',
    description: 'Como manter coerência de mensagem em todos os canais.',
    publishedAt: new Date(Date.now() - 21 * 24 * 3600 * 1000).toISOString(),
    thumbnail:   'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    viewCount:   '3800',
    duration:    'PT7M15S',
    embedUrl:    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    watchUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
]
