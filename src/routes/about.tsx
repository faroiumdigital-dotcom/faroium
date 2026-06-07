import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import visionImage from "@/assets/vision-web-design.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Faroium Digital" },
      {
        name: "description",
        content:
          "Building digital systems that help businesses grow with clarity and purpose — modern websites, AI workflows and long-term digital strategy.",
      },
      { property: "og:title", content: "About — Faroium Digital" },
      {
        property: "og:description",
        content: "Our story, vision and the four principles behind the work.",
      },
      { property: "og:url", content: "https://faroium.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/about" }],
  }),
  component: About,
});

const principles = [
  { t: "Clarity", d: "Simple, understandable solutions." },
  { t: "Strategy", d: "Every design and system should support business goals." },
  { t: "Performance", d: "Fast, reliable, accessible — measured, not assumed." },
  { t: "Partnership", d: "We believe in long-term support and improvement." },
];

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={
          <>
            Building digital systems that help businesses <em className="italic">grow</em> with
            clarity and purpose.
          </>
        }
      />

      {/* OUR STORY */}
      <section>
        <div className="container-x py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our story</p>
            <h2 className="display mt-6 text-4xl md:text-5xl text-ink">
              Faroium Digital started with a <em className="italic">simple</em> idea.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-lg leading-relaxed text-foreground/80 space-y-5">
            <p>
              Most businesses don't just need a website. They need a digital system that actually
              supports growth.
            </p>
            <p className="text-muted-foreground">
              We focus on creating modern websites, AI-powered workflows and scalable digital
              experiences designed around real business needs — not unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="border-y border-border bg-warm">
        <div className="container-x py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our vision</p>
            <p className="mt-8 font-serif text-3xl md:text-5xl text-ink leading-[1.1]">
              To help businesses grow through{" "}
              <em className="italic">meaningful</em> digital experiences, smart systems and
              long-term digital strategy.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
              <img
                src={visionImage}
                alt="Modern web design workspace with laptop showing a clean website layout and wireframe sketches"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section>
        <div className="container-x py-24">
          <p className="eyebrow">Our approach</p>
          <h2 className="display mt-4 text-4xl md:text-5xl text-ink max-w-2xl">
            Four principles, applied consistently.
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="bg-card p-10 h-full">
                  <p className="font-serif text-amber text-2xl">0{i + 1}</p>
                  <h3 className="mt-6 font-serif text-3xl text-ink">{p.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-x py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="font-serif text-3xl md:text-4xl text-ink max-w-xl">
            Want to see how we'd approach your project?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Work with us →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
