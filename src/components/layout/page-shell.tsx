import type { PropsWithChildren } from "react";
import { SiteHeader } from "@/components/layout/site-header";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="page-shell bg-[var(--background)] text-[var(--foreground)]">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-10 pt-5 md:px-8 lg:px-12">
        <SiteHeader />
        {children}
      </div>
    </div>
  );
}

