"use client";

import { memo, useEffect, useRef } from "react";

/**
 * Immersive Sci-Fi-Partikelsimulation (HTML5 Canvas, requestAnimationFrame).
 * Tausende glühende Punkte folgen einem mathematischen Flow-Field und winden
 * sich in kinetischen Strömen durch tiefschwarzen Raum.
 *
 * Performance-Strategie:
 * - Vorgerenderte Glow-Sprites (Offscreen-Canvas) statt teurem shadowBlur pro Frame
 * - Additives Blending ("lighter") für Lichtemission
 * - Trail-Fade über halbtransparentes Schwarz statt clearRect → flüssige Ströme
 * - Partikelanzahl skaliert mit Viewport-Fläche, devicePixelRatio-aware
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  depth: number; // 0 (fern, unscharf) … 1 (nah, scharf)
  hue: number; // 0 = Deep Violet … 1 = Cyan/Grün
};

const SPRITE_SIZE = 64;

/** Neon-Gradient: Deep Violet → Cyan/Grün */
function paletteColor(t: number): [number, number, number] {
  // violet (124, 58, 237) → cyan (34, 211, 238) → grünlich (52, 230, 180)
  if (t < 0.6) {
    const k = t / 0.6;
    return [124 + (34 - 124) * k, 58 + (211 - 58) * k, 237 + (238 - 237) * k];
  }
  const k = (t - 0.6) / 0.4;
  return [34 + (52 - 34) * k, 211 + (230 - 211) * k, 238 + (180 - 238) * k];
}

/** Vorgerenderter radialer Glow-Sprite für eine Farbe (Bokeh-Look) */
function makeSprite(t: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = SPRITE_SIZE;
  c.height = SPRITE_SIZE;
  const ctx = c.getContext("2d")!;
  const [r, g, b] = paletteColor(t).map(Math.round);
  const half = SPRITE_SIZE / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
  grad.addColorStop(0.25, `rgba(${r},${g},${b},0.55)`);
  grad.addColorStop(0.6, `rgba(${r},${g},${b},0.12)`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  return c;
}

/** Divergenzfreies, pseudo-zufälliges Flow-Field aus überlagerten Sinuswellen */
function flowAngle(x: number, y: number, t: number): number {
  const s = 0.0011;
  return (
    Math.sin(x * s * 1.7 + t * 0.21) * 1.4 +
    Math.cos(y * s * 1.3 - t * 0.17) * 1.4 +
    Math.sin((x + y) * s * 0.8 + t * 0.07) * 2.2 +
    Math.sin(Math.hypot(x - 600, y - 350) * s * 1.1 - t * 0.12) * 1.1
  );
}

function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    // Sprite-Cache über die Farbpalette
    const SPRITE_COUNT = 12;
    const sprites: HTMLCanvasElement[] = Array.from({ length: SPRITE_COUNT }, (_, i) =>
      makeSprite(i / (SPRITE_COUNT - 1)),
    );

    let particles: Particle[] = [];

    const spawn = (p: Particle) => {
      p.x = Math.random() * width;
      p.y = Math.random() * height;
      p.vx = 0;
      p.vy = 0;
      p.maxLife = 240 + Math.random() * 420;
      p.life = Math.random() * p.maxLife;
      p.depth = Math.random();
      // Nahe Partikel: kleine, scharfe Punkte. Ferne: große, weiche Bokeh-Scheiben.
      p.size = p.depth > 0.85 ? 4 + Math.random() * 10 : 0.8 + Math.random() * 2.4;
      p.hue = Math.random();
    };

    const buildParticles = () => {
      // Mobile-Drossel: < 768px Viewport → feste, akkuschonende Partikelanzahl
      const isMobile = window.innerWidth < 768;
      const target = reduceMotion
        ? 0
        : isMobile
          ? 700
          : Math.min(3200, Math.max(900, Math.round((width * height) / 520)));
      particles = Array.from({ length: target }, () => {
        const p: Particle = {
          x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 1, size: 1, depth: 0, hue: 0,
        };
        spawn(p);
        return p;
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      buildParticles();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    let last = performance.now();

    const frame = (now: number) => {
      if (!running) return;
      // Zeitnormierung auf 60 FPS, Cap gegen Tab-Wechsel-Sprünge
      const dt = Math.min((now - last) / 16.666, 2.5);
      last = now;
      t += dt * 0.016;

      // Trail-Fade: erzeugt die fließenden Lichtströme
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.16)";
      ctx.fillRect(0, 0, width, height);

      // Additives Blending für Glow
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const angle = flowAngle(p.x, p.y, t);
        const speed = (0.35 + p.depth * 1.15) * dt;
        p.vx += (Math.cos(angle) * speed - p.vx) * 0.085;
        p.vy += (Math.sin(angle) * speed - p.vy) * 0.085;
        p.x += p.vx * dt * 1.8;
        p.y += p.vy * dt * 1.8;
        p.life += dt;

        // Respawn bei Lebensende oder außerhalb des Raums
        if (
          p.life > p.maxLife ||
          p.x < -40 || p.x > width + 40 ||
          p.y < -40 || p.y > height + 40
        ) {
          spawn(p);
          p.life = 0;
          continue;
        }

        // Sanfter Opacity-Fade über die Lebenszeit (ein- und ausblenden)
        const lifeT = p.life / p.maxLife;
        const fade = lifeT < 0.12 ? lifeT / 0.12 : lifeT > 0.8 ? (1 - lifeT) / 0.2 : 1;
        const alpha = fade * (0.16 + p.depth * 0.5);

        // Farbe driftet ortsabhängig durch die Palette → Gradient-Ränder der Schwärme
        const raw = (p.hue + (p.x / Math.max(width, 1)) * 0.45 + t * 0.02) % 1;
        const hueShift = raw < 0 ? raw + 1 : raw;
        const sprite =
          sprites[Math.min(SPRITE_COUNT - 1, Math.max(0, Math.floor(hueShift * SPRITE_COUNT)))];

        const drawSize = p.size * (2.2 + p.depth * 2.4);
        ctx.globalAlpha = alpha;
        ctx.drawImage(sprite, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    if (!reduceMotion) {
      raf = requestAnimationFrame(frame);
    } else {
      // Statisches, ruhiges Sternenfeld als Fallback
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 220; i++) {
        const sprite = sprites[Math.floor(Math.random() * SPRITE_COUNT)];
        const s = 2 + Math.random() * 8;
        ctx.globalAlpha = 0.1 + Math.random() * 0.4;
        ctx.drawImage(sprite, Math.random() * width, Math.random() * height, s, s);
      }
      ctx.globalAlpha = 1;
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceMotion && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-black" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Bokeh-/Tiefen-Layer: weiche Neon-Lichtkegel über der Simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(34,211,238,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_70%,rgba(124,58,237,0.14),transparent_70%)]" />
      {/* Vignette für räumliche Tiefe & Lesbarkeit des Contents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-zinc-950" />
    </div>
  );
}

// memo: Zustandsänderungen im umgebenden Layout (z. B. Formular) lösen
// niemals ein Re-Render der Partikel-Szene aus.
export default memo(HeroVisual);
