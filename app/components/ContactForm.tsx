"use client";

import { useRef, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitPortfolioLead } from "../actions/leads";

const fieldClass =
  "min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/[0.06] focus:shadow-[0_0_24px_rgba(34,211,238,0.12)]";
const wrapperClass =
  "block space-y-2 text-sm text-white/60 transition-colors duration-300 focus-within:text-white/90 [&:focus-within_input]:border-violet-400/60 [&:focus-within_input]:shadow-[0_0_28px_rgba(124,58,237,0.18)] [&:focus-within_textarea]:border-violet-400/60 [&:focus-within_textarea]:shadow-[0_0_28px_rgba(124,58,237,0.18)]";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await submitPortfolioLead(formData);

      console.log("🍏 SERVER ACTION ERGEBNIS IM BROWSER:", result);

      if (result.success) {
        toast.success("Anfrage erfolgreich gesendet!");
        formRef.current?.reset();
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
        Ihr Vorhaben / Anliegen *
        <textarea
          required
          name="message"
          maxLength={1000}
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
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
