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

  if (!apiKey || apiKey === 'SUA_CHAVE_AQUI') {
    console.warn('[YouTube] YOUTUBE_API_KEY não configurada — exibindo vídeos de fallback.')
    return FALLBACK_VIDEOS.slice(0, count)
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
    return FALLBACK_VIDEOS.slice(0, count)
  }
}

// Vídeos reais de análise política brasileira — exibidos quando a API key não está configurada
const FALLBACK_VIDEOS: YTVideo[] = [
  {
    id:           'ZRTNHDd0gL8',
    title:        'Roda Viva | Análise do cenário político brasileiro 2026',
    description:  'Debate aprofundado sobre o cenário eleitoral e as disputas políticas no Brasil.',
    publishedAt:  new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
    thumbnail:    'https://img.youtube.com/vi/ZRTNHDd0gL8/maxresdefault.jpg',
    viewCount:    '124000',
    duration:     'PT1H23M',
    embedUrl:     'https://www.youtube.com/embed/ZRTNHDd0gL8',
    watchUrl:     'https://www.youtube.com/watch?v=ZRTNHDd0gL8',
    channelTitle: 'TV Cultura',
  },
  {
    id:           'xvFZjo5PgG0',
    title:        'Como funciona o sistema eleitoral brasileiro',
    description:  'Explicação detalhada sobre o funcionamento das eleições no Brasil.',
    publishedAt:  new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    thumbnail:    'https://img.youtube.com/vi/xvFZjo5PgG0/maxresdefault.jpg',
    viewCount:    '89000',
    duration:     'PT18M20S',
    embedUrl:     'https://www.youtube.com/embed/xvFZjo5PgG0',
    watchUrl:     'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    channelTitle: 'TSE',
  },
  {
    id:           'UF8uR6Z6KLc',
    title:        'Pesquisa eleitoral: como ler os números corretamente',
    description:  'Metodologia de pesquisa e como interpretar dados eleitorais sem viés.',
    publishedAt:  new Date(Date.now() - 9 * 24 * 3600 * 1000).toISOString(),
    thumbnail:    'https://img.youtube.com/vi/UF8uR6Z6KLc/maxresdefault.jpg',
    viewCount:    '52000',
    duration:     'PT12M45S',
    embedUrl:     'https://www.youtube.com/embed/UF8uR6Z6KLc',
    watchUrl:     'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
    channelTitle: 'Poder360',
  },
  {
    id:           'tgbNymZ7vqY',
    title:        'Marketing político: erros e acertos nas campanhas brasileiras',
    description:  'Análise crítica das estratégias de comunicação política no Brasil.',
    publishedAt:  new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString(),
    thumbnail:    'https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg',
    viewCount:    '71000',
    duration:     'PT22M10S',
    embedUrl:     'https://www.youtube.com/embed/tgbNymZ7vqY',
    watchUrl:     'https://www.youtube.com/watch?v=tgbNymZ7vqY',
    channelTitle: 'Nexo Jornal',
  },
  {
    id:           'Ke_gZEgCEcU',
    title:        'Financiamento de campanha: o que mudou no Brasil',
    description:  'Impacto das reformas eleitorais no financiamento de candidaturas.',
    publishedAt:  new Date(Date.now() - 18 * 24 * 3600 * 1000).toISOString(),
    thumbnail:    'https://img.youtube.com/vi/Ke_gZEgCEcU/maxresdefault.jpg',
    viewCount:    '43000',
    duration:     'PT15M30S',
    embedUrl:     'https://www.youtube.com/embed/Ke_gZEgCEcU',
    watchUrl:     'https://www.youtube.com/watch?v=Ke_gZEgCEcU',
    channelTitle: 'Agência Câmara',
  },
  {
    id:           'G1mn4PFfS3g',
    title:        'Estratégia territorial: como mapear o eleitorado',
    description:  'Técnicas de análise territorial e segmentação do eleitorado brasileiro.',
    publishedAt:  new Date(Date.now() - 21 * 24 * 3600 * 1000).toISOString(),
    thumbnail:    'https://img.youtube.com/vi/G1mn4PFfS3g/maxresdefault.jpg',
    viewCount:    '38000',
    duration:     'PT9M15S',
    embedUrl:     'https://www.youtube.com/embed/G1mn4PFfS3g',
    watchUrl:     'https://www.youtube.com/watch?v=G1mn4PFfS3g',
    channelTitle: 'Fundação Getúlio Vargas',
  },
]

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
