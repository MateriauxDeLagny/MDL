import { NextRequest, NextResponse } from "next/server";
import { escapeHtml as e, field, isEmail, sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Piège anti-spam : champ invisible pour un humain, rempli par les robots.
    if (field(body.website)) return NextResponse.json({ ok: true });

    const name = field(body.name, 120);
    const email = field(body.email, 200);
    const phone = field(body.phone, 40);
    const message = field(body.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;color:#1A2235;">Nouveau message de contact</h2>
      <table style="font-family:sans-serif;font-size:14px;color:#444;border-collapse:collapse;" cellpadding="8">
        <tr><td style="font-weight:bold;color:#1A2235;">Nom</td><td>${e(name)}</td></tr>
        <tr><td style="font-weight:bold;color:#1A2235;">Email</td><td><a href="mailto:${e(email)}">${e(email)}</a></td></tr>
        ${phone ? `<tr><td style="font-weight:bold;color:#1A2235;">Téléphone</td><td>${e(phone)}</td></tr>` : ""}
        <tr><td style="font-weight:bold;color:#1A2235;vertical-align:top;">Message</td><td style="white-space:pre-line;">${e(message)}</td></tr>
      </table>
    `;

    const result = await sendEmail({
      subject: `[Contact] Message de ${name.replace(/[\r\n]+/g, " ")}`,
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
