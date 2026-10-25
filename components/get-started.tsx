"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";
import MouseFreeformGradient from "@/components/mouse-freeform-gradient";
import PreviewColumn from "@/components/preview-column";

gsap.registerPlugin(ScrollTrigger);

function PerspectiveGrid({
  columnRef1,
  columnRef2,
  columnRef3,
}: {
  columnRef1?: React.RefObject<HTMLDivElement | null>;
  columnRef2?: React.RefObject<HTMLDivElement | null>;
  columnRef3?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="origin-center scale-50 rotate-x-45 -rotate-z-30 transform-3d grid gap-8 lg:scale-100"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <div ref={columnRef1} className="relative w-[480px]">
          <PreviewColumn />
        </div>
        <div ref={columnRef2} className="relative w-[480px]">
          <PreviewColumn reverse />
        </div>
        <div ref={columnRef3} className="relative w-[480px]">
          <PreviewColumn />
        </div>
      </div>
    </div>
  );
}

export default function GetStarted() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const columnRef1 = useRef<HTMLDivElement>(null);
  const columnRef2 = useRef<HTMLDivElement>(null);
  const columnRef3 = useRef<HTMLDivElement>(null);
  const blurRef1 = useRef<HTMLDivElement>(null);
  const blurRef2 = useRef<HTMLDivElement>(null);
  const blurRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, filter: "blur(8px)", y: 30 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      const scrub = {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      };

      const pairs: [React.RefObject<HTMLDivElement | null>, number, number][] = [
        [columnRef1, -200, -400],
        [columnRef2, 200, 300],
        [columnRef3, -300, -600],
        [blurRef1, -200, -400],
        [blurRef2, 200, 300],
        [blurRef3, -300, -600],
      ];

      for (const [ref, from, to] of pairs) {
        if (!ref.current) continue;
        gsap.fromTo(ref.current, { y: from }, { y: to, force3D: true, scrollTrigger: scrub });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto w-full max-w-screen-xl px-4">
      <div
        ref={cardRef}
        className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] px-6 lg:h-[600px] dark:border-white/20 dark:bg-white/[0.03]"
      >
        <div className="absolute inset-0 z-0" aria-hidden>
          <PerspectiveGrid columnRef1={columnRef1} columnRef2={columnRef2} columnRef3={columnRef3} />
        </div>

        <MouseFreeformGradient reveal>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 scale-[1.45] blur-[90px]">
              <PerspectiveGrid columnRef1={blurRef1} columnRef2={blurRef2} columnRef3={blurRef3} />
            </div>
            <div className="absolute inset-0 scale-[1.45] blur-[90px]" aria-hidden>
              <PerspectiveGrid />
            </div>
          </div>
        </MouseFreeformGradient>

        <div
          ref={textRef}
          className="relative z-10 mx-auto max-w-[640px] text-center"
          style={{ opacity: 0, filter: "blur(8px)", transform: "translateY(30px)" }}
        >
          <h2 className="font-everett-medium mb-3 text-6xl tracking-[-0.05em] text-black lg:text-8xl lg:leading-[1.1] dark:text-white">
            Get Started
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-xl font-light text-black/60 sm:text-2xl dark:text-white/60">
            Browse the catalog, copy a component, and drop it into your next React and Tailwind project
          </p>
          <Button href="/components">Explore components</Button>
        </div>
      </div>
    </div>
  );
}
