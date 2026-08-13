import type { ContactContent } from "./types";

export const contact: ContactContent = {
  eyebrow: "Контакты",
  title: "Давайте обсудим задачу",
  lead: "Если нужен Senior Frontend, который умеет держать и инженерию, и интерфейс — напишите. Коротко опишите продукт, срок и, что сейчас болит: этого достаточно для первого разговора.",
  cta: "Написать в Telegram",
  nextStep:
    "Следующий шаг простой: короткое сообщение с контекстом задачи. Я отвечу и предложу, как лучше продолжить разговор.",
  copiedLabel: "Скопировано",
  copyLabel: "Скопировать",
  links: [
    {
      id: "telegram",
      label: "Telegram",
      href: "https://t.me/your_username",
      value: "@your_username",
      copyValue: "@your_username",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:hello@example.com",
      value: "hello@example.com",
      copyValue: "hello@example.com",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/your_username",
      value: "github.com/your_username",
      copyValue: "https://github.com/your_username",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-username",
      value: "linkedin.com/in/your-username",
      copyValue: "https://www.linkedin.com/in/your-username",
    },
  ],
};
