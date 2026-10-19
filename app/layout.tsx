import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gradient UI",
    template: "%s · Gradient UI",
  },
  description:
    "Open source React and Tailwind CSS UI components, designed to kickstart your next project.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const theme = (await cookies()).get("theme")?.value;
  const isDark = theme === "dark";

  return (
    <html
      lang="en"
      className={`h-full antialiased${isDark ? " dark" : ""}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
