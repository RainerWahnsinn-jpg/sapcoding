import { createSupabaseServerClient } from "../../lib/supabase/server";
import type { Lead } from "../../lib/types";
import LeadGeneratorForm from "./LeadGeneratorForm";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("leads")
    .select("*")
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

        {/* Tabelle */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Gespeicherte Leads ({leads.length})
          </h2>

          {error && (
            <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              Leads konnten nicht geladen werden.
            </p>
          )}

          <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-225 border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/3 text-xs uppercase tracking-wider text-white/50">
                  <th className="px-4 py-3 font-medium">Firma</th>
                  <th className="px-4 py-3 font-medium">Webseite</th>
                  <th className="px-4 py-3 font-medium">Telefon</th>
                  <th className="px-4 py-3 font-medium">E-Mail</th>
                  <th className="px-4 py-3 font-medium">Schwachstellen</th>
                  <th className="px-4 py-3 font-medium">Pitch-E-Mail</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-white/40">
                      Noch keine Leads generiert.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-white/5 align-top transition-colors hover:bg-white/2"
                    >
                      <td className="px-4 py-4 font-medium text-white">
                        {lead.company ?? "—"}
                      </td>
                      <td className="px-4 py-4">
                        <a
                          href={lead.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 underline-offset-2 hover:underline"
                        >
                          {lead.website}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-white/70">{lead.phone ?? "—"}</td>
                      <td className="px-4 py-4 text-white/70">{lead.email ?? "—"}</td>
                      <td className="max-w-xs px-4 py-4 text-white/60">
                        <div className="max-h-32 overflow-y-auto whitespace-pre-wrap text-xs leading-5">
                          {lead.weaknesses ?? "—"}
                        </div>
                      </td>
                      <td className="max-w-md px-4 py-4 text-white/60">
                        <div className="max-h-32 overflow-y-auto whitespace-pre-wrap text-xs leading-5">
                          {lead.pitch_email ?? "—"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                          {lead.status ?? "—"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
