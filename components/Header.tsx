"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { ClockIcon, CloseIcon, FacebookIcon, MenuIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* Barre d'infos pratiques */}
      <div className="bg-dark text-gray-300 text-xs">
        <div className="container mx-auto flex items-center justify-between gap-4 h-9">
          <div className="flex items-center gap-5 min-w-0">
            <span className="hidden md:flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-orange-300" />
              {SITE.hoursShort}
            </span>
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors truncate"
            >
              <PinIcon className="w-3.5 h-3.5 text-orange-300 flex-shrink-0" />
              <span className="truncate">{SITE.address}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="hidden lg:inline text-gray-400">{SITE.audience}</span>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* En-tête principal */}
      <header className="sticky top-0 z-50 bg-white border-b border-warm-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-6 h-[72px] lg:h-20">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label={`${SITE.name} — Accueil`}>
            <Image src="/logo.png" alt={SITE.name} width={160} height={48} className="h-10 lg:h-12 w-auto object-contain" priority />
            <span className="hidden sm:block border-l border-warm-border pl-3 leading-tight">
              <span className="block font-heading text-dark text-sm uppercase tracking-wider">{SITE.tagline}</span>
              <span className="block text-[11px] text-gray-500">Lagny-sur-Marne · Seine-et-Marne</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative px-3 xl:px-4 py-2 font-heading text-sm uppercase tracking-wider transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-orange after:transition-transform ${
                  isActive(link.href)
                    ? "text-orange after:scale-x-100"
                    : "text-dark hover:text-orange after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 px-4 py-2.5 border-2 border-dark text-dark font-heading text-sm tracking-wider hover:bg-dark hover:text-white transition-colors rounded"
            >
              <PhoneIcon className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Link
              href="/devis"
              className="px-5 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors rounded"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile : appel direct + menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={SITE.phoneHref} aria-label={`Appeler le ${SITE.phone}`} className="p-2.5 bg-orange text-white rounded">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 text-dark border border-warm-border rounded"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
            >
              {menuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="menu-mobile" className="lg:hidden border-t border-warm-border bg-white" aria-label="Navigation mobile">
            <div className="container mx-auto py-3 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-3 font-heading text-sm uppercase tracking-wider border-b border-warm-100 ${
                    isActive(link.href) ? "text-orange" : "text-dark"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/devis"
                className="mt-4 mb-2 text-center px-5 py-3 bg-orange text-white font-heading text-sm uppercase tracking-wider rounded"
              >
                Demande de devis gratuit
              </Link>
              <p className="text-center text-xs text-gray-500 py-2">{SITE.hoursShort}</p>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
