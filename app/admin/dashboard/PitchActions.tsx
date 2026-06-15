"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

type PitchActionsProps = {
  pitch: string | null;
  email: string | null;
  company: string | null;
};

const SUBJECT = "Kurzes Feedback zu Ihrer Website";

/** Copy-to-Clipboard und mailto-Button für die Pitch-E-Mail. */
export default function PitchActions({ pitch, email, company }: PitchActionsProps) {
  const [copied, setCopied] = useState(false);

  if (!pitch) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pitch);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard nicht verfügbar – still ignorieren
    }
  };

  const subject = company ? `${SUBJECT} (${company})` : SUBJECT;
  const mailtoHref = `mailto:${email ?? ""}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(pitch)}`;

  return (
    <div className="mt-2 flex items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Pitch kopieren"
        className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 transition hover:border-white/30 hover:text-white"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 text-emerald-300" /> Kopiert
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" /> Kopieren
          </>
        )}
      </button>

      <a
        href={mailtoHref}
        aria-label="E-Mail verfassen"
        className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 transition hover:border-white/30 hover:text-white"
      >
        <Mail className="h-3 w-3" /> Mail
      </a>
    </div>
  );
}
