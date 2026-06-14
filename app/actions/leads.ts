"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

type LeadResult = { success: true } | { success: false; error: string };

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Simple in-memory rate limiter (per server instance) ──────────── */
const rateMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 3; // max submissions per window

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_MAX) return true;
  timestamps.push(now);
  rateMap.set(key, timestamps);
  return false;
}

/** Escape HTML special characters to prevent injection */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

async function verifyTurnstileToken(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("❌ TURNSTILE_SECRET_KEY missing");
    return false;
  }

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data: TurnstileVerifyResponse = await res.json();
    return data.success;
  } catch (err) {
    console.error("❌ Turnstile verify error", err);
    return false;
  }
}

export async function submitPortfolioLead(formData: FormData): Promise<LeadResult> {
  // Honeypot – if filled, it's a bot
  const honeypot = String(formData.get("website") || "").trim();
  if (honeypot) {
    // Silently accept to not reveal the trap
    return { success: true };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const turnstileToken = String(formData.get("cf-turnstile-response") || "").trim();

  // Rate limit by IP
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return { success: false, error: "Zu viele Anfragen. Bitte warten Sie eine Minute." };
  }

  // Verify Cloudflare Turnstile CAPTCHA
  if (!turnstileToken) {
    return { success: false, error: "CAPTCHA-Verifizierung fehlt. Bitte versuchen Sie es erneut." };
  }
  const turnstileOk = await verifyTurnstileToken(turnstileToken, ip);
  if (!turnstileOk) {
    return { success: false, error: "CAPTCHA-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut." };
  }

  if (!name || !email || !message) {
    return { success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  if (!EMAIL_RE.test(email)) {
    return { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  }

  if (name.length > 200 || company.length > 200 || phone.length > 50) {
    return { success: false, error: "Eingabe zu lang." };
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
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Unternehmen:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Anliegen:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (resendError) {
      console.error("❌ Resend error", resendError);
      // Lead is saved — don't fail the whole action over email
    }
  } catch (err) {
    console.error("❌ Resend fetch error", err);
    // Same: lead is in DB, don't surface email errors to the user
  }

  return { success: true };
}
