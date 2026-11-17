import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Matériaux de Lagny : téléphone, email, formulaire. 17 rue Freycinet, 77400 Lagny-sur-Marne. Ouvert du lundi au vendredi 7h30–17h30, samedi 8h–12h.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark text-white py-12">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-500 mb-4 font-heading uppercase tracking-wider flex items-center gap-2">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-400">Contact</span>
          </nav>
          <h1 className="heading-xl text-white">Contact</h1>
          <p className="text-gray-300 mt-3 max-w-xl text-sm leading-relaxed">
            Une question, un besoin, une demande de renseignement ? Notre équipe est disponible au comptoir, par téléphone ou par email.
          </p>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-warm-border rounded p-6 lg:p-8">
                <h2 className="font-heading text-dark text-xl uppercase font-semibold mb-6">Envoyer un message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Infos */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white border border-warm-border rounded p-6">
                <h3 className="font-heading text-dark text-sm uppercase font-medium mb-4 tracking-wider">Coordonnées</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href={SITE.phoneHref} className="flex items-start gap-3 hover:text-orange transition-colors group">
                      <div className="w-8 h-8 bg-orange/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-dark group-hover:text-orange">{SITE.phone}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{SITE.hoursShort}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-orange transition-colors group break-all">
                      <div className="w-8 h-8 bg-orange/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-dark group-hover:text-orange">{SITE.email}</div>
                        <div className="text-gray-400 text-xs mt-0.5">Réponse sous 24h ouvrées</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-dark">{SITE.address}</div>
                        <a
                          href="https://www.google.com/maps/search/17+rue+Freycinet+Lagny-sur-Marne"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange text-xs hover:underline mt-0.5 inline-block"
                        >
                          Voir sur Google Maps →
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-orange transition-colors group"
                    >
                      <div className="w-8 h-8 bg-orange/10 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div className="font-medium text-dark group-hover:text-orange">Facebook</div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-warm-border rounded p-6">
                <h3 className="font-heading text-dark text-sm uppercase font-medium mb-4 tracking-wider">Horaires d'ouverture</h3>
                <ul className="space-y-2">
                  {SITE.hours.map((h) => (
                    <li key={h.days} className="flex justify-between text-sm">
                      <span className="text-gray-600">{h.days}</span>
                      <span className={h.time === "Fermé" ? "text-gray-400" : "text-dark font-semibold"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-72 lg:h-96 bg-warm-100">
        <MapEmbed />
      </section>
    </>
  );
}
