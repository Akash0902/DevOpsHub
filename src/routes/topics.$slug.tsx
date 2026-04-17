import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { topics } from "@/data/devops";
import { LevelBadge } from "@/components/LevelBadge";
export const Route = createFileRoute("/topics/$slug")({
  loader: ({ params }) => {
    const topic = topics.find((t) => t.slug === params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.topic.title} — DevOps Hub` },
          { name: "description", content: loaderData.topic.summary },
          { property: "og:title", content: `${loaderData.topic.title} — DevOps Hub` },
          { property: "og:description", content: loaderData.topic.summary },
        ]
      : [],
  }),
  component: TopicDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Topic not found</h1>
      <Link to="/topics" className="mt-6 inline-block text-primary hover:underline">← Back to topics</Link>
    </div>
  ),
});
function TopicDetail() {
  const { topic } = Route.useLoaderData() as { topic: (typeof topics)[number] };
  const idx = topics.findIndex((t) => t.slug === topic.slug);
  const prev = topics[idx - 1];
  const next = topics[idx + 1];
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link to="/topics" className="text-sm text-muted-foreground hover:text-foreground">
← All topics
      </Link>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <div className="text-5xl">{topic.icon}</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">{topic.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{topic.summary}</p>
        </div>
        <LevelBadge level={topic.level} />
      </div>
      {/* Key points */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Key concepts</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {topic.keyPoints.map((kp, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm"
            >
              <span className="text-primary font-mono mr-2">{String(i + 1).padStart(2, "0")}</span>
              {kp}
            </div>
          ))}
        </div>
      </section>
      {/* Videos */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Video notes</h2>
        <p className="mt-2 text-sm text-muted-foreground">Hand-picked from top creators on YouTube.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {topic.videos.map((v) => (
            <div
              key={v.youtubeId}
              className="rounded-2xl border border-border/60 bg-card/60 overflow-hidden shadow-[var(--shadow-card)]"
            >
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium leading-snug">{v.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{v.channel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Prev / next */}
      <nav className="mt-16 flex items-center justify-between gap-4 border-t border-border/60 pt-6">
        {prev ? (
          <Link to="/topics/$slug" params={{ slug: prev.slug }} className="text-sm text-muted-foreground hover:text-foreground">
← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link to="/topics/$slug" params={{ slug: next.slug }} className="text-sm text-muted-foreground hover:text-foreground">
            {next.title} →
          </Link>
        ) : <span />}
      </nav>
    </div>
  );
}
