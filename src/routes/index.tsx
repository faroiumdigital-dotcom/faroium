import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Workflow,
  Bot,
  Search,
  TrendingUp,
  Globe,
  Wrench,
  Check,
  Zap,
  LineChart,
  Shield,
  MessageSquare,
  Rocket,
  Mail,
  Phone,
  Bell,
  Database,
  Activity,
  CircuitBoard,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import heroSystems from "@/assets/hero-systems.jpg";
import workspaceCalm from "@/assets/workspace-calm.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faroium — Websites, AI & Automation Systems | Visakhapatnam, India" },
      {
        name: "description",
        content:
          "Faroium designs and ships high-performing websites, AI automations and digital systems for businesses worldwide. Based in Visakhapatnam, serving clients globally.",
      },
      { property: "og:title", content: "Faroium — Websites, AI & Automation Systems" },
      {
        property: "og:description",
        content:
          "Websites, AI systems and automation engineered as business infrastructure. Visakhapatnam, India — worldwide delivery.",
      },
      { property: "og:url", content: "https://faroium.com/" },
      { property: "og:image", content: "https://faroium.com/og-default.jpg" },
      { name: "twitter:title", content: "Faroium — Websites, AI & Automation" },
      { name: "twitter:description", content: "Websites, AI systems and automation engineered as business infrastructure." },
      { name: "twitter:image", content: "https://faroium.com/og-default.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/" }],
  }),
  component: Home,
});




const marqueeItems = [
  "Websites",
  "AI Chatbots",
  "Workflow Automation",
  "SEO",
  "Lead Systems",
  "WhatsApp Automation",
  "CRM Integration",
  "Conversion Design",
  "Analytics",
  "E-commerce",
  "Landing Pages",
  "Maintenance",
];

const whatWeDo = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern websites built for speed, trust, and conversions.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "Smart systems that reduce manual work and improve customer interactions.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    desc: "Digital solutions focused on business outcomes — not just visuals.",
  },
  {
    icon: Shield,
    title: "Maintenance & Optimization",
    desc: "Ongoing support to keep everything fast, secure, and effective.",
  },
];

const solutions = [
  {
    label: "Build",
    icon: Rocket,
    items: ["Business Websites", "Landing Pages", "Portfolio Sites", "E-commerce Platforms"],
  },
  {
    label: "Automate",
    icon: Workflow,
    items: [
      "AI Chatbots",
      "Lead Capture Systems",
      "WhatsApp Automation",
      "CRM Integrations",
      "Smart Workflows",
    ],
  },
  {
    label: "Optimize",
    icon: LineChart,
    items: ["SEO Setup", "Speed Optimization", "Conversion Improvements", "Analytics & Tracking"],
  },
  {
    label: "Maintain",
    icon: Wrench,
    items: ["Updates", "Monitoring", "Security", "Continuous Improvements"],
  },
];

const failures = [
  "Slow loading speeds",
  "No clear messaging",
  "Poor mobile experience",
  "No lead generation system",
  "No SEO structure",
  "No automation",
  "Looks good but doesn't convert",
  "No measurement or feedback loop",
];

const process = [
  { n: "01", t: "Discover", d: "Understand business goals, audience and challenges." },
  { n: "02", t: "Strategy", d: "Structure systems around clear outcomes." },
  { n: "03", t: "Design", d: "Modern interfaces focused on clarity and trust." },
  { n: "04", t: "Development", d: "Fast, scalable, production-grade builds." },
  { n: "05", t: "Automation", d: "AI assistants and workflow integrations." },
  { n: "06", t: "Optimization", d: "SEO, performance and conversion gains." },
  { n: "07", t: "Launch & Support", d: "Continuous improvement after go-live." },
];

const useCases = [
  {
    tag: "Car Rental Platform",
    title: "Drivio",
    stack: "Streamlined booking flow, real-time fleet management, conversion-first UX",
    result: "Faster bookings, higher conversions, lower abandonment",
    icon: Rocket,
  },
  {
    tag: "Video Streaming",
    title: "Trills",
    stack: "Content architecture, performance tuning, streaming UX",
    result: "Smoother playback, deeper sessions, better retention",
    icon: Activity,
  },
  {
    tag: "Healthcare",
    title: "Visakha Multispeciality",
    stack: "Trust-led website, accessible design, seamless appointment booking",
    result: "More appointments booked, fewer support calls",
    icon: Shield,
  },
];


const insights = [
  {
    date: "May 2026",
    title: "Why most business websites fail to convert",
    read: "6 min",
  },
  {
    date: "Apr 2026",
    title: "How AI chatbots actually help small businesses",
    read: "8 min",
  },
  {
    date: "Mar 2026",
    title: "SEO basics every business owner should know",
    read: "5 min",
  },
  {
    date: "Feb 2026",
    title: "Building a digital presence from scratch",
    read: "7 min",
  },
];

