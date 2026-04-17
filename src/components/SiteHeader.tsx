import { Link } from "@tanstack/react-router";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] group-hover:scale-105 transition-transform">
          </div>
          <span className="font-semibold tracking-tight">DevOps Hub</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link to="/" activeOptions={{ exact: true }} className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors" activeProps={{ className: "px-3 py-2 rounded-md text-foreground bg-secondary/60" }}>
            Home
          </Link>
          <Link to="/topics" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors" activeProps={{ className: "px-3 py-2 rounded-md text-foreground bg-secondary/60" }}>
            Topics
          </Link>
          <Link to="/roadmap" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors" activeProps={{ className: "px-3 py-2 rounded-md text-foreground bg-secondary/60" }}>
            Roadmap
          </Link>
          <Link to="/certifications" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors" activeProps={{ className: "px-3 py-2 rounded-md text-foreground bg-secondary/60" }}>
            Certs
          </Link>
        </nav>
      </div>
    </header>
  );
}
