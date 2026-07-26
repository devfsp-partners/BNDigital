import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'BNDigital este o agenție de marketing digital din Satu Mare specializată în promovarea afacerilor locale: social media, reclame plătite, fotografie și video, website-uri și branding.',
  alternates: {
    canonical: '/despre',
  },
  openGraph: {
    title: 'Despre Noi | BNDigital',
    description: 'BNDigital este o agenție de marketing digital din Satu Mare specializată în promovarea afacerilor locale: social media, reclame plătite, fotografie și video, website-uri și branding.',
    url: '/despre',
  },
}

export default function DesprePage() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <SiteHeader />
      <About />
      <Footer />
    </main>
  )
}
