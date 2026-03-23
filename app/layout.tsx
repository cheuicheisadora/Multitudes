import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://multitudes.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Multitudes Consultoria — Estratégia Política',
    template: '%s | Multitudes Consultoria',
  },
  description:
    'Estratégia política para campanhas, mandatos e análises que precisam de método, mensagem e direção. Inteligência eleitoral, posicionamento estratégico e comunicação integrada.',
  keywords: [
    'consultoria política',
    'estratégia eleitoral',
    'campanha política',
    'inteligência eleitoral',
    'marketing político',
    'pesquisa eleitoral',
  ],
  authors: [{ name: 'Multitudes Consultoria' }],
  creator: 'Multitudes Consultoria',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Multitudes Consultoria',
    title: 'Multitudes Consultoria — Estratégia Política',
    description:
      'Estratégia política para campanhas, mandatos e análises que precisam de método, mensagem e direção.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multitudes Consultoria — Estratégia Política',
    description:
      'Estratégia política para campanhas, mandatos e análises que precisam de método, mensagem e direção.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=DM+Sans:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
