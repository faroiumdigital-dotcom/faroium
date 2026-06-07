import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-warm">
      <div className="container-x py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber" />
            <span className="font-serif text-2xl text-ink">Faroium<span className="text-muted-foreground">.</span></span>
          </Link>
          <p className="mt-6 max-w-md font-serif text-2xl leading-tight text-ink">
            A digital growth studio engineering websites, AI systems & automation
            for ambitious modern brands.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Available worldwide · Remote-first · Est. 2024
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
          <FooterCol
            title="Studio"
            items={[
              { to: "/about", label: "About" },
              { to: "/process", label: "Process" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/blog", label: "Journal" },
            ]}
          />
          <FooterCol
            title="Capabilities"
            items={[
              { to: "/services", label: "Websites" },
              { to: "/services", label: "AI Systems" },
              { to: "/services", label: "Automation" },
              { to: "/services", label: "SEO & Growth" },
            ]}
          />
          <FooterCol
            title="Contact"
            items={[
              { to: "/contact", label: "hello@faroium.com" },
              { to: "/contact", label: "Start a project" },
              { to: "/contact", label: "Partnerships" },
            ]}
          />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Faroium Digital. All rights reserved.</p>
          <p className="tracking-widest uppercase">Built with intention</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-5">{title}</p>
      <ul className="space-y-3">
        {items.map((i, idx) => (
          <li key={idx}>
            <Link
              to={i.to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
