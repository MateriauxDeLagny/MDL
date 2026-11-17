"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { PinIcon } from "@/components/Icons";

// La carte Google n'est chargée qu'à la demande du visiteur : aucun cookie Google
// n'est déposé sans action de sa part (RGPD), et la page reste légère.
export default function MapEmbed() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        title={`Localisation ${SITE.name}`}
        src={SITE.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 text-center px-4 bg-[repeating-linear-gradient(45deg,#EAE7E1_0_12px,#F4F2EE_12px_24px)]">
      <span className="w-14 h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-lg">
        <PinIcon className="w-7 h-7" />
      </span>
      <p className="font-heading text-dark text-lg uppercase tracking-wide">{SITE.address}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => setShow(true)} className="btn-primary">
          Afficher la carte
        </button>
        <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline bg-white">
          Itinéraire Google Maps
        </a>
      </div>
      <p className="text-xs text-gray-500 max-w-md">
        L&apos;affichage de la carte charge un service Google susceptible de déposer des cookies.
      </p>
    </div>
  );
}
