import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Faroium — Websites, AI & Automation Systems for Business Growth" },
      {
        name: "description",
        content:
          "Faroium builds high-performing websites, AI automations and digital systems for businesses worldwide. Based in Visakhapatnam, India — serving clients globally.",
      },
      {
        name: "keywords",
        content:
          "Faroium, Faroium Digital, web development Visakhapatnam, AI automation agency, custom website development, AI chatbot development, workflow automation, SEO services, digital agency India, business automation worldwide",
      },
      { name: "author", content: "Faroium" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#F5F1EA" },
      { name: "format-detection", content: "telephone=no" },
      // Geo
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Visakhapatnam" },
      { name: "geo.position", content: "17.6868;83.2185" },
      { name: "ICBM", content: "17.6868, 83.2185" },
      // Open Graph defaults
      { property: "og:site_name", content: "Faroium" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://faroium.com/og-default.jpg" },
      { property: "og:image:secure_url", content: "https://faroium.com/og-default.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Faroium — Websites, AI & Automation" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@faroium" },
      { name: "twitter:creator", content: "@faroium" },
      { name: "twitter:image", content: "https://faroium.com/og-default.jpg" },
      { name: "twitter:image:alt", content: "Faroium — Websites, AI & Automation" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
    ],
    scripts: [
      {
        children:
          "if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0, 0);",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Faroium",
          alternateName: "Faroium Digital",
          url: "https://faroium.com",
          logo: "https://faroium.com/favicon.png",
          image: "https://faroium.com/og-default.jpg",
          description:
            "Faroium builds high-performing websites, AI automations and digital systems for businesses worldwide.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Faroium",
          url: "https://faroium.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://faroium.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ScriptOnce>{`if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0, 0);`}</ScriptOnce>
      <Outlet />
    </QueryClientProvider>
  );
}
