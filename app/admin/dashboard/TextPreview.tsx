"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type TextPreviewProps = {
  /** Kurze Vorschau in der Zelle */
  label: string;
  /** Vollständiger Text im Modal */
  content: string | null;
  /** Titel des Modals */
  title: string;
};

/**
 * Zeigt eine kompakte Textvorschau in der Tabellenzelle.
 * Klick öffnet ein leichtgewichtiges Modal mit dem vollständigen Text –
 * ohne externe UI-Library.
 */
export default function TextPreview({ label, content, title }: TextPreviewProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!content) return <span className="text-white/40">—</span>;

  const preview = content.length > 90 ? `${content.slice(0, 90)}…` : content;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block max-w-xs text-left text-xs leading-5 text-white/60 transition-colors hover:text-cyan-300"
      >
        {preview}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Schließen"
                className="rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[calc(80vh-60px)] overflow-y-auto px-5 py-4">
              <p className="whitespace-pre-wrap text-sm leading-6 text-white/80">
                {content}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
