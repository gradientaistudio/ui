"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { getComponent } from "@/lib/components";

type CatalogView = "components" | "icons" | "docs";

export const VIEW_TABS: { id: CatalogView; label: string; href: string }[] = [
  { id: "components", label: "Components", href: "/components" },
  { id: "icons", label: "Icons", href: "/icons" },
  { id: "docs", label: "Docs", href: "/docs" },
];

function viewFromPath(pathname: string): CatalogView | null {
  if (pathname === "/icons") return "icons";
  if (pathname === "/docs") return "docs";
  const slug = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  if (pathname === "/components" || getComponent(slug)) return "components";
  return null;
}

export default function ViewToggle() {
  const pathname = usePathname();
  const view = viewFromPath(pathname);
  const listRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Partial<Record<CatalogView, HTMLAnchorElement | null>>>({});
  const hasPlaced = useRef(false);
  const [hovered, setHovered] = useState<CatalogView | null>(null);
  const highlightId = hovered ?? view;

  const measure = useCallback((id: CatalogView) => {
    const list = listRef.current;
    const button = buttonRefs.current[id];
    if (!list || !button) return null;
    const listRect = list.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    return {
      left: buttonRect.left - listRect.left,
      width: buttonRect.width,
      height: buttonRect.height,
    };
  }, []);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    if (!highlightId) {
      indicator.style.opacity = "0";
      return;
    }

    const box = measure(highlightId);
    if (!box) return;

    const place = (animate: boolean) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      indicator.style.transition =
        animate && !reduce ? "left 200ms ease-out, width 200ms ease-out, height 200ms ease-out" : "none";
      indicator.style.left = `${box.left}px`;
      indicator.style.width = `${box.width}px`;
      indicator.style.height = `${box.height}px`;
      indicator.style.opacity = "1";
    };

    place(hasPlaced.current);
    hasPlaced.current = true;

    const frame = requestAnimationFrame(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        indicator.style.transition = "left 200ms ease-out, width 200ms ease-out, height 200ms ease-out";
      }
    });

    const onResize = () => {
      const next = measure(highlightId);
      if (!next) return;
      indicator.style.transition = "none";
      indicator.style.left = `${next.left}px`;
      indicator.style.width = `${next.width}px`;
      indicator.style.height = `${next.height}px`;
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, [highlightId, measure]);

  return (
    <div ref={listRef} className="relative inline-flex shrink-0" onMouseLeave={() => setHovered(null)}>
      <div
        ref={indicatorRef}
        aria-hidden
        className="pointer-events-none absolute top-0 rounded-full bg-black/[0.06] opacity-0 dark:bg-white/[0.10]"
      />
      {VIEW_TABS.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          ref={(node) => {
            buttonRefs.current[tab.id] = node;
          }}
          aria-current={view === tab.id ? "page" : undefined}
          onMouseEnter={() => setHovered(tab.id)}
          className="font-geist-medium relative z-10 rounded-full px-3 py-1.5 text-[13px] text-black dark:text-white"
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
