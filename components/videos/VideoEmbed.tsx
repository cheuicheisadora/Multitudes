'use client'

interface VideoEmbedProps {
  url: string
  platform: string
  title: string
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

function getTikTokId(url: string): string | null {
  const match = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/)
  return match ? match[1] : null
}

export function VideoEmbed({ url, platform, title }: VideoEmbedProps) {
  if (platform === 'youtube') {
    const videoId = getYouTubeId(url)
    if (!videoId) return <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Vídeo indisponível</div>

    return (
      <div className="aspect-video overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    )
  }

  if (platform === 'tiktok') {
    const videoId = getTikTokId(url)
    if (!videoId) return <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">Vídeo indisponível</div>

    return (
      <div className="overflow-hidden rounded-lg" style={{ paddingTop: '177.78%', position: 'relative' }}>
        <iframe
          src={`https://www.tiktok.com/embed/v2/${videoId}`}
          title={title}
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
      Plataforma não suportada
    </div>
  )
}
