import type { Metadata } from "next";
import { ClientContent } from "@/components/under-development/client-content";

export const metadata: Metadata = {
  title: "Under Development | Crafted by ORVYN LABS",
  description: "This digital experience is currently being designed and developed by ORVYN LABS.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnderDevelopmentPage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-x-hidden overflow-y-auto text-foreground dark">
      <ClientContent />
    </main>
  );
}
