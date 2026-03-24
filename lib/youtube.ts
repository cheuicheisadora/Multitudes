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
  channelTitle: string
}

export async function getLatestPoliticsVideos(count = 6): Promise<YTVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY

  if (!apiKey) {
    console.warn('[YouTube] YOUTUBE_API_KEY não configurada.')
    return []
  }

  try {
    const searchRes = await fetch(
      `${YT_BASE}/search` +
        `?part=snippet` +
        `&q=pol%C3%ADtica+eleitoral+Brasil+2026+candidatos+campanha` +
        `&type=video` +
        `&order=date` +
        `&relevanceLanguage=pt` +
        `&regionCode=BR` +
        `&videoDuration=medium` +
        `&maxResults=${count}` +
        `&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    )

    if (!searchRes.ok) {
      throw new Error(
        `YouTube search retornou ${searchRes.status}: ${await searchRes.text()}`
      )
    }

    const searchData = (await searchRes.json()) as {
      items?: Array<{ id: { videoId: string } }>
    }
    const videoIds = (searchData.items ?? []).map((item) => item.id.videoId)

    if (videoIds.length === 0) return []

    const detailRes = await fetch(
      `${YT_BASE}/videos` +
        `?part=snippet,contentDetails,statistics` +
        `&id=${videoIds.join(',')}` +
        `&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    )

    if (!detailRes.ok) {
      throw new Error(`YouTube videos retornou ${detailRes.status}`)
    }

    const detailData = (await detailRes.json()) as {
      items?: Array<{
        id: string
        snippet: {
          title: string
          description: string
          publishedAt: string
          channelTitle: string
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
        id:           item.id,
        title:        item.snippet.title,
        description:  item.snippet.description ?? '',
        publishedAt:  item.snippet.publishedAt,
        thumbnail:    t.maxres?.url ?? t.high?.url ?? t.medium?.url ?? t.default?.url ?? '',
        viewCount:    item.statistics?.viewCount ?? '0',
        duration:     item.contentDetails?.duration ?? 'PT0S',
        embedUrl:     `https://www.youtube.com/embed/${item.id}`,
        watchUrl:     `https://www.youtube.com/watch?v=${item.id}`,
        channelTitle: item.snippet.channelTitle ?? '',
      }
    })
  } catch (err) {
    console.error('[YouTube] Erro ao buscar vídeos:', err)
    return []
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

/** "1500000" → "1,5M" | "250000" → "250K" */
export function formatViews(n: string): string {
  const v = parseInt(n)
  if (isNaN(v)) return '0'
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1).replace('.', ',')}M`
  if (v >= 1_000)     return `${Math.floor(v / 1_000)}K`
  return String(v)
}

/** "2025-03-20T14:00:00Z" → "há 3 dias" */
export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const h    = Math.floor(diff / 3_600_000)
  const d    = Math.floor(diff / 86_400_000)
  if (h < 1)   return 'agora'
  if (h < 24)  return `há ${h}h`
  if (d === 1) return 'ontem'
  if (d < 7)   return `há ${d} dias`
  if (d < 30)  return `há ${Math.floor(d / 7)} sem.`
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}
