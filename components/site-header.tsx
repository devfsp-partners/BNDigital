import Link from 'next/link'

const navItems = [
  { label: 'Acasă', href: '/' },
  { label: 'Despre', href: '/despre' },
  { label: 'Servicii', href: '/servicii' },
  { label: 'Portofoliu', href: '/portofoliu' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-accent/10 bg-black/80 px-6 py-4 backdrop-blur-md md:px-12">
      <Link href="/" className="flex items-center">
        <img src="/logo/bndigital-logo-alb.svg" alt="BNDigital" className="h-8 w-auto md:h-9" />
      </Link>
      <nav className="hidden gap-8 text-sm font-medium md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative text-foreground/80 transition-colors hover:text-accent"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
    </header>
  )
}
