"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Optional stagger delay: 1, 2 or 3 */
  delay?: 1 | 2 | 3;
  /** HTML tag to render. Defaults to "div". */
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Blendet seine Kinder sanft ein, sobald sie in den Viewport scrollen.
 * Nutzt IntersectionObserver – läuft nur einmal pro Element.
 */
export default function Reveal({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${delayClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
