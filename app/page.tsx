'use client'

import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import ThreeDMarqueeDemoSecond from '@/components/ui/3d-marquee-demo-2'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <ThreeDMarqueeDemoSecond />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
