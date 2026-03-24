import { Hero } from '@/components/sections/Hero'
import { Method } from '@/components/sections/Method'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { ForWhom } from '@/components/sections/ForWhom'
import { Differentials } from '@/components/sections/Differentials'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Method />
      <ServicesSection />
      <NewsletterSection />
      <ForWhom />
      <Differentials />
      <HowItWorks />
      <CTA />
    </>
  )
}
