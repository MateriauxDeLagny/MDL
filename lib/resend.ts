import { SITE } from "@/lib/constants";

export type EmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

/** Échappe le HTML : toute saisie visiteur doit passer par ici avant d'entrer dans un email. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Nettoie une valeur de formulaire : chaîne, sans espaces superflus, longueur bornée. */
export function field(value: unknown, max = 200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function sendEmail(payload: EmailPayload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // En production, ne jamais faire croire au visiteur que sa demande est partie.
    if (process.env.NODE_ENV === "production") {
      console.error("[Resend] RESEND_API_KEY manquante : email NON envoyé", payload.subject);
      return { ok: false, error: "Service d'envoi indisponible" };
    }
    console.warn("[Resend] RESEND_API_KEY non définie — email affiché en console (mode développement)");
    console.log("[Resend MOCK]", payload);
    return { ok: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `${SITE.name} <noreply@materiauxdelagny.com>`,
        to: [SITE.email],
        reply_to: payload.replyTo,
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[Resend] Erreur:", err);
      return { ok: false, error: "Erreur d'envoi" };
    }

    return { ok: true };
  } catch (e) {
    console.error("[Resend]", e);
    return { ok: false, error: "Erreur réseau" };
  }
}
