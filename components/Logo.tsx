type Props = {
  theme?: "light" | "dark";
  className?: string;
};

const RED = "#C8202A";
const NAVY = "#1B2A6B";

export default function Logo({ theme = "dark", className = "" }: Props) {
  const textColor = theme === "dark" ? "#FFFFFF" : NAVY;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Maison SVG */}
      <svg
        viewBox="0 0 44 50"
        className="h-11 w-auto flex-shrink-0"
        fill="none"
        aria-hidden="true"
      >
        {/* Toit */}
        <polyline
          points="2,23 22,4 42,23"
          stroke={RED}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Mur gauche */}
        <line x1="5" y1="22" x2="5" y2="46" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        {/* Mur droit */}
        <line x1="39" y1="22" x2="39" y2="46" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        {/* Soubassement */}
        <line x1="5" y1="46" x2="39" y2="46" stroke={RED} strokeWidth="3" strokeLinecap="round" />
        {/* Rangée de briques (ligne h) */}
        <line x1="5" y1="36" x2="39" y2="36" stroke={RED} strokeWidth="2" />
        {/* Joint vertical milieu brique haute */}
        <line x1="22" y1="36" x2="22" y2="46" stroke={RED} strokeWidth="1.5" />
        {/* Joints verticaux rangée basse */}
        <line x1="13.5" y1="36" x2="13.5" y2="46" stroke={RED} strokeWidth="1" />
        <line x1="30.5" y1="36" x2="30.5" y2="46" stroke={RED} strokeWidth="1" />
      </svg>

      {/* Texte */}
      <div className="leading-none select-none">
        <div
          className="font-heading font-bold tracking-[0.14em] uppercase"
          style={{ color: textColor, fontSize: "1.05rem", letterSpacing: "0.14em" }}
        >
          MATÉRIAUX
        </div>
        <div
          className="font-heading font-bold tracking-[0.14em] uppercase flex items-center"
          style={{ color: textColor, fontSize: "1.05rem", gap: "0.3em" }}
        >
          <span>DE</span>
          {/* Briques entre DE et LAGNY */}
          <span className="flex flex-col" style={{ gap: "2px", margin: "0 1px" }}>
            <span style={{ display: "block", width: "18px", height: "2.5px", backgroundColor: RED }} />
            <span style={{ display: "block", width: "18px", height: "2.5px", backgroundColor: RED }} />
            <span style={{ display: "block", width: "18px", height: "2.5px", backgroundColor: RED }} />
          </span>
          <span>LAGNY</span>
        </div>
      </div>
    </div>
  );
}
