import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";
import { SmoothScroll } from "../components/SmoothScroll";
import { ScrollToTop } from "../components/ScrollToTop";
import { PageTransition } from "../components/PageTransition";
import { SiteLoader } from "../components/SiteLoader";
import { jsonLdScript } from "../lib/json-ld";
import { CLINIC } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="h-section mt-5">Page not found</h1>
        <p className="mt-4 text-[color:var(--color-ink-muted-sm)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-6 py-3 text-sm font-medium text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="h-section">This page didn't load</h1>
        <p className="mt-3 text-[color:var(--color-ink-muted-sm)]">
          Something went wrong on our end. You can try again or go back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[color:var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-5 py-2.5 text-sm font-medium">
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
      { title: `${CLINIC.name} — ${CLINIC.doctor}, Hadath` },
      { name: "description", content: `Specialist endodontic & cosmetic dentistry in Hadath, Baabda. 5.0★ rated. Book your appointment via WhatsApp today.` },
      { name: "author", content: CLINIC.doctor },
      { name: "theme-color", content: "#3F6B63" },
      { property: "og:site_name", content: CLINIC.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@1,500&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [jsonLdScript()],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <ScrollToTop />
      <SiteLoader />
      <Nav />
      <main className="pt-24 sm:pt-28">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
