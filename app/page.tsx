import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import InfosPratiques from "@/components/InfosPratiques";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@/components/Icons";
import { PRODUCT_FAMILIES } from "@/lib/produits";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Matériaux de Lagny — Négoce de matériaux à Lagny-sur-Marne" },
  description:
    "Négoce de matériaux de construction à Lagny-sur-Marne (77). Gros œuvre, isolation, bois, enduits, revêtements. Devis gratuit, professionnels et particuliers, livraison Île-de-France.",
};

const HIGHLIGHTS = ["devis", "livraison", "stock", "conseil"] as const;

const SUPPLIERS_PREVIEW = ["Wienerberger", "PRB", "SEMIN", "URSA", "WÜRTH", "illbruck", "ACTIS", "Heidelberg Materials"];

export default function HomePage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: SITE.name,
    description: "Négoce de matériaux de construction à Lagny-sur-Marne",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue Freycinet",
      addressLocality: "Lagny-sur-Marne",
      postalCode: "77400",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:30",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "12:00" },
    ],
    sameAs: [SITE.facebook],
  };

  const highlights = HIGHLIGHTS.map((id) => SERVICES.find((s) => s.id === id)!);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      <HeroCarousel />

      {/* Engagements clés */}
      <section className="relative z-10 bg-warm-white pb-4">
        <div className="container mx-auto">
          <div className="-mt-14 lg:-mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-warm-border rounded shadow-lg divide-y sm:divide-y-0 sm:divide-x divide-warm-border">
            {highlights.map((s) => (
              <Link key={s.id} href={`/services#${s.id}`} className="group flex items-start gap-4 p-6 hover:bg-warm-white transition-colors">
                <span className="flex-shrink-0 w-12 h-12 rounded bg-orange/10 text-orange flex items-center justify-center">
                  <ServiceIcon kind={s.icon} className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-heading text-dark uppercase font-semibold tracking-wide group-hover:text-orange transition-colors">
                    {s.title}
                  </span>
                  <span className="block text-sm text-gray-500 leading-snug mt-1">{s.short}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-padding bg-warm-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Votre négoce à Lagny-sur-Marne</p>
            <h2 className="heading-lg text-dark mb-6">Tous vos matériaux de construction, du gros œuvre aux finitions</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Implanté à Lagny-sur-Marne depuis plusieurs décennies, <strong className="text-dark">Matériaux de Lagny</strong> est
                un négoce indépendant qui fournit les professionnels du bâtiment et les particuliers de Seine-et-Marne.
              </p>
              <p>
                Vente au comptoir, commandes spéciales et livraison sur chantier en Île-de-France : nous nous adaptons au rythme
                de vos travaux, avec des produits de marques reconnues et des conseils techniques adaptés à votre projet.
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {["Devis gratuit et personnalisé", "Livraison sur chantier 77 & IDF", "Stock disponible au dépôt", "Conseil par des professionnels"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-medium text-dark">
                    <CheckIcon className="w-4 h-4 text-orange flex-shrink-0" />
                    {t}
                  </li>
                )
              )}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/devis" className="btn-primary">
                Demande de devis gratuit
              </Link>
              <a href={SITE.phoneHref} className="btn-outline">
                <PhoneIcon className="w-4 h-4" />
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xl">
              <Image
                src="/images/livraison-sunset.jpg"
                alt="Le dépôt Matériaux de Lagny : parpaings, big bags et armatures en stock"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 grid grid-cols-2 bg-dark text-white rounded shadow-xl overflow-hidden">
              {[
                { value: "40+", label: "ans d'expérience" },
                { value: "6", label: "familles de produits" },
              ].map((s) => (
                <div key={s.label} className="p-4 border-r last:border-r-0 border-dark-80">
                  <div className="font-heading text-3xl text-orange-300 font-bold">{s.value}</div>
                  <div className="text-xs text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos produits */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="eyebrow">Catalogue</p>
              <h2 className="heading-lg text-dark">Nos produits</h2>
              <p className="text-gray-500 mt-3 leading-relaxed">
                L&apos;ensemble des matériaux nécessaires à vos chantiers de construction et de rénovation.
              </p>
            </div>
            <Link href="/produits" className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-orange hover:gap-3 transition-all">
              Tout le catalogue <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_FAMILIES.map((f) => (
              <Link
                key={f.slug}
                href={`/produits/${f.slug}`}
                className="group relative aspect-[4/3] rounded overflow-hidden bg-dark"
              >
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-white text-xl uppercase font-semibold">{f.name}</h3>
                  <p className="text-xs text-gray-300 mt-1">{f.subcategories.length} catégories</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-heading text-xs uppercase tracking-wider text-white bg-orange px-3 py-1.5 rounded">
                    Découvrir <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Livraison / services */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/livraison-camion.jpg" alt="" fill className="object-cover opacity-25" sizes="100vw" />
        </div>
        <div className="relative container mx-auto py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-orange-300">Nos services</p>
            <h2 className="heading-lg text-white mb-5">Du comptoir à votre chantier</h2>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Retrait au dépôt, commandes spéciales auprès de nos fournisseurs ou livraison directement sur chantier en
              Seine-et-Marne et en Île-de-France : choisissez la solution qui vous fait gagner du temps.
            </p>
            <Link href="/services" className="btn-primary mt-8">
              Découvrir nos services <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded backdrop-blur-sm hover:bg-white/10 hover:border-orange-300/60 transition-colors"
                >
                  <ServiceIcon kind={s.icon} className="w-6 h-6 text-orange-300 flex-shrink-0" />
                  <span className="font-heading uppercase tracking-wide text-sm">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fournisseurs */}
      <section className="py-12 bg-white border-b border-warm-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <p className="font-heading text-sm uppercase tracking-[0.15em] text-gray-500 lg:w-48 flex-shrink-0">
              Des marques reconnues
            </p>
            <div className="flex flex-wrap gap-3 flex-1">
              {SUPPLIERS_PREVIEW.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2.5 bg-warm-white border border-warm-border rounded font-heading text-sm text-gray-600 uppercase tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link href="/fournisseurs" className="inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:underline flex-shrink-0">
              Tous nos fournisseurs <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <InfosPratiques />

      {/* CTA devis */}
      <section className="bg-orange text-white">
        <div className="container mx-auto py-12 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl uppercase font-bold">Un projet, un chantier ?</h2>
            <p className="text-white/85 mt-2">Recevez un devis gratuit et personnalisé pour vos matériaux.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-orange font-heading text-sm uppercase tracking-wider font-semibold rounded hover:bg-warm-white transition-colors"
            >
              Demande de devis gratuit
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/70 text-white font-heading text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
