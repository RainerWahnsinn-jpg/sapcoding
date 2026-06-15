"use client";

import { useMemo, useOptimistic, useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import { archiveLead, updateLeadStatus } from "../../actions/leadActions";
import { LEAD_STATUSES, type Lead, type LeadStatus } from "../../lib/types";
import PitchActions from "./PitchActions";
import TextPreview from "./TextPreview";

type LeadsTableProps = {
  initialLeads: Lead[];
};

const STATUS_STYLES: Record<string, string> = {
  neu: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  kontaktiert: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  Termin: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  Kunde: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
};

export default function LeadsTable({ initialLeads }: LeadsTableProps) {
  const [isPending, startTransition] = useTransition();

  // Optimistischer State: Status-Änderungen & Archivieren sofort sichtbar
  const [optimisticLeads, applyOptimistic] = useOptimistic(
    initialLeads,
    (
      state,
      action:
        | { type: "status"; id: string; status: LeadStatus }
        | { type: "archive"; id: string },
    ) => {
      if (action.type === "status") {
        return state.map((l) =>
          l.id === action.id ? { ...l, status: action.status } : l,
        );
      }
      return state.filter((l) => l.id !== action.id);
    },
  );

  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"alle" | LeadStatus>("alle");

  // Statistiken
  const stats = useMemo(() => {
    const counts: Record<string, number> = { neu: 0, kontaktiert: 0, Termin: 0, Kunde: 0 };
    optimisticLeads.forEach((l) => {
      if (l.status && l.status in counts) counts[l.status] += 1;
    });
    const total = optimisticLeads.length;
    const conversion = total > 0 ? Math.round((counts.Kunde / total) * 100) : 0;
    return { counts, total, conversion };
  }, [optimisticLeads]);

  // Gefilterte Ansicht
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return optimisticLeads.filter((l) => {
      const matchesQuery =
        !q ||
        (l.company_name ?? "").toLowerCase().includes(q) ||
        l.website.toLowerCase().includes(q) ||
        (l.email ?? "").toLowerCase().includes(q);
      const matchesStatus = statusFilter === "alle" || l.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [optimisticLeads, query, statusFilter]);

  const handleStatusChange = (id: string, status: LeadStatus) => {
    startTransition(async () => {
      applyOptimistic({ type: "status", id, status });
      await updateLeadStatus(id, status);
    });
  };

  const handleArchive = (id: string) => {
    startTransition(async () => {
      applyOptimistic({ type: "archive", id });
      await archiveLead(id);
    });
  };

  return (
    <div>
      {/* Statistik-Karten */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard label="Gesamt" value={stats.total} accent="text-white" />
        <StatCard label="Neu" value={stats.counts.neu} accent="text-cyan-300" />
        <StatCard label="Kontaktiert" value={stats.counts.kontaktiert} accent="text-violet-300" />
        <StatCard label="Termin" value={stats.counts.Termin} accent="text-amber-300" />
        <StatCard label="Kunde" value={stats.counts.Kunde} accent="text-emerald-300" />
        <StatCard label="Conversion" value={`${stats.conversion}%`} accent="text-emerald-300" />
      </div>

      {/* Such- & Filterleiste */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Firma, Webseite oder E-Mail suchen…"
          className="min-h-11 flex-1 rounded-xl border border-white/10 bg-white/3 px-4 py-2 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-cyan-300/50 focus:bg-white/6"
        />
        <div className="flex flex-wrap gap-2">
          <FilterChip
            label="Alle"
            active={statusFilter === "alle"}
            onClick={() => setStatusFilter("alle")}
          />
          {LEAD_STATUSES.map((s) => (
            <FilterChip
              key={s}
              label={s}
              active={statusFilter === s}
              onClick={() => setStatusFilter(s)}
            />
          ))}
        </div>
      </div>

      {/* Tabelle */}
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
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-white/40">
                  {optimisticLeads.length === 0
                    ? "Noch keine Leads generiert."
                    : "Keine Treffer für die aktuelle Suche."}
                </td>
              </tr>
            ) : (
              filtered.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-white/5 align-top transition-colors hover:bg-white/2"
                >
                  <td className="px-4 py-4 font-medium text-white">
                    {lead.company_name ?? "—"}
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
                  <td className="px-4 py-4">
                    <TextPreview
                      label="Schwachstellen"
                      title="Schwachstellen"
                      content={lead.vulnerabilities}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <TextPreview
                      label="Pitch-E-Mail"
                      title="Pitch-E-Mail"
                      content={lead.pitch_email}
                    />
                    <PitchActions
                      pitch={lead.pitch_email}
                      email={lead.email}
                      company={lead.company_name}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <select
                      value={lead.status ?? "neu"}
                      onChange={(e) =>
                        handleStatusChange(lead.id, e.target.value as LeadStatus)
                      }
                      className={`cursor-pointer rounded-full border px-3 py-1 text-xs outline-none transition focus:ring-2 focus:ring-cyan-300/40 ${
                        STATUS_STYLES[lead.status ?? "neu"] ??
                        "border-white/15 bg-white/5 text-white/70"
                      }`}
                    >
                      {LEAD_STATUSES.map((s) => (
                        <option key={s} value={s} className="bg-zinc-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      type="button"
                      onClick={() => handleArchive(lead.id)}
                      disabled={isPending}
                      aria-label="Lead archivieren"
                      className="rounded-lg p-2 text-white/40 transition hover:bg-red-500/10 hover:text-red-300 disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
      <p className={`mt-1 text-2xl font-semibold ${accent}`}>{value}</p>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs transition ${
        active
          ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
          : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
