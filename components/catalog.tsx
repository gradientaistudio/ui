"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import CatalogFilter from "@/components/catalog-filter";
import ContentSheet from "@/components/content-sheet";
import Icons from "@/components/icons";
import PageHero from "@/components/page-hero";
import { CardPreview } from "@/components/previews";
import RippleIconButton from "@/components/ripple-icon-button";
import { components } from "@/lib/components";

const COMPONENT_CATEGORIES = [
  "All",
  "Accordion",
  "Button",
  "Checkbox",
  "Input",
  "Radio",
  "Switch",
  "Tabs",
  "Textarea",
] as const;

export default function Catalog({ view }: { view: "components" | "icons" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [clearing, setClearing] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const clearHideRef = useRef<number>(0);

  useEffect(() => {
    setCategory("All");
  }, [view]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return components.filter((item) => {
      const matchesQuery = !needle || item.name.toLowerCase().includes(needle);
      const matchesCategory =
        category === "All" || item.name.toLowerCase().includes(category.toLowerCase());
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="flex flex-1 flex-col">
      <PageHero title={view === "icons" ? "Icons" : "Components"} />

      <ContentSheet>
      <div className="flex h-14 items-center gap-3 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 shrink-0 text-black dark:text-white"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.42 5.1c3.12 3.12 3.12 8.19 0 11.31-1.56 1.57-3.61 2.34-5.66 2.34s-4.1-.78-5.66-2.34c-3.12-3.12-3.12-8.19 0-11.31s8.19-3.12 11.31 0ZM21.27 21.27l-4.85-4.85" />
        </svg>
        <label className="sr-only" htmlFor="catalog-search">
          Search
        </label>
        <input
          ref={searchRef}
          id="catalog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          className="font-geist-medium h-full min-w-0 flex-1 bg-transparent text-sm leading-5 text-black outline-none placeholder:font-geist-medium placeholder:text-sm placeholder:leading-5 placeholder:text-black [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none dark:text-white dark:placeholder:text-white"
        />
        {query || clearing ? (
          <RippleIconButton
            ariaLabel="Clear search"
            className="shrink-0 px-5 py-2 hover:bg-black/[0.06] dark:hover:bg-white/[0.10]"
            onClick={() => {
              setClearing(true);
              setQuery("");
              searchRef.current?.focus();
              window.clearTimeout(clearHideRef.current);
              clearHideRef.current = window.setTimeout(() => setClearing(false), 560);
            }}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.7,18.3l12.6-12.6M5.7,5.7l12.6,12.6" />
            </svg>
          </RippleIconButton>
        ) : null}
        {view === "components" ? (
          <div className="ml-auto">
            <CatalogFilter
              categories={[...COMPONENT_CATEGORIES]}
              value={category}
              onChange={setCategory}
            />
          </div>
        ) : null}
      </div>

      {view === "components" ? (
        filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="group/card block">
                <div className="relative h-[220px] overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a]">
                  <CardPreview slug={item.slug} />
                </div>
                <p className="font-geist-medium mt-3 text-sm text-black/45 transition-colors group-hover/card:text-black dark:text-white/45 dark:group-hover/card:text-white">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm text-black/45 dark:text-white/45">No components match that search.</p>
        )
      ) : (
        <div className="mt-8">
          <Icons query={query} showSearch={false} />
        </div>
      )}
      </ContentSheet>
    </div>
  );
}
