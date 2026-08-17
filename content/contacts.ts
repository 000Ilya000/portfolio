import type { ContactContent } from "./types";

export const contact: ContactContent = {
  eyebrow: "Контакты",
  title: "Давайте обсудим задачу",
  lead: "Если нужен Senior Frontend, который держит и инженерию, и интерфейс, напишите. Коротко опишите продукт, срок и что сейчас болит: этого хватит для первого разговора.",
  cta: "Написать в Telegram",
  nextStep:
    "Следующий шаг простой: короткое сообщение с контекстом задачи. Я отвечу и предложу, как лучше продолжить разговор.",
  copiedLabel: "Скопировано",
  copyLabel: "Скопировать",
  links: [
    {
      id: "telegram",
      label: "Telegram",
      href: "https://t.me/ilMagor",
      value: "@ilMagor",
      copyValue: "@ilMagor",
    },
    {
      id: "phone",
      label: "Телефон",
      href: "tel:+79372706979",
      value: "+7 937 270-69-79",
      copyValue: "+79372706979",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:ilya-kurimshin.kit@yandex.ru",
      value: "ilya-kurimshin.kit@yandex.ru",
      copyValue: "ilya-kurimshin.kit@yandex.ru",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/000Ilya000",
      value: "github.com/000Ilya000",
      copyValue: "https://github.com/000Ilya000",
    },
  ],
};
