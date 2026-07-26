import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

const siteUrl = 'https://bndigital.ro'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BNDigital - Agenție de Marketing Digital Satu Mare',
    template: '%s | BNDigital',
  },
  description: 'BNDigital este o agenție de marketing digital din Satu Mare specializată în social media, reclame Meta & Google, fotografie și video, website-uri și branding pentru afaceri locale.',
  generator: 'v0.app',
  keywords: ['agenție de marketing', 'marketing digital', 'Satu Mare', 'social media management', 'reclame Meta Ads', 'reclame Google Ads', 'fotografie și video', 'website-uri', 'branding'],
  authors: [{ name: 'BNDigital' }],
  creator: 'BNDigital',
  publisher: 'BNDigital',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'BNDigital - Agenție de Marketing Digital',
    description: 'Social media, reclame plătite, fotografie & video, website-uri și branding pentru afaceri din Satu Mare și din toată țara.',
    url: siteUrl,
    siteName: 'BNDigital',
    type: 'website',
    locale: 'ro_RO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BNDigital - Agenție de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BNDigital - Agenție de Marketing Digital',
    description: 'Social media, reclame plătite, fotografie & video, website-uri și branding pentru afaceri din Satu Mare și din toată țara.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BNDigital',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/favicon-512.png`,
  url: siteUrl,
  telephone: '+40734837002',
  email: 'contact@bndigital.ro',
  areaServed: 'Satu Mare, România',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Satu Mare',
    addressCountry: 'RO',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61554284195201',
    'https://www.instagram.com/bndigital.ro/',
  ],
  description: 'Agenție de marketing digital din Satu Mare specializată în social media, reclame Meta & Google, fotografie și video, website-uri și branding.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased ${_playfair.variable}`}>
        {children}
        <Toaster theme="dark" richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
