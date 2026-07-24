"use client";

import { useRef, useState, useTransition } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitPortfolioLead } from "../actions/leads";

const fieldClass =
  "min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/[0.06] focus:shadow-[0_0_24px_rgba(34,211,238,0.12)]";
const wrapperClass =
  "block space-y-2 text-sm text-white/60 transition-colors duration-300 focus-within:text-white/90 [&:focus-within_input]:border-violet-400/60 [&:focus-within_input]:shadow-[0_0_28px_rgba(124,58,237,0.18)] [&:focus-within_textarea]:border-violet-400/60 [&:focus-within_textarea]:shadow-[0_0_28px_rgba(124,58,237,0.18)]";

type Interest = "" | "abap" | "formulare" | "schnittstellen" | "sonstiges";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, startTransition] = useTransition();
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [interest, setInterest] = useState<Interest>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!turnstileToken) {
      toast.error("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("cf-turnstile-response", turnstileToken);

    startTransition(async () => {
      const result = await submitPortfolioLead(formData);

      if (result.success) {
        toast.success("Anfrage erfolgreich gesendet!");
        formRef.current?.reset();
        setTurnstileToken(null);
        setInterest("");
        return;
      }

      toast.error(result.error ?? "Fehler beim Senden. Bitte versuchen Sie es erneut.");
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      method="post"
      className="space-y-5"
    >
      {/* Honeypot – hidden from real users, filled by bots */}
      <input
        name="website"
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-full h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className={wrapperClass}>
          Name *
          <input required name="name" type="text" autoComplete="name" className={fieldClass} />
        </label>
        <label className={wrapperClass}>
          Unternehmen (optional)
          <input name="company" type="text" autoComplete="organization" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className={wrapperClass}>
          E-Mail-Adresse *
          <input required name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
        <label className={wrapperClass}>
          Telefon (optional)
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      <label className={wrapperClass}>
        Woran sind Sie interessiert?
        <select
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value as Interest)}
          className={`${fieldClass} appearance-none`}
        >
          <option value="" className="bg-zinc-900">
            Bitte auswählen (optional)
          </option>
          <option value="abap" className="bg-zinc-900">
            ABAP Entwicklung
          </option>
          <option value="formulare" className="bg-zinc-900">
            Formulare (Adobe Forms / Smart Forms)
          </option>
          <option value="schnittstellen" className="bg-zinc-900">
            Schnittstellen (EDI / IDoc / RFC)
          </option>
          <option value="sonstiges" className="bg-zinc-900">
            Sonstiges SAP-Projekt
          </option>
        </select>
      </label>

      <label className={wrapperClass}>
        Ihr SAP-Projekt / Anliegen *
        <textarea
          required
          name="message"
          maxLength={1000}
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Beschreiben Sie kurz Ihr SAP-Entwicklungsprojekt..."
        />
      </label>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={setTurnstileToken}
        onExpire={() => setTurnstileToken(null)}
        options={{ theme: "dark", size: "normal" }}
      />

      <button
        type="submit"
        disabled={isSubmitting || !turnstileToken}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(124,58,237,0.4)] transition hover:brightness-110 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          "Nachricht senden"
        )}
      </button>
    </form>
  );
}
