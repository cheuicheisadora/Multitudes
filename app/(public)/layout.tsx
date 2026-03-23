import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { Providers } from '@/components/providers'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </Providers>
  )
}
