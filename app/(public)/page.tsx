import { getLatestVideos } from '@/lib/youtube'
import { Hero } from '@/components/sections/Hero'
import { Method } from '@/components/sections/Method'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { VideosSection } from '@/components/sections/VideosSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { ForWhom } from '@/components/sections/ForWhom'
import { Differentials } from '@/components/sections/Differentials'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CTA } from '@/components/sections/CTA'

export default async function HomePage() {
  const videos = await getLatestVideos(6)

  return (
    <>
      <Hero />
      <Method />
      <ServicesSection />
      {videos.length > 0 && <VideosSection videos={videos} />}
      <NewsletterSection />
      <ForWhom />
      <Differentials />
      <HowItWorks />
      <CTA />
    </>
  )
}
