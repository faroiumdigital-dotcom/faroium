import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Bot, Palette, TrendingUp, Wrench } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Faroium Digital" },
      {
        name: "description",
        content:
          "A complete digital practice — websites, AI & automation, design, growth and long-term support — built for businesses serious about growth.",
      },
      { property: "og:title", content: "Services — Faroium Digital" },
      {
        property: "og:description",
        content: "Systems for businesses that are serious about growth.",
      },
      { property: "og:url", content: "https://faroium.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web design, AI automation and digital systems",
          provider: { "@type": "Organization", name: "Faroium Digital", url: "https://faroium.com" },
          areaServed: "Global",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Faroium Digital Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Automation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design & Experience" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth & Optimization" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance & Support" } },
            ],
          },
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    key: "A",
    icon: Globe,
    title: "Website Development",
    items: [
      { t: "Business Websites", d: "Professional websites built to establish trust and generate leads." },
      { t: "Portfolio Websites", d: "Personal brand and showcase websites for creators and professionals." },
      { t: "Landing Pages", d: "Focused pages designed for campaigns and conversions." },
      { t: "E-commerce Websites", d: "Online stores optimized for user experience and sales." },
      { t: "Custom Web Platforms", d: "Tailored systems for unique business needs." },
    ],
  },
  {
    key: "B",
    icon: Bot,
    title: "AI & Automation",
    items: [
      { t: "AI Chatbot Integration", d: "AI assistants for customer support, lead generation, FAQs and engagement." },
      { t: "Workflow Automation", d: "Automate repetitive business tasks and processes." },
      { t: "Lead Management Systems", d: "Capture, organize and respond to leads efficiently." },
      { t: "Smart Business Systems", d: "Integrated tools that simplify operations and communication." },
      { t: "CRM & API Integrations", d: "Connect websites with business tools and platforms." },
    ],
  },
  {
    key: "C",
    icon: Palette,
    title: "Design & Experience",
    items: [
      { t: "UI/UX Design", d: "Clean interfaces focused on usability and clarity." },
      { t: "Mobile-First Design", d: "Optimized experiences across all devices." },
      { t: "Brand-Focused Design", d: "Design systems aligned with business identity." },
      { t: "Conversion-Focused Design", d: "Layouts built to improve inquiries and engagement." },
    ],
  },
  {
    key: "D",
    icon: TrendingUp,
    title: "Growth & Optimization",
    items: [
      { t: "SEO Foundations", d: "Technical and content setup for better visibility." },
      { t: "Performance Optimization", d: "Improve loading speed and user experience." },
      { t: "Analytics & Tracking", d: "Measure traffic, conversions and user behavior." },
      { t: "Conversion Optimization", d: "Improve lead generation and customer flow." },
    ],
  },
  {
    key: "E",
    icon: Wrench,
    title: "Maintenance & Support",
    items: [
      { t: "Website Maintenance", d: "Regular updates and monitoring." },
      { t: "Security & Stability", d: "Protect websites and maintain reliability." },
      { t: "Bug Fixes & Improvements", d: "Continuous optimization and issue resolution." },
      { t: "Ongoing Support", d: "Partnership-based assistance after launch." },
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Systems for businesses that are <em className="italic">serious</em> about growth.
          </>
        }
        lead="A complete digital practice — from the first design to the long-term partnership that follows launch."
      />

      <section>
        <div className="container-x py-20 md:py-28 space-y-20 md:space-y-28">
          {groups.map((g, gi) => (
            <Reveal key={g.key} delay={gi * 60}>
              <article className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="sticky top-28">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-amber text-3xl">{g.key}</span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <div className="mt-6 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-warm border border-border text-foreground/70">
                      <g.icon size={20} strokeWidth={1.4} />
                    </div>
                    <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-[1.05]">
                      {g.title}
                    </h2>
                  </div>
                </div>

                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
                  {g.items.map((it, i) => (
                    <div
                      key={it.t}
                      className="bg-card p-7 md:p-8 hover-lift"
                    >
                      <p className="font-mono text-[11px] tracking-widest text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl text-ink leading-snug">{it.t}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {it.d}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-warm">
        <div className="container-x py-24 text-center">
          <h2 className="display text-4xl md:text-6xl text-ink max-w-3xl mx-auto">
            Not sure where to begin?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            A 30-minute call is usually enough to map the right system for your business — no
            pitch deck, just a clear next step.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Book a discovery call <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
