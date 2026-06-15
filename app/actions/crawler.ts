"use server";

import * as cheerio from "cheerio";
import Anthropic from "@anthropic-ai/sdk";
import { createSupabaseServerClient } from "../lib/supabase/server";

export type CrawlerResult =
  | { success: true }
  | { success: false; error: string };

const URL_RE = /^https?:\/\/.+\..+/i;

const SYSTEM_PROMPT =
  "Du bist ein erfahrener B2B-Webdesign- und Performance-Experte. Analysiere den Text dieser Firmenwebsite aus der Region Siegen-Wittgenstein. Finde 2-3 konkrete, charmante Schwachstellen (z.B. veraltetes Design, fehlender moderner Bot-Schutz/CAPTCHA, Schwächen in der Kundenansprache). Schreibe darauf basierend eine extrem sympathische, personalisierte, absolut ungezwungene Pitch-E-Mail im lockeren 'Du'- oder professionellen 'Sie'-Stil (je nach Website-Tonalität) von Constantin, in der du Mehrwert bietest.";

type ExtractedSite = {
  company: string | null;
  email: string | null;
  phone: string | null;
  text: string;
};

/** Lädt die Website und extrahiert Text, Firmenname und Kontaktdaten. */
async function fetchAndExtract(url: string): Promise<ExtractedSite> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; LeadResearchBot/1.0; +https://www.constantin-felix.de)",
    },
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  // Störendes entfernen
  $("script, style, noscript, svg").remove();

  const company =
    $('meta[property="og:site_name"]').attr("content")?.trim() ||
    $("title").first().text().trim() ||
    null;

  const bodyText = $("body").text().replace(/\s+/g, " ").trim();

  // Kontaktdaten extrahieren
  const emailMatch = html.match(
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
  );
  const phoneMatch = bodyText.match(
    /(?:\+49|0)[\s\d()/-]{6,}\d/,
  );

  return {
    company,
    email: emailMatch?.[0] ?? null,
    phone: phoneMatch?.[0]?.trim() ?? null,
    // Auf einen sinnvollen Umfang begrenzen (Token-Budget schonen)
    text: bodyText.slice(0, 8000),
  };
}

type ClaudeAnalysis = {
  weaknesses: string;
  pitchEmail: string;
};

/** Schickt den Website-Text an Claude und trennt Schwachstellen + Pitch-Mail. */
async function analyzeWithClaude(
  site: ExtractedSite,
  url: string,
): Promise<ClaudeAnalysis> {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 1500,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Firmenwebsite: ${url}\nFirma: ${site.company ?? "unbekannt"}\n\nWebsite-Text:\n${site.text}\n\nBitte antworte exakt in folgendem Format:\n\nSCHWACHSTELLEN:\n- <Punkt 1>\n- <Punkt 2>\n- <Punkt 3>\n\nPITCH-EMAIL:\n<vollständige E-Mail>`,
      },
    ],
  });

  const responseText = message.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  // Antwort in die zwei Teile aufsplitten
  const pitchSplit = responseText.split(/PITCH-?E-?MAIL:/i);
  const weaknesses = pitchSplit[0]
    .replace(/SCHWACHSTELLEN:/i, "")
    .trim();
  const pitchEmail = (pitchSplit[1] ?? "").trim();

  return {
    weaknesses: weaknesses || responseText.trim(),
    pitchEmail: pitchEmail || "",
  };
}

/**
 * Generiert einen Lead aus einer Firmen-URL:
 * 1. Website crawlen & Kontaktdaten extrahieren
 * 2. Mit Claude analysieren (Schwachstellen + Pitch-Mail)
 * 3. In Supabase-Tabelle `leads` speichern.
 *
 * Geschützt: erfordert eine eingeloggte Supabase-Session.
 */
export async function generateLead(formData: FormData): Promise<CrawlerResult> {
  const rawUrl = String(formData.get("url") || "").trim();

  if (!rawUrl || !URL_RE.test(rawUrl)) {
    return { success: false, error: "Bitte geben Sie eine gültige URL ein (inkl. https://)." };
  }

  const supabase = await createSupabaseServerClient();

  // Auth-Check (zusätzlich zum Proxy)
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { success: false, error: "Nicht autorisiert." };
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return { success: false, error: "ANTHROPIC_API_KEY fehlt in der Serverkonfiguration." };
  }

  // Schritt A: Crawlen
  let site: ExtractedSite;
  try {
    site = await fetchAndExtract(rawUrl);
  } catch (err) {
    console.error("Crawl error", err);
    return { success: false, error: "Website konnte nicht abgerufen werden." };
  }

  // Schritt B: Claude-Analyse
  let analysis: ClaudeAnalysis;
  try {
    analysis = await analyzeWithClaude(site, rawUrl);
  } catch (err) {
    console.error("Claude error", err);
    return { success: false, error: "KI-Analyse fehlgeschlagen." };
  }

  // Schritt C: In Supabase speichern
  const { error: insertError } = await supabase.from("leads").insert({
    company_name: site.company,
    website: rawUrl,
    phone: site.phone,
    email: site.email,
    vulnerabilities: analysis.weaknesses,
    pitch_email: analysis.pitchEmail,
    status: "neu",
  });

  if (insertError) {
    console.error("Supabase insert error", insertError);
    return { success: false, error: "Lead konnte nicht gespeichert werden." };
  }

  return { success: true };
}
