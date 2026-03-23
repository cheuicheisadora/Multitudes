/* eslint-disable @typescript-eslint/no-require-imports */
// Run with: npm run db:seed
// Uses require to avoid TypeScript path issues with generated prisma client
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { PrismaClient } = require('../app/generated/prisma') as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { PrismaPg } = require('@prisma/adapter-pg') as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pg = require('pg') as any

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  const videos = [
    {
      id: 'seed-pesquisas',
      title: 'Como ler uma pesquisa eleitoral: erros e armadilhas comuns',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Pesquisas',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-17'),
    },
    {
      id: 'seed-cenario',
      title: 'Análise de cenário: o que os números dizem antes do debate',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Cenário',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-14'),
    },
    {
      id: 'seed-redes',
      title: 'Monitoramento de redes: o que as bolhas não deixam você ver',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      platform: 'youtube',
      category: 'Redes',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: new Date('2025-03-10'),
    },
    {
      id: 'seed-debates',
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
      where: { id: video.id },
      update: video,
      create: video,
    })
  }

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
  .catch((e: unknown) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
