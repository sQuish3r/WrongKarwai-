export type CartItem = { slug: string; name: string; price: number; qty: number };

const KEY = 'hd-cart-v1';
const EVENT = 'cart:change';

export function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // приватный режим или переполненный трюм — корзина живёт до перезагрузки
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: items }));
}

export function addToCart(item: Omit<CartItem, 'qty'>, qty = 1) {
  const items = readCart();
  const existing = items.find((i) => i.slug === item.slug);
  if (existing) existing.qty += qty;
  else items.push({ ...item, qty });
  writeCart(items);
}

export function setQty(slug: string, qty: number) {
  const items = readCart()
    .map((i) => (i.slug === slug ? { ...i, qty } : i))
    .filter((i) => i.qty > 0);
  writeCart(items);
}

export function clearCart() {
  writeCart([]);
}

export const cartCount = (items = readCart()) => items.reduce((s, i) => s + i.qty, 0);
export const cartTotal = (items = readCart()) => items.reduce((s, i) => s + i.qty * i.price, 0);

export function onCartChange(cb: (items: CartItem[]) => void) {
  window.addEventListener(EVENT, (e) => cb((e as CustomEvent<CartItem[]>).detail));
  // синхронизация между вкладками
  window.addEventListener('storage', (e) => e.key === KEY && cb(readCart()));
  cb(readCart());
}

/** Вешает обработчики на все кнопки [data-add-to-cart] на странице. */
export function bindAddButtons(root: ParentNode = document) {
  root.querySelectorAll<HTMLButtonElement>('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const { slug, name, price } = btn.dataset;
      if (!slug || !name || !price) return;
      addToCart({ slug, name, price: Number(price) });
      const label = btn.textContent;
      btn.textContent = '> ЗАГРУЖЕНО В ТРЮМ';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = label;
        btn.disabled = false;
      }, 1200);
    });
  });
}
