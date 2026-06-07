import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { getPost, posts, type Post } from "@/data/posts";

type Block = NonNullable<Post["content"]>[number];

const SITE = "https://faroium.com";

const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04", may: "05", june: "06",
  july: "07", august: "08", september: "09", october: "10", november: "11", december: "12",
};
function toIsoDate(d: string): string {
  const m = d.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (m && MONTHS[m[1]]) return `${m[2]}-${MONTHS[m[1]]}-01`;
  return new Date(d).toISOString().slice(0, 10);
}
function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} — Faroium Journal` : "Journal — Faroium Digital";
    const desc = p?.excerpt ?? "Notes on websites, AI and automation.";
    const url = `${SITE}/blog/${params.slug}`;
    const img = p ? `${SITE}${p.image}` : undefined;
    const isoDate = p ? toIsoDate(p.date) : undefined;
    const meta = [
      { title },
      { name: "description", content: desc },
      { name: "author", content: "Faroium Digital" },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ];
    if (img) {
      meta.push(
        { property: "og:image", content: img },
        { name: "twitter:image", content: img },
      );
    }
    if (p) {
      meta.push(
        { property: "article:published_time", content: isoDate! },
        { property: "article:section", content: p.cat },
      );
    }
    return {
      meta,
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: p.title,
                description: p.excerpt,
                image: img ? [img] : undefined,
                datePublished: isoDate,
                dateModified: isoDate,
                articleSection: p.cat,
                author: { "@type": "Organization", name: "Faroium Digital", url: SITE },
                publisher: {
                  "@type": "Organization",
                  name: "Faroium Digital",
                  url: SITE,
                  logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
                },
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE}/blog` },
                  { "@type": "ListItem", position: 3, name: p.title, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-6 text-4xl text-ink">Journal entry not found.</h1>
        <Link to="/blog" className="mt-8 inline-block text-sm underline">Back to journal</Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <div className="container-x py-32 text-center">
        <h1 className="display text-3xl text-ink">Something went wrong.</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <Link to="/blog" className="mt-8 inline-block text-sm underline">Back to journal</Link>
      </div>
    </PageShell>
  ),
  component: PostPage,
});

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-transparent"
    >
      <div
        className="h-full bg-ink/70 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);

  const headings = useMemo(
    () =>
      (post.content as Block[])
        .filter((b: Block): b is Extract<Block, { type: "h2" }> => b.type === "h2")
        .map((b) => ({ id: slugify(b.text), text: b.text })),
    [post],
  );

  return (
    <PageShell>
      <ReadingProgress />
      <article itemScope itemType="https://schema.org/Article">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-warm pointer-events-none" />
          <div className="container-x relative pt-6 md:pt-10 pb-10 md:pb-14 max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li><Link to="/" className="hover:text-ink">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/blog" className="hover:text-ink">Journal</Link></li>
                <li aria-hidden>/</li>
                <li className="text-ink/70 truncate max-w-[16rem]" aria-current="page">{post.title}</li>
              </ol>
            </nav>
            <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ink transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to journal
            </Link>
            <p className="eyebrow mt-8">
              <span itemProp="articleSection">{post.cat}</span>
              {" · "}
              <time dateTime={toIsoDate(post.date)} itemProp="datePublished">{post.date}</time>
            </p>
            <h1 itemProp="headline" className="display mt-6 text-[2.25rem] sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              {post.title}
            </h1>
            <p itemProp="description" className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">{post.excerpt}</p>
            {post.readTime && <p className="mt-6 text-sm text-muted-foreground">{post.readTime}</p>}
          </div>
        </header>

        <div className="container-x max-w-5xl">
          <figure className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={post.image}
              alt={post.title}
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-auto object-cover"
              itemProp="image"
            />
          </figure>
        </div>

        <div className="container-x py-16 md:py-20 max-w-5xl grid lg:grid-cols-[1fr_220px] gap-12">
          <div className="min-w-0">
            {post.content ? (
              <Reveal>
                <div className="prose-journal space-y-6" itemProp="articleBody">
                  {post.content.map((block: Block, i: number) => {
                    if (block.type === "h2") {
                      const id = slugify(block.text);
                      return (
                        <h2 key={i} id={id} className="font-serif text-3xl md:text-4xl text-ink mt-12 leading-tight scroll-mt-24">
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === "h3")
                      return <h3 key={i} className="font-serif text-xl md:text-2xl text-ink mt-8">{block.text}</h3>;
                    if (block.type === "ul")
                      return (
                        <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                          {block.items.map((it: string, j: number) => <li key={j}>{it}</li>)}
                        </ul>
                      );
                    if (block.type === "quote")
                      return (
                        <blockquote key={i} className="border-l-2 border-ink/30 pl-6 italic font-serif text-xl text-ink my-8">
                          {block.text}
                        </blockquote>
                      );
                    return <p key={i} className="text-base md:text-lg text-muted-foreground leading-[1.8]">{block.text}</p>;
                  })}
                </div>
              </Reveal>
            ) : (
              <p className="text-muted-foreground italic">Full essay coming soon.</p>
            )}

            <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Written by <span className="text-ink">Faroium Digital</span></p>
              <Link to="/contact" className="text-sm underline underline-offset-4">Start a project →</Link>
            </div>
          </div>

          {headings.length > 1 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="eyebrow mb-4">On this page</p>
                <ul className="space-y-3 text-sm">
                  {headings.map((h: { id: string; text: string }) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-muted-foreground hover:text-ink transition-colors leading-snug block">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>

        <section className="border-t border-border" aria-label="Related articles">
          <div className="container-x py-16">
            <p className="eyebrow">More from the journal</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to="/blog/$slug" params={{ slug: p.id }} className="block group">
                  <article className="hover-lift rounded-2xl border border-border bg-card overflow-hidden h-full">
                    <img src={p.image} alt={p.title} loading="lazy" width={1600} height={900} className="w-full aspect-[5/3] object-cover" />
                    <div className="p-7">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{p.cat}</span><span>{p.date}</span>
                      </div>
                      <h3 className="mt-4 font-serif text-xl text-ink leading-tight group-hover:underline underline-offset-4 decoration-1">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
