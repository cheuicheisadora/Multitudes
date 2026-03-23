import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../app/generated/prisma'
import pg from 'pg'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  // Seed videos
  const videos = [
    {
      title: 'Como ler uma pesquisa eleitoral: erros e armadilhas comuns',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Pesquisas',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-17'),
    },
    {
      title: 'Análise de cenário: o que os números dizem antes do debate',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Cenário',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-14'),
    },
    {
      title: 'Monitoramento de redes: o que as bolhas não deixam você ver',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Redes',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-10'),
    },
    {
      title: 'Debate eleitoral: como avaliar desempenho além da torcida',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Debates',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-07'),
    },
  ]

  for (const video of videos) {
    await prisma.video.upsert({
      where: { id: `seed-${video.category.toLowerCase()}` },
      update: video,
      create: { id: `seed-${video.category.toLowerCase()}`, ...video },
    })
  }

  // Seed newsletter editions
  const editions = [
    {
      id: 'seed-edition-1',
      title: 'Intelligence Brief #01 — O que as pesquisas de março estão dizendo',
      summary:
        'Leitura estratégica dos principais levantamentos eleitorais de março, com análise de tendências e alertas para o segundo trimestre.',
      publishedAt: new Date('2025-03-14'),
      url: 'https://multitudes.com.br/newsletter',
    },
    {
      id: 'seed-edition-2',
      title: 'Intelligence Brief #02 — Redes sociais como termômetro político',
      summary:
        'Como monitorar movimentações digitais para antecipar mudanças no humor do eleitorado. Metodologia e casos práticos.',
      publishedAt: new Date('2025-03-21'),
      url: 'https://multitudes.com.br/newsletter',
    },
  ]

  for (const edition of editions) {
    await prisma.edition.upsert({
      where: { id: edition.id },
      update: edition,
      create: edition,
    })
  }

  console.log('✅ Seed complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
