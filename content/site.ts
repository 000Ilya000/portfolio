import type { HeroContent, SiteConfig } from "./types";
import { assetPath } from "@/lib/assets";

export const site: SiteConfig = {
  name: "Курымшин Илья",
  shortName: "КИ",
  role: "Senior React / Frontend Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://000ilya000.github.io/portfolio",
  locale: "ru_RU",
  language: "ru",
  title: "Курымшин Илья — Senior React / Frontend Developer",
  description:
    "Senior React / Frontend Developer. Проектирую и разрабатываю интерфейсы сложных B2C- и B2B-продуктов: быстро, удобно и масштабируемо. Открыт к интересным проектам и предложениям.",
  keywords: [
    "frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Senior Frontend Developer",
    "UI/UX",
    "B2B",
    "B2C",
    "Курымшин Илья",
  ],
  availability: {
    status: "available",
    label: "Открыт к интересным проектам и предложениям",
  },
  portrait: {
    src: assetPath("/images/hero/closeup.jpg"),
    alt: "Портрет Курымшина Ильи",
    width: 1511,
    height: 2000,
  },
  photos: [
    {
      id: "city",
      src: assetPath("/images/hero/city.jpg"),
      alt: "Курымшин Илья на вечерней набережной на фоне городского горизонта",
      width: 2000,
      height: 1500,
      objectPosition: "50% 42%",
    },
    {
      id: "closeup",
      src: assetPath("/images/hero/closeup.jpg"),
      alt: "Портрет Курымшина Ильи крупным планом",
      width: 1511,
      height: 2000,
      objectPosition: "50% 22%",
    },
    {
      id: "bar",
      src: assetPath("/images/hero/bar.jpg"),
      alt: "Курымшин Илья в вечернем интерьере с видом на город",
      width: 2000,
      height: 1500,
      objectPosition: "62% 28%",
    },
    {
      id: "full",
      src: assetPath("/images/hero/full.jpg"),
      alt: "Курымшин Илья в полный рост на городской площади вечером",
      width: 1500,
      height: 2000,
      objectPosition: "50% 18%",
    },
  ],
  nav: [
    { href: "#about", label: "Обо мне" },
    { href: "#expertise", label: "Экспертиза" },
    { href: "#stack", label: "Стек" },
    { href: "#projects", label: "Проекты" },
    { href: "#process", label: "Процесс" },
    { href: "#contact", label: "Контакты" },
  ],
};

export const hero: HeroContent = {
  eyebrow: "Senior React / Frontend Developer",
  name: "Курымшин Илья",
  firstName: "Илья",
  lastName: "Курымшин",
  offer: "Интерфейсы, в которых сложная логика ощущается простой.",
  value:
    "Проектирую и собираю frontend для B2C- и B2B-продуктов: от сервисов для людей до внутренних систем с ролями, документами и тяжёлыми процессами. Соединяю инженерную точность с вниманием к UX — чтобы продуктом было удобно пользоваться и легко развивать.",
  primaryCta: { label: "Обсудить проект", href: "#contact" },
  secondaryCta: { label: "Посмотреть проекты", href: "#projects" },
  chips: ["React", "Next.js", "TypeScript", "B2C / B2B", "Design-minded"],
};
