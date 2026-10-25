import type { Metadata } from "next";
import ContentSheet from "@/components/content-sheet";
import LegalToggle from "@/components/legal-toggle";

export const metadata: Metadata = {
  title: "License",
  description: "Gradient UI is open source software licensed under the MIT License.",
};

export default function LicensePage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-[1120px] px-6 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <h1 className="font-everett-medium text-center text-[1.7rem] leading-[1.12] tracking-[-0.05em] text-black sm:text-[2.5rem] dark:text-white">
          License
        </h1>
      </div>
      <ContentSheet className="mt-8">
        <LegalToggle view="license" />
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-black/80 dark:text-white/80">
            <h2 className="text-base font-medium text-black dark:text-white">MIT License</h2>
            <p>© 2026 Gradient AI</p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the &quot;Software&quot;), to deal in the
              Software without restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
              and to permit persons to whom the Software is furnished to do so, subject to the
              following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
        </div>
      </ContentSheet>
    </div>
  );
}
