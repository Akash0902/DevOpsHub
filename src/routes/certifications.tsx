import { createFileRoute } from "@tanstack/react-router";
import { certifications } from "@/data/devops";
import { LevelBadge } from "@/components/LevelBadge";
export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "DevOps Certifications Guide — DevOps Hub" },
      { name: "description", content: "All major DevOps certifications: AWS, Azure, GCP, Kubernetes, Terraform, Linux. Recommended sequence and pricing." },
    ],
  }),
  component: CertsPage,
});
const groups: Array<"Beginner" | "Intermediate" | "Advanced"> = ["Beginner", "Intermediate", "Advanced"];
function CertsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Certifications</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Certs validate skills and pass HR filters. Pair them with real projects for maximum impact.
      </p>
      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
        <h2 className="font-semibold text-primary">Suggested path</h2>
        <ol className="mt-3 grid gap-2 text-sm text-foreground/90 sm:grid-cols-2 lg:grid-cols-4">
          <li><span className="text-primary font-mono mr-2">01</span>AWS Cloud Practitioner / AZ-900</li>
          <li><span className="text-primary font-mono mr-2">02</span>Terraform Associate</li>
          <li><span className="text-primary font-mono mr-2">03</span>AWS SAA / CKA</li>
          <li><span className="text-primary font-mono mr-2">04</span>AWS DevOps Pro / AZ-400</li>
        </ol>
      </div>
      {groups.map((lvl) => (
        <section key={lvl} className="mt-12">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">{lvl}</h2>
            <LevelBadge level={lvl} />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {certifications.filter((c) => c.level === lvl).map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border/60 bg-[image:var(--gradient-card)] p-5 shadow-[var(--shadow-card)] hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.vendor}</p>
                  </div>
                  <span className="text-sm font-mono text-accent whitespace-nowrap">{c.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.why}</p>
                <p className="mt-3 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit official page →
                </p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
};
  )
