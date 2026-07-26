'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const footerLinks = [
    { label: 'Social Media Management', href: '/servicii' },
    { label: 'Reclame Meta & Google Ads', href: '/servicii' },
    { label: 'Fotografie și Video', href: '/servicii' },
    { label: 'Website-uri', href: '/servicii' },
    { label: 'Branding și Strategie', href: '/servicii' },
  ]

  const navLinks = [
    { label: 'Despre', href: '/despre' },
    { label: 'Servicii', href: '/servicii' },
    { label: 'Portofoliu', href: '/portofoliu' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/bndigital.ro/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61554284195201' },
  ]

  return (
    <footer 
      ref={ref}
      className="relative bg-black border-t border-accent/20 py-16 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-40" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/logo/bndigital-logo-alb.svg"
              alt="BNDigital"
              className="h-8 w-auto mb-4"
            />
            <p className="text-foreground/70 text-sm leading-relaxed">
              Agenție de marketing digital: social media, reclame plătite, fotografie și video, website-uri și branding pentru afaceri locale.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Servicii</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Meniu</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-de-confidentialitate" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                  Politica Confidențialității
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-accent/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70 gap-6">
            <p>&copy; {currentYear} BNDigital. Toate drepturile rezervate.</p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: 'var(--accent)', scale: 1.1 }}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
