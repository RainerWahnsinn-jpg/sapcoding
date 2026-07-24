import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black py-20">
      {/* Dezenter Ambient-Glow im Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(99,102,241,0.10),rgba(0,0,0,0))]"
      />

      {/* Kontaktinformationen */}
      <div className="mx-auto mb-16 max-w-7xl px-5 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-cyan-300/60" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Kontakt
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="tel:+4916098427523"
            className="group relative isolate flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-xs font-medium tracking-wider text-white/50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white/25 hover:bg-white/5 hover:text-white hover:shadow-[0_8px_30px_-8px_rgba(56,189,248,0.35)]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-white/30 transition-colors duration-300 group-hover:text-cyan-300" />
            <span>+49 160 98427523</span>
          </a>
          <a
            href="mailto:Sabrina.Knaup@SAPCoding.de"
            className="group relative isolate flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-xs font-medium tracking-wider text-white/50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white/25 hover:bg-white/5 hover:text-white hover:shadow-[0_8px_30px_-8px_rgba(56,189,248,0.35)]"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-white/30 transition-colors duration-300 group-hover:text-cyan-300" />
            <span>Sabrina.Knaup@SAPCoding.de</span>
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-white/5 px-5 pt-14 text-sm sm:px-6 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            SAP Entwicklung aus Herborn, Hessen
          </p>
          <p className="mt-4 select-none text-white/50">
            © 2025 Sabrina Knaup Development
          </p>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wider md:justify-end">
          <Link className="text-white/40 transition hover:text-white" href="/impressum">
            Impressum
          </Link>
          <Link className="text-white/40 transition hover:text-white" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
