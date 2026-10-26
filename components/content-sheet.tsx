"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { runWhenMobileMenuClear } from "@/lib/when-mobile-menu-clear";

export default function ContentSheet({
  children,
  className = "mt-12",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sheetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return runWhenMobileMenuClear(() => {
      if (!sheetRef.current) return () => {};
      const tween = gsap.fromTo(
        sheetRef.current,
        { opacity: 0, filter: "blur(8px)", y: 30 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.12,
          overwrite: "auto",
        },
      );
      return () => {
        tween.kill();
      };
    });
  }, []);

  return (
    <section
      ref={sheetRef}
      className={`flex flex-1 flex-col rounded-[2rem] bg-black/3 dark:bg-[#111] ${className}`}
      style={{ opacity: 0, filter: "blur(8px)", transform: "translateY(30px)" }}
    >
      <div className="mx-auto w-full max-w-[1120px] flex-1 px-6 pt-8 pb-10">{children}</div>
    </section>
  );
}
