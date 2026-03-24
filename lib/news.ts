export interface NewsItem {
  title:   string
  link:    string
  pubDate: string
  source:  string
}

export async function getLatestPoliticalNews(count = 8): Promise<NewsItem[]> {
  try {
    const query  = encodeURIComponent('eleições políticas candidatos Brasil 2026')
    const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=pt-BR&gl=BR&ceid=BR:pt-419`

    const res = await fetch(rssUrl, {
      next: { revalidate: 1800 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MultitudesBot/1.0)',
        Accept: 'application/rss+xml, application/xml',
      },
    })

    if (!res.ok) throw new Error(`RSS retornou ${res.status}`)

    const xml = await res.text()
    const items: NewsItem[] = []

    for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
      const block = match[1]

      const rawTitle =
        block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
        block.match(/<title>(.*?)<\/title>/)?.[1] ??
        ''

      const title = rawTitle.replace(/\s[-–]\s[^-–]+$/, '').trim()

      const link =
        block.match(/<link>(https?:\/\/[^\s<]+)/)?.[1] ??
        block.match(/<link>(.*?)<\/link>/)?.[1] ??
        ''

      const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? ''

      const source =
        block.match(/<source[^>]*>(.*?)<\/source>/)?.[1] ??
        (() => {
          try { return new URL(link).hostname.replace('www.', '') } catch { return 'G1' }
        })()

      if (title && link) {
        items.push({ title, link, pubDate, source })
      }
      if (items.length >= count) break
    }

    return items
  } catch (err) {
    console.error('[News] Falha ao buscar RSS:', err)
    return []
  }
}

export function formatNewsAge(pubDate: string): string {
  try {
    const diff = Date.now() - new Date(pubDate).getTime()
    const h = Math.floor(diff / 3_600_000)
    const d = Math.floor(diff / 86_400_000)
    if (h < 1)  return 'agora'
    if (h < 24) return `${h}h`
    if (d < 7)  return `${d}d`
    return new Date(pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
  } catch {
    return ''
  }
}
