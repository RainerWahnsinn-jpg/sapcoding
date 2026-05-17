"use server";

import { Resend } from "resend";

type SendEmailResult =
  | { success: true }
  | { error: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { error: "Bitte fülle alle Pflichtfelder aus." };
  }

  if (message.length > 1000) {
    return { error: "Bitte kürze dein Anliegen auf max. 1000 Zeichen." };
  }

  const subject = "Neue Projektanfrage von der Website!";
  const plainText = [
    "Neue Anfrage von der Website:",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Unternehmen: ${company || "-"}`,
    "",
    "Anliegen:",
    message,
  ].join("\n");

  const html = `
    <h2>Neue Anfrage von der Website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>E-Mail:</strong> ${email}</p>
    <p><strong>Unternehmen:</strong> ${company || "-"}</p>
    <p><strong>Anliegen:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "Constantin.Weib@hotmail.com",
      subject,
      text: plainText,
      html,
    });

    if (error) {
      return { error: error.message || "E-Mail konnte nicht gesendet werden." };
    }

    return { success: true };
  } catch (error) {
    console.error("Resend send failed", error);
    return { error: "Senden fehlgeschlagen. Bitte später erneut versuchen." };
  }
}
