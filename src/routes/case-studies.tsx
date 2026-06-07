import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Faroium Digital" },
      { name: "description", content: "How we engineered measurable growth for modern brands — websites, AI and automation case studies." },
      { property: "og:title", content: "Case Studies — Faroium Digital" },
      { property: "og:description", content: "Outcomes, not just deliverables." },
      { property: "og:url", content: "https://faroium.com/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/case-studies" }],
  }),
  component: CaseStudies,
});

const cases = [
  { client: "Northwind Studio", sector: "Creative SaaS", title: "From founder-led to inbound-led in one quarter.", metric: "+184%", metricLabel: "qualified inbound", body: "We rebuilt their site as a sales surface and added an AI assistant to qualify visitors before they ever spoke to a human." },
  { client: "Levr Capital", sector: "Investment", title: "An investor portal that summarizes itself.", metric: "−62%", metricLabel: "manual reporting hours", body: "A bespoke portal with AI-generated deal memos and automated LP updates wired into their existing CRM." },
  { client: "Atelier 9", sector: "Boutique consulting", title: "Compounding SEO, without the content factory.", metric: "+230%", metricLabel: "organic traffic", body: "A focused content system, technical SEO overhaul and CRO playbook delivered measurable lift in two quarters." },
  { client: "Helix Labs", sector: "Biotech R&D", title: "An internal AI assistant for five years of research.", metric: "9.4×", metricLabel: "faster knowledge retrieval", body: "Private RAG over their archive and lab notes — answers cited, secure, and trusted by senior scientists." },
];

function CaseStudies() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title={<>Outcomes, not just <em className="italic">artifacts</em>.</>}
        lead="A look behind the work — what we built, why, and the measurable difference it made."
      />
      <section>
        <div className="container-x py-20 space-y-6">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i*80}>
              <article className="grid md:grid-cols-12 gap-8 rounded-2xl border border-border bg-card p-8 md:p-12 hover-lift">
                <div className="md:col-span-3">
                  <p className="eyebrow">{c.sector}</p>
                  <p className="mt-4 font-serif text-2xl text-ink">{c.client}</p>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-3xl md:text-4xl text-ink leading-tight">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm group">
                    Discuss a similar project <ArrowUpRight size={14} className="group-hover:text-amber transition" />
                  </Link>
                </div>
                <div className="md:col-span-4">
                  <div className="rounded-xl bg-warm p-6 h-full flex flex-col justify-center">
                    <p className="font-serif text-6xl md:text-7xl text-ink leading-none">{c.metric}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{c.metricLabel}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
