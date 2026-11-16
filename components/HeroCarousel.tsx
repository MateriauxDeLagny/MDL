"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    image: "/images/hero-depot.jpg",
    accent: "#C8202A",
    eyebrow: "Depuis 1985",
    headline: "Matériaux de construction",
    sub: "Gros œuvre, isolation, bois, enduits — tout pour votre chantier, disponible au dépôt de Lagny-sur-Marne.",
    cta: { label: "Voir nos produits", href: "/produits" },
    ctaSecondary: { label: "Demander un devis", href: "/devis" },
  },
  {
    image: "/images/livraison-paris.jpg",
    accent: "#C8202A",
    eyebrow: "Livraison partout en Île-de-France",
    headline: "Conseil et proximité",
    sub: "Notre équipe vous accompagne du projet à la livraison. Vente au comptoir, commandes spéciales, livraison sur chantier en Île-de-France.",
    cta: { label: "Nous contacter", href: "/contact" },
    ctaSecondary: { label: "Horaires & accès", href: "/contact" },
  },
  {
    image: "/images/hero-isolation.jpg",
    accent: "#C8202A",
    eyebrow: "Fournisseurs reconnus",
    headline: "Marques professionnelles",
    sub: "URSA, PRB, SEMIN, WÜRTH, illbruck, ACTIS, Wienerberger et bien d'autres. Des produits éprouvés, disponibles à Lagny.",
    cta: { label: "Nos fournisseurs", href: "/fournisseurs" },
    ctaSecondary: { label: "Tous nos produits", href: "/produits" },
  },
];

export default function HeroCarousel() {
  const autoplayPlugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin.current]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
      <div ref={emblaRef} className="overflow-hidden h-full" style={{ minHeight: "90vh" }}>
        <div className="flex" style={{ minHeight: "90vh" }}>
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="relative flex-none w-full"
              style={{ minHeight: "90vh" }}
            >
              {/* Background photo */}
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover object-center"
                priority={i === 0}
                sizes="100vw"
              />

              {/* Dark overlay — left heavier, right lighter */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />

              {/* Red accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange opacity-80" />

              {/* Content */}
              <div className="relative z-10 container mx-auto h-full flex items-center" style={{ minHeight: "90vh" }}>
                <div className="max-w-2xl py-24">
                  <p className="font-heading text-orange text-sm uppercase tracking-[0.2em] mb-3">
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight mb-6 text-balance">
                    {slide.headline}
                  </h1>
                  <p className="text-gray-200 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                    {slide.sub}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.cta.href}
                      className="px-6 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
                    >
                      {slide.cta.label}
                    </Link>
                    <Link
                      href={slide.ctaSecondary.href}
                      className="px-6 py-3 border border-white/50 text-white font-heading text-sm uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors rounded"
                    >
                      {slide.ctaSecondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all rounded-full ${
              i === activeIndex ? "w-8 h-2 bg-orange" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Phone hint */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/50 z-20">
        <span className="font-heading text-xs uppercase tracking-widest rotate-90 origin-center mb-4">{SITE_PHONE}</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

const SITE_PHONE = "01.85.42.12.34";
