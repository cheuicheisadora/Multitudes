'use client'

import { LiteVideoEmbed } from './LiteVideoEmbed'

interface VideoEmbedProps {
  url: string
  platform: string
  title: string
  thumbnail?: string | null
}

export function VideoEmbed({ url, platform, title, thumbnail = null }: VideoEmbedProps) {
  return (
    <LiteVideoEmbed url={url} platform={platform} title={title} thumbnail={thumbnail} />
  )
}
