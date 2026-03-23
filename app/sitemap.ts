import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://multitudes.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/metodo`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/servicos`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/sobre`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/contato`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/newsletter`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteUrl}/videos`, lastModified: new Date(), priority: 0.7 },
  ]

  return staticPages
}
