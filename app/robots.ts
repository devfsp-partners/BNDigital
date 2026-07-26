import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://bndigital.ro'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/masina',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
