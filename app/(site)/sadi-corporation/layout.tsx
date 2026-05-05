import type { ReactNode } from "react";
import { SectionSubnav } from "@/components/section-subnav";
import { sadiSectionLinks } from "@/lib/section-nav";

export default function SadiLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
      <SectionSubnav baseLabel="Sadi Corporation" items={[...sadiSectionLinks]} />
      {children}
    </div>
  );
}
