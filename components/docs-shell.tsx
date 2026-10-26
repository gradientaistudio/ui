"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { runWhenMobileMenuClear } from "@/lib/when-mobile-menu-clear";

const NAV = [
  { id: "introduction", label: "Introduction" },
  { id: "getting-started", label: "Getting started" },
  { id: "stack", label: "Stack" },
  { id: "project-structure", label: "Project structure" },
  { id: "using-components", label: "Using components" },
  { id: "component-catalog", label: "Component catalog" },
  { id: "adding-components", label: "Adding components" },
  { id: "icons", label: "Icons" },
  { id: "theming", label: "Theming" },
  { id: "styling", label: "Styling & fonts" },
  { id: "license", label: "License" },
] as const;

type NavId = (typeof NAV)[number]["id"];

export default function DocsShell({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<NavId>(NAV[0].id);
  const [hovered, setHovered] = useState<NavId | null>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Partial<Record<NavId, HTMLAnchorElement | null>>>({});
  const hasPlaced = useRef(false);
  const highlightId = hovered ?? active;

  useEffect(() => {
    return runWhenMobileMenuClear(() => {
      if (!sheetRef.current) return () => {};
      const tween = gsap.to(sheetRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.12,
      });
      return () => {
        tween.kill();
      };
    });
  }, []);

  const measure = useCallback((id: NavId) => {
    const list = listRef.current;
    const item = itemRefs.current[id];
    if (!list || !item) return null;
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    return {
      top: itemRect.top - listRect.top,
      left: itemRect.left - listRect.left,
      width: itemRect.width,
      height: itemRect.height,
    };
  }, []);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const box = measure(highlightId);
    if (!box) {
      indicator.style.opacity = "0";
      return;
    }

    const place = (animate: boolean) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      indicator.style.transition =
        animate && !reduce
          ? "top 200ms ease-out, left 200ms ease-out, width 200ms ease-out, height 200ms ease-out, opacity 150ms ease-out"
          : "none";
      indicator.style.top = `${box.top}px`;
      indicator.style.left = `${box.left}px`;
      indicator.style.width = `${box.width}px`;
      indicator.style.height = `${box.height}px`;
      indicator.style.opacity = "1";
    };

    place(hasPlaced.current);
    hasPlaced.current = true;

    const onResize = () => {
      const next = measure(highlightId);
      if (!next) return;
      indicator.style.transition = "none";
      indicator.style.top = `${next.top}px`;
      indicator.style.left = `${next.left}px`;
      indicator.style.width = `${next.width}px`;
      indicator.style.height = `${next.height}px`;
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [highlightId, measure]);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id as NavId | undefined;
        if (id) setActive(id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sheetRef}
      className="flex flex-1 flex-col rounded-[2rem] bg-black/3 pt-4 dark:bg-[#111] sm:pt-6"
      style={{ opacity: 0, filter: "blur(8px)", transform: "translateY(30px)" }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col gap-4 px-4 pb-10 lg:flex-row lg:items-start lg:gap-5 lg:px-6 lg:pb-16">
        <aside className="w-full shrink-0 rounded-3xl bg-white p-4 dark:bg-[#1a1a1a] lg:sticky lg:top-24 lg:w-56 lg:p-5">
          <p className="font-geist-medium mb-3 px-2 text-xs tracking-wide text-black/40 uppercase dark:text-white/40">
            On this page
          </p>
          <nav
            ref={listRef}
            className="relative flex flex-row gap-1 overflow-x-auto lg:flex-col lg:overflow-visible"
            aria-label="Docs"
            onMouseLeave={() => setHovered(null)}
          >
            <div
              ref={indicatorRef}
              aria-hidden
              className="pointer-events-none absolute rounded-full bg-black/[0.06] opacity-0 dark:bg-white/[0.10]"
            />
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={(node) => {
                  itemRefs.current[item.id] = node;
                }}
                onMouseEnter={() => setHovered(item.id)}
                aria-current={active === item.id ? "location" : undefined}
                className="font-geist-medium relative z-10 shrink-0 rounded-full px-3 py-2 text-sm text-black dark:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 flex-1 rounded-3xl bg-white px-6 py-8 sm:px-8 sm:py-10 lg:pb-[40vh] dark:bg-[#1a1a1a]">
          {children}
        </article>
      </div>
    </section>
  );
}
