'use client'

import { useEffect, useState } from 'react'
import type { YTVideo } from '@/lib/youtube'
import { FALLBACK_VIDEOS } from '@/lib/youtube'
import { VideoGrid } from './VideoGrid'

const YT_BASE = 'https://www.googleapis.com/youtube/v3'

async function fetchVideos(count: number): Promise<YTVideo[]> {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  if (!apiKey) return []

  try {
    const searchRes = await fetch(
      `${YT_BASE}/search?part=snippet` +
      `&q=pol%C3%ADtica+eleitoral+Brasil+2026+candidatos+campanha` +
      `&type=video&order=date&relevanceLanguage=pt&regionCode=BR` +
      `&maxResults=${count}&key=${apiKey}`
    )
    if (!searchRes.ok) return []

    const searchData = await searchRes.json()
    const videoIds: string[] = (searchData.items ?? []).map((i: any) => i.id.videoId)
    if (!videoIds.length) return []

    const detailRes = await fetch(
      `${YT_BASE}/videos?part=snippet,contentDetails,statistics` +
      `&id=${videoIds.join(',')}&key=${apiKey}`
    )
    if (!detailRes.ok) return []

    const detailData = await detailRes.json()
    return (detailData.items ?? []).map((item: any): YTVideo => {
      const t = item.snippet.thumbnails
      return {
        id:           item.id,
        title:        item.snippet.title,
        description:  item.snippet.description ?? '',
        publishedAt:  item.snippet.publishedAt,
        thumbnail:    t.maxres?.url ?? t.high?.url ?? t.medium?.url ?? '',
        viewCount:    item.statistics?.viewCount ?? '0',
        duration:     item.contentDetails?.duration ?? 'PT0S',
        embedUrl:     `https://www.youtube.com/embed/${item.id}`,
        watchUrl:     `https://www.youtube.com/watch?v=${item.id}`,
        channelTitle: item.snippet.channelTitle ?? '',
      }
    })
  } catch {
    return []
  }
}

interface Props {
  count?: number
}

export function VideosFeed({ count = 6 }: Props) {
  const [videos, setVideos] = useState<YTVideo[]>(FALLBACK_VIDEOS.slice(0, count))

  useEffect(() => {
    fetchVideos(count).then(v => {
      if (v.length > 0) setVideos(v)
    })
  }, [count])

  const [featured, ...rest] = videos
  if (!featured) return null

  return <VideoGrid featured={featured} rest={rest} />
}
