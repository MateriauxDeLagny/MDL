import Link from "next/link";
import { SITE } from "@/lib/constants";
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, UsersIcon } from "@/components/Icons";

export default function InfosPratiques({ id = "infos-pratiques" }: { id?: string }) {
  return (
    <section id={id} className="section-padding bg-warm-white border-t border-warm-border">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow">Venir au dépôt</p>
          <h2 className="heading-lg text-dark">Informations pratiques</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="info-card">
            <PinIcon className="w-7 h-7 text-orange mb-4" />
            <h3 className="info-title">Accès</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{SITE.address}</p>
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:underline"
            >
              Itinéraire Google Maps <ArrowIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="info-card">
            <ClockIcon className="w-7 h-7 text-orange mb-4" />
            <h3 className="info-title">Horaires</h3>
            <dl className="text-sm space-y-1.5">
              {SITE.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-3">
                  <dt className="text-gray-600">{h.days}</dt>
                  <dd className={`font-medium ${h.time === "Fermé" ? "text-gray-400" : "text-dark"}`}>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="info-card">
            <PhoneIcon className="w-7 h-7 text-orange mb-4" />
            <h3 className="info-title">Nous joindre</h3>
            <a href={SITE.phoneHref} className="font-heading text-xl text-dark hover:text-orange transition-colors">
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange"
            >
              <MailIcon className="w-4 h-4 flex-shrink-0" />
              Nous écrire par email
            </a>
            <Link
              href="/contact"
              className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:underline"
            >
              Formulaire de contact <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="info-card">
            <UsersIcon className="w-7 h-7 text-orange mb-4" />
            <h3 className="info-title">Pour qui ?</h3>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li>Artisans et entreprises du bâtiment</li>
              <li>Particuliers et auto-constructeurs</li>
            </ul>
            <Link
              href="/devis"
              className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:underline"
            >
              Demander un devis <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
