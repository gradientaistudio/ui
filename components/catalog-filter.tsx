"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const PANEL_W = 188;
const EDGE_MARGIN = 8;

const panelSurface =
  "flex flex-col gap-0.5 rounded-xl border border-black/10 bg-white px-1 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] dark:border-white/[0.06] dark:bg-[#1a1a1a] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]";

const itemClass =
  "flex w-full cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-left text-[12.5px] leading-snug text-black hover:bg-black/[0.05] dark:text-white dark:hover:bg-white/[0.07]";

function IconFilter({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      className={className ?? "size-5 shrink-0"}
      aria-hidden
    >
      <line x1="19.68" y1="6.78" x2="10.85" y2="6.78" />
      <circle cx="7.45" cy="6.78" r="3.13" />
      <line x1="4.32" y1="17.22" x2="13.15" y2="17.22" />
      <circle cx="16.55" cy="17.22" r="3.13" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className ?? "size-3.5 shrink-0"}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

type Props = {
  categories: string[];
  value: string;
  onChange: (next: string) => void;
};

export default function CatalogFilter({ categories, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [panelPos, setPanelPos] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closePanel = useCallback(() => {
    const el = panelRef.current;
    if (!el) {
      setOpen(false);
      return;
    }
    gsap.killTweensOf(el);
    gsap.to(el, {
      autoAlpha: 0,
      y: 8,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });
  }, []);

  useEffect(() => {
    if (!open) setPanelPos(null);
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return;
    function place() {
      const btn = buttonRef.current;
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      setPanelPos({
        top: r.bottom + 6,
        left: Math.max(EDGE_MARGIN, r.right - PANEL_W),
        width: PANEL_W,
      });
    }
    place();
    window.addEventListener("resize", place);
    document.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      document.removeEventListener("scroll", place, true);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open || !panelPos) return;
    const el = panelRef.current;
    if (!el || el.dataset.entered === "1") return;
    el.dataset.entered = "1";
    gsap.killTweensOf(el);
    gsap.set(el, { autoAlpha: 0, y: 10 });
    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.24,
      ease: "power2.out",
    });
  }, [open, panelPos]);

  useEffect(() => {
    if (!open) return;
    function onPointerDownOutside(e: PointerEvent) {
      if (e.button !== 0) return;
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) {
        return;
      }
      closePanel();
    }
    document.addEventListener("pointerdown", onPointerDownOutside, true);
    return () => document.removeEventListener("pointerdown", onPointerDownOutside, true);
  }, [open, closePanel]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePanel();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closePanel]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Filter"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => {
          if (open) closePanel();
          else setOpen(true);
        }}
        className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-black transition-colors hover:bg-black/[0.05] dark:text-white dark:hover:bg-white/[0.07] ${
          open ? "bg-black/[0.05] dark:bg-white/[0.07]" : ""
        }`}
      >
        <IconFilter className="size-5 shrink-0" />
        <span className="text-[14px] leading-none tracking-[-0.01em]">Filter</span>
      </button>

      {open && panelPos
        ? createPortal(
            <div
              ref={panelRef}
              role="menu"
              aria-label="Filter by category"
              style={{
                position: "fixed",
                top: panelPos.top,
                left: panelPos.left,
                width: panelPos.width,
              }}
              className={`z-[100001] ${panelSurface}`}
            >
              {categories.map((opt) => {
                const active = opt === value;
                return (
                  <button
                    key={opt}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    className={itemClass}
                    onClick={() => {
                      onChange(opt);
                      closePanel();
                    }}
                  >
                    <span className="min-w-0 flex-1 whitespace-nowrap">{opt}</span>
                    {active ? <IconCheck className="size-3.5 shrink-0" /> : null}
                  </button>
                );
              })}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
