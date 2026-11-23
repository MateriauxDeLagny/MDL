import nodemailer from "nodemailer";
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

/**
 * Envoi via le serveur SMTP d'OVH Exchange, avec la boîte contact@materiauxdelagny.com.
 * Variables d'environnement (Netlify) :
 *   SMTP_USER     — adresse complète de la boîte d'envoi (contact@materiauxdelagny.com)
 *   SMTP_PASSWORD — mot de passe de cette boîte
 *   SMTP_HOST     — optionnel, ex2.mail.ovh.net (OVH Exchange) par défaut
 * L'expéditeur est forcément la boîte authentifiée (OVH refuse sinon).
 */
export async function sendEmail(payload: EmailPayload): Promise<{ ok: boolean; error?: string }> {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    // En production, ne jamais faire croire au visiteur que sa demande est partie.
    if (process.env.NODE_ENV === "production") {
      console.error("[Email] SMTP_USER / SMTP_PASSWORD manquants : email NON envoyé", payload.subject);
      return { ok: false, error: "Service d'envoi indisponible" };
    }
    console.warn("[Email] SMTP non configuré — email affiché en console (mode développement)");
    console.log("[Email MOCK]", payload);
    return { ok: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "ex2.mail.ovh.net",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: { name: SITE.name, address: user },
      to: SITE.leadsEmail,
      replyTo: payload.replyTo,
      subject: payload.subject,
      html: payload.html,
    });

    return { ok: true };
  } catch (e) {
    console.error("[Email]", e);
    return { ok: false, error: "Erreur d'envoi" };
  }
}
