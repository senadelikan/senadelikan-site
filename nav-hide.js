/* Üst menü aşağı kaydırırken yukarı saklanır, yukarı kaydırınca geri gelir (bütün sayfalar).
 * body.is-nav-hidden sınıfını açıp kapatır; hareket style.css'te.
 * Ana sayfada yalnızca maskot menüye yerleştikten sonra (is-docked) çalışır; girişte menü zaten görünmez.
 * Menünün içinde odak varsa (klavyeyle gezinen) saklanmaz. */

(() => {
  const nav = document.querySelector('.case-nav, .nav');
  if (!nav) return;
  const body = document.body;
  const MIN = 6; // bundan küçük kaymalar yön değiştirmez (trackpad titremesi)
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const d = y - lastY;
    if (Math.abs(d) < MIN) return;
    lastY = y;
    const hide = d > 0 && y > nav.offsetHeight && !nav.contains(document.activeElement);
    body.classList.toggle('is-nav-hidden', hide);
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  nav.addEventListener('focusin', () => body.classList.remove('is-nav-hidden'));
})();
