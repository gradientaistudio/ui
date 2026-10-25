import type { Metadata } from "next";
import ContentSheet from "@/components/content-sheet";
import LegalToggle from "@/components/legal-toggle";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Gradient UI handles privacy and site analytics.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[1120px] px-6 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <h1 className="font-everett-medium text-center text-[1.7rem] leading-[1.12] tracking-[-0.05em] text-black sm:text-[2.5rem] dark:text-white">
          Privacy
        </h1>
      </div>
      <ContentSheet className="mt-8">
        <LegalToggle view="privacy" />
        <div className="mx-auto mt-8 max-w-2xl space-y-6 text-sm leading-relaxed text-black/80 dark:text-white/80">
          <section className="space-y-3">
            <h2 className="text-base font-medium text-black dark:text-white">What we collect</h2>
            <p>
              We use analytics to understand general traffic to the site — for example, which pages
              are visited and how often. This helps us improve the library and documentation.
              Analytics are used for aggregate traffic insights only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-medium text-black dark:text-white">What we don’t do</h2>
            <p>
              We do not sell personal information. We do not build user profiles for advertising. We
              do not offer login, accounts, or user-generated content on this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-medium text-black dark:text-white">Third-party services</h2>
            <p>
              The site may be hosted and measured with standard web infrastructure and analytics
              providers. Those services may process technical data needed to deliver pages and
              report traffic, under their own privacy practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-medium text-black dark:text-white">Contact</h2>
            <p>
              If you have questions about this privacy notice, you can open an issue on the{" "}
              <a
                href="https://github.com/gradientaistudio/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue underline underline-offset-2"
              >
                GitHub repository
              </a>
              .
            </p>
          </section>
        </div>
      </ContentSheet>
    </div>
  );
}
