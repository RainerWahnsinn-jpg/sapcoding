import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { CITIES } from "../lib/cities";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 py-20">
      {/* Kontaktinformationen */}
      <div className="mx-auto mb-16 max-w-7xl px-5 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-cyan-500/60" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            Kontakt
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:+4916098427523"
            className="group flex items-center gap-2.5 rounded-md border border-slate-800 bg-slate-900/50 px-4 py-3 text-xs font-medium tracking-wider text-slate-400 transition-colors duration-300 hover:border-cyan-500/40 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-slate-600 transition-colors duration-300 group-hover:text-cyan-400" />
            <span>+49 160 98427523</span>
          </a>
          <a
            href="mailto:Sabrina.Knaup@SAPCoding.de"
            className="group flex items-center gap-2.5 rounded-md border border-slate-800 bg-slate-900/50 px-4 py-3 text-xs font-medium tracking-wider text-slate-400 transition-colors duration-300 hover:border-cyan-500/40 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-slate-600 transition-colors duration-300 group-hover:text-cyan-400" />
            <span>Sabrina.Knaup@SAPCoding.de</span>
          </a>
        </div>
      </div>

      {/* Regionen – interne Verlinkung der lokalen Landingpages (SEO/GEO) */}
      <nav
        aria-label="SAP-Entwicklung nach Region"
        className="mx-auto mb-16 max-w-7xl border-t border-slate-800 px-5 pt-14 sm:px-6"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
          SAP-Entwicklung in Ihrer Region
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {CITIES.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/sap-entwicklung-${city.slug}`}
                className="text-slate-400 transition-colors hover:text-cyan-400"
              >
                SAP-Entwicklung {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-slate-800 px-5 pt-14 text-sm sm:px-6 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
            SAP Entwicklung aus Herborn, Hessen
          </p>
          <p className="mt-4 select-none text-slate-500">
            © {currentYear} Sabrina Knaup Development
          </p>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wider md:justify-end">
          <Link className="text-slate-500 transition hover:text-white" href="/impressum">
            Impressum
          </Link>
          <Link className="text-slate-500 transition hover:text-white" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
