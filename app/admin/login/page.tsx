"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createSupabaseBrowserClient } from "../../lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError("Anmeldung fehlgeschlagen. Bitte prüfen Sie Ihre Zugangsdaten.");
        return;
      }

      router.replace("/admin/dashboard");
      router.refresh();
    });
  };

  const fieldClass =
    "min-h-12 w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/6";

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5 text-zinc-50">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Admin-Bereich
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Anmelden</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block space-y-2 text-sm text-white/60">
            E-Mail
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </label>

          <label className="block space-y-2 text-sm text-white/60">
            Passwort
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={fieldClass}
            />
          </label>

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Anmelden...
              </>
            ) : (
              "Anmelden"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
