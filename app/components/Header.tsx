import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link className="text-sm font-semibold tracking-tight text-white" href="/">
          Constantin-Felix Weib
        </Link>
        <nav className="hidden items-center gap-10 text-sm tracking-wider md:flex">
          <a className="text-white/50 transition-colors hover:text-white" href="#services">
            Services
          </a>
          <a className="text-white/50 transition-colors hover:text-white" href="#cases">
            Referenzen
          </a>
        </nav>
        <Link
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold tracking-wide text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          href="#kontakt"
        >
          Projekt anfragen
        </Link>
      </div>
    </header>
  );
}
