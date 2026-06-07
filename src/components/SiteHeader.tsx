import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/favicon.png" alt="Faroium" className="h-7 w-7 rounded-full" />
          <span className="font-serif text-xl tracking-tight text-ink">
            Faroium<span className="text-muted-foreground">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(0, -1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={n.to === "/" ? { exact: true } : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.32_0.13_260/0.55)] hover:opacity-90"
                : "bg-foreground text-primary-foreground border border-foreground/15 hover:bg-foreground/90"
            }`}
          >
            Start a project
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80 border-b border-border/60 last:border-0"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
