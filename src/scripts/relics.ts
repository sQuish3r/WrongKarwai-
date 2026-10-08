import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const ORIGIN = '100 95'; // центр нимба в координатах SVG
const RUNES = 'ΔΣΨΩ01ᚱᛟ#░▒';

/** Помехи: реликвия дёргается и расслаивается на голубой и красный каналы. */
function glitch(relic: Element, strength = 1) {
  const glyph = relic.querySelector('.relic-glyph');
  const [cyan, red] = relic.querySelectorAll('.relic-ghost');
  const jitter = () => gsap.utils.random(-5, 5) * strength;

  return gsap
    .timeline()
    .set([cyan, red], { autoAlpha: 0.85 })
    .to(glyph, { x: jitter, skewX: () => jitter() * 3, duration: 0.05, repeat: 5, repeatRefresh: true, ease: 'steps(1)' })
    .to(cyan, { x: () => -4 * strength, y: jitter, duration: 0.05, repeat: 5, repeatRefresh: true, ease: 'steps(1)' }, 0)
    .to(red, { x: () => 4 * strength, y: jitter, duration: 0.05, repeat: 5, repeatRefresh: true, ease: 'steps(1)' }, 0)
    .set(glyph, { x: 0, skewX: 0 })
    .set([cyan, red], { autoAlpha: 0, x: 0, y: 0 });
}

function animateRelic(relic: HTMLElement, signal: AbortSignal) {
  const q = gsap.utils.selector(relic);
  const hazard = Number(relic.dataset.hazard) || 1;
  // Чем опаснее товар, тем быстрее вращается нимб и чаще сбоит изображение
  const speed = 0.6 + hazard * 0.3;

  const idle = gsap.timeline({ paused: true });

  const halo = gsap.to(q('.relic-halo'), { rotation: 360, svgOrigin: ORIGIN, duration: 50 / speed, ease: 'none', repeat: -1 });
  const ticks = gsap.to(q('.relic-ticks'), { rotation: -360, svgOrigin: ORIGIN, duration: 36 / speed, ease: 'none', repeat: -1 });
  idle.add(halo, 0).add(ticks, 0);

  // Реликвия левитирует
  idle.add(gsap.to(q('.relic-glyph-wrap'), { y: -7, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 }), 0);

  // Солнце дышит, барханы ползут навстречу друг другу
  idle.add(gsap.to(q('.relic-sun'), { scale: 1.05, svgOrigin: '100 140', duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 }), 0);
  idle.add(gsap.to(q('.relic-dune-back'), { x: -24, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 }), 0);
  idle.add(gsap.to(q('.relic-dune-front'), { x: 24, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1 }), 0);

  // Песчаная буря: каждая песчинка летит вправо и заворачивается на левый край
  q('.relic-dust circle').forEach((dot) => {
    const cx = Number(dot.getAttribute('cx'));
    idle.add(
      gsap.to(dot, {
        x: `+=${220}`,
        y: () => gsap.utils.random(-6, 6),
        duration: gsap.utils.random(2.5, 6) / speed,
        ease: 'none',
        repeat: -1,
        modifiers: { x: gsap.utils.unitize(gsap.utils.wrap(-cx - 10, 210 - cx)) },
      }),
      0,
    );
  });

  // Луч машинного бога сканирует реликвию
  idle.add(
    gsap
      .timeline({ repeat: -1, repeatDelay: gsap.utils.random(1.5, 4) })
      .fromTo(q('.relic-scan'), { y: 0 }, { y: 230, duration: 1.6, ease: 'power1.inOut' }),
    gsap.utils.random(0, 2),
  );

  // Всевидящее око моргает и косится
  idle.add(
    gsap
      .timeline({ repeat: -1, repeatDelay: gsap.utils.random(2.5, 6) })
      .to(q('.relic-eye'), { scaleY: 0.1, svgOrigin: '100 48', duration: 0.08, yoyo: true, repeat: 1 })
      .to(q('.relic-iris'), { x: () => gsap.utils.random(-6, 6), duration: 0.3, ease: 'power2.out' }, '+=0.6')
      .to(q('.relic-iris'), { x: 0, duration: 0.4 }, '+=1'),
    gsap.utils.random(0, 3),
  );

  // Опасные товары сбоят сами по себе
  if (hazard >= 4) {
    idle.add(
      gsap.timeline({ repeat: -1, repeatDelay: gsap.utils.random(1.5, 4) }).call(() => glitch(relic, hazard - 3)),
      gsap.utils.random(0.5, 2),
    );
  }

  // Анимируем только видимые реликварии — 26 сцен разом браузеру ни к чему
  ScrollTrigger.create({
    trigger: relic,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => (self.isActive ? idle.play() : idle.pause()),
  });

  // Наведение: нимб раскручивается, геометрия вспыхивает, реликвия сбоит
  const host = relic.closest('[data-card]') ?? relic;
  const sigil = q('.relic-sigil');
  host.addEventListener('pointerenter', () => {
    gsap.to([halo, ticks], { timeScale: 6, duration: 0.6, ease: 'power2.out', overwrite: true });
    gsap.to(sigil, { opacity: 1, duration: 0.3, overwrite: true });
    gsap.to(q('.relic-glyph-wrap'), { scale: 1.12, duration: 0.4, ease: 'back.out(3)', overwrite: 'auto' });
    glitch(relic, 1.5);
  }, { signal });
  host.addEventListener('pointerleave', () => {
    gsap.to([halo, ticks], { timeScale: 1, duration: 1.2, ease: 'power2.inOut', overwrite: true });
    gsap.to(sigil, { opacity: 0.55, duration: 0.6, overwrite: true });
    gsap.to(q('.relic-glyph-wrap'), { scale: 1, duration: 0.5, overwrite: 'auto' });
  }, { signal });
}

