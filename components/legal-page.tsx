import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <SiteHeader />

      <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-foreground/80 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">{title}</h1>
        <p className="text-foreground/50 text-sm mb-10">Ultima actualizare: {updated}</p>
        {children}
      </section>

      <Footer />
    </main>
  )
}
