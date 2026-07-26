import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'BNDigital - Agenție de Marketing Digital Satu Mare',
  description: 'BNDigital este o agenție de marketing digital din Satu Mare specializată în social media, reclame Meta & Google, fotografie și video, website-uri și branding pentru afaceri locale.',
  generator: 'v0.app',
  keywords: ['agenție de marketing', 'marketing digital', 'Satu Mare', 'social media management', 'reclame Meta Ads', 'reclame Google Ads', 'fotografie și video', 'website-uri', 'branding'],
  authors: [{ name: 'BNDigital' }],
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon-192.png',
  },
  openGraph: {
    title: 'BNDigital - Agenție de Marketing Digital',
    description: 'Social media, reclame plătite, fotografie & video, website-uri și branding pentru afaceri din Satu Mare și din toată țara.',
    type: 'website',
    locale: 'ro_RO',
  },
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
      </head>
      <body className={`font-sans antialiased ${_playfair.variable}`}>
        {children}
        <Toaster theme="dark" richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
