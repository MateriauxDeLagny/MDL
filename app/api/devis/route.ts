import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, category, project, address, deadline, details } = await req.json();

    if (!name || !email || !phone || !category || !project) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;color:#1A2235;">Nouvelle demande de devis</h2>
      <table style="font-family:sans-serif;font-size:14px;color:#444;border-collapse:collapse;" cellpadding="8">
        <tr><td style="font-weight:bold;color:#1A2235;">Nom</td><td>${name}</td></tr>
        ${company ? `<tr><td style="font-weight:bold;color:#1A2235;">Société</td><td>${company}</td></tr>` : ""}
        <tr><td style="font-weight:bold;color:#1A2235;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="font-weight:bold;color:#1A2235;">Téléphone</td><td>${phone}</td></tr>
        <tr><td style="font-weight:bold;color:#1A2235;">Catégorie</td><td>${category}</td></tr>
        <tr><td style="font-weight:bold;color:#1A2235;">Projet</td><td>${project}</td></tr>
        ${address ? `<tr><td style="font-weight:bold;color:#1A2235;">Chantier</td><td>${address}</td></tr>` : ""}
        ${deadline ? `<tr><td style="font-weight:bold;color:#1A2235;">Délai</td><td>${deadline}</td></tr>` : ""}
        ${details ? `<tr><td style="font-weight:bold;color:#1A2235;vertical-align:top;">Détails</td><td style="white-space:pre-line;">${details}</td></tr>` : ""}
      </table>
    `;

    const result = await sendEmail({
      subject: `[Devis] Demande de ${name}${company ? ` – ${company}` : ""} (${category})`,
      html,
      replyTo: email,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
