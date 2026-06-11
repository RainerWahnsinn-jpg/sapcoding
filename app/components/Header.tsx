export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a className="text-sm font-semibold tracking-tight text-white" href="/">
          Constantin-Felix Weib
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a className="text-gray-400 transition-colors hover:text-white" href="#services">
            Services
          </a>
          <a className="text-gray-400 transition-colors hover:text-white" href="#cases">
            Referenzen
          </a>
        </nav>
        <a
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          href="#kontakt"
        >
          Projekt anfragen
        </a>
      </div>
    </header>
  );
}
