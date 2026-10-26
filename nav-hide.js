/* Üst menü aşağı kaydırırken yukarı saklanır, yukarı kaydırınca geri gelir (bütün sayfalar).
 * body.is-nav-hidden sınıfını açıp kapatır; hareket style.css'te.
 * Ana sayfada "Merhaba" bölümü (#merhaba) menünün altından geçene kadar menü sabit kalır;
 * girişten yeni inen menü hemen kaçmaz, üstündeki bağlantılara tıklanabilir.
 * Menünün içinde odak varsa (klavyeyle gezinen) saklanmaz. */

(() => {
  const nav = document.querySelector('.case-nav, .nav');
  if (!nav) return;
  const body = document.body;
  const hero = document.getElementById('merhaba');
  // Bu kaydırma noktasına kadar menü saklanmaz: hero'nun alt kenarı menünün altına gelince.
  const holdUntil = () => hero
    ? hero.getBoundingClientRect().bottom + window.scrollY - nav.offsetHeight
    : nav.offsetHeight;
  const MIN = 6; // bundan küçük kaymalar yön değiştirmez (trackpad titremesi)
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (y <= holdUntil()) { lastY = y; body.classList.remove('is-nav-hidden'); return; }
    const d = y - lastY;
    if (Math.abs(d) < MIN) return;
    lastY = y;
    const hide = d > 0 && !nav.contains(document.activeElement);
    body.classList.toggle('is-nav-hidden', hide);
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  nav.addEventListener('focusin', () => body.classList.remove('is-nav-hidden'));
})();
