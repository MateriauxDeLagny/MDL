import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DevisForm from "@/components/DevisForm";
import InfosPratiques from "@/components/InfosPratiques";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowIcon, CheckIcon, ClockIcon, PhoneIcon, TruckIcon, UsersIcon } from "@/components/Icons";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Devis gratuit, conseil technique, stock disponible, vente au comptoir, commandes spéciales et livraison sur chantier en Seine-et-Marne et Île-de-France. Matériaux de Lagny, Lagny-sur-Marne.",
};

const STEPS = [
  {
    title: "Votre demande",
    text: "Envoyez votre liste de matériaux ou décrivez votre projet : en ligne, par téléphone ou directement au comptoir.",
  },
  {
    title: "Votre devis",
    text: "Nous établissons un chiffrage personnalisé, adapté à vos quantités et à votre calendrier. Gratuit et sans engagement.",
  },
  {
    title: "Retrait ou livraison",
    text: "Retirez vos matériaux au dépôt aux heures d'ouverture, ou faites-les livrer sur votre chantier en Seine-et-Marne et en Île-de-France.",
  },
];

const AUDIENCES = [
  {
    title: "Professionnels du bâtiment",
    icon: TruckIcon,
    intro: "Artisans, entreprises de maçonnerie, plâtrerie, rénovation…",
    points: [
      "Chiffrage de vos chantiers sur devis",
      "Livraison sur chantier en 77 et Île-de-France",
      "Commandes spéciales auprès de nos fournisseurs",
      "Ouverture du comptoir dès 7h30 en semaine",
    ],
  },
  {
    title: "Particuliers",
    icon: UsersIcon,
    intro: "Construction, extension, rénovation ou aménagement extérieur.",
    points: [
      "Conseils pour choisir les bons matériaux",
      "Devis gratuit, même pour les petites quantités",
      "Vente au comptoir, y compris le samedi matin",
      "Livraison possible sur votre chantier",
    ],
  },
];

