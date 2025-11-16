import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'BNDigital - Fotograf Profesionist Satu Mare | Nuntă, Portrete, Evenimente',
  description: 'Fotograf profesionist în Satu Mare. Servicii de fotografie pentru nuntă, portrete și evenimente. Management social media și branding incluse.',
  generator: 'v0.app',
  keywords: ['fotograf', 'Satu Mare', 'nuntă', 'portrete', 'fotografie profesională', 'branding'],
  authors: [{ name: 'BNDigital' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'BNDigital - Fotograf Profesionist',
    description: 'Fotografie de calitate pentru nuntă, portrete și evenimente în Satu Mare',
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
        <Analytics />
      </body>
    </html>
  )
}
