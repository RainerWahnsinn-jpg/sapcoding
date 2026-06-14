"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { generateLead } from "../../actions/crawler";

export default function LeadGeneratorForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(
    null,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await generateLead(formData);

      if (result.success) {
        setMessage({ type: "ok", text: "Lead erfolgreich generiert." });
        formRef.current?.reset();
        router.refresh();
      } else {
        setMessage({ type: "err", text: result.error });
      }
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="url"
          type="url"
          required
          placeholder="https://www.beispiel-handwerker-siegen.de"
          className="min-h-12 flex-1 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/6"
        />
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generiere...
            </>
          ) : (
            "Lead generieren"
          )}
        </button>
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.type === "ok" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