/** Подношение в трюм: реликвия по дуге улетает в счётчик корзины. */
function bindOfferings(signal: AbortSignal) {
  document.querySelectorAll<HTMLButtonElement>('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const scope = btn.closest('[data-card]') ?? document;
      const glyph = scope.querySelector<HTMLElement>('.relic-glyph');
      const counter = document.querySelector<HTMLElement>('[data-cart-count]');
      if (!glyph || !counter) return;

      const from = glyph.getBoundingClientRect();
      const to = counter.getBoundingClientRect();
      const flyer = glyph.cloneNode(true) as HTMLElement;
      Object.assign(flyer.style, {
        position: 'fixed',
        left: `${from.left}px`,
        top: `${from.top}px`,
        fontSize: getComputedStyle(glyph).fontSize,
        lineHeight: '1',
        zIndex: '60',
        pointerEvents: 'none',
      });
      document.body.append(flyer);

      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      gsap
        .timeline({ onComplete: () => flyer.remove() })
        .to(flyer, { x: dx, duration: 0.8, ease: 'power1.in' }, 0)
        .to(flyer, { y: dy, duration: 0.8, ease: 'back.in(2.5)' }, 0)
        .to(flyer, { scale: 0.25, rotation: 540, duration: 0.8, ease: 'power2.in' }, 0)
        .fromTo(counter, { scale: 1.8, color: '#5ef0ff' }, { scale: 1, color: '', duration: 0.6, ease: 'elastic.out(1, 0.4)', clearProps: 'all' });
    }, { signal });
  });
}

/** Карточки «выкапываются из песка» по мере прокрутки. */
function excavate() {
  const cards = gsap.utils.toArray<HTMLElement>('[data-card]');
  if (!cards.length) return;
  gsap.set(cards, { autoAlpha: 0 });
  ScrollTrigger.batch(cards, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 70, rotation: () => gsap.utils.random(-3, 3), clipPath: 'inset(100% 0% 0% 0%)' },
        {
          autoAlpha: 1,
          y: 0,
          rotation: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power3.out',
          stagger: Math.min(0.12, 0.6 / batch.length), // пачка целиком не дольше 0.6 с
          overwrite: true,
          clearProps: 'transform,clipPath',
        },
      ),
  });
}

/** Тексты, помеченные [data-scramble], «расшифровываются» из рун. */
function decrypt() {
  const lines = gsap.utils.toArray<HTMLElement>('[data-scramble]');
  const tl = gsap.timeline();
  lines.forEach((el) => {
    const text = el.textContent ?? '';
    tl.to(el, { duration: Math.min(1.4, 0.3 + text.length * 0.012), scrambleText: { text, chars: RUNES, speed: 0.6 } }, '<0.25');
  });
}

export function initRelics() {
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // matchMedia откатит твины сам, а слушатели снимаем через AbortController
    const listeners = new AbortController();
    gsap.utils.toArray<HTMLElement>('[data-relic]').forEach((relic) => animateRelic(relic, listeners.signal));
    excavate();
    decrypt();
    bindOfferings(listeners.signal);
    return () => listeners.abort();
  });
}
