export type EmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail(payload: EmailPayload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Resend] RESEND_API_KEY non défini — email loggé en console (mode mock)");
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
        from: "Matériaux de Lagny <noreply@materiauxdelagny.com>",
        to: ["contact@materiauxdelagny.com"],
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
