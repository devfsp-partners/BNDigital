import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Portfolio } from '@/components/portfolio'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Portofoliu',
  description: 'Fotografii, materiale și design-uri realizate de BNDigital pentru clienți din restaurante, clinici medicale, magazine locale și social media.',
  alternates: {
    canonical: '/portofoliu',
  },
  openGraph: {
    title: 'Portofoliu | BNDigital',
    description: 'Fotografii, materiale și design-uri realizate de BNDigital pentru clienți din restaurante, clinici medicale, magazine locale și social media.',
    url: '/portofoliu',
  },
}

export default function PortofoliuPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <SiteHeader />
      <Portfolio />
      <Footer />
    </main>
  )
}
