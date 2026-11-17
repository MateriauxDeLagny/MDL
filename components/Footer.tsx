import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE, DEVIS_URL } from "@/lib/constants";
import { PRODUCT_FAMILIES } from "@/lib/produits";
import { SERVICES } from "@/lib/services";
import { ArrowIcon, FacebookIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";

const linkCls = "text-sm text-gray-400 hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="container mx-auto py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="inline-block bg-white rounded px-3 py-2 mb-5">
            <Image src="/logo.png" alt={SITE.name} width={140} height={42} className="h-10 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Négoce de matériaux de construction à Lagny-sur-Marne. Conseils, fournitures et livraison sur chantier pour les
            professionnels et les particuliers.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-white font-heading text-lg tracking-wide hover:text-orange-300 transition-colors">
                <PhoneIcon className="w-5 h-5 text-orange-300" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                <MailIcon className="w-4 h-4 text-orange-300 flex-shrink-0" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-white transition-colors">
                <PinIcon className="w-4 h-4 text-orange-300 flex-shrink-0 mt-0.5" /> {SITE.address}
              </a>
            </li>
          </ul>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <FacebookIcon className="w-5 h-5" /> Suivez-nous sur Facebook
          </a>
        </div>

        <div className="lg:col-span-2">
          <h3 className="footer-title">Navigation</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>{l.label}</Link>
              </li>
            ))}
            <li><Link href={DEVIS_URL} className={linkCls}>Demande de devis</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="footer-title">Nos produits</h3>
          <ul className="space-y-2">
            {PRODUCT_FAMILIES.map((f) => (
              <li key={f.slug}>
                <Link href={`/produits/${f.slug}`} className={linkCls}>{f.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="footer-title">Horaires</h3>
          <dl className="space-y-2 text-sm">
            {SITE.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-dark-80 pb-2">
                <dt>{h.days}</dt>
                <dd className={h.time === "Fermé" ? "text-gray-500" : "text-white"}>{h.time}</dd>
              </div>
            ))}
          </dl>
          <h3 className="footer-title mt-8">Services</h3>
          <ul className="space-y-2">
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className={linkCls}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm text-orange-300 hover:text-white transition-colors">
                Tous nos services <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-80">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {SITE.name} — {SITE.tagline}</span>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
