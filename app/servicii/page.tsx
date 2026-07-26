import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Services } from '@/components/services'
import { Partners } from '@/components/partners'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Social Media Management, Reclame Meta & Google Ads, Fotografie și Video, Website-uri și Landing Pages, Branding și Strategie — servicii complete de marketing digital.',
  alternates: {
    canonical: '/servicii',
  },
  openGraph: {
    title: 'Servicii | BNDigital',
    description: 'Social Media Management, Reclame Meta & Google Ads, Fotografie și Video, Website-uri și Landing Pages, Branding și Strategie — servicii complete de marketing digital.',
    url: '/servicii',
  },
}

export default function ServiciiPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <SiteHeader />
      <Services />
      <Partners />
      <Footer />
    </main>
  )
}
