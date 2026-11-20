import { NextRequest, NextResponse } from "next/server";
import { escapeHtml as e, field, isEmail, sendEmail } from "@/lib/email";

const row = (label: string, value: string, multiline = false) =>
  value
    ? `<tr><td style="font-weight:bold;color:#1A2235;vertical-align:top;">${label}</td><td${
        multiline ? ' style="white-space:pre-line;"' : ""
      }>${e(value)}</td></tr>`
    : "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Piège anti-spam : champ invisible pour un humain, rempli par les robots.
    if (field(body.website)) return NextResponse.json({ ok: true });

    const name = field(body.name, 120);
    const company = field(body.company, 160);
    const email = field(body.email, 200);
    const phone = field(body.phone, 40);
    const category = field(body.category, 120);
    const project = field(body.project, 300);
    const address = field(body.address, 200);
    const deadline = field(body.deadline, 120);
    const details = field(body.details, 5000);

    if (!name || !email || !phone || !category || !project) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;color:#1A2235;">Nouvelle demande de devis</h2>
      <table style="font-family:sans-serif;font-size:14px;color:#444;border-collapse:collapse;" cellpadding="8">
        ${row("Nom", name)}
        ${row("Société", company)}
        <tr><td style="font-weight:bold;color:#1A2235;">Email</td><td><a href="mailto:${e(email)}">${e(email)}</a></td></tr>
        ${row("Téléphone", phone)}
        ${row("Catégorie", category)}
        ${row("Projet", project)}
        ${row("Chantier", address)}
        ${row("Délai", deadline)}
        ${row("Détails", details, true)}
      </table>
    `;

    const subject = `[Devis] Demande de ${name}${company ? ` – ${company}` : ""} (${category})`.replace(/[\r\n]+/g, " ");
    const result = await sendEmail({ subject, html, replyTo: email });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
