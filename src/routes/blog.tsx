import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Faroium Digital" },
      { name: "description", content: "Notes on websites, AI systems, automation and the business of building digital products." },
      { property: "og:title", content: "Journal — Faroium Digital" },
      { property: "og:description", content: "Slow thinking on fast technology." },
      { property: "og:url", content: "https://faroium.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);
  return (
    <PageShell>
      <PageHero
        eyebrow="Journal"
        title={<>Slow thinking on <em className="italic">fast</em> technology.</>}
        lead="Notes on websites, AI, automation and the business of building digital products with intention."
      />
      <section>
        <div className="container-x py-20">
          <Reveal>
            <Link to="/blog/$slug" params={{ slug: featured.id }} className="block group">
              <article className="grid md:grid-cols-12 gap-0 rounded-2xl border border-border overflow-hidden bg-card hover-lift">
                <div className="md:col-span-6 aspect-[5/4] md:aspect-auto relative overflow-hidden">
                  <img src={featured.image} alt={featured.title} width={1600} height={900} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="md:col-span-6 p-10 md:p-14 flex flex-col justify-center">
                  <p className="eyebrow">Featured · {featured.cat}</p>
                  <h2 className="display mt-6 text-4xl md:text-5xl text-ink group-hover:underline underline-offset-4 decoration-1">{featured.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  <p className="mt-8 text-sm text-muted-foreground">{featured.date} · {featured.readTime ?? "6 min read"}</p>
                </div>
              </article>
            </Link>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link to="/blog/$slug" params={{ slug: p.id }} className="block h-full group">
                  <article className="hover-lift rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col">
                    <div className="aspect-[5/3] relative overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{p.cat}</span><span>{p.date}</span>
                      </div>
                      <h3 className="mt-4 font-serif text-2xl text-ink leading-tight group-hover:underline underline-offset-4 decoration-1">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