const testimonials = [
  {
    q: "Faroium Digital helped us turn our website into a proper business system instead of just a design.",
    a: "Maren Holt",
    r: "Founder, Northwind Studio",
  },
  {
    q: "The automation workflows saved hours of manual work every week.",
    a: "Idris Bello",
    r: "Operations Lead, Levr",
  },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-muted-foreground">{n}</span>
      <span className="h-px w-8 bg-border" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

function Home() {
  return (
    <PageShell>
      {/* HERO — simple */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-warm pointer-events-none" />

        <div className="container-x relative pt-6 md:pt-1 pb-16 md:pb-24">
          <p className="eyebrow animate-rise">Faroium Digital · Growth Partner</p>

          <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-8xl text-ink max-w-5xl animate-rise delay-1">
            We build websites that grow businesses.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise delay-2">
            High-performing websites, AI automations and digital systems designed to help
            businesses grow smarter and faster — not just another online brochure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 animate-rise delay-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-primary-foreground pl-6 pr-5 py-3.5 text-sm font-medium transition-all hover:opacity-90"
            >
              Get Started
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium hover:border-primary/40 transition-all"
            >
              Book a Call
            </Link>
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 px-3 py-3.5 text-sm text-foreground/70 hover:text-foreground transition"
            >
              See Our Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl">
            {[
              ["5+", "Projects"],
              ["2026", "Studio founded"],
              ["100%", "Founder-led"],
              ["24h", "Reply window"],
            ].map(([v, k]) => (

              <div key={k} className="bg-background/70 px-6 py-7 text-center">
                <p className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                  {v}
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {k}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee-wrap relative border-y border-border bg-background/60 backdrop-blur-sm py-6 overflow-hidden">
          <div className="marquee whitespace-nowrap text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{m}</span>
                <span className="h-1 w-1 rounded-full bg-primary/60" />
              </span>
            ))}
          </div>
        </div>
      </section>


      <div className="section-divider" />

      {/* 01 — WHAT WE DO */}
      <section className="relative">
        <div className="container-x py-24 md:py-36">
          <SectionLabel n="01" label="What we do" />
          <div className="mt-10 grid lg:grid-cols-12 gap-12 items-end">
            <h2 className="lg:col-span-8 font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient">
              We don't just design websites — we build systems that help businesses grow.
            </h2>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Faroium Digital helps businesses build their online presence, automate repetitive
              work, improve customer experience, and create digital systems that support long-term
              growth.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeDo.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/30 transition-all hover-lift">
                  <span className="icon-bubble">
                    <f.icon size={22} strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-7 text-lg font-medium tracking-tight">{f.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — SOLUTIONS */}
      <section className="relative border-t border-border bg-warm/40">
        <div className="container-x py-24 md:py-36">
          <SectionLabel n="02" label="Our Solutions" />
          <div className="mt-10 grid lg:grid-cols-12 gap-12 items-end">
            <h2 className="lg:col-span-7 font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient">
              Build. Automate. Optimize. Maintain.
            </h2>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
              A complete digital practice for businesses ready to treat their website as a working
              asset — not a static brochure.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {solutions.map((s) => (
              <div
                key={s.label}
                className="bg-background p-7 group hover:bg-warm transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <s.icon size={18} strokeWidth={1.6} />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                </div>
                <ul className="mt-8 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check size={14} className="mt-1 text-accent flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — WHY MOST WEBSITES FAIL */}
      <section className="relative">
        <div className="container-x py-24 md:py-36">
          <SectionLabel n="03" label="Why most websites fail" />
          <div className="mt-10 grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient">
                A website should work like a business asset — not just an online brochure.
              </h2>
              <Reveal className="mt-12 rounded-3xl overflow-hidden border border-border ring-glow">
                <img
                  src={workspaceCalm}
                  alt="Calm minimalist workspace with a single monitor in dim ambient light"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-3">
              {failures.map((f, i) => (
                <Reveal key={f} delay={i * 50}>
                  <div className="rounded-xl border border-border glass p-5 hover:border-accent/40 transition-colors">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-medium text-foreground/90">{f}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — PROCESS */}
      <section className="relative border-t border-border bg-warm/40">
        <div className="container-x py-24 md:py-36">
          <SectionLabel n="04" label="Our Process" />
          <h2 className="mt-10 font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient max-w-3xl">
            Seven steps, one partnership.
          </h2>

          <div className="mt-16 relative">
            {/* center spine on desktop */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-y-12 lg:gap-x-16">
              {process.map((p, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal
                    key={p.n}
                    delay={i * 70}
                    className={`relative ${left ? "lg:col-start-1 lg:pr-8 lg:text-right" : "lg:col-start-2 lg:pl-8"}`}
                  >
                    <div className="relative rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors hover-lift">
                      {/* node on spine */}
                      <span
                        className={`hidden lg:flex absolute top-6 ${left ? "-right-[2.6rem]" : "-left-[2.6rem]"} h-5 w-5 items-center justify-center rounded-full bg-background border border-primary/40`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      <div className={`flex items-center gap-3 ${left ? "lg:justify-end" : ""}`}>
                        <p className="font-mono text-xs text-primary">{p.n}</p>
                        <span className="h-px w-8 bg-border" />
                      </div>
                      <p className="mt-3 text-xl font-medium tracking-tight">{p.t}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — USE CASES */}
      <section className="relative">
        <div className="container-x py-24 md:py-36">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <SectionLabel n="05" label="Selected Work" />
              <h2 className="mt-10 font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient max-w-3xl">
                Business outcomes, not just projects.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-sm text-foreground/70 hover:text-foreground inline-flex items-center gap-1"
            >
              View full portfolio <ArrowRight size={14} />
            </Link>
          </div>


          {/* Outcome metrics grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              ["2–4 wks", "Avg. to launch"],
              ["24h", "Reply window"],
              ["1:1", "Founder access"],
              ["5+", "Projects"],
            ].map(([v, k]) => (

              <div key={k} className="bg-card p-6">
                <p className="font-sans text-2xl md:text-3xl font-medium tracking-tight text-primary">
                  {v}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {k}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 100}>
                <Link
                  to="/portfolio"
                  className="group block h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/30 transition-colors hover-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="icon-bubble !h-12 !w-12">
                      <u.icon size={18} strokeWidth={1.6} />
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {u.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight leading-snug group-hover:text-primary transition-colors">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{u.stack}</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-[11px] uppercase tracking-widest text-primary">Result</p>
                    <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{u.result}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs text-foreground/70 group-hover:text-foreground">
                    View project <ArrowUpRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 06 — INSIGHTS */}
      <section className="relative border-t border-border bg-warm/40">
        <div className="container-x py-24 md:py-36">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <SectionLabel n="06" label="Insights" />
              <h2 className="mt-10 font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient">
                From the journal.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Practical writing on websites, AI automation, SEO, and digital growth.
              </p>
            </div>
            <Link
              to="/blog"
              className="lg:col-span-4 lg:justify-self-end text-sm text-foreground/70 hover:text-foreground inline-flex items-center gap-1"
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insights.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link
                  to="/blog"
                  className="group block h-full rounded-2xl border border-border glass p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span>{p.date}</span>
                    <span>{p.read}</span>
                  </div>
                  <h3 className="mt-8 text-base font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <span className="mt-8 inline-flex items-center gap-1 text-xs text-foreground/70">
                    Read article <ArrowUpRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — TESTIMONIALS */}
      <section className="relative">
        <div className="container-x py-24 md:py-36">
          <SectionLabel n="07" label="Testimonials" />
          <h2 className="mt-10 font-sans text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-gradient max-w-3xl">
            In their words.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => {
              const initials = t.a
                .split(" ")
                .map((s) => s[0])
                .slice(0, 2)
                .join("");
              return (
                <Reveal key={i} delay={i * 100}>
                  <figure className="group h-full rounded-3xl border border-border bg-card p-8 sm:p-10 hover:border-primary/30 transition-all hover-lift">
                    <div className="text-primary text-4xl leading-none font-serif">“</div>
                    <blockquote className="mt-4 text-xl sm:text-2xl font-medium tracking-tight leading-snug text-foreground/95">
                      {t.q}
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-3 pt-6 border-t border-border">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center text-xs font-medium tracking-wider">
                        {initials}
                      </div>
                      <div className="text-sm">
                        <p className="text-foreground font-medium">{t.a}</p>
                        <p className="text-muted-foreground">{t.r}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 — CONTACT */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="absolute inset-0 gradient-violet pointer-events-none" />
        <div className="container-x py-28 md:py-40 relative">
          <div className="max-w-4xl">
            <SectionLabel n="08" label="Contact" />
            <h2 className="mt-10 font-sans text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.035em] leading-[1.02] text-gradient">
              Let's build something that actually helps your business grow.
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Whether you need a website, an automation system, or a long-term digital partner —
              we'd love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition"
              >
                Start Your Project <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
              >
                <Phone size={14} /> Schedule a Call
              </Link>
            </div>

            <a
              href="mailto:hello@faroiumdigital.com"
              className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <Mail size={14} /> faroiumdigital@gmail.com
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
