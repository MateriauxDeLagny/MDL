import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:sans-serif;color:#1A2235;">Nouveau message de contact</h2>
      <table style="font-family:sans-serif;font-size:14px;color:#444;border-collapse:collapse;" cellpadding="8">
        <tr><td style="font-weight:bold;color:#1A2235;">Nom</td><td>${name}</td></tr>
        <tr><td style="font-weight:bold;color:#1A2235;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><td style="font-weight:bold;color:#1A2235;">Téléphone</td><td>${phone}</td></tr>` : ""}
        <tr><td style="font-weight:bold;color:#1A2235;vertical-align:top;">Message</td><td style="white-space:pre-line;">${message}</td></tr>
      </table>
    `;

    const result = await sendEmail({
      subject: `[Contact] Message de ${name}`,
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
