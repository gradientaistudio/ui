"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CodePreview from "@/components/code-preview";
import DocTabs from "@/components/doc-tabs";
import { DocPreview } from "@/components/previews";
import RippleIconButton from "@/components/ripple-icon-button";
import type { ComponentSlug } from "@/lib/components";
import { runWhenMobileMenuClear } from "@/lib/when-mobile-menu-clear";

export default function ComponentView({
  name,
  slug,
  code,
  usage,
}: {
  name: string;
  slug: ComponentSlug;
  code: string;
  usage: string;
}) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return runWhenMobileMenuClear(() => {
      if (!headerRef.current) return () => {};
      const tween = gsap.fromTo(
        headerRef.current,
        { opacity: 0, filter: "blur(8px)", y: 30 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
      return () => {
        tween.kill();
      };
    });
  }, [name]);

  return (
    <div className="flex flex-1 flex-col">
      <div
        ref={headerRef}
        className="mx-auto flex w-full max-w-[1120px] flex-col items-center px-6 pt-14 pb-8 sm:pt-16 sm:pb-10"
        style={{ opacity: 0, filter: "blur(8px)", transform: "translateY(30px)" }}
      >
        <RippleIconButton
          href="/components"
          external={false}
          ariaLabel="Back to components"
          className="mb-6 gap-1.5 py-1.5 pr-3.5 pl-2.5 text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5L4.5 12L12 4.5M4.5 12H19.5" />
          </svg>
          <span>Back</span>
        </RippleIconButton>
        <h1 className="font-everett-medium text-center text-[1.7rem] leading-[1.12] tracking-[-0.05em] text-black sm:text-[2.5rem] dark:text-white">
          {name}
        </h1>
      </div>
      <DocTabs
        tabs={[
          { label: "Preview", content: <DocPreview slug={slug} /> },
          { label: "Code", content: <CodePreview code={code} /> },
          { label: "Usage", content: <CodePreview code={usage} /> },
        ]}
      />
    </div>
  );
}
