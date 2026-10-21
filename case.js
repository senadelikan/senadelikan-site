/* Vaka çalışması sayfası: case.html?p=<slug> içeriğini projects.js'ten doldurur */

(() => {
  window.applyI18n?.();
  const projects = window.PROJECTS || [];
  const CATS = window.CATEGORIES || {};
  const fill = window.fillText || ((s) => s);
  const pad = (n) => String(n).padStart(2, '0');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const slug = new URLSearchParams(location.search).get('p');
  const index = Math.max(0, projects.findIndex((p) => p.slug === slug));
  const p = projects[index];
  if (!p) return;
  // Kendi tasarımıyla kodlanmış projelerde sayfanın üstü de o tasarıma uyar (ör. is-wholly)
  if (window.STORIES && window.STORIES[p.slug]) document.body.classList.add(`is-${p.slug}`);

  const mock = (kind) => ({
    web: '<span class="mock mock--web"><i></i><i></i><i></i></span>',
    alt: '<span class="mock mock--alt"><i></i><i></i><i></i><i></i></span>',
  }[kind] || '<span class="mock"><i></i><i></i><i></i><i></i></span>');
  const artHTML = (proj) => (proj.art.img
    ? `<img src="${proj.art.img}" alt="" decoding="async">`
    : mock(proj.art.mock));

  const next = projects[(index + 1) % projects.length];
  const fromArchive = new URLSearchParams(location.search).get('from') === 'arsiv';
  const backHref = fromArchive ? 'projects.html' : 'index.html#projeler';
  const back = document.querySelector('.case-nav__back');
  back.href = backHref;
  if (fromArchive) back.innerHTML = `<span aria-hidden="true">←</span> ${t('case.backArchive', 'Arşiv')}`;

  /* ---------- Başlık ve künye ---------- */

  const slots = {
    count: `${pad(index + 1)} / ${pad(projects.length)}`,
    kicker: `${t('case.kicker', 'Vaka çalışması')} · ${pad(index + 1)}`,
    title: p.logo ? `<img src="${p.logo}" alt="${p.title}" width="204" height="59">` : p.title,
    summary: p.summary,
    year: p.year,
    category: CATS[p.category] || p.category,
    role: p.role,
    tools: p.tools,
    nextTitle: next.title,
  };
  // Konsept projelerde logonun yanında yıldız sticker (gerçek değil, kişisel konsept)
  if (p.concept) {
    slots.title = `<span class="case-hero__mark">${slots.title}${window.conceptTagHTML()}</span>`;
  }
  document.title = `${p.title} · Sena Delikan`;
  document.querySelectorAll('[data-slot]').forEach((el) => {
    const key = el.dataset.slot;
    if (key in slots) el.innerHTML = fill(slots[key]);
  });

  const cover = document.querySelector('[data-slot="cover"]');
  cover.style.setProperty('--art', p.art.bg);
  cover.innerHTML = artHTML(p);
  cover.classList.toggle('has-img', !!p.art.img);

  // Kapaksız vaka sayfası: kapak kalkar, bağlantı butonu künyenin altına geçer
  const link = document.querySelector('[data-slot="link"]');
  if (p.caseCover === false) {
    link.classList.replace('case-cover__btn', 'case-hero__btn');
    document.querySelector('.case-hero').appendChild(link);
    cover.closest('.case-cover').remove();
  }

  // Herkese açık bağlantı (Behance, prototip) yoksa buton görünmez
  if (p.link) {
    link.href = p.link.href;
    link.innerHTML = `${p.link.label} <span aria-hidden="true">↗</span>`;
    link.hidden = false;
  }

  /* ---------- Bölümler ---------- */

  const base = `assets/projects/${p.slug}/`;
  const figure = (img, cls = '') => `
    <figure class="case-figure ${cls} case-reveal">
      <img src="${base}${img.src}" width="${img.w}" height="${img.h}" alt="${img.alt}" loading="lazy" decoding="async">
    </figure>`;

  const sectionHTML = (s, i) => {
    const id = `h-${i + 1}`;
    let body = `<h2 id="${id}">${s.title}</h2>`;
    if (s.lead) body += `<p class="lead">${fill(s.lead)}</p>`;
    if (s.points) {
      body += `<ol class="case-points">${s.points.map((pt, k) => `
        <li><span class="label">${pad(k + 1)}</span><h3>${pt.title}</h3><p>${fill(pt.text)}</p></li>`).join('')}</ol>`;
    }
    if (s.steps) {
      body += `<ol class="case-steps">${s.steps.map((st) => `
        <li><h3>${st.title}</h3><p>${fill(st.text)}</p></li>`).join('')}</ol>`;
    }

    let after = '';
    if (s.img) after += figure(s.img);
    if (s.note) after += `<p class="small case-note case-reveal">${s.note}</p>`;
    if (s.chapters) {
      after += s.chapters.map((c, k) => `
        <article class="case-chapter">
          <div class="case-chapter__text case-reveal">
            <p class="label">${pad(k + 1)} · ${c.kicker} · <span lang="en">${c.lang}</span></p>
            <h3 class="h3">${c.title}</h3>
            <p>${fill(c.text)}</p>
          </div>
          ${figure(c.img)}
        </article>`).join('');
    }
    if (s.brand) {
      after += `
        <div class="case-brand">
          <p class="case-reveal">${fill(s.brand.text)}</p>
          ${figure(s.brand.img)}
        </div>`;
    }

    return `
      <section class="case-section wrap" aria-labelledby="${id}">
        <p class="label case-section__no">${pad(i + 1)}</p>
        <div class="case-section__body case-reveal">${body}</div>
        ${after ? `<div class="case-section__wide">${after}</div>` : ''}
      </section>`;
  };

  const sections = p.case || [{
    title: t('case.kicker', 'Vaka çalışması'),
    lead: t('case.empty', '[[Bu projenin vaka metni henüz yazılmadı.]]'),
  }];
  // Projenin kendi tasarımıyla kodlanmış bölümleri (story-<slug>.js) varsa önce onlar gelir
  const story = window.STORIES?.[p.slug];
  document.querySelector('[data-slot="sections"]').innerHTML =
    (story ? story.render(window.LANG) : '') + sections.map(sectionHTML).join('');

  // Tek proje varken "Sonraki proje" kendisine döner; gizle
  if (projects.length < 2) document.querySelector('.case-next').hidden = true;
  document.querySelector('[data-slot="next"]').href = `case.html?p=${next.slug}${fromArchive ? '&from=arsiv' : ''}`;

  /* ---------- Hareket: sakin ve amaçlı ---------- */

  if (reduceMotion || !window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('js');

  // Başlık bloğu sırayla belirir
  gsap.fromTo('.case-hero .case-reveal', { y: 16 }, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08, delay: 0.1,
  });

  // Kapak, yırtık kâğıt gibi ortadan açılır
  if (p.caseCover !== false) {
    gsap.fromTo(cover,
      { clipPath: 'inset(48% 0% 48% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power3.inOut', delay: 0.35 });
  }
  if (p.link) gsap.from(link, { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out', delay: p.caseCover === false ? 0.5 : 1.1 });

  // Bölümler scroll'da bir kez belirir
  gsap.utils.toArray('[data-slot="sections"] .case-reveal').forEach((el) => {
    gsap.fromTo(el, { y: 16 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
  // Görseller geç yüklenip sayfa uzadıkça tetik noktalarını tazele
  document.querySelectorAll('.case-figure img').forEach((img) => {
    img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  });
})();
