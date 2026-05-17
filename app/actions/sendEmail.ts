"use server";

import { Resend } from "resend";

type SendEmailResult = {
  ok: boolean;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Bitte fülle alle Pflichtfelder aus." };
  }

  if (message.length > 1000) {
    return { ok: false, error: "Bitte kürze dein Anliegen auf max. 1000 Zeichen." };
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>",
      to: "constantin.weib@hotmail.com",
      subject: "Neue Projektanfrage",
      text: [
        "Neue Anfrage von der Website:",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Unternehmen: ${company || "-"}`,
        "",
        "Anliegen:",
        message,
      ].join("\n"),
    });

    return { ok: true };
  } catch (error) {
    console.error("Resend send failed", error);
    return { ok: false, error: "Senden fehlgeschlagen. Bitte später erneut versuchen." };
  }
}
