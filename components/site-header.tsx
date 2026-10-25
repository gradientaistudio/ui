"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientMark from "@/components/gradient-mark";
import ThemeToggle from "@/components/theme-toggle";
import ViewToggle, { VIEW_TABS } from "@/components/view-toggle";

function IconMenuBars({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className ?? "size-5"}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M 3.75 8.24 L 20.25 8.24 M 3.75 15.76 L 20.25 15.76" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className ?? "size-5"}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

function GitHubLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="https://github.com/gradientaistudio/ui"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Gradient UI on GitHub"
      className={`flex size-8 cursor-pointer items-center justify-center text-black transition-transform duration-300 hover:scale-90 dark:text-white lg:size-auto ${compact ? "lg:p-0" : "lg:p-1"}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12.01.2C5.37.2,0,5.61,0,12.3c0,5.35,3.44,9.88,8.21,11.48.6.12.82-.26.82-.58,0-.28-.02-1.24-.02-2.24-3.34.72-4.04-1.44-4.04-1.44-.54-1.4-1.33-1.76-1.33-1.76-1.09-.74.08-.74.08-.74,1.21.08,1.85,1.24,1.85,1.24,1.07,1.84,2.8,1.32,3.5,1,.1-.78.42-1.32.76-1.62-2.66-.28-5.47-1.32-5.47-5.97,0-1.32.48-2.4,1.23-3.24-.12-.3-.54-1.54.12-3.21,0,0,1.01-.32,3.3,1.24.98-.26,1.99-.4,3-.4,1.01,0,2.05.14,3,.4,2.29-1.56,3.3-1.24,3.3-1.24.66,1.66.24,2.9.12,3.21.78.84,1.23,1.92,1.23,3.24,0,4.65-2.8,5.67-5.49,5.97.44.38.82,1.1.82,2.24,0,1.62-.02,2.92-.02,3.33,0,.32.22.7.82.58,4.77-1.6,8.21-6.13,8.21-11.48.02-6.69-5.37-12.1-11.99-12.1Z" />
      </svg>
    </a>
  );
}

export default function SiteHeader({ isDark = false }: { isDark?: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeMobile();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => setReady(true));
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, []);

  const compact = scrolled;

  return (
    <>
      <div className="h-[72px] shrink-0" aria-hidden />
      <div
        className={
          mobileOpen
            ? "fixed inset-0 z-50 overflow-y-auto bg-white dark:bg-[#151515] lg:contents"
            : "fixed inset-x-0 top-0 z-50"
        }
      >
        <div className={mobileOpen ? "flex min-h-dvh flex-col lg:contents" : undefined}>
          <div className={`nav-frame${compact ? " is-compact" : ""}${ready ? " is-ready" : ""}`}>
            <header
              className={`nav-shell flex w-full items-center justify-between ${
                compact
                  ? "is-compact rounded-full border border-black/[0.08] bg-white/40 py-2 pl-3.5 pr-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:pl-3.5 lg:pr-4 dark:border-white/10 dark:bg-black/40 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                  : "rounded-none px-0 py-2 lg:py-3"
              }${ready ? " is-ready" : ""}`}
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-black dark:text-white"
                onClick={(event) => {
                  closeMobile();
                  if (pathname === "/") {
                    event.preventDefault();
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <GradientMark className="size-6" round={compact} />
                <span className="font-everett-medium text-base uppercase leading-none">Gradient UI</span>
              </Link>
              <div className="flex items-center gap-1">
                <div className="hidden lg:block">
                  <ViewToggle />
                </div>
                <div className={`flex items-center ${compact ? "gap-1 lg:gap-2.5" : "gap-1 lg:gap-1"}`}>
                  <GitHubLink compact={compact} />
                  <ThemeToggle initialDark={isDark} compact={compact} />
                  <button
                    type="button"
                    onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-black/[0.08] bg-white/40 text-black shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl hover:bg-white/60 active:scale-[0.97] dark:border-white/[0.06] dark:bg-black/40 dark:text-white dark:hover:bg-black/60 lg:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  >
                    {mobileOpen ? <IconClose className="size-5" /> : <IconMenuBars className="size-5" />}
                  </button>
                </div>
              </div>
            </header>
          </div>

          {mobileOpen ? (
            <nav className="flex flex-1 flex-col px-6 pt-4 lg:hidden" aria-label="Mobile">
              {VIEW_TABS.map((tab, index) => (
                <Link
                  key={tab.id}
                  href={tab.href}
                  onClick={closeMobile}
                  className={`font-geist-medium block py-4 text-base text-black dark:text-white ${
                    index === VIEW_TABS.length - 1
                      ? ""
                      : "border-b border-black/[0.08] dark:border-white/[0.06]"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </>
  );
}
