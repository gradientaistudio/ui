import type { Metadata } from "next";
import Catalog from "@/components/catalog";

export const metadata: Metadata = {
  title: "Components",
  description: "Open source React and Tailwind CSS UI components, designed to kickstart your next project.",
};

export default function ComponentsPage() {
  return <Catalog view="components" />;
}
