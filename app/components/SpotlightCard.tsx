"use client";

import { useRef } from "react";

type SpotlightCardProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

/**
 * Karte mit maus-verfolgendem Border-Glow.
 * Setzt CSS-Variablen (--mx/--my) per pointermove – gerendert über eine
 * GPU-freundliche radial-gradient-Maske. Auf Touch-Geräten passiv (kein Effekt).
 */
export default function SpotlightCard({
  href,
  children,
  className = "",
  ariaLabel,
}: SpotlightCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      onPointerMove={handlePointerMove}
      className={`spotlight-card group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}
    >
      {children}
    </a>
  );
}
