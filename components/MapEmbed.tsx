import { SITE } from "@/lib/constants";
import { ArrowIcon, PinIcon } from "@/components/Icons";

// Carte OpenStreetMap affichée d'office : pas de cookie de traçage, donc pas de
// consentement préalable nécessaire (contrairement à Google Maps).
const { lat, lon } = SITE.geo;
const d = { lat: 0.004, lon: 0.009 };
const bbox = [lon - d.lon, lat - d.lat, lon + d.lon, lat + d.lat].join(",");
const EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
const FULL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`;

export default function MapEmbed() {
  return (
    <div className="relative h-full w-full">
      <iframe
        title={`Plan d'accès — ${SITE.name}`}
        src={EMBED}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 max-w-[calc(100%-2rem)] bg-white rounded shadow-xl border border-warm-border p-4 sm:p-5">
        <p className="flex items-start gap-2 font-heading text-dark uppercase tracking-wide">
          <PinIcon className="w-5 h-5 text-orange flex-shrink-0" />
          {SITE.name}
        </p>
        <p className="text-sm text-gray-600 mt-1 ml-7">{SITE.address}</p>
        <div className="mt-3 ml-7 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-4 !text-xs">
            Itinéraire <ArrowIcon className="w-3.5 h-3.5" />
          </a>
          <a href={FULL} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-orange underline">
            Agrandir la carte
          </a>
        </div>
      </div>
    </div>
  );
}
