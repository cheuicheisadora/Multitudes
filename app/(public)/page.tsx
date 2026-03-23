import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Method } from '@/components/sections/Method'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { Differentials } from '@/components/sections/Differentials'
import { ForWhom } from '@/components/sections/ForWhom'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Method />
      <NewsletterSection />
      <Differentials />
      <ForWhom />
      <HowItWorks />
      <CTA />
    </>
  )
}
