import { site } from "@/content/site";

export function StatusBadge({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={
        compact
          ? "inline-flex items-center gap-2 text-xs text-muted"
          : "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-mist"
      }
    >
      <span className="status-dot" aria-hidden="true" />
      <span>{site.availability.label}</span>
    </p>
  );
}
