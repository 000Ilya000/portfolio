import type { StackContent } from "./types";

export const stack: StackContent = {
  eyebrow: "Стек",
  title: "Инструменты, которыми думаю",
  lead: "React в центре. Рядом кладу то, чем реально собираю интерфейс: типы, маршруты, данные, тесты и сборку.",
  hubCaption:
    "React - основа, вокруг которой собираю экраны: компоненты, состояние и композицию. Остальной стек подключается к этой модели.",
  nodes: [
    {
      id: "next",
      label: "Next.js",
      caption:
        "Маршруты, серверные компоненты и статическая сборка. Беру, когда продукту нужна нормальная скорость в проде.",
      color: "#ffffff",
      x: 16,
      y: 12,
      tip: "bottom",
    },
    {
      id: "typescript",
      label: "TypeScript",
      caption:
        "Типы фиксируют контракты между экранами, API и командой. Проще рефакторить сложные куски и ловить ошибки раньше рантайма.",
      color: "#3178c6",
      x: 50,
      y: 8,
      tip: "bottom",
    },
    {
      id: "javascript",
      label: "JavaScript",
      caption:
        "Язык, на котором всё это в итоге исполняется. TypeScript не отменяет runtime, браузер и асинхронность.",
      color: "#f7df1e",
      x: 84,
      y: 12,
      tip: "bottom",
    },
    {
      id: "tailwind",
      label: "Tailwind",
      caption:
        "Утилиты и токены, чтобы собирать UI быстро и без каши в CSS. Так визуальный язык держится системой.",
      color: "#38bdf8",
      x: 10,
      y: 42,
      tip: "right",
    },
    {
      id: "vite",
      label: "Vite",
      caption:
        "Быстрый контур разработки, когда нужен отдельный app рядом с Next. Меньше ждать сборку, больше времени на сам продукт.",
      color: "#a78bfa",
      x: 90,
      y: 42,
      tip: "left",
    },
    {
      id: "query",
      label: "TanStack Query",
      caption:
        "Кэш, рефетч и статусы загрузки для серверных данных. UI знает, откуда данные и насколько они свежие.",
      color: "#ff4154",
      x: 14,
      y: 72,
      tip: "right",
    },
    {
      id: "framer",
      label: "Motion",
      caption:
        "Микроанимации и жесты там, где движение помогает понять переход. Если жест ради жеста - не ставлю.",
      color: "#f5f5f5",
      x: 86,
      y: 72,
      tip: "left",
    },
    {
      id: "vitest",
      label: "Vitest",
      caption:
        "Быстрые юнит-тесты на логику: инварианты, ветки, регрессии. Вёрстку ими не подменяю.",
      color: "#729b1b",
      x: 28,
      y: 86,
      tip: "top",
    },
    {
      id: "git",
      label: "Git",
      caption:
        "История, ревью и ветки, с которыми удобно жить в CI. Код должен читаться и через полгода.",
      color: "#f05032",
      x: 50,
      y: 88,
      tip: "top",
    },
    {
      id: "playwright",
      label: "Playwright",
      caption:
        "Сквозные сценарии: то, что человек реально проходит в продукте. Ловлю дыры между экранами.",
      color: "#2ead33",
      x: 72,
      y: 86,
      tip: "top",
    },
  ],
  extras: [
    "Radix UI",
    "Zustand",
    "RSC",
    "REST",
    "Testing Library",
    "ESLint",
    "Prettier",
    "Design tokens",
    "Feature-sliced thinking",
  ],
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
