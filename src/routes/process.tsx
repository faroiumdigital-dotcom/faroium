import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Faroium Digital" },
      {
        name: "description",
        content:
          "A calm, deliberate workflow. Clarity first. Craft second. Care always. Our 7-step process from Discover to Launch & Support.",
      },
      { property: "og:title", content: "Process — Faroium Digital" },
      { property: "og:description", content: "Clarity first. Craft second. Care always." },
      { property: "og:url", content: "https://faroium.com/process" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/process" }],
  }),
  component: Process,
});

const steps = [
  { n: "01", t: "Discover", d: "Understand business goals." },
  { n: "02", t: "Strategy", d: "Structure systems." },
  { n: "03", t: "Design", d: "Modern interfaces." },
  { n: "04", t: "Development", d: "Fast scalable builds." },
  { n: "05", t: "Automation", d: "AI and workflows." },
  { n: "06", t: "Optimization", d: "SEO and conversions." },
  { n: "07", t: "Launch & Support", d: "Continuous improvement." },
];

function Process() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Process"
        title={
          <>
            A calm, <em className="italic">deliberate</em> workflow.
          </>
        }
        lead="Clarity first. Craft second. Care always."
      />

      <section>
        <div className="container-x py-20 md:py-28 space-y-5">
          {steps.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <article className="grid md:grid-cols-12 gap-8 rounded-2xl border border-border bg-card p-8 md:p-14 hover-lift">
                <div className="md:col-span-3">
                  <p className="font-serif text-amber text-3xl">{p.n}</p>
                  <p className="mt-4 font-serif text-3xl md:text-4xl text-ink">{p.t}</p>
                </div>
                <div className="md:col-span-9 flex items-center">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/85">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-warm">
        <div className="container-x py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h3 className="display text-4xl md:text-5xl text-ink">
              Ready to build a system that actually grows your business?
            </h3>
          </div>
          <div className="lg:col-span-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-medium"
            >
              Start Your Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
