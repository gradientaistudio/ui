"use client";

import { useState } from "react";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12,3v2.25M18.36,5.64l-1.59,1.59M21,12h-2.25M18.36,18.36l-1.59-1.59M12,18.75v2.25M7.23,16.77l-1.59,1.59M5.25,12h-2.25M7.23,7.23l-1.59-1.59M16.5,12c0,2.49-2.01,4.5-4.5,4.5s-4.5-2.01-4.5-4.5,2.01-4.5,4.5-4.5,4.5,2.01,4.5,4.5Z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

function setThemeCookie(theme: "dark" | "light") {
  document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
}

export default function ThemeToggle({
  initialDark = false,
  compact = false,
}: {
  initialDark?: boolean;
  compact?: boolean;
}) {
  const [isDark, setIsDark] = useState(initialDark);

  function toggleDarkMode() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    const theme = next ? "dark" : "light";
    localStorage.setItem("theme", theme);
    setThemeCookie(theme);
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex size-8 cursor-pointer items-center justify-center text-black transition-transform duration-300 hover:scale-90 dark:text-white lg:size-auto ${compact ? "lg:p-0" : "lg:p-1"}`}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
