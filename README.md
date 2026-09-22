# Agency — digital/design agency site

Многостраничный корпоративный сайт агентства. React + Vite + Tailwind CSS v4 + React Router.

Figma: https://www.figma.com/design/WduZWoYm29GtD1AKQLHnEt/Client-First-Template-9---Webflow-Agency--Community---Copy---Copy-?node-id=0-1

## Запуск

```bash
npm install
npm run dev
```

## Структура

```
src/
  app/
    App.jsx          — BrowserRouter
    router.jsx        — все маршруты сайта
  components/
    layout/            — Header, Footer, MainLayout (общие для всех страниц)
    ui/                 — переиспользуемые элементы (кнопки, карточки, аккордеон и т.п.)
    common/             — сквозные блоки: PromoBanner, BlogCard, PagePlaceholder...
  pages/
    home/               — Home            /
    about/              — About us        /about
    pricing/            — Pricing         /pricing
    features/           — Features        /features
    work/               — Work            /work
    case-study/         — Read Case Study /work/:caseId
    blog/               — Blog            /blog
    blog-post/          — Read Blog       /blog/:postId
    contact/            — Contact us      /contact
    privacy/            — Privacy Policy  /privacy
  data/                — моковые данные страниц
  assets/               — icons/, images/
  styles/index.css      — токены Tailwind (@theme): ink/accent/accent-blue и т.д.
```

Каждая страница — папка со своей страницей и локальными компонентами
(`pages/<page>/components/...`), чтобы не мешать друг другу при параллельной работе.
Общие вещи (Header, Footer, UI-кит, промо-баннер) — в `components/`, их менять только по
согласованию с командой.

## Кто что верстает

| Страница | Роут | Исполнитель |
|---|---|---|
| Home | `/` | — |
| About us | `/about` | — |
| Pricing | `/pricing` | — |
| Features | `/features` | — |
| Work (портфолио) | `/work` | — |
| Read Case Study | `/work/:caseId` | — |
| Blog (список) | `/blog` | — |
| Read Blog (статья) | `/blog/:postId` | — |
| Contact us | `/contact` | — |
| Privacy Policy | `/privacy` | — |

Заполнить колонку «Исполнитель» и работать в своей папке `pages/<page>/`, ветка на
человека — `feature/<page-name>`, PR в `main`.

## Цветовая схема (Tailwind токены, `src/styles/index.css`)

- `bg-ink` / `text-ink` — тёмно-синий (почти чёрный): шапка, футер, акцентные промо-блоки.
- `bg-surface` / `bg-surface-muted` — светлый фон основного контента.
- `bg-accent` / `text-accent` — жёлтый, кнопки и CTA.
- `border-accent-blue` / `text-accent-blue` — синий акцент (например, выделенный тариф).
