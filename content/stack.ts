import type { StackContent } from "./types";

export const stack: StackContent = {
  eyebrow: "Стек",
  title: "Инструменты, которыми думаю",
  lead: "Не коллекция логотипов, а рабочий набор вокруг React: что помогает собирать устойчивые интерфейсы и не тащить лишнее в продукт.",
  hubCaption:
    "React — библиотека, вокруг которой собираю интерфейс: компоненты, состояние и композицию. Остальной стек подключается к этой модели, а не живёт отдельной жизнью.",
  nodes: [
    {
      id: "next",
      label: "Next.js",
      caption:
        "Фреймворк над React: маршруты, серверные компоненты и статическая сборка. Нужен, когда продукт должен быть быстрым и в проде, а не только в песочнице.",
      color: "#ffffff",
      x: 16,
      y: 12,
      tip: "bottom",
    },
    {
      id: "typescript",
      label: "TypeScript",
      caption:
        "Типы фиксируют контракты между экранами, API и командой. Меньше сюрпризов в рантайме и проще рефакторить сложные куски.",
      color: "#3178c6",
      x: 50,
      y: 8,
      tip: "bottom",
    },
    {
      id: "javascript",
      label: "JavaScript",
      caption:
        "Язык платформы, на котором всё это в итоге исполняется. TypeScript не отменяет понимание runtime, браузера и асинхронности.",
      color: "#f7df1e",
      x: 84,
      y: 12,
      tip: "bottom",
    },
    {
      id: "tailwind",
      label: "Tailwind",
      caption:
        "Утилиты и токены, чтобы собирать UI быстро и без каши в CSS. Дизайн остаётся системой, а не набором случайных классов.",
      color: "#38bdf8",
      x: 10,
      y: 42,
      tip: "right",
    },
    {
      id: "vite",
      label: "Vite",
      caption:
        "Быстрый контур разработки, когда нужен отдельный app рядом с Next. Меньше ожидания сборки — больше времени на сам продукт.",
      color: "#a78bfa",
      x: 90,
      y: 42,
      tip: "left",
    },
    {
      id: "query",
      label: "TanStack Query",
      caption:
        "Серверное состояние: кэш, рефетч и статусы загрузки без самодельного ада. UI перестаёт гадать, откуда взялись данные и насколько они свежие.",
      color: "#ff4154",
      x: 14,
      y: 72,
      tip: "right",
    },
    {
      id: "framer",
      label: "Motion",
      caption:
        "Микроанимации и жесты, которые поддерживают смысл экрана, а не отвлекают. Движение появляется там, где помогает понять переход.",
      color: "#f5f5f5",
      x: 86,
      y: 72,
      tip: "left",
    },
    {
      id: "vitest",
      label: "Vitest",
      caption:
        "Быстрые юнит-тесты там, где ломается логика, а не вёрстка. Проверяю инварианты и регрессии до того, как они доедут до пользователя.",
      color: "#729b1b",
      x: 28,
      y: 86,
      tip: "top",
    },
    {
      id: "git",
      label: "Git",
      caption:
        "История изменений, ревью и ветки, с которыми удобно жить в CI. Код должен быть понятен через полгода, а не только в день коммита.",
      color: "#f05032",
      x: 50,
      y: 88,
      tip: "top",
    },
    {
      id: "playwright",
      label: "Playwright",
      caption:
        "Сквозные сценарии: то, что пользователь реально проживает в продукте. Ловлю дыры между экранами, а не только внутри одной функции.",
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
