import { createFileRoute, Link } from "@tanstack/react-router";
import { topics } from "@/data/devops";
import { LevelBadge } from "@/components/LevelBadge";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevOps Hub — Learn DevOps from Basics to Advanced" },
      { name: "description", content: "Curated video notes, topic guides, certifications & a 6-month roadmap to become a DevOps engineer." },
    ],
  }),
  component: Home,
});
function Home() {
  const featured = topics.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-40 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Free • Open • Curated by practitioners
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            Learn{" "}
            <span className="bg-clip-text text-transparent bg-[image:var(--gradient-hero)]">
              DevOps
            </span>{" "}
            the right way.
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-lg text-muted-foreground">
            Video notes, hands-on topics, and a clear path to certifications —
            from Linux fundamentals to Kubernetes & DevSecOps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/topics"
              className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-hero)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
            >
              Start learning →
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground hover:bg-card transition-colors"
            >
              See 6-month roadmap
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
            <Stat n="10" label="Core topics" />
            <Stat n="30+" label="Curated videos" />
            <Stat n="13" label="Certifications" />
          </div>
        </div>
      </section>
      {/* Featured topics */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured topics</h2>
            <p className="mt-2 text-muted-foreground">Start with the basics, build up to advanced.</p>
          </div>
          <Link to="/topics" className="text-sm font-medium text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <Link
              key={t.slug}
              to="/topics/$slug"
              params={{ slug: t.slug }}
              className="group relative rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6 shadow-[var(--shadow-card)] hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="text-3xl">{t.icon}</div>
                <LevelBadge level={t.level} />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{t.summary}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {t.videos.length} videos • {t.keyPoints.length} key points
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/40 px-4 py-3 backdrop-blur">
      <div className="text-2xl font-bold text-foreground">{n}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
