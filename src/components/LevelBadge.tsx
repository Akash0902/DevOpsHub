type Props = { level: "Beginner" | "Intermediate" | "Advanced" };
export function LevelBadge({ level }: Props) {
  const styles = {
    Beginner: "bg-accent/15 text-accent border-accent/30",
    Intermediate: "bg-primary/15 text-primary border-primary/30",
    Advanced: "bg-destructive/15 text-destructive border-destructive/30",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[level]}`}>
      {level}
    </span>
  );
}
