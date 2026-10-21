/* Proje arşivi: projects.js'teki bütün projeleri yıla göre (yeniden eskiye) listeler */

(() => {
  window.applyI18n?.();
  const projects = (window.PROJECTS || [])
    .map((p, i) => ({ ...p, order: i }))
    .sort((a, b) => b.year - a.year || a.order - b.order);
  const pad = (n) => String(n).padStart(2, '0');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const years = projects.map((p) => p.year);
  const [lo, hi] = [Math.min(...years), Math.max(...years)];
  const range = !years.length ? '' : lo === hi ? `${lo}` : `${lo}–${hi}`;
  document.querySelector('[data-slot="total"]').textContent = `${pad(projects.length)} ${L('proje', projects.length === 1 ? 'project' : 'projects')}`;
  document.querySelector('[data-slot="summary"]').textContent =
    L(`${projects.length} proje · ${range}. Öne çıkanlar ana sayfada da yer alıyor.`,
      `${projects.length} ${projects.length === 1 ? 'project' : 'projects'} · ${range}. Featured ones also appear on the home page.`);

  const mock = (kind) => ({
    web: '<span class="mock mock--web"><i></i><i></i><i></i></span>',
    alt: '<span class="mock mock--alt"><i></i><i></i><i></i><i></i></span>',
  }[kind] || '<span class="mock"><i></i><i></i><i></i><i></i></span>');

  const artHTML = (p) => (p.art.img
    ? `<img src="${p.art.img}" alt="" loading="lazy" decoding="async">`
    : mock(p.art.mock));

  const list = document.querySelector('.archive-list');
  list.innerHTML = projects.map((p, i) => `
    <li>
      <a class="archive-row" href="case.html?p=${p.slug}&amp;from=arsiv" data-slug="${p.slug}">
        <span class="label archive-row__no">${pad(i + 1)}</span>
        <span class="archive-row__title"><span class="archive-row__mark">${p.title}${p.featured ? `<span class="archive-row__star">${t('archive.featured', 'Ana sayfada')}</span>` : ''}${p.concept ? window.conceptTagHTML() : ''}</span></span>
        <span class="archive-row__role" data-year="${p.year}">${p.role}</span>
        <span class="label archive-row__year">${p.year}</span>
        <span class="archive-row__arrow" aria-hidden="true">→</span>
      </a>
    </li>`).join('');

  if (reduceMotion || !window.gsap) return;
  document.documentElement.classList.add('js');

  gsap.fromTo('.archive-reveal', { y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08 });
  gsap.fromTo('.archive-list li', { y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.04, delay: 0.2 });

  /* ---------- Fareyi takip eden sticker önizlemesi ---------- */

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const preview = document.querySelector('.archive-preview');
  const moveX = gsap.quickTo(preview, 'x', { duration: 0.45, ease: 'power3.out' });
  const moveY = gsap.quickTo(preview, 'y', { duration: 0.45, ease: 'power3.out' });
  const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
  let current = null;

  list.addEventListener('pointermove', (e) => {
    moveX(e.clientX + 24);
    moveY(e.clientY - preview.offsetHeight / 2);
    const row = e.target.closest('.archive-row');
    const slug = row?.dataset.slug;
    if (slug === current) return;
    current = slug;
    if (!slug) { preview.classList.remove('is-on'); return; }
    const p = bySlug[slug];
    preview.innerHTML = `<span class="sticker__art" style="--art: ${p.art.bg}">${artHTML(p)}</span>`;
    gsap.fromTo(preview, { rotation: gsap.utils.random(-8, 8) }, { rotation: gsap.utils.random(-4, 4), duration: 0.5, ease: 'power2.out' });
    preview.classList.add('is-on');
  });
  list.addEventListener('pointerleave', () => {
    current = null;
    preview.classList.remove('is-on');
  });
})();
