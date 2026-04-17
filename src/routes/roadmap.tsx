import { createFileRoute } from "@tanstack/react-router";
import { roadmap } from "@/data/devops";
export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "6-Month DevOps Roadmap — DevOps Hub" },
      { name: "description", content: "A pragmatic 6-month learning path from zero to job-ready DevOps engineer." },
    ],
  }),
  component: RoadmapPage,
});
function RoadmapPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">6-Month Roadmap</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        A pragmatic path from zero to job-ready DevOps engineer. Plan for ~10 hours per week.
      </p>
      <div className="mt-12 relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
        <ol className="space-y-8">
          {roadmap.map((m, i) => (
            <li key={m.month} className="relative pl-12">
              <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-xs font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                {i + 1}
              </div>
              <div className="rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">{m.month}</p>
                <h2 className="mt-1 text-xl font-semibold">{m.title}</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
