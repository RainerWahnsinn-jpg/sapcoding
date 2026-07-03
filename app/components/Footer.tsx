import Link from "next/link";
import { MapPin } from "lucide-react";
import { CITIES } from "../lib/cities";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black py-20">
      {/* Dezenter Ambient-Glow im Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(99,102,241,0.10),rgba(0,0,0,0))]"
      />

      {/* Regionen: interne Links für lokale SEO als glühende Tech-Badges */}
      <div className="mx-auto mb-16 max-w-7xl px-5 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-cyan-300/60" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Webdesign im Siegerland &amp; Umgebung
          </p>
        </div>

        <nav
          aria-label="Regionen"
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/webdesign-${city.slug}`}
              className="group relative isolate flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-xs font-medium tracking-wider text-white/50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white/25 hover:bg-white/5 hover:text-white hover:shadow-[0_8px_30px_-8px_rgba(56,189,248,0.35)]"
            >
              {/* Glühende Lichtkante beim Hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(80%_120%_at_0%_0%,rgba(56,189,248,0.18),rgba(0,0,0,0))] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              />
              <MapPin className="h-3.5 w-3.5 shrink-0 text-white/30 transition-colors duration-300 group-hover:text-cyan-300" />
              <span className="truncate">Webdesign {city.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-white/5 px-5 pt-14 text-sm sm:px-6 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Entwickelt in Siegen, Südwestfalen
          </p>
          <p className="mt-4 select-none text-white/50">
            © 2026 Constantin-Felix Weib
          </p>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wider md:justify-end">
          <Link className="text-white/40 transition hover:text-white" href="/impressum">
            Impressum
          </Link>
          <Link className="text-white/40 transition hover:text-white" href="/datenschutz">
            Datenschutz
          </Link>
          <a
            className="text-white/40 transition hover:text-white"
            href="https://www.linkedin.com/in/constantin-felix-weib-824b0116a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn-Profil von Constantin-Felix Weib"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
