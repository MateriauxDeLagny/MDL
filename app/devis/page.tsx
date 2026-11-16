import type { Metadata } from "next";
import Link from "next/link";
import DevisForm from "@/components/DevisForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Demande de devis",
  description:
    "Faites votre demande de devis en ligne. Matériaux de Lagny vous répond rapidement pour tous vos besoins en matériaux de construction.",
};

export default function DevisPage() {
  return (
    <>
      <section className="bg-dark text-white py-12">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-500 mb-4 font-heading uppercase tracking-wider flex items-center gap-2">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-400">Devis</span>
          </nav>
          <h1 className="heading-xl text-white">Demande de devis</h1>
          <p className="text-gray-300 mt-3 max-w-xl text-sm leading-relaxed">
            Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement avec une estimation adaptée à votre projet.
          </p>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-warm-border rounded p-6 lg:p-8">
                <h2 className="font-heading text-dark text-xl uppercase font-semibold mb-6">Votre demande</h2>
                <DevisForm />
              </div>
            </div>

            {/* Sidebar contact */}
            <div className="space-y-5">
              <div className="bg-dark text-white rounded p-6">
                <h3 className="font-heading text-white text-base uppercase font-semibold mb-4">Contact direct</h3>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li>
                    <a href={SITE.phoneHref} className="flex items-start gap-3 hover:text-orange transition-colors group">
                      <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <div className="font-medium text-white">{SITE.phone}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{SITE.hoursShort}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-orange transition-colors break-all">
                      <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{SITE.email}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{SITE.address}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange/10 border border-orange/30 rounded p-5">
                <p className="font-heading text-orange text-xs uppercase tracking-wider mb-2">Bon à savoir</p>
                <p className="text-sm text-dark leading-relaxed">
                  Vous pouvez également passer au comptoir avec vos plans ou métrés : notre équipe établit un devis sur place, sans rendez-vous.
                </p>
              </div>

              <div className="bg-white border border-warm-border rounded p-5">
                <h4 className="font-heading text-dark text-sm uppercase font-medium mb-3">Horaires d'ouverture</h4>
                <ul className="space-y-1">
                  {SITE.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-sm">
                      <span className="text-gray-600">{h.days}</span>
                      <span className={h.time === "Fermé" ? "text-gray-400" : "text-dark font-medium"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
