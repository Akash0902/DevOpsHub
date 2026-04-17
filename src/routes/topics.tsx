import { createFileRoute, Link } from "@tanstack/react-router";
import { topics } from "@/data/devops";
import { LevelBadge } from "@/components/LevelBadge";
export const Route = createFileRoute("/topics")({
  head: () => ({
    meta: [
      { title: "All Topics — DevOps Hub" },
      { name: "description", content: "All DevOps topics: Linux, Git, Docker, Kubernetes, Terraform, CI/CD, cloud, monitoring & DevSecOps." },
    ],
  }),
  component: TopicsPage,
});
function TopicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">All Topics</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Every topic includes hand-picked YouTube videos and key concepts to study.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((t) => (
          <Link
            key={t.slug}
            to="/topics/$slug"
            params={{ slug: t.slug }}
            className="group rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6 shadow-[var(--shadow-card)] hover:border-primary/50 hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="text-3xl">{t.icon}</div>
              <LevelBadge level={t.level} />
            </div>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t.summary}</p>
            <p className="mt-4 text-xs text-muted-foreground">{t.videos.length} videos →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
