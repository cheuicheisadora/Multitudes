import type { Metadata } from 'next'
import { Fraunces, DM_Sans, DM_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

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
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
