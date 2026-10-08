# HALCYON-DRAX BIOPRODUCTS

Шуточный интернет-магазин в стиле «Чужого»: слизь, яйца, б/у синтетики и прочие товары, которые не стоило везти на Землю. Всё вымышлено, оплаты нет: экипаж — расходный материал.

**Стек:** [Astro](https://astro.build) (статический сайт, товары в Markdown) · Tailwind CSS 4 · корзина в `localStorage` · деплой на GitHub Pages.

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # статика в dist/
npm run preview
```

## Как добавить товар

Создай файл `src/content/products/<slug>.md`:

```md
---
name: "Слизь ксеноморфа «Кислотная»"
price: 1490            # имперские кредиты
hazardLevel: 5         # 1..5
category: slime        # slime | biotech | gear | food | souvenir | synthetic
glyph: "🧪"            # эмодзи, сам перекрасится в фосфорный зелёный
tagline: "Прожигает три палубы."
inStock: true          # false → «Сбежал со склада»
warnings:
  - "Не открывать над полом"
---

Описание в Markdown: **жирный** — кислотный, *курсив* — янтарный.
```

Схема проверяется при сборке (`src/content.config.ts`): опечатку в поле Astro покажет сразу.

## Структура

```
src/
  content.config.ts        схема товаров
  content/products/*.md    каталог (26 позиций)
  layouts/Layout.astro     терминальная шапка, ЭЛТ-эффекты, SVG-фильтр слизи
  components/              карточка товара, шкала опасности
  pages/                   каталог, страница товара, трюм (корзина), 404
  scripts/cart.ts          корзина в localStorage
  styles/global.css        тема: фосфор, сканлайны, мерцание, стекающая слизь
```

## Деплой

`.github/workflows/deploy.yml` собирает сайт и выкладывает его на GitHub Pages при пуше в `main`.
Один раз включи в репозитории: **Settings → Pages → Source: GitHub Actions**.
Сайт будет по адресу `https://<user>.github.io/<repo>/` (base-путь подставляется автоматически).

## Идеи на потом

- анимированная слизь на Three.js или `feTurbulence`
- звук терминала при наведении и бипы датчика движения
- «живые» товары, которые иногда уползают из корзины
- вынести каталог в API (FastAPI + Postgres), когда захочется настоящий бэкенд
