import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingCTA } from "./FloatingCTA";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-20 md:pt-24">{children}</main>
      <SiteFooter />
      <FloatingCTA />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm pointer-events-none" />
      <div className="container-x relative pt-6 md:pt-1 pb-16 md:pb-24">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-8xl text-ink max-w-5xl animate-rise delay-1">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise delay-2">
            {lead}
          </p>
        )}
      </div>
      <div className="hairline" />
    </section>
  );
}
