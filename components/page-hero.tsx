"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageHero({ title }: { title: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const tween = gsap.to(titleRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
    return () => {
      tween.kill();
    };
  }, [title]);

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 pt-12 pb-10 text-center sm:pt-14 lg:pt-20 lg:pb-14">
      <h1
        ref={titleRef}
        className="font-everett-medium text-6xl tracking-[-0.05em] text-black lg:text-8xl lg:leading-[1.1] dark:text-white"
        style={{ opacity: 0, filter: "blur(8px)", transform: "translateY(30px)" }}
      >
        {title}
      </h1>
    </div>
  );
}
