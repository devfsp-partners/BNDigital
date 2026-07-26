"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemoSecond() {
  const heroImages = [
    "/images/portfolio/restaurant/mancare-1.jpg",
    "/images/portfolio/medical/cabinet-1.jpg",
    "/images/portfolio/produse/produs-1.jpg",
    "/images/portfolio/social/design-1.jpg",
    "/images/portfolio/restaurant/bautura-1.jpg",
    "/images/portfolio/medical/medic-1.jpg",
    "/images/portfolio/produse/produs-2.jpg",
    "/images/portfolio/social/design-2.jpg",
    "/images/portfolio/restaurant/mancare-2.jpg",
    "/images/portfolio/medical/cabinet-2.jpg",
    "/images/portfolio/produse/produs-3.jpg",
    "/images/portfolio/social/design-3.jpg",
  ];

  const navItems = [
    { label: "Despre", id: "about" },
    { label: "Servicii", id: "services" },
    { label: "Portofoliu", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-12"
    >
      {/* Background marquee */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={heroImages}
      />

      {/* Dark overlay over images */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/60" />

      {/* Top navigation */}
      <nav className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-accent/10 bg-black/60 px-6 py-4 backdrop-blur-md md:px-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => scrollToSection("hero")}
          className="flex items-center"
        >
          <img
            src="/logo/bndigital-logo-alb.svg"
            alt="BNDigital"
            className="h-8 w-auto md:h-9"
          />
        </motion.button>
        <div className="hidden gap-8 text-sm font-medium md:flex">
          {navItems.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="group relative text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mb-3 text-accent text-lg font-semibold tracking-widest uppercase"
          >
            Agenție de Marketing Digital
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-balance text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Tot ce ai nevoie pentru o{" "}
            <span className="relative z-20 inline-block rounded-xl bg-orange-400/40 px-4 py-1 text-white underline decoration-orange-300 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
              prezență online
            </span>{" "}
            puternică.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-3xl text-balance text-sm font-light text-neutral-200 md:text-base"
          >
            Social media, reclame Meta &amp; Google Ads, fotografie și video, website-uri și branding —
            toate lucrate împreună ca afacerea ta să fie mai vizibilă, să atragă mai mulți clienți și
            să aibă o imagine profesională.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-lg bg-accent px-8 py-6 text-base font-semibold text-black hover:bg-accent/90"
              onClick={() => scrollToSection("contact")}
            >
              Contactează-ne
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg border-2 border-accent px-8 py-6 text-base font-semibold text-accent hover:bg-accent/10"
              onClick={() => scrollToSection("services")}
            >
              Servicii
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown size={32} className="text-accent" />
      </motion.div>
    </section>
  );
}

