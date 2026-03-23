export interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  role: string | null
  city: string | null
  state: string | null
  context: string | null
  source: string | null
  createdAt: Date
}

export interface Subscriber {
  id: string
  email: string
  name: string | null
  createdAt: Date
}

export interface Video {
  id: string
  title: string
  url: string
  platform: 'youtube' | 'tiktok'
  category: string
  thumbnail: string | null
  publishedAt: Date
  createdAt: Date
}

export interface Edition {
  id: string
  title: string
  summary: string | null
  publishedAt: Date
  url: string
  createdAt: Date
}
