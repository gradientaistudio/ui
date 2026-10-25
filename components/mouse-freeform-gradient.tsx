"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MouseFreeformGradientProps = {
  /** Accent color wash (ignored when imageSrc or reveal is set) */
  color?: string;
  /** Image revealed through a freeform pointer mask */
  imageSrc?: string;
  /**
   * Cover layer with a freeform pointer hole. Pass children (e.g. a blurred
   * duplicate of the scene) to punch through to whatever sits behind.
   * Falls back to coverColor when no children are provided.
   */
  reveal?: boolean;
  /** Solid cover color used when reveal is true and no children are passed */
  coverColor?: string;
  children?: ReactNode;
  className?: string;
};

function washBackground(color: string) {
  // Inline styles — Lightning CSS drops complex radial-gradients from stylesheets.
  // Avoid calc() in gradient positions (invalid in browsers).
  // Even round wash — stacked circles at the same pointer point.
  return [
    `radial-gradient(circle 400px at var(--gx) var(--gy), ${color} 0%, transparent 70%)`,
    `radial-gradient(circle 285px at var(--gx) var(--gy), ${color}ee 0%, transparent 72%)`,
    `radial-gradient(circle 185px at var(--gx) var(--gy), ${color} 0%, transparent 75%)`,
  ].join(", ");
}

function imageMask() {
  return [
    `radial-gradient(ellipse 78% 64% at var(--gx2) var(--gy2), #000 0%, #000 42%, transparent 72%)`,
    `radial-gradient(ellipse 64% 78% at var(--gx3) var(--gy3), #000 0%, #000 40%, transparent 70%)`,
    `radial-gradient(circle 240px at var(--gx) var(--gy), #000 0%, #000 45%, transparent 74%)`,
  ].join(", ");
}

/** Black keeps the cover; transparent punches a freeform hole through it. `amount` 0–1 fades the hole in. */
function revealMask(amount: number) {
  const a = Math.max(0, Math.min(1, amount));
  const soft = (28 + (1 - a) * 40).toFixed(1);
  const hard = (58 + (1 - a) * 30).toFixed(1);
  const circleSoft = (30 + (1 - a) * 40).toFixed(1);
  const circleHard = (62 + (1 - a) * 30).toFixed(1);
  return [
    `radial-gradient(ellipse ${(42 * a).toFixed(1)}% ${(34 * a).toFixed(1)}% at var(--gx2) var(--gy2), transparent 0%, transparent ${soft}%, #000 ${hard}%)`,
    `radial-gradient(ellipse ${(34 * a).toFixed(1)}% ${(42 * a).toFixed(1)}% at var(--gx3) var(--gy3), transparent 0%, transparent ${soft}%, #000 ${hard}%)`,
    `radial-gradient(circle ${(140 * a).toFixed(1)}px at var(--gx) var(--gy), transparent 0%, transparent ${circleSoft}%, #000 ${circleHard}%)`,
  ].join(", ");
}

const FULL_COVER_MASK = "linear-gradient(#000, #000)";

/**
 * Soft freeform wash that lerps toward the pointer inside its parent.
 * Parent should be `position: relative` with overflow clipped.
 */
export default function MouseFreeformGradient({
  color = "#ffffff",
  imageSrc,
  reveal = false,
  coverColor = "#ececeb",
  children,
  className = "",
}: MouseFreeformGradientProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const parent = host?.parentElement;
    const glow = glowRef.current;
    if (!host || !parent || !glow) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0.5, y: 0.5 };
    const current = { x: 0.5, y: 0.5 };
    let active = false;
    let revealAmount = 0;
    let raf = 0;

    const clamp = (n: number) => Math.min(1, Math.max(0, n));

    const applyMask = (mask: string) => {
      glow.style.webkitMaskImage = mask;
      glow.style.maskImage = mask;
      glow.style.webkitMaskRepeat = "no-repeat";
      glow.style.maskRepeat = "no-repeat";
      glow.style.webkitMaskComposite = "source-in";
      glow.style.maskComposite = "intersect";
    };

    if (reveal) {
      if (!children) {
        glow.style.background = coverColor;
      }
      glow.style.filter = "none";
      applyMask(FULL_COVER_MASK);
      glow.style.opacity = "1";
    } else if (imageSrc) {
      glow.style.backgroundImage = `url("${imageSrc}")`;
      glow.style.backgroundSize = "108%";
      glow.style.backgroundRepeat = "no-repeat";
      applyMask(imageMask());
      glow.style.webkitMaskComposite = "source-over";
      glow.style.maskComposite = "add";
      glow.style.filter = "contrast(1.08) saturate(1.06)";
    } else {
      glow.style.background = washBackground(color);
      glow.style.filter = "blur(20px)";
      glow.style.webkitMaskImage = "";
      glow.style.maskImage = "";
    }

    const paint = () => {
      const ease = reduced ? 1 : 0.14;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;

      const x = current.x;
      const y = current.y;
      glow.style.setProperty("--gx", `${(x * 100).toFixed(2)}%`);
      glow.style.setProperty("--gy", `${(y * 100).toFixed(2)}%`);
      glow.style.setProperty("--gx2", `${(clamp(x + 0.03) * 100).toFixed(2)}%`);
      glow.style.setProperty("--gy2", `${(clamp(y - 0.02) * 100).toFixed(2)}%`);
      glow.style.setProperty("--gx3", `${(clamp(x - 0.03) * 100).toFixed(2)}%`);
      glow.style.setProperty("--gy3", `${(clamp(y + 0.02) * 100).toFixed(2)}%`);

      if (imageSrc) {
        const px = ((0.5 - x) * 8).toFixed(2);
        const py = ((0.5 - y) * 8 + 18).toFixed(2);
        glow.style.backgroundPosition = `calc(50% + ${px}%) calc(50% + ${py}%)`;
      }

      if (reveal) {
        const revealEase = reduced ? 1 : 0.08;
        revealAmount += ((active ? 1 : 0) - revealAmount) * revealEase;
        if (revealAmount < 0.01) {
          revealAmount = active ? revealAmount : 0;
          applyMask(FULL_COVER_MASK);
        } else {
          applyMask(revealMask(revealAmount));
        }
        glow.style.opacity = "1";
      } else {
        glow.style.opacity = active ? "1" : "0";
      }

      raf = requestAnimationFrame(paint);
    };

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      if (!r.width || !r.height) return;
      target.x = clamp((e.clientX - r.left) / r.width);
      target.y = clamp((e.clientY - r.top) / r.height);
      active = true;
    };

    const onLeave = () => {
      active = false;
    };

    raf = requestAnimationFrame(paint);
    parent.addEventListener("pointermove", onMove, { passive: true });
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [children, color, coverColor, imageSrc, reveal]);

  return (
    <div
      ref={hostRef}
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        ref={glowRef}
        className={`absolute transition-[opacity,mask-image,-webkit-mask-image] duration-300 ${
          reveal && children ? "inset-0" : "inset-[-30%]"
        }`}
        style={{
          opacity: reveal ? 1 : 0,
          ["--gx" as string]: "50%",
          ["--gy" as string]: "50%",
          ["--gx2" as string]: "60%",
          ["--gy2" as string]: "42%",
          ["--gx3" as string]: "38%",
          ["--gy3" as string]: "58%",
        }}
      >
        {reveal ? children : null}
      </div>
    </div>
  );
}
