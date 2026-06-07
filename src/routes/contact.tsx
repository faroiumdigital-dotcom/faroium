import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, Calendar, MapPin } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Faroium Digital" },
      {
        name: "description",
        content:
          "Tell us about your business or project. Websites, automation systems and long-term digital partnerships.",
      },
      { property: "og:title", content: "Contact — Faroium Digital" },
      { property: "og:description", content: "Start a conversation with Faroium Digital." },
      { property: "og:url", content: "https://faroium.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://faroium.com/contact" }],
  }),
  component: Contact,
});

const serviceOptions = [
  "Business Website",
  "Landing Page",
  "E-commerce",
  "AI Chatbot",
  "Workflow Automation",
  "SEO",
  "Maintenance",
  "Full Digital Partnership",
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us about your <em className="italic">business</em> or project.
          </>
        }
        lead="Whether you need a website, automation system or long-term digital partner — we'd love to hear from you."
      />

      <section>
        <div className="container-x py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="eyebrow">Studio</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-amber" /> hello@faroiumdigital.com
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={16} className="text-amber" /> Mon – Fri · 9:00–18:00
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-amber" /> Remote-first · Worldwide
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="eyebrow">What to expect</p>
              <p className="font-serif text-3xl text-ink mt-3 leading-snug">
                A reply within one working day.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                We'll review your note, ask any quick clarifying questions, and propose a short
                discovery call if there's a fit.
              </p>
            </div>
            <div>
              <p className="eyebrow">For</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>· Founders launching or repositioning</li>
                <li>· Operators automating manual work</li>
                <li>· Marketing teams building a growth engine</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <p className="font-serif text-4xl text-ink">Thank you.</p>
                  <p className="mt-3 text-muted-foreground">
                    We've received your note and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Business" name="business" placeholder="optional" />
                    <Field label="Phone" name="phone" placeholder="optional" />
                  </div>

                  <div>
                    <label htmlFor="service" className="eyebrow">
                      Project type
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 transition"
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="msg" className="eyebrow">
                      Message
                    </label>
                    <textarea
                      id="msg"
                      name="msg"
                      rows={5}
                      required
                      className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 transition"
                      placeholder="A few sentences about your business and what you're trying to build."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition"
                  >
                    Send Message <ArrowUpRight size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 transition"
      />
    </div>
  );
}
