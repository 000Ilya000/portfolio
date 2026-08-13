import type { StackContent } from "./types";

export const stack: StackContent = {
  eyebrow: "Стек",
  title: "Инструменты, которыми думаю",
  lead: "Не коллекция логотипов, а рабочий набор: что помогает собирать устойчивые интерфейсы и не тащить лишнее в продукт.",
  groups: [
    {
      id: "core",
      title: "Core",
      items: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      id: "ui",
      title: "UI",
      items: ["Tailwind CSS", "Radix UI", "Framer Motion", "Lucide", "CSS architecture"],
    },
    {
      id: "state",
      title: "State",
      items: ["React State", "Zustand", "URL state", "Forms state"],
    },
    {
      id: "data",
      title: "Data fetching",
      items: ["TanStack Query", "REST", "React Server Components", "API contracts"],
    },
    {
      id: "testing",
      title: "Testing",
      items: ["Vitest", "Testing Library", "Playwright", "ESLint"],
    },
    {
      id: "architecture",
      title: "Architecture",
      items: ["Feature-sliced thinking", "Design tokens", "Component APIs", "Modular boundaries"],
    },
    {
      id: "tooling",
      title: "Tooling",
      items: ["Git", "Vite", "Prettier", "CI-friendly workflows"],
    },
    {
      id: "performance",
      title: "Performance",
      items: ["Core Web Vitals", "Code splitting", "Image/font optimization", "Profiling"],
    },
  ],
};
