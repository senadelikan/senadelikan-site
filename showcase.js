/* Projeler vitrini (v2 · A24 esintisi)
 * Masaüstü: bölüm sabitlenir, scroll'la sticker'lar yatayda geçer.
 * Mobil: parmakla kaydırılan tek kart (scroll-snap).
 * Azaltılmış hareket: düz dikey liste. Hepsi projects.js'ten üretilir. */

(() => {
  const section = document.querySelector('.showcase');
  if (!section || !window.PROJECTS) return;

  const SCREENS_PER_PROJECT = 0.7; // bir projeden ötekine geçişin scroll mesafesi (ekran yüksekliği)
  const HOLD_SCREENS = 0.5; // geçişten sonra yeni proje bu kadar yerinde bekler (halka çizilir), sonra sayfa devam eder

  const $ = (s) => section.querySelector(s);
  const pin = $('.showcase__pin');
  const track = $('.showcase__track');
  const ring = $('.showcase__ring');
  const ringPath = ring.querySelector('path');
  const titleEl = $('.showcase__title');
  const noEl = $('.showcase__no'); // dev kontur proje numarası
  const countEl = $('.showcase__count');
  const yearEdge = $('.showcase__edge--right');
  const live = $('.showcase__live');
  const valueEl = $('.showcase__value');
  const valueLabelEl = $('.showcase__value-label');
  const quoteEl = $('.showcase__quote p');
  const quoteByEl = $('.showcase__quote cite');
  const fields = [...section.querySelectorAll('[data-field]')];
  const list = $('.project-list');
  const allCount = $('.showcase__all-count');
  if (allCount) allCount.textContent = String(window.PROJECTS.length).padStart(2, '0');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = (n) => String(n).padStart(2, '0');

  // Ana sayfada yalnızca öne çıkan projeler; hepsi projects.html arşivinde
  let items = window.PROJECTS.filter((p) => p.featured);
  let active = -1;
  let stickers = [];
  let goToImpl = null; // görünüme göre (masaüstü / mobil / liste) projeye gitme yolu

  /* ---------- Üretim ---------- */

  function mockHTML(kind) {
    if (kind === 'web') return '<span class="mock mock--web"><i></i><i></i><i></i></span>';
    if (kind === 'alt') return '<span class="mock mock--alt"><i></i><i></i><i></i><i></i></span>';
    return '<span class="mock"><i></i><i></i><i></i><i></i></span>';
  }

  function stickerHTML(p, i, extraClass = '') {
    return `<a class="sticker ${extraClass}" href="case.html?p=${p.slug}" data-index="${i}"
      style="--art: ${p.art.bg}" aria-label="${L(`${p.title}, vaka çalışmasını aç`, `${p.title}, open case study`)}">
      <span class="sticker__art">${p.art.img ? `<img src="${p.art.img}" alt="" decoding="async">` : mockHTML(p.art.mock)}</span>
      <span class="sticker__peel" aria-hidden="true"></span>${p.concept ? window.conceptTagHTML() : ''}</a>`;
  }

  function render() {
    track.innerHTML = items.map((p, i) => stickerHTML(p, i, 'showcase__item')).join('');
    stickers = [...track.children];

    // Azaltılmış hareket listesi (v1'deki dikey düzen)
    list.querySelectorAll('.project').forEach((el) => el.remove());
    list.insertAdjacentHTML('beforeend', items.map((p, i) => `
      <article class="project${i % 2 ? ' project--flip' : ''}">
        <div class="project__stage">${stickerHTML(p, i)}</div>
        <div class="project__info">
          <span class="project__no">${pad(i + 1)}</span>
          <h3 class="h2">${p.title}</h3>
          <p>${p.summary}</p>
          <dl class="credits">
            <div><dt class="label">${t('projects.role', 'Rol')}</dt><dd>${window.fillText(p.role)}</dd></div>
            <div><dt class="label">${t('projects.year', 'Yıl')}</dt><dd>${p.year}</dd></div>
            <div><dt class="label">${t('projects.tools', 'Araçlar')}</dt><dd>${p.tools}</dd></div>
          </dl>
          <a class="link" href="case.html?p=${p.slug}">${t('projects.read', 'Vaka çalışmasını oku →')}</a>
        </div>
      </article>`).join(''));

    active = -1;
    setActive(0, true);
  }

  /* ---------- Künye: aktif proje değişince yumuşakça yenilenir ---------- */

  function setActive(i, instant = false) {
    i = Math.max(0, Math.min(items.length - 1, i));
    if (i === active) return;
    const dir = i > active ? 1 : -1;
    active = i;
    const p = items[i];

    const fill = () => {
      if (noEl) noEl.textContent = pad(i + 1);
      titleEl.textContent = p.title;
      fields.forEach((dd) => { dd.innerHTML = window.fillText(p[dd.dataset.field]); });
      // result isteğe bağlı: yoksa büyük sayı ve etiketi gizlenir, yalnızca alıntı kalır
      valueEl.textContent = p.result ? p.result.value : '';
      valueLabelEl.textContent = p.result ? p.result.label : '';
      valueEl.hidden = valueLabelEl.hidden = !p.result;
      valueEl.parentElement.classList.toggle('has-value', !!p.result);
      quoteEl.textContent = `“${p.quote.text}”`;
      if (p.quote.lang) quoteEl.lang = p.quote.lang; else quoteEl.removeAttribute('lang');
      quoteByEl.textContent = `— ${p.quote.by}`;
    };
    countEl.textContent = `${pad(i + 1)} / ${pad(items.length)}`;
    yearEdge.textContent = p.year;
    live.textContent = L(`Proje ${i + 1} / ${items.length}: ${p.title}`, `Project ${i + 1} of ${items.length}: ${p.title}`);
    section.dispatchEvent(new CustomEvent('showcase:change', { detail: { index: i } }));
    stickers.forEach((s, k) => s.toggleAttribute('aria-current', k === i));

    if (instant || reduceMotion) { fill(); return; }
    const parts = [noEl, titleEl, ...fields, valueEl, valueLabelEl, quoteEl.parentElement].filter(Boolean);
    gsap.to(parts, {
      yPercent: -40 * dir, opacity: 0, duration: 0.18, ease: 'power1.in', overwrite: true,
      onComplete() {
        fill();
        gsap.fromTo(parts, { yPercent: 40 * dir, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.45, ease: 'power2.out', stagger: 0.03 });
      },
    });
  }

  /* ---------- El çizimi halka ---------- */

  // Küçük, tekrarlanabilir rastgelelik: her proje kendi halkasını alır
  function rand(seed) {
    return () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
  }

  // Sticker'ın etrafında 1,15 tur dönen, hafif titrek bir elips (uçları üst üste biner)
  function drawRing(seed) {
    const w = stickers[active]?.offsetWidth || 400;
    const h = stickers[active]?.offsetHeight || 300;
    const rx = w * 0.62;
    const ry = h * 0.7;
    const W = rx * 2 + 40;
    const H = ry * 2 + 40;
    ring.setAttribute('width', W);
    ring.setAttribute('height', H);
    ring.setAttribute('viewBox', `${-W / 2} ${-H / 2} ${W} ${H}`);
    ring.style.margin = `${-H / 2}px 0 0 ${-W / 2}px`;

    const r = rand(seed * 977 + 13);
    const turns = 1.15;
    const steps = 40;
    const start = -Math.PI * (0.55 + r() * 0.2);
    const pts = [];
    for (let k = 0; k <= steps; k++) {
      const t = start + (k / steps) * turns * Math.PI * 2;
      const grow = 1 + (k / steps) * 0.06; // ikinci turda biraz dışa kayar
      const jitter = 1 + (r() - 0.5) * 0.035;
      pts.push([Math.cos(t) * rx * grow * jitter, Math.sin(t) * ry * grow * jitter]);
    }
    // Catmull-Rom → kübik Bezier: yumuşak ama el yapımı
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let k = 0; k < pts.length - 1; k++) {
      const p0 = pts[k - 1] || pts[k];
      const p1 = pts[k];
      const p2 = pts[k + 1];
      const p3 = pts[k + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    ringPath.setAttribute('d', d);
    const len = ringPath.getTotalLength();
    gsap.set(ring, { opacity: 1 });
    gsap.fromTo(ringPath,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 0.8, ease: 'power2.out', overwrite: true });
  }

  function hideRing() {
    gsap.to(ring, { opacity: 0, duration: 0.15, overwrite: true });
  }

  /* ---------- Masaüstü vitrini ---------- */

  function desktop() {
    const n = items.length;
    const T = SCREENS_PER_PROJECT;
    const H = HOLD_SCREENS;
    const U = Math.max((n - 1) * (T + H), 0.0001); // toplam scroll birimi
    section.style.height = `calc(100svh + ${(n - 1) * (T + H) * 100}svh)`;

    // Scroll ilerlemesi → vitrin konumu: her geçişten (T) sonra bir bekleme (H) gelir, orada konum sabit kalır
    const posAt = (progress) => {
      const u = progress * U;
      const k = Math.floor(u / (T + H));
      return Math.min(n - 1, k + Math.min((u - k * (T + H)) / T, 1));
    };
    // i. projenin yerine oturduğu ilerleme (beklemenin başı)
    const progressFor = (i) => (i <= 0 ? 0 : ((i - 1) * (T + H) + T) / U);
    // Geçişin ortasında bırakılırsa en yakın projeye oturur; beklemede bırakılırsa olduğu yerde kalır
    const snapTo = (v) => {
      const u = v * U;
      const k = Math.floor(u / (T + H));
      const r = u - k * (T + H);
      if (k >= n - 1 || r >= T) return v;
      return (r / T < 0.5 ? k * (T + H) : k * (T + H) + T) / U;
    };

    const state = { p: 0 };
    let ringShown = false;
    let ringFor = -1;

    function layout() {
      const vw = window.innerWidth;
      const spacing = Math.min(vw * 0.47, 680); // komşular kenarlarda, yarısı ekran dışında
      stickers.forEach((el, i) => {
        const d = i - state.p;
        const ad = Math.abs(d);
        const s = Math.max(0.5, 1 - 0.5 * Math.min(ad, 1));
        gsap.set(el, {
          x: d * spacing,
          scale: s,
          rotation: d * -9,
          rotationY: d * -28,
          // soldaki komşu künye yazısının altına düşer: kayarken tamamen kaybolur, yazı temiz okunsun
          opacity: ad > 2.2 ? 0 : d < 0 ? Math.max(0, 1 - ad) : Math.max(0.35, 1 - 0.6 * ad),
          zIndex: 100 - Math.round(ad * 10),
          visibility: ad > 2.4 ? 'hidden' : 'visible',
        });
      });

      // Halka yalnızca vitrin bir projede dururken görünür
      const nearest = Math.round(state.p);
      const settled = Math.abs(state.p - nearest) < 0.08;
      if (settled && (!ringShown || ringFor !== nearest)) {
        ringShown = true;
        ringFor = nearest;
        drawRing(nearest + 1);
      } else if (!settled && ringShown) {
        ringShown = false;
        hideRing();
      }
    }

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      invalidateOnRefresh: true,
      snap: n > 1 ? {
        snapTo, duration: { min: 0.25, max: 0.6 }, delay: 0.08, ease: 'power2.out',
      } : false,
      onUpdate(self) {
        const target = posAt(self.progress);
        setActive(Math.round(target));
        gsap.to(state, { p: target, duration: 0.5, ease: 'power3.out', overwrite: true, onUpdate: layout });
      },
    });

    layout();

    // Klavye: ← → ile önceki/sonraki proje; Tab ile gelinen sticker'a gidilir
    // Kaydırmayı GSAP yapar: art arda basılan tuşlar hedefi biriktirir
    let target = null;
    const scroller = { y: 0 };
    const goTo = (i) => {
      i = Math.max(0, Math.min(n - 1, i));
      target = i;
      scroller.y = window.scrollY;
      gsap.to(scroller, {
        y: st.start + progressFor(i) * (st.end - st.start),
        duration: 0.7,
        ease: 'power2.inOut',
        overwrite: true,
        onUpdate: () => window.scrollTo(0, scroller.y),
        onComplete: () => { target = null; },
      });
    };
    const onKey = (e) => {
      // isActive uçlarda (ilk/son projede tam dururken) false döner; aralığı kendimiz kontrol ediyoruz
      const inView = window.scrollY >= st.start - 4 && window.scrollY <= st.end + 4;
      if (!inView || e.altKey || e.metaKey || e.ctrlKey) return;
      if (/input|textarea|select/i.test(e.target.tagName)) return;
      const from = target ?? active;
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(from + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(from - 1); }
    };
    const onFocus = (e) => {
      const el = e.target.closest('.showcase__item');
      if (el) goTo(Number(el.dataset.index));
    };
    const onLeave = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest?.('.showcase__item')) section.classList.remove('is-hovering');
    };
    track.addEventListener('mouseout', onLeave);
    const onEnter = (e) => {
      const el = e.target.closest('.showcase__item');
      section.classList.toggle('is-hovering', !!el && Number(el.dataset.index) === active);
      if (el && Number(el.dataset.index) === active && ringShown) drawRing(active + 1);
    };
    goToImpl = goTo;
    document.addEventListener('keydown', onKey);
    track.addEventListener('focusin', onFocus);
    track.addEventListener('mouseover', onEnter);

    // Komşu sticker'a tıklayınca önce ona git, aktifse vaka sayfasını aç
    const onClick = (e) => {
      const el = e.target.closest('.showcase__item');
      if (el && Number(el.dataset.index) !== active) { e.preventDefault(); goTo(Number(el.dataset.index)); }
    };
    track.addEventListener('click', onClick);

    return () => {
      goToImpl = null;
      gsap.killTweensOf(scroller);
      section.style.height = '';
      document.removeEventListener('keydown', onKey);
      track.removeEventListener('focusin', onFocus);
      track.removeEventListener('mouseover', onEnter);
      track.removeEventListener('mouseout', onLeave);
      section.classList.remove('is-hovering');
      track.removeEventListener('click', onClick);
      gsap.set(stickers, { clearProps: 'all' });
      gsap.set(ring, { opacity: 0 });
    };
  }

  /* ---------- Mobil: kaydırılan tek kart ---------- */

  function swipe() {
    section.classList.add('is-swipe');
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const first = stickers[0];
        if (!first) return;
        const stepW = first.offsetWidth + 16;
        setActive(Math.round(track.scrollLeft / stepW));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    goToImpl = (i) => {
      const el = stickers[i];
      if (!el) return;
      section.scrollIntoView({ behavior: 'smooth' });
      track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' });
    };
    return () => {
      goToImpl = null;
      section.classList.remove('is-swipe');
      track.removeEventListener('scroll', onScroll);
    };
  }

  /* ---------- Başlat ---------- */

  const mm = reduceMotion ? null : gsap.matchMedia();
  const mount = () => {
    if (!mm) return;
    mm.add('(min-width: 760px)', desktop);
    mm.add('(max-width: 759px)', swipe);
  };

  render();
  mount();
  // Vitrinin yüksekliği girişten sonra ayarlandığı için ölçüleri tazele
  ScrollTrigger.refresh();

  // Dışarıdan vitrine erişim (ör. ileride başka bir gezinme eklenirse)
  window.Showcase = {
    section,
    get active() { return active; },
    get items() { return items; },
    goTo(i) {
      if (goToImpl) return goToImpl(i);
      // Azaltılmış hareket: dikey listedeki projeye git
      list.querySelectorAll('.project')[i]?.scrollIntoView();
      setActive(i, true);
    },
    setItems(next) {
      items = next.slice();
      mm?.revert();
      render();
      mount();
      ScrollTrigger.refresh();
    },
  };
})();
