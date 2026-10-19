export default function ContentSheet({
  children,
  className = "mt-12",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex flex-1 flex-col rounded-[2rem] bg-black/3 dark:bg-[#111] ${className}`}>
      <div className="mx-auto w-full max-w-[1120px] flex-1 px-6 pt-8 pb-10">{children}</div>
    </section>
  );
}
