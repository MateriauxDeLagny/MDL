"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Matériaux de Lagny — Accueil">
          <div className="bg-white rounded px-3 py-1.5 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Matériaux de Lagny"
              width={160}
              height={48}
              className="h-9 lg:h-11 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors ${
                  active ? "text-orange" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/devis"
            className="ml-4 px-5 py-2.5 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
          >
            Demander un devis
          </Link>
        </nav>

        {/* Téléphone (desktop large) */}
        <a
          href={SITE.phoneHref}
          className="hidden xl:flex items-center gap-2 text-gray-300 hover:text-white transition-colors ml-4"
        >
          <svg className="w-4 h-4 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-body text-sm font-medium">{SITE.phone}</span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-dark border-t border-dark-80">
          <nav className="container mx-auto py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 font-heading text-sm uppercase tracking-wider transition-colors rounded ${
                    active ? "text-orange bg-dark-80" : "text-gray-300 hover:text-white hover:bg-dark-80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-dark-80">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-body text-sm font-medium">{SITE.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
