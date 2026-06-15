import { createSupabaseServerClient } from "../../lib/supabase/server";
import type { Lead } from "../../lib/types";
import LeadGeneratorForm from "./LeadGeneratorForm";
import LeadsTable from "./LeadsTable";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("is_archived", false)
    .order("created_at", { ascending: false });

  const leads = (data ?? []) as Lead[];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Lead-Crawler Dashboard
            </h1>
          </div>
          <SignOutButton />
        </div>

        {/* Generator */}
        <section className="mt-10 rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Neuen Lead generieren
          </h2>
          <p className="mt-1 text-sm text-white/50">
            URL einer lokalen Firma eingeben – die KI analysiert die Seite und erstellt einen
            Pitch-Entwurf.
          </p>
          <div className="mt-5">
            <LeadGeneratorForm />
          </div>
        </section>

        {/* Tabelle, Statistiken & Filter (Client) */}
        <section className="mt-10">
          {error && (
            <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              Leads konnten nicht geladen werden.
            </p>
          )}
          <LeadsTable initialLeads={leads} />
        </section>
      </div>
    </main>
  );
}
