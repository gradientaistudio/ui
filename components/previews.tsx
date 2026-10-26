"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Accordion from "@/components/ui/accordion";
import AccordionUsage from "@/components/ui/accordion-usage";
import Button from "@/components/ui/button";
import ButtonUsage from "@/components/ui/button-usage";
import ButtonRipple from "@/components/ui/button-ripple";
import ButtonRippleUsage from "@/components/ui/button-ripple-usage";
import Checkbox from "@/components/ui/checkbox";
import CheckboxUsage from "@/components/ui/checkbox-usage";
import InputUsage from "@/components/ui/input-usage";
import InputLineUsage from "@/components/ui/input-line-usage";
import RadioGroup from "@/components/ui/radio-group";
import RadioGroupUsage from "@/components/ui/radio-group-usage";
import Switch from "@/components/ui/switch";
import SwitchUsage from "@/components/ui/switch-usage";
import Switch2 from "@/components/ui/switch-2";
import Switch2Usage from "@/components/ui/switch-2-usage";
import Tabs from "@/components/ui/tabs";
import TabsUsage from "@/components/ui/tabs-usage";
import TextareaUsage from "@/components/ui/textarea-usage";
import RippleIconButton from "@/components/ripple-icon-button";
import type { ComponentSlug } from "@/lib/components";

function Panel({
  children,
  center = false,
  openHref,
}: {
  children: ReactNode;
  center?: boolean;
  openHref?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl bg-white text-black dark:bg-[#1a1a1a] dark:text-white ${
        center ? "p-8 text-center sm:p-12 lg:p-16" : "px-4 py-4 sm:px-8 lg:py-20"
      }`}
    >
      {openHref ? (
        <div className="absolute top-4 right-4 z-10">
          <RippleIconButton href={openHref} ariaLabel="Open preview in new tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.7,6.7h10.61s0,10.61,0,10.61M17.3,6.7l-10.61,10.61"
              />
            </svg>
          </RippleIconButton>
        </div>
      ) : null}
      {children}
    </div>
  );
}

/** Scales content down (never up) so it fits the preview frame while keeping proportions. */
function FitScale({ children, padding = 24 }: { children: ReactNode; padding?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const update = () => {
      // clientWidth/Height ignore CSS transforms (needed for 3D perspective previews).
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const contentW = content.offsetWidth;
      const contentH = content.offsetHeight;
      if (contentW <= 0 || contentH <= 0 || cw <= 0 || ch <= 0) return;
      const next = Math.min(1, (cw - padding * 2) / contentW, (ch - padding * 2) / contentH);
      setScale(Number.isFinite(next) && next > 0 ? next : 1);
    };

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(update);
    });
    ro.observe(container);
    ro.observe(content);
    update();
    return () => ro.disconnect();
  }, [padding]);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div
        ref={contentRef}
        inert
        className="pointer-events-none w-max shrink-0 origin-center text-black dark:text-white"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}

const cardTabs = [
  {
    label: "Tab 1",
    content: <p className="text-sm">First panel</p>,
  },
  {
    label: "Tab 2",
    content: <p className="text-sm">Second panel</p>,
  },
  {
    label: "Tab 3",
    content: <p className="text-sm">Third panel</p>,
  },
];

export function CardPreview({ slug }: { slug: ComponentSlug }) {
  switch (slug) {
    case "accordion":
      return (
        <FitScale>
          <Accordion
            items={[
              {
                title: <span className="text-base">Accordion title</span>,
                content: <p>Section content</p>,
              },
              {
                title: <span className="text-base">Another section</span>,
                content: <p>Section content</p>,
              },
              {
                title: <span className="text-base">Third section</span>,
                content: <p>Section content</p>,
              },
            ]}
          />
        </FitScale>
      );
    case "button-simple":
      return (
        <FitScale>
          <Button>Button Simple</Button>
        </FitScale>
      );
    case "button-ripple":
      return (
        <FitScale>
          <ButtonRipple>Button Ripple</ButtonRipple>
        </FitScale>
      );
    case "checkbox":
      return (
        <FitScale>
          <Checkbox />
        </FitScale>
      );
    case "input-pill":
      return (
        <FitScale>
          <div className="w-[250px]">
            <InputUsage />
          </div>
        </FitScale>
      );
    case "input-line":
      return (
        <FitScale>
          <div className="w-[250px]">
            <InputLineUsage />
          </div>
        </FitScale>
      );
    case "radio-group":
      return (
        <FitScale>
          <RadioGroup options={["Option 1", "Option 2", "Option 3"]} />
        </FitScale>
      );
    case "switch":
      return (
        <FitScale>
          <Switch />
        </FitScale>
      );
    case "switch-2":
      return (
        <FitScale>
          <Switch2 />
        </FitScale>
      );
    case "tabs":
      return (
        <FitScale>
          <div className="rounded-3xl p-3">
            <Tabs tabs={cardTabs} />
          </div>
        </FitScale>
      );
    case "textarea":
      return (
        <FitScale>
          <div className="w-[250px]">
            <TextareaUsage />
          </div>
        </FitScale>
      );
  }
}

export function DocPreview({
  slug,
  standalone = false,
}: {
  slug: ComponentSlug;
  standalone?: boolean;
}) {
  const openHref = standalone ? undefined : `/preview/${slug}`;

  switch (slug) {
    case "accordion":
      return (
        <Panel openHref={openHref}>
          <AccordionUsage />
        </Panel>
      );
    case "button-simple":
      return (
        <Panel center openHref={openHref}>
          <ButtonUsage />
        </Panel>
      );
    case "button-ripple":
      return (
        <Panel center openHref={openHref}>
          <ButtonRippleUsage />
        </Panel>
      );
    case "checkbox":
      return (
        <Panel center openHref={openHref}>
          <CheckboxUsage />
        </Panel>
      );
    case "input-pill":
      return (
        <Panel center openHref={openHref}>
          <div className="mx-auto max-w-[400px]">
            <InputUsage />
          </div>
        </Panel>
      );
    case "input-line":
      return (
        <Panel center openHref={openHref}>
          <div className="mx-auto max-w-[400px]">
            <InputLineUsage />
          </div>
        </Panel>
      );
    case "radio-group":
      return (
        <Panel center openHref={openHref}>
          <div className="mx-auto max-w-[640px]">
            <RadioGroupUsage />
          </div>
        </Panel>
      );
    case "switch":
      return (
        <Panel center openHref={openHref}>
          <SwitchUsage />
        </Panel>
      );
    case "switch-2":
      return (
        <Panel center openHref={openHref}>
          <Switch2Usage />
        </Panel>
      );
    case "tabs":
      return (
        <Panel openHref={openHref}>
          <div className="mx-auto max-w-[400px]">
            <TabsUsage />
          </div>
        </Panel>
      );
    case "textarea":
      return (
        <Panel openHref={openHref}>
          <div className="mx-auto max-w-[400px]">
            <TextareaUsage />
          </div>
        </Panel>
      );
  }
}
