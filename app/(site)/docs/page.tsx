import type { Metadata } from "next";
import Link from "next/link";
import {
  DocCallout,
  DocCodeBlock,
  DocInlineCode,
  DocPill,
  DocSteps,
  DocTerminal,
} from "@/components/docs-blocks";
import DocsShell from "@/components/docs-shell";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Docs",
  description: "How to use Gradient UI components and icons in your project.",
};

const linkClass = "text-neon-blue underline underline-offset-2";

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 space-y-5 border-b border-black/[0.06] py-10 first:pt-0 last:border-b-0 last:pb-0 dark:border-white/[0.08]"
    >
      <h2 className="font-everett-medium text-2xl tracking-[-0.03em] text-black sm:text-3xl dark:text-white">
        {title}
      </h2>
      <div className="space-y-5 text-sm leading-relaxed text-black/75 sm:text-[15px] dark:text-white/75">
        {children}
      </div>
    </section>
  );
}

export default function DocsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero title="Docs" />
      <DocsShell>
        <DocSection id="introduction" title="Introduction">
          <div className="flex flex-wrap gap-2">
            <DocPill>Next.js</DocPill>
            <DocPill>React 19</DocPill>
            <DocPill>Tailwind v4</DocPill>
            <DocPill>MIT</DocPill>
          </div>
          <p>
            <strong className="font-geist-medium text-black dark:text-white">Gradient UI</strong> is a
            catalog of React and Tailwind CSS components and SVG icons. Copy or command files into your app — browse a
            live preview, take the source, and adapt the styles.
          </p>
        </DocSection>

        <DocSection id="getting-started" title="Getting started">
          <p>Clone the repo to explore locally, contribute, or pull files into another app.</p>
          <DocTerminal
            title="bash"
            lines={[
              "$ git clone https://github.com/gradientaistudio/ui.git",
              "$ cd ui",
              "$ npm install",
              "$ npm run dev",
            ]}
          />
          <p>
            Open <DocInlineCode>http://localhost:3000</DocInlineCode>. Production:{" "}
            <DocInlineCode>npm run build</DocInlineCode> then <DocInlineCode>npm start</DocInlineCode>.
          </p>
          <p>
            To use a component elsewhere, copy it from <DocInlineCode>components/ui/</DocInlineCode>, ensure
            Tailwind resolves, and import it like any other file. Pair{" "}
            <DocInlineCode>-usage.tsx</DocInlineCode> files show the intended JSX shape.
          </p>
        </DocSection>

        <DocSection id="stack" title="Stack">
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              ["Next.js 16", "App Router, RSC + client components"],
              ["React 19", "Plain React primitives"],
              ["Tailwind CSS v4", "@theme tokens + class dark mode"],
              ["TypeScript", "Typed registry + ComponentSlug"],
              ["GSAP", "Homepage motion + catalog fades"],
              ["Syntax highlighter", "Preview / Code / Usage tabs"],
            ].map(([label, detail]) => (
              <li
                key={label}
                className="rounded-2xl border border-black/[0.06] px-4 py-3 dark:border-white/[0.08]"
              >
                <p className="font-geist-medium text-black dark:text-white">{label}</p>
                <p className="mt-0.5 text-sm text-black/55 dark:text-white/55">{detail}</p>
              </li>
            ))}
          </ul>
        </DocSection>

        <DocSection id="project-structure" title="Project structure">
          <DocCodeBlock
            language="bash"
            filename="tree"
            code={`app/
  (site)/           # Marketing + catalog routes
    page.tsx        # Homepage
    components/     # Component catalog
    icons/          # Icon catalog
    docs/           # This documentation
    [slug]/         # Individual component pages
  globals.css       # Tailwind theme, fonts, shared styles
tailwind.config.ts  # Linked from globals via @config
components/
  ui/               # Copy-ready UI primitives (+ *-usage.tsx)
  icons.tsx         # Icon registry (name, SVG, JSX)
  catalog.tsx       # Catalog grid + search + filter
lib/
  components.ts     # Component registry (slug, name, paths)
  load-code.ts      # Loads source for Preview / Code / Usage`}
          />
        </DocSection>

        <DocSection id="using-components" title="Using components">
          <p>
            Browse the{" "}
            <Link href="/components" className={linkClass}>
              Components
            </Link>{" "}
            catalog. Each detail page has Preview, Code, and Usage tabs.
          </p>
          <DocCodeBlock
            filename="example.tsx"
            language="tsx"
            code={`import Button from "@/components/ui/button"

export default function Example() {
  return <Button href="/components">Explore components</Button>
}`}
          />
        </DocSection>

        <DocSection id="component-catalog" title="Component catalog">
          <p>
            Entries live in <DocInlineCode>lib/components.ts</DocInlineCode> — slug, name, and paths for
            source + usage. Homepage previews and the catalog grid both read from this list.
          </p>
          <DocCodeBlock
            filename="lib/components.ts"
            language="ts"
            code={`{
  slug: "button-simple",
  name: "Button Simple",
  codePath: "components/ui/button.tsx",
  usagePath: "components/ui/button-usage.tsx",
}`}
          />
        </DocSection>

        <DocSection id="adding-components" title="Adding components">
          <DocSteps
            steps={[
              {
                title: "Create the primitive",
                body: (
                  <p>
                    Add <DocInlineCode>components/ui/your-component.tsx</DocInlineCode>.
                  </p>
                ),
              },
              {
                title: "Add a usage demo",
                body: (
                  <p>
                    Pair it with <DocInlineCode>components/ui/your-component-usage.tsx</DocInlineCode>.
                  </p>
                ),
              },
              {
                title: "Register it",
                body: (
                  <p>
                    Extend <DocInlineCode>lib/components.ts</DocInlineCode> with{" "}
                    <DocInlineCode>slug</DocInlineCode>, <DocInlineCode>name</DocInlineCode>,{" "}
                    <DocInlineCode>codePath</DocInlineCode>, and <DocInlineCode>usagePath</DocInlineCode>.
                  </p>
                ),
              },
              {
                title: "Wire the preview switch",
                body: (
                  <p>
                    Update <DocInlineCode>components/previews.tsx</DocInlineCode> so{" "}
                    <DocInlineCode>CardPreview</DocInlineCode> / <DocInlineCode>DocPreview</DocInlineCode>{" "}
                    stay exhaustive for <DocInlineCode>ComponentSlug</DocInlineCode>.
                  </p>
                ),
              },
            ]}
          />
          <DocCallout tone="warn" title="Keep the switch exhaustive">
            <p>
              TypeScript should complain if a new slug is missing from the preview switch. Don’t silence that
              with a default that hides missing previews.
            </p>
          </DocCallout>
        </DocSection>

        <DocSection id="icons" title="Icons">
          <p>
            Icons live in <DocInlineCode>components/icons.tsx</DocInlineCode> with{" "}
            <DocInlineCode>name</DocInlineCode>, rendered node, raw <DocInlineCode>svg</DocInlineCode>, and{" "}
            <DocInlineCode>jsx</DocInlineCode>. The{" "}
            <Link href="/icons" className={linkClass}>
              Icons
            </Link>{" "}
            page searches that list and offers copy actions.
          </p>
          <DocCodeBlock
            filename="components/icons.tsx"
            language="tsx"
            code={`{
  name: "filter-horizontal-2",
  renderedicon: (
    <svg viewBox="0 0 24 24" /* … */ />
  ),
  svg: \`<svg xmlns="http://www.w3.org/2000/svg" …>\`,
  jsx: \`<svg xmlns="http://www.w3.org/2000/svg" …>\`,
}`}
          />
          <DocCallout title="currentColor">
            <p>
              Icons use <DocInlineCode>currentColor</DocInlineCode>, so they inherit text color. Keep{" "}
              <DocInlineCode>viewBox=&quot;0 0 24 24&quot;</DocInlineCode> and a 1.5 stroke when adding
              glyphs.
            </p>
          </DocCallout>
        </DocSection>

        <DocSection id="theming" title="Theming">
          <p>
            Light and dark mode use a <DocInlineCode>dark</DocInlineCode> class on{" "}
            <DocInlineCode>&lt;html&gt;</DocInlineCode>. The root layout reads a{" "}
            <DocInlineCode>theme</DocInlineCode> cookie so the first paint matches preference. The header
            toggle also writes <DocInlineCode>localStorage.theme</DocInlineCode>.
          </p>
          <DocCodeBlock
            filename="theme-toggle.ts"
            language="ts"
            code={`document.documentElement.classList.toggle("dark", next)
localStorage.setItem("theme", theme)
document.cookie = \`theme=\${theme}; path=/; max-age=31536000; samesite=lax\``}
          />
          <DocCodeBlock
            filename="app/globals.css"
            language="css"
            code={`@config "../tailwind.config.ts";
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-charcoal: #1b1b1e;
  --color-drk-charcoal: #171719;
  --color-neon: #afff00;
  --color-neon-blue: #4d4dff;
  --color-teal: #30c1a5;
  --color-vanilla: #faf9f3;
}`}
          />
          <p>
            Use utilities like <DocInlineCode>bg-charcoal</DocInlineCode>,{" "}
            <DocInlineCode>text-neon-blue</DocInlineCode>, and{" "}
            <DocInlineCode>bg-vanilla</DocInlineCode>. Dark mode still uses the{" "}
            <DocInlineCode>dark:</DocInlineCode> variant.
          </p>
        </DocSection>

        <DocSection id="styling" title="Styling & fonts">
          <p>
            Global styles and font faces live in <DocInlineCode>app/globals.css</DocInlineCode>.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/[0.06] px-4 py-3 dark:border-white/[0.08]">
              <p className="text-xs tracking-wide text-black/40 uppercase dark:text-white/40">Body</p>
              <p className="mt-1 text-black dark:text-white">Suisse Intl Regular</p>
            </div>
            <div className="rounded-2xl border border-black/[0.06] px-4 py-3 dark:border-white/[0.08]">
              <p className="text-xs tracking-wide text-black/40 uppercase dark:text-white/40">Labels</p>
              <p className="font-geist-medium mt-1 text-black dark:text-white">Suisse Intl Medium</p>
              <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                <DocInlineCode>font-geist-medium</DocInlineCode>
              </p>
            </div>
            <div className="rounded-2xl border border-black/[0.06] px-4 py-3 dark:border-white/[0.08]">
              <p className="text-xs tracking-wide text-black/40 uppercase dark:text-white/40">Display</p>
              <p className="font-everett-medium mt-1 text-black dark:text-white">TWK Everett Medium</p>
              <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                <DocInlineCode>font-everett-medium</DocInlineCode>
              </p>
            </div>
          </div>
          <DocCallout tone="warn" title="When copying out">
            <p>
              Bring the font faces you need, or remap classes to your type scale. Components lean on Tailwind
              utilities, so remapping is usually a class rename.
            </p>
          </DocCallout>
        </DocSection>

        <DocSection id="license" title="License">
          <p>
            Released under the{" "}
            <Link href="/license" className={linkClass}>
              MIT License
            </Link>
            . © 2026 Gradient AI. See also{" "}
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>
            .
          </p>
        </DocSection>
      </DocsShell>
    </div>
  );
}
