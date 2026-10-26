"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PreviewColumn from "@/components/preview-column";
import { runWhenMobileMenuClear } from "@/lib/when-mobile-menu-clear";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const componentRef1 = useRef<HTMLDivElement | null>(null);
  const componentRef2 = useRef<HTMLDivElement | null>(null);
  const componentRef3 = useRef<HTMLDivElement | null>(null);
  const textWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return runWhenMobileMenuClear(() => {
      let ctx: gsap.Context | undefined;
      const timeoutId = window.setTimeout(() => {
        requestAnimationFrame(() => {
          if (!projectRef.current) return;

          ctx = gsap.context(() => {
            if (textWrapperRef.current) {
              const rect = textWrapperRef.current.getBoundingClientRect();
              const isInView = rect.top < window.innerHeight * 0.8;

              if (isInView) {
                gsap.to(textWrapperRef.current, {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                });
              } else {
                gsap.fromTo(
                  textWrapperRef.current,
                  { opacity: 0, filter: "blur(8px)", y: 30 },
                  {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: textWrapperRef.current,
                      start: "top 80%",
                      toggleActions: "play none none reverse",
                      immediateRender: false,
                    },
                    immediateRender: false,
                  },
                );
              }
            }

            if (wrapperRef.current) {
              gsap.to(wrapperRef.current, {
                width: "100%",
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
              });
            }

            if (gridRef.current) {
              gsap.to(gridRef.current, {
                opacity: 1,
                visibility: "visible",
                duration: 1,
                ease: "power3.out",
              });
            }

            if (componentRef1.current) {
              gsap.fromTo(
                componentRef1.current,
                { y: -200 },
                {
                  y: -400,
                  force3D: true,
                  scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                  },
                },
              );
            }

            if (componentRef2.current) {
              gsap.fromTo(
                componentRef2.current,
                { y: 200 },
                {
                  y: 300,
                  force3D: true,
                  scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                  },
                },
              );
            }

            if (componentRef3.current) {
              gsap.fromTo(
                componentRef3.current,
                { y: -300 },
                {
                  y: -600,
                  force3D: true,
                  scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                  },
                },
              );
            }
          }, projectRef);
        });
      }, 100);

      return () => {
        window.clearTimeout(timeoutId);
        ctx?.revert();
      };
    });
  }, []);

  return (
    <div className="pt-6 pb-12 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div
          ref={textWrapperRef}
          className="mx-auto pt-2 pb-10 text-center lg:pt-6 lg:pb-20"
          style={{ opacity: 0, filter: "blur(8px)", transform: "translateY(30px)" }}
        >
          <h1 className="font-everett-medium mb-3 text-6xl tracking-[-0.05em] lg:text-8xl lg:leading-[1.1]">
            Ship faster
          </h1>
          <p className="mx-auto max-w-[600px] text-xl font-light text-black/60 sm:text-2xl dark:text-white/60">
            Open source React and Tailwind CSS UI components designed to kickstart your next project
          </p>
        </div>

        <div ref={projectRef} className="relative flex w-full justify-center">
          <div
            ref={wrapperRef}
            className="relative h-[400px] overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] lg:h-[600px] dark:border-white/20 dark:bg-white/[0.03]"
            style={{ width: "80%", opacity: 0 }}
          >
            <div
              ref={gridRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
            >
              <div
                className="origin-center scale-50 rotate-x-45 -rotate-z-30 transform-3d pointer-events-none grid gap-8 lg:scale-100"
                style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                <div ref={componentRef1} className="relative w-[480px]">
                  <PreviewColumn />
                </div>
                <div ref={componentRef2} className="relative w-[480px]">
                  <PreviewColumn reverse />
                </div>
                <div ref={componentRef3} className="relative w-[480px]">
                  <PreviewColumn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
