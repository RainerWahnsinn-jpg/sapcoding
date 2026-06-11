import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 text-sm sm:px-6 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Entwickelt in Siegen, Südwestfalen
          </p>
          <p className="mt-4 text-white/50">
            © 2026 Constantin-Felix Weib
            <Link
              href="/admin/login"
              aria-hidden="true"
              tabIndex={-1}
              className="pointer-events-none select-none opacity-0 transition-opacity duration-300 hover:opacity-100 md:pointer-events-auto md:cursor-pointer md:text-zinc-600"
            >
              .
            </Link>
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
