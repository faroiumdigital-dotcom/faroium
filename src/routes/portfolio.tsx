import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Faroium Digital" },
      {
        name: "description",
        content:
          "Proven results. Real digital impact. Explore how strategic design and engineering create measurable growth.",
      },
      { property: "og:title", content: "Portfolio — Faroium Digital" },
      {
        property: "og:description",
        content: "Selected case studies: Drivio, Trills, Snak Bar, Health Fresh, Visakha Multispeciality.",
      },
      { property: "og:url", content: "https://faroium.com/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  {
    n: "01",
    client: "Drivio",
    tag: "Car rental platform",
    challenge: "A clunky booking flow leaking high-intent users.",
    solution:
      "A streamlined booking experience with real-time fleet management and a conversion-first UX.",
    systems: ["Booking experience", "Fleet management", "Conversion UX"],
    outcome: "Faster bookings, higher conversions, lower abandonment.",
    grad: "linear-gradient(135deg, oklch(0.94 0.03 250), oklch(0.82 0.10 255))",
  },
  {
    n: "02",
    client: "Trills",
    tag: "Video streaming platform",
    challenge: "Discovery and performance bottlenecks at scale.",
    solution:
      "Reorganized content architecture, optimized streaming pipelines and tightened UX.",
    systems: ["Content architecture", "Performance", "Streaming UX"],
    outcome: "Smoother playback, deeper sessions, better retention.",
    grad: "linear-gradient(135deg, oklch(0.95 0.025 260), oklch(0.80 0.11 260))",
  },
  {
    n: "03",
    client: "Snak Bar",
    tag: "Snack brand website",
    challenge: "A flat product story with weak commerce funnels.",
    solution:
      "An editorial e-commerce experience that sells through narrative and craft.",
    systems: ["E-commerce", "Product storytelling"],
    outcome: "Stronger brand presence and higher AOV.",
    grad: "linear-gradient(135deg, oklch(0.94 0.035 245), oklch(0.78 0.12 250))",
  },
  {
    n: "04",
    client: "Health Fresh",
    tag: "Nutrition platform",
    challenge: "Customers needed education before they'd buy.",
    solution: "An education-first product design that builds trust before the cart.",
    systems: ["Education-first UX", "Content systems"],
    outcome: "Higher trust, better-qualified leads.",
    grad: "linear-gradient(135deg, oklch(0.95 0.03 255), oklch(0.81 0.09 248))",
  },
  {
    n: "05",
    client: "Visakha Multispeciality",
    tag: "Medical clinic website",
    challenge: "Patients needed clarity, trust and frictionless appointments.",
    solution:
      "A trust-led website with accessible design and seamless appointment booking.",
    systems: ["Trust", "Appointments", "Accessibility"],
    outcome: "More appointments, fewer support calls.",
    grad: "linear-gradient(135deg, oklch(0.96 0.02 250), oklch(0.83 0.08 258))",
  },
];

function Portfolio() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Proven results. <em className="italic">Real</em> digital impact.
          </>
        }
        lead="Explore how strategic design and engineering create measurable growth."
      />

      <section>
        <div className="container-x py-20 md:py-28 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.client} delay={i * 60}>
              <article className="grid md:grid-cols-12 gap-8 rounded-2xl border border-border bg-card p-8 md:p-12 hover-lift overflow-hidden">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-amber">{p.n}</p>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink leading-tight">
                    {p.client}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tag}</p>
                  <div
                    className="mt-6 aspect-[4/3] rounded-xl border border-border relative overflow-hidden"
                    style={{ backgroundImage: p.grad }}
                  >
                    <div className="absolute inset-0 grain opacity-40" />
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div>
                    <p className="eyebrow">Challenge</p>
                    <p className="mt-3 text-base leading-relaxed text-foreground/85">
                      {p.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Solution</p>
                    <p className="mt-3 text-base leading-relaxed text-foreground/85">
                      {p.solution}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3 space-y-6">
                  <div>
                    <p className="eyebrow">Systems Built</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {p.systems.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-amber" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <p className="eyebrow">Outcome</p>
                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                      {p.outcome}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-3 text-xs font-medium hover:opacity-90 transition w-full justify-center"
                  >
                    Discuss a similar project <ArrowUpRight size={14} />
                  </Link>
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
              Want to be the next case study?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl">
              We partner with a small number of businesses each quarter. If your project is
              ambitious, let's talk.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-medium"
            >
              Start Your Project <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium"
            >
              All case studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
