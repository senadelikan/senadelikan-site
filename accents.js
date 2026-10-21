/* Kalem izleri ve kontur-dolgu kelimeleri ekrana girince bir kez çizilir.
 * Kayan şerit her ekran genişliğinde dolu kalacak kadar tekrarlanır. */

/* ---------- Kayan şerit: ekranı dolduracak kadar tekrar ---------- */
(() => {
  const SPEED = 40; // px/sn: ekran genişliğinden bağımsız sabit hız
  document.querySelectorAll('.marquee__track').forEach((track) => {
    const unit = track.querySelector('.marquee__group').textContent;
    const build = () => {
      // Önce tek bir yarıyı ekran genişliğini (eğimle birlikte biraz fazlasını) geçene kadar doldur
      track.innerHTML = `<span class="marquee__group">${unit}</span>`;
      const first = track.firstElementChild;
      const target = window.innerWidth * 1.15;
      if (!first.offsetWidth) return; // görünmüyorsa (genişlik 0) sonsuz döngüye girme
      for (let n = 0; first.offsetWidth < target && n < 40; n++) first.textContent += unit;
      // Aynı yarıyı ikinci kez ekle: -%50 kayınca dikişsiz başa döner
      track.appendChild(first.cloneNode(true));
      track.style.setProperty('--marquee-dur', `${(first.offsetWidth / SPEED).toFixed(1)}s`);
    };
    build();
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(build, 150); });
    document.fonts?.ready.then(build); // font yüklenince genişlik değişir
  });
})();

(() => {
  const marks = document.querySelectorAll('.marker, .kmark');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    marks.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.6 });

  // Giriş cümlesindeki vurgular, maskot logo yerine oturduğu anda çizilir
  // (yoksa maskot küçülürken altında kalıp kaçabiliyor)
  const heroMarks = [...marks].filter((el) => el.closest('.section--hero'));
  const otherMarks = [...marks].filter((el) => !el.closest('.section--hero'));
  otherMarks.forEach((el) => io.observe(el));

  const reveal = () => heroMarks.forEach((el) => el.classList.add('is-in'));
  if (document.body.classList.contains('is-docked')) reveal();
  else {
    const mo = new MutationObserver(() => {
      if (!document.body.classList.contains('is-docked')) return;
      reveal();
      mo.disconnect();
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
})();
