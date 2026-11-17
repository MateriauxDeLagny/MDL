import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DevisForm from "@/components/DevisForm";
import InfosPratiques from "@/components/InfosPratiques";
import ServiceIcon from "@/components/ServiceIcon";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Devis gratuit, conseil technique, stock disponible, vente au comptoir, commandes spéciales et livraison sur chantier en Seine-et-Marne et Île-de-France.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <Image src="/images/livraison-big-bags.jpg" alt="" fill className="object-cover opacity-25" sizes="100vw" priority />
        <div className="relative container mx-auto py-14 lg:py-20">
          <nav className="text-xs text-gray-400 mb-4 font-heading uppercase tracking-wider flex items-center gap-2" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-300">Services</span>
          </nav>
          <h1 className="heading-xl text-white">Nos services</h1>
          <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            Un accompagnement complet, du devis à la livraison sur chantier, pour les professionnels du bâtiment comme pour les
            particuliers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#devis" className="btn-primary">Demande de devis gratuit</a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/60 text-white font-heading text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <nav className="bg-white border-b border-warm-border sticky top-[72px] lg:top-20 z-30" aria-label="Services">
        <div className="container mx-auto flex gap-1 overflow-x-auto py-2">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 px-3 py-2 font-heading text-xs uppercase tracking-wider text-gray-600 hover:text-orange rounded hover:bg-warm-white transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="section-padding bg-warm-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-40 flex flex-col bg-white border border-warm-border rounded p-7 lg:p-8 hover:border-orange/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-14 h-14 rounded bg-orange text-white flex items-center justify-center flex-shrink-0">
                  <ServiceIcon kind={s.icon} className="w-7 h-7" />
                </span>
                <div>
                  <span className="font-heading text-xs text-gray-400 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-heading text-dark text-2xl uppercase font-semibold leading-tight">{s.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-dark">
                    <CheckIcon className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Formulaire de devis */}
      <section id="devis" className="scroll-mt-32 section-padding bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow">Gratuit et sans engagement</p>
            <h2 className="heading-lg text-dark mb-4">Demande de devis</h2>
            <p className="text-gray-600 leading-relaxed">
              Décrivez votre projet ou listez les matériaux dont vous avez besoin : notre équipe vous recontacte avec une
              estimation personnalisée.
            </p>
            <div className="mt-6 p-5 bg-warm-white border border-warm-border rounded">
              <p className="text-sm text-gray-600">Vous préférez en parler ?</p>
              <a href={SITE.phoneHref} className="mt-1 flex items-center gap-2 font-heading text-2xl text-dark hover:text-orange transition-colors">
                <PhoneIcon className="w-5 h-5 text-orange" /> {SITE.phone}
              </a>
              <p className="text-xs text-gray-500 mt-1">{SITE.hoursShort}</p>
            </div>
          </div>
          <div className="lg:col-span-3 bg-warm-white border border-warm-border rounded p-6 lg:p-8">
            <DevisForm />
          </div>
        </div>
      </section>

      <InfosPratiques />
    </>
  );
}
