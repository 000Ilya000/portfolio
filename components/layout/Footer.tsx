import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-[1] px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white">{site.name}</p>
        <p className="text-xs text-faint">© {new Date().getFullYear()} {site.role}</p>
      </div>
    </footer>
  );
}
