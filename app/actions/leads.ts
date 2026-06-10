"use server";

import { Resend } from "resend";

type LeadResult = { success: true } | { success: false; error: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitPortfolioLead(formData: FormData): Promise<LeadResult> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // 🔍 Debug: action triggered
  console.log("➡️ ACTION TRIGGERED MIT DATEN:", { name, email, company });
  console.log("🔑 SUPABASE_SERVICE_ROLE_KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 5) ?? "MISSING");
  console.log("🔑 RESEND_API_KEY:", process.env.RESEND_API_KEY?.slice(0, 5) ?? "MISSING");

  if (!name || !email || !message) {
    return { success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  if (message.length > 1000) {
    return { success: false, error: "Bitte kürzen Sie Ihr Anliegen auf max. 1000 Zeichen." };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("❌ Supabase env vars missing");
    return { success: false, error: "Serverkonfiguration unvollständig." };
  }

  // Step 1: Insert into Supabase
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/mothership_leads`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        email,
        company: company || null,
        phone: phone || null,
        message,
        company_id: "portfolio",
        type: "customer",
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("❌ Supabase insert failed", response.status, body);
      return { success: false, error: "Anfrage konnte nicht gespeichert werden." };
    }

    console.log("✅ Supabase insert OK");
  } catch (err) {
    console.error("❌ Supabase fetch error", err);
    return { success: false, error: "Datenbankfehler. Bitte versuchen Sie es erneut." };
  }

  // Step 2: Send notification email via Resend
  try {
    const { error: resendError } = await resend.emails.send({
      from: "Constantin-Felix Weib <team@constantin-felix.de>",
      to: "Constantin.Weib@hotmail.com",
      subject: "Neue Projektanfrage von der Website!",
      text: [
        "Neue Anfrage von der Website:",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Unternehmen: ${company || "-"}`,
        `Telefon: ${phone || "-"}`,
        "",
        "Anliegen:",
        message,
      ].join("\n"),
      html: `
        <h2>Neue Anfrage von der Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Unternehmen:</strong> ${company || "-"}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Anliegen:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (resendError) {
      console.error("❌ Resend error", resendError);
      // Lead is saved — don't fail the whole action over email
    } else {
      console.log("✅ Resend email sent");
    }
  } catch (err) {
    console.error("❌ Resend fetch error", err);
    // Same: lead is in DB, don't surface email errors to the user
  }

  return { success: true };
}
