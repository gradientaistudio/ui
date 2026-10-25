"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import RippleIconButton from "@/components/ripple-icon-button";

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

const lightStyle = {
  ...oneLight,
  'code[class*="language-"]': {
    ...oneLight['code[class*="language-"]'],
    background: "transparent",
  },
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    background: "transparent",
  },
};

const darkStyle = {
  ...nightOwl,
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    background: "transparent",
  },
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
  },
};

function CopyButton({ value, light = false }: { value: string; light?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <RippleIconButton
      ariaLabel={copied ? "Copied" : "Copy"}
      onClick={() => void handleCopy()}
      className={
        light
          ? "p-1.5 text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/10"
          : "p-1.5"
      }
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <polyline strokeLinecap="round" strokeLinejoin="round" fill="none" points="6.36 12.3 10.93 17.53 18.84 5.75" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-5">
          <rect fill="none" x="4.26" y="9.26" width="10.48" height="10.48" rx="2.07" ry="2.07" />
          <path
            fill="none"
            d="M14.74,14.74h2.94c1.14,0,2.07-.93,2.07-2.07v-6.34c0-1.14-.93-2.07-2.07-2.07h-6.34c-1.14,0-2.07.93-2.07,2.07v2.94"
          />
        </svg>
      )}
    </RippleIconButton>
  );
}

export function DocInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="font-geist-medium rounded-md bg-black/[0.05] px-1.5 py-0.5 text-[0.9em] text-black dark:bg-white/[0.08] dark:text-white">
      {children}
    </code>
  );
}

export function DocCodeBlock({
  code,
  language = "tsx",
  filename,
}: {
  code: string;
  language?: string;
  filename?: string;
}) {
  const isDark = useSyncExternalStore(subscribeToTheme, getIsDark, () => false);

  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-[#fafafa] dark:border-white/[0.08] dark:bg-[#0d1117]">
      <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] px-4 py-2.5 dark:border-white/[0.08]">
        <span className="font-geist-medium text-xs text-black/45 dark:text-white/45">
          {filename ?? language}
        </span>
        <CopyButton value={code} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDark ? darkStyle : lightStyle}
        customStyle={{
          margin: 0,
          padding: "1.1rem 1.25rem",
          fontSize: "13px",
          background: "transparent",
          borderRadius: 0,
        }}
        codeTagProps={{ style: { background: "transparent" } }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export function DocTerminal({
  lines,
  title = "Terminal",
}: {
  lines: string[];
  title?: string;
}) {
  const text = lines.join("\n");

  return (
    <div className="overflow-hidden rounded-2xl border border-black/80 bg-[#111113] shadow-[0_12px_40px_rgba(0,0,0,0.18)] dark:border-white/10">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
        <span className="font-geist-medium text-xs text-white/45">{title}</span>
        <CopyButton value={text} light />
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code>
          {lines.map((line, index) => {
            const isPrompt = line.startsWith("$ ") || line.startsWith("# ");
            const isComment = line.startsWith("#") && !line.startsWith("# ");
            return (
              <span key={`${index}-${line.slice(0, 12)}`} className="block">
                {isPrompt ? (
                  <>
                    <span className="text-[#28c840]">{line.slice(0, 1)}</span>
                    <span className="text-white/90">{line.slice(1)}</span>
                  </>
                ) : isComment ? (
                  <span className="text-white/35">{line}</span>
                ) : (
                  <span className="text-white/70">{line || " "}</span>
                )}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

export function DocCallout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "tip" | "warn";
  title: string;
  children: ReactNode;
}) {
  const styles = {
    info: {
      box: "border-black/[0.08] bg-black/[0.02] dark:border-white/[0.1] dark:bg-white/[0.03]",
      label: "text-black/70 dark:text-white/70",
    },
    tip: {
      box: "border-black/[0.08] bg-black/[0.02] dark:border-white/[0.1] dark:bg-white/[0.03]",
      label: "text-black/70 dark:text-white/70",
    },
    warn: {
      box: "border-black/[0.1] bg-black/[0.03] dark:border-white/[0.12] dark:bg-white/[0.04]",
      label: "text-black/80 dark:text-white/80",
    },
  }[tone];

  return (
    <aside className={`rounded-2xl border px-4 py-3.5 ${styles.box}`}>
      <p className={`font-geist-medium mb-1.5 text-sm ${styles.label}`}>{title}</p>
      <div className="space-y-2 text-sm leading-relaxed text-black/65 dark:text-white/65">{children}</div>
    </aside>
  );
}

export function DocKbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="font-geist-medium inline-flex items-center rounded-md border border-black/10 bg-white px-1.5 py-0.5 text-[11px] text-black shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:border-white/15 dark:bg-white/10 dark:text-white">
      {children}
    </kbd>
  );
}

export function DocSteps({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-3">
          <span className="font-geist-medium flex size-7 shrink-0 items-center justify-center rounded-full bg-charcoal text-xs text-white dark:bg-white dark:text-charcoal">
            {index + 1}
          </span>
          <div className="min-w-0 space-y-1.5 pt-0.5">
            <p className="font-geist-medium text-black dark:text-white">{step.title}</p>
            <div className="text-sm leading-relaxed text-black/70 dark:text-white/70">{step.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DocPill({ children }: { children: ReactNode; color?: "gray" | "green" | "blue" | "violet" }) {
  return (
    <span className="font-geist-medium inline-flex rounded-full bg-black/[0.05] px-2.5 py-1 text-xs text-black/65 dark:bg-white/[0.08] dark:text-white/65">
      {children}
    </span>
  );
}
