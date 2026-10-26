import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { cookies } from "next/headers";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const theme = (await cookies()).get("theme")?.value;
  const isDark = theme === "dark";

  return (
    <>
      <SiteHeader isDark={isDark} />
      <main className="site-main flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </>
  );
}
