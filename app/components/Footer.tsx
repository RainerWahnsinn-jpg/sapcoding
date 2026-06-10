import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/60 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-white/80">Maßgeschneiderte Webentwicklung & KI-Automatisierung.</p>
          <p className="mt-2 text-white/50">
            © 2026 Constantin-Felix Weib. Alle Rechte vorbehalten
            <Link
              href="/admin/login"
              aria-hidden="true"
              tabIndex={-1}
              className="pointer-events-none select-none opacity-0 transition-opacity duration-300 hover:opacity-100 md:pointer-events-auto md:cursor-pointer md:text-zinc-600"
            >
              .
            </Link>
          </p>
          <p className="mt-2 text-white/50">Entwickelt in Siegen, Südwestfalen.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link className="text-white/50 transition hover:text-white" href="/impressum">
            Impressum
          </Link>
          <Link className="text-white/50 transition hover:text-white" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
