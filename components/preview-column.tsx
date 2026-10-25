import { CardPreview } from "@/components/previews";
import { components } from "@/lib/components";

export default function PreviewColumn({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...components].reverse() : components;
  const stacked = [...items, ...items];

  return (
    <div className="grid grid-cols-1 gap-5">
      {stacked.map((item, index) => (
        <div
          key={`${item.slug}-${index}`}
          className="w-full rounded-2xl border border-black/10 bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:border-white/15 dark:bg-[#1a1a1a] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        >
          <div className="relative h-[200px] overflow-hidden rounded-xl bg-white dark:bg-[#1a1a1a]">
            <CardPreview slug={item.slug} />
          </div>
          <p className="font-geist-medium mt-2 px-1 pb-1 text-sm text-black/55 dark:text-white/55">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
