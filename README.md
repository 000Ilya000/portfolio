# Портфолио Курымшина Ильи

Статический сайт на Next.js (App Router), TypeScript, Tailwind CSS и Framer Motion. Весь контент вынесен в типизированные файлы в `content/`.

## Локально

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

Прод-сборка без dev-сервера:

```bash
npm run build
npx serve out
```

## Скрипты

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Где менять контент

- **Фотография:** замените `public/images/portrait.png`. Компоненты менять не нужно. Путь задаётся в `content/site.ts` → `portrait.src`.
- **Имя, роль, SEO, навигация, статус доступности:** `content/site.ts`
- **Hero-тексты и CTA:** `content/site.ts` → `hero`
- **Обо мне:** `content/about.ts`
- **Экспертиза:** `content/expertise.ts`
- **Проекты:** `content/projects.ts`
- **Процесс:** `content/process.ts`
- **Стек:** `content/stack.ts`
- **Контакты (Telegram, email, GitHub, LinkedIn):** `content/contacts.ts`
- **Базовый URL сайта:** переменная `NEXT_PUBLIC_SITE_URL` или поле `url` в `content/site.ts`

## Дизайн-токены

Цвета, стекло, анимации и типографика задаются в `app/globals.css` (`:root` и `@theme`). Компоненты Liquid Glass живут в `components/glass/`.
