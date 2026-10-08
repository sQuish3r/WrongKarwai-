# Halcyon-Drax Bioproducts

Шуточный статический магазин вымышленных ксено-товаров: мир «Чужого», перенесённый в пустынный киберпанк («Дюна», «Безумный Макс», культ машинного бога «Синод Вычислителя»). Бэкенда и оплаты нет и не будет без явной просьбы.

## Команды

- `npm run dev` — dev-сервер на http://localhost:4321
- `npm run build` — сборка в `dist/`; обязательна перед коммитом: заодно проверяет схему товаров
- `npm run preview` — раздать собранный `dist/`

## Стек и устройство

- Astro 7, Tailwind CSS 4 (токены в `@theme` в `src/styles/global.css`), GSAP 3 (ScrollTrigger, ScrambleText). React/Vue нет, клиентский JS — `<script>` в `.astro` и модули в `src/scripts/`.
- Товар — один Markdown-файл в `src/content/products/<slug>.md`, схема в `src/content.config.ts`. Новый товар = новый файл, код не трогать.
- Корзина — `src/scripts/cart.ts` (localStorage, событие `cart:change`).
- Все внутренние ссылки строить через `url()` из `src/lib/catalog.ts`: на GitHub Pages сайт живёт под base `/<repo>/`.
- Деплой — `.github/workflows/deploy.yml`, на GitHub Pages при пуше в `main`.

## Стиль (не размывать)

Подробная дизайн-система, анимации и рецепты — в скилле `halcyon-ui` (`.claude/skills/halcyon-ui/SKILL.md`). Его нужно загружать перед любой правкой внешнего вида или анимаций. Кратко:

- Цвета только из токенов: `void`, `hull`, `sand`, `dust`, `spice`, `rust`, `holo`, `amber`, `blood`. Без произвольных hex в разметке.
- Шрифты: `font-display` (Russo One) — заголовки и названия, `font-term` (VT323) — терминальные строки и цены, `font-mono` (Share Tech Mono) — основной текст.
- Голубой `holo` — только «голос машины» (Вычислитель, сканеры, око). Пряность `spice` — акцент и действия.
- Тексты по-русски, с чёрным корпоративно-культовым юмором. Реальные бренды и корпорации из фильмов не использовать.

## Анимации

- Только GSAP, только transform/opacity (`x`, `y`, `scale`, `rotation`, `autoAlpha`); в SVG вращать через `svgOrigin`.
- Всё движение — внутри `gsap.matchMedia()` с условием `(prefers-reduced-motion: no-preference)`; без него сайт обязан выглядеть законченным и статичным.
- Бесконечные анимации ставить на паузу вне экрана (см. `ScrollTrigger` с `onToggle` в `src/scripts/relics.ts`).

## Проверка

После правок UI открыть страницу через Playwright (плагин `playwright` или скилл `webapp-testing`): скриншот каталога, страницы товара и корзины, ширина 390px без горизонтальной прокрутки, пустая консоль. Документацию библиотек смотреть через context7, а не по памяти.