const FAQ = [
  {
    q: "Êtes-vous ouverts aux particuliers ?",
    a: "Oui. Matériaux de Lagny accueille aussi bien les professionnels du bâtiment que les particuliers, au comptoir comme sur devis.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire de cette page, appelez-nous ou passez au comptoir. Le devis est gratuit et sans engagement.",
  },
  {
    q: "Livrez-vous sur les chantiers ?",
    a: "Oui, nous livrons en Seine-et-Marne et dans toute l'Île-de-France. Les modalités (délai, accès au chantier, déchargement) sont précisées avec votre devis.",
  },
  {
    q: "Pouvez-vous commander un produit que vous n'avez pas en stock ?",
    a: "Oui. Si une référence ou une marque n'est pas en stock, nous étudions la commande spéciale auprès de nos fournisseurs.",
  },
  {
    q: "Quels sont vos horaires d'ouverture ?",
    a: `Du lundi au vendredi de 7h30 à 17h30 et le samedi de 8h à 12h. Le dépôt est fermé le dimanche.`,
  },
  {
    q: "Quelles marques distribuez-vous ?",
    a: "Wienerberger, Heidelberg Materials, PRB, Semin, URSA, Actis, illbruck, Würth, I.N.G Fixations et bien d'autres : retrouvez-les sur notre page Fournisseurs.",
  },
];

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* En-tête */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image src="/images/livraison-camion.jpg" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="relative container mx-auto py-10 lg:py-14 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <nav className="text-xs text-gray-400 mb-3 font-heading uppercase tracking-wider flex items-center gap-2" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-gray-300">Services</span>
            </nav>
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold uppercase tracking-wide">Nos services</h1>
            <p className="text-gray-200 mt-3 max-w-2xl leading-relaxed">
              Du devis à la livraison sur chantier : un interlocuteur unique pour vos matériaux, que vous soyez artisan ou
              particulier.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#devis" className="btn-primary">Demande de devis gratuit</a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/60 text-white font-heading text-sm uppercase tracking-wider rounded hover:bg-white/10 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <ul className="grid sm:grid-cols-3 lg:grid-cols-1 gap-2 text-sm">
            {[
              { icon: UsersIcon, t: "Professionnels & particuliers" },
              { icon: TruckIcon, t: "Livraison 77 & Île-de-France" },
              { icon: ClockIcon, t: "Comptoir ouvert dès 7h30" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/15 rounded backdrop-blur-sm">
                <Icon className="w-5 h-5 text-orange-300 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sommaire */}
      <nav className="bg-white border-b border-warm-border sticky top-[72px] lg:top-20 z-30" aria-label="Services">
        <div className="container mx-auto flex gap-1 overflow-x-auto py-2">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 flex items-center gap-2 px-3 py-2 font-heading text-xs uppercase tracking-wider text-gray-600 hover:text-orange rounded hover:bg-warm-white transition-colors"
            >
              <ServiceIcon kind={s.icon} className="w-4 h-4" />
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Comment ça marche */}
      <section className="py-14 lg:py-20 bg-warm-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow">Simple et rapide</p>
            <h2 className="heading-lg text-dark">Comment ça marche</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative bg-white border border-warm-border rounded p-6 lg:p-7">
                <span className="font-heading text-6xl font-bold text-orange/15 absolute top-3 right-5 select-none" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="inline-flex w-10 h-10 rounded-full bg-orange text-white font-heading text-lg items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-heading text-dark text-xl uppercase font-semibold mt-4">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">Ce que nous faisons pour vous</p>
            <h2 className="heading-lg text-dark">Six services, un seul interlocuteur</h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {SERVICES.map((s, i) => {
              const external = s.cta.href.startsWith("/");
              const Cta = external ? Link : "a";
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-40 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                  <div className={`relative aspect-[4/3] rounded overflow-hidden shadow-lg ${i % 2 ? "lg:order-2" : ""}`}>
                    <Image src={s.image} alt={s.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <span className="absolute top-4 left-4 w-14 h-14 rounded bg-orange text-white flex items-center justify-center shadow-lg">
                      <ServiceIcon kind={s.icon} className="w-7 h-7" />
                    </span>
                  </div>
                  <div>
                    <span className="font-heading text-sm text-orange tracking-[0.2em]">{String(i + 1).padStart(2, "0")} / 06</span>
                    <h3 className="font-heading text-dark text-3xl lg:text-4xl uppercase font-semibold leading-tight mt-2">{s.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mt-4">{s.description}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-dark">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
                            <CheckIcon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Cta href={s.cta.href} className="btn-outline mt-8">
                      {s.cta.label} <ArrowIcon className="w-4 h-4" />
                    </Cta>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pros / particuliers */}
      <section className="py-14 lg:py-20 bg-dark text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow text-orange-300">Pour qui ?</p>
            <h2 className="heading-lg text-white">Un accompagnement adapté à chacun</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {AUDIENCES.map(({ title, icon: Icon, intro, points }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded p-7 lg:p-8">
                <Icon className="w-9 h-9 text-orange-300" />
                <h3 className="font-heading text-2xl uppercase font-semibold mt-4">{title}</h3>
                <p className="text-gray-300 text-sm mt-1">{intro}</p>
                <ul className="mt-5 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-warm-white">
        <div className="container mx-auto grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="heading-lg text-dark">Vos questions</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">Une autre question ? Notre équipe vous répond au comptoir ou par téléphone.</p>
            <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-2 font-heading text-xl text-dark hover:text-orange transition-colors">
              <PhoneIcon className="w-5 h-5 text-orange" /> {SITE.phone}
            </a>
          </div>
          <div className="divide-y divide-warm-border border-y border-warm-border">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading text-dark text-lg uppercase tracking-wide [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-warm-border flex items-center justify-center text-orange transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3 pr-12">
                  {f.a}
                  {f.q.startsWith("Quelles marques") && (
                    <>
                      {" "}
                      <Link href="/fournisseurs" className="text-orange hover:underline">Voir les fournisseurs</Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de devis */}
      <section id="devis" className="scroll-mt-32 py-14 lg:py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow">Gratuit et sans engagement</p>
            <h2 className="heading-lg text-dark mb-4">Demande de devis</h2>
            <p className="text-gray-600 leading-relaxed">
              Décrivez votre projet ou listez les matériaux dont vous avez besoin : notre équipe vous recontacte avec une
              estimation personnalisée.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Chiffrage personnalisé", "Retrait au dépôt ou livraison sur chantier", "Conseil sur les produits adaptés"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-dark">
                  <CheckIcon className="w-4 h-4 text-orange" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-warm-white border border-warm-border rounded">
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
