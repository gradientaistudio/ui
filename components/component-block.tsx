"use client";

import { type ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ComponentBlockProps = {
  title: string;
  description: string;
  items: ReactNode[];
  children?: ReactNode;
  reverse?: boolean;
};

export default function ComponentBlock({
  title,
  description,
  items,
  children,
  reverse = false,
}: ComponentBlockProps) {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!projectRef.current) return;

    const ctx = gsap.context(() => {
      items.forEach((_, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        gsap.to(itemRefs.current[i], {
          y: -50 * direction,
          force3D: true,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, projectRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-10 lg:pb-20">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className={`flex flex-col px-6 py-10 sm:px-10 lg:px-16 lg:py-20 ${reverse ? "order-2" : "order-2 lg:order-1"}`}>
          <h2 className="font-everett-medium mb-2 text-4xl tracking-[-0.05em] lg:text-6xl lg:leading-[1.1]">
            {title}
          </h2>
          <div className="mb-8 max-w-[600px] text-black/60 dark:text-white/60">
            <p className="mb-8 text-xl font-light sm:text-2xl">{description}</p>
            {children}
          </div>
        </div>
        <div
          ref={projectRef}
          className={`flex w-full justify-center ${reverse ? "order-1 lg:justify-start" : "order-1 lg:order-2 lg:justify-end"}`}
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] lg:h-[600px] dark:border-white/20 dark:bg-white/[0.04]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pointer-events-none grid h-full w-full grid-cols-2 items-center gap-5 px-4">
                {items.map((item, i) => {
                  const direction = i % 2 === 0 ? -1 : 1;
                  const startY = i === 0 ? -160 : 40 * direction;

                  return (
                    <div
                      key={i}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      className="relative"
                      style={{ transform: `translateY(${startY}px)` }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
