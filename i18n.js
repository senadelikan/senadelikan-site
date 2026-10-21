/* Dil: ?lang=en|tr → kayıtlı seçim → tarayıcı dili (Türkçe değilse İngilizce).
   <head> içinde, diğer betiklerden önce yüklenir; window.LANG sayfa çizilmeden belirlenir. */

(() => {
  const LANGS = ['tr', 'en'];
  const KEY = 'lang';
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch { /* gizli pencere vb. */ } },
  };

  const browserLang = (navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let lang;
  if (LANGS.includes(fromUrl)) { lang = fromUrl; store.set(lang); }
  else lang = LANGS.includes(store.get()) ? store.get() : browserLang;

  window.LANG = lang;
  document.documentElement.lang = lang;

  // İngilizce metinler (kaynak: docs/metinler-en.md). Türkçesi sayfada / kodda yerinde durur.
  const EN = {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'intro.scroll': 'Scroll',
    'intro.skip': 'Skip',

    'hero.kicker': 'Portfolio · 2026',
    'hero.title': 'Hi, I’m Sena. I’m on my way to becoming a <span class="marker kmark">UI/UX</span> and <span class="marker marker--pink kmark">Product Designer</span>.',
    'hero.projects': 'See my projects',
    'cv': 'Download my CV',
    'marquee': 'HELLO ✦ WELCOME TO MY PORTFOLIO ✦ LET’S MAKE THINGS TOGETHER ✦&nbsp;',

    'projects.kicker': '01 · Projects',
    'projects.heading': 'Selected work',
    'projects.all': 'All projects',
    'projects.role': 'Role',
    'projects.year': 'Year',
    'projects.tools': 'Tools',
    'projects.read': 'Read the case study →',
    'projects.edge': 'Portfolio',

    'about.kicker': '02 · About',
    'about.heading': 'A bit about me',
    'about.p1': 'I studied business administration, but design has always had a big place in my life. It started as a hobby, making things for fun, and turned into real work through internships at Max FM and YouReply.',
    'about.p2': 'After that I worked in energy markets, which let me see a very different field from the inside. Now I want to bring these two worlds together by designing interfaces that make people’s work easier.',
    'about.tools': 'Tools',

    'process.kicker': '03 · Process',
    'process.heading': 'How do I work?',
    'process.1.title': 'Listen',
    'process.1.text': 'First I try to understand the question: who is it for, and what is the problem?',
    'process.2.title': 'Sketch',
    'process.2.text': 'Quick sketches on paper: lots of ideas, little attachment.',
    'process.3.title': 'Build',
    'process.3.text': 'I turn the strongest idea into a clickable prototype in Figma.',
    'process.4.title': 'Test',
    'process.4.text': 'I ask others to try the prototype and fix the places where they get stuck.',

    'contact.kicker': '04 · Contact',
    'contact.heading': 'Let’s talk!',
    'contact.email': 'Email',

    'archive.pageTitle': 'All projects · Sena Delikan',
    'archive.back': 'Home',
    'archive.kicker': 'Archive',
    'archive.heading': 'All projects',
    'archive.colNo': 'No',
    'archive.colProject': 'Project',
    'archive.colRole': 'Role',
    'archive.colYear': 'Year',
    'archive.featured': 'On home page',

    'case.pageTitle': 'Case study · Sena Delikan',
    'case.back': 'Projects',
    'case.backArchive': 'Archive',
    'case.kicker': 'Case study',
    'case.year': 'Year',
    'case.type': 'Type',
    'case.role': 'Role',
    'case.tools': 'Tools',
    'case.next': 'Next project',
    'case.empty': '[[The case study for this project hasn’t been written yet.]]',
    'todo': 'To do',

    'a11y.toIntro': 'senadelikan, go to intro',
    'a11y.home': 'senadelikan, home',
    'a11y.mainMenu': 'Main menu',
    'a11y.lang': 'Language',
    'a11y.backToTop': 'Sena Delikan, back to top',
    'a11y.intro': 'Intro',
    'a11y.showcase': 'showcase',
    'a11y.projectList': 'Project list',
  };

  // t('anahtar', 'Türkçe'): İngilizcede sözlükteki metin, yoksa / Türkçede verilen metin
  window.t = (key, tr) => (lang === 'en' && EN[key] != null ? EN[key] : tr);
  // L('Türkçe', 'English'): kodun içinde iki dili yan yana tutan kısa metinler için
  window.L = (tr, en) => (lang === 'en' ? en : tr);

  // Sayfadaki [data-i18n] ve [data-i18n-attr="aria-label:anahtar"] metinlerini İngilizceye çevirir.
  // Sayfanın kendi betikleri (main.js, archive.js, case.js) en başta çağırır.
  window.applyI18n = () => {
    if (lang !== 'en') return;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const s = EN[el.dataset.i18n];
      if (s != null) el.innerHTML = s;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((x) => x.trim());
        if (EN[key] != null) el.setAttribute(attr, EN[key]);
      });
    });
  };

  // Sayfalar arası geçişte dili adreste de taşı (kayıt engelliyse de korunsun).
  // Tarayıcının kendi diliyle aynıysa adres sade kalır.
  const withLang = (href) => {
    const url = new URL(href, location.href);
    if (url.origin !== location.origin || !/\.html$/.test(url.pathname)) return null;
    if (lang === browserLang) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    return url.href;
  };
  document.addEventListener('click', (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const href = withLang(a.getAttribute('href'));
    if (href) a.href = href;
  }, true);

  // Dil düğmesi: seçimi kaydet ve sayfayı yeniden yükle. Ana sayfada o an görünen bölüme
  // geri dönülür (#bölüm adresi girişi atlatır); en üstteyse giriş baştan oynar.
  const switchTo = (next) => {
    if (next === lang) return;
    store.set(next);
    const url = new URL(location.href);
    url.searchParams.set('lang', next);
    const mid = innerHeight / 2;
    const current = [...document.querySelectorAll('main section[id]')]
      .find((s) => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
    url.hash = current ? current.id : '';
    location.replace(url.href);
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang button').forEach((btn) => {
      const code = btn.textContent.trim().toLowerCase();
      btn.setAttribute('aria-pressed', String(code === lang));
      btn.addEventListener('click', () => switchTo(code));
    });
  });
})();
