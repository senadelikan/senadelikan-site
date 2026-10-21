/* Maskotlu giriş animasyonu · prototip
 * Denemek istediğin ayarların hepsi CONFIG içinde. */

window.applyI18n?.(); // İngilizcede sayfa metinlerini çevir (i18n.js)

const CONFIG = {
  loaderMs: 1500,      // yükleme ekranının en uzun süresi (atlanabilir)
  loaderFps: 12,       // yüklemede kendi kendine dönüş hızı (kare/sn)
  settleFps: 40,       // yükleme bitince önden bakışın arkasındaki kareye hızlıca tamamlama
  scrub: 0.6,          // scroll'u takip ederken yumuşatma (0 = birebir)
  // Aşamaların uzunluğu, ekran boyu cinsinden (1 = bir ekran yüksekliği kadar scroll)
  screensPerTurn: 2.3, // dönüş hızı: tam bir tur kaç ekran boyu scroll (ilk sürümdeki hız)
  whiteBeat: 0.05,     // dönüş bittikten sonra bembeyaz an
  colorize: 0.32,      // pembeye geçiş + bulut + "Hey!"
  hold: 0.1,           // renklenmiş hâlde bekleme
  dock: 0.8,           // küçülüp üste yerleşme (içerik de bu sırada alttan gelir)
};

// 9 bilinçli olarak yok: önden bakan kare pembe versiyonla (brand/9.svg) gösterilir.
const FRAME_FILES = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const N = FRAME_FILES.length;
const FRONT_SLOT = 8; // 8.svg'den (index 7) sonra gelen yer = önden bakış
// Scroll'la dönüş arkadan bakan 21.svg'den (index 19) başlar, 1→8 ile döner; ardından pembe 9 gelir = yarım tur.
const SPIN_FROM = FRAME_FILES.indexOf(21);
const SPIN_TO = FRONT_SLOT - 1 + N; // 8.svg, bir tur sonrası olarak sayılır

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const $ = (s) => document.querySelector(s);
const stage = $('.stage');
const mascot = $('.mascot');
const framesEl = $('.frames');
const pink = $('.pink');
const cloud = $('.cloud');
const hey = $('.hey');
const nav = $('.nav');
const hint = $('.scroll-hint');
const skipBtn = $('.skip');

/* ---------- Kareler: hepsi önceden yüklenip çözülür, sonra sadece görünürlük değişir ---------- */

const frameImgs = FRAME_FILES.map((n) => {
  const img = new Image();
  img.src = `assets/frames/${n}.svg`;
  img.alt = '';
  img.decoding = 'async';
  framesEl.appendChild(img);
  return img;
});
const framesReady = Promise.all(frameImgs.map((img) => img.decode().catch(() => {})));

let shown = -1;
function showFrame(i) {
  i = ((i % N) + N) % N;
  if (i === shown) return;
  if (shown >= 0) frameImgs[shown].classList.remove('is-on');
  frameImgs[i].classList.add('is-on');
  shown = i;
}
showFrame(0);

/* ---------- Sabitlenmiş maskot: tıklanınca başa dön ---------- */

// Logo (maskot ya da isim) tıklanınca tanıtım yazısına ("Merhaba, ben Sena…") git
const toHero = () => $('#merhaba').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

$('.nav__brand').addEventListener('click', (e) => {
  e.preventDefault();
  toHero();
});

mascot.addEventListener('click', () => {
  if (!body.classList.contains('is-docked')) return;
  toHero();
});

function setDocked(on) {
  body.classList.toggle('is-docked', on);
  mascot.tabIndex = on ? 0 : -1;
}

/* Merkezdeki kutudan üst-orta konuma geçiş için gereken ölçü ve kayma */
// Maskot, menüdeki logo yuvasına (.nav__slot) yerleşir: konumu ve boyu oradan ölçülür.
// Maskot kutusu ekranın ortasında, dönüş noktası üst-orta (transform-origin: 50% 0%).
const slot = $('.nav__slot');
const slotLogo = $('.nav__logo');
function dockScale() {
  return slot.offsetHeight / mascot.offsetHeight;
}
function dockX() {
  const r = slot.getBoundingClientRect();
  return r.left + r.width / 2 - stage.clientWidth / 2;
}
function dockY() {
  const boxTop = stage.clientHeight / 2 - mascot.offsetHeight / 2;
  return slot.getBoundingClientRect().top - boxTop;
}

/* ---------- Azaltılmış hareket: animasyonsuz sürüm ---------- */

if (reduceMotion) {
  root.classList.add('reduced');
  body.classList.remove('is-loading');
  // Bölüm geçilince maskot geçişsiz olarak üste yerleşir.
  ScrollTrigger.create({
    trigger: '.intro',
    start: 'bottom 60%',
    onToggle: (self) => {
      setDocked(self.isActive);
      gsap.set(mascot, self.isActive ? { x: dockX(), y: dockY(), scale: dockScale() } : { x: 0, y: 0, scale: 1 });
      gsap.set(mascot, { opacity: self.isActive ? 0 : 1 });
      gsap.set(slotLogo, { opacity: self.isActive ? 1 : 0 });
      gsap.set([cloud, hey], { opacity: self.isActive ? 0 : 1 });
      gsap.set(nav, { opacity: self.isActive ? 1 : 0 });
    },
    end: 'max',
  });
} else {
  runIntro();
  runContentMotion();
}

/* ---------- Menü: bölümlere yumuşak kaydırma, dil anahtarı ---------- */

document.querySelectorAll('.content a[href^="#"]:not([href="#"]), .nav a[href^="#"]:not([href="#"])').forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

// Dil düğmesi i18n.js içinde

/* ---------- İçerik hareketi: sakin ve amaçlı (0.4–0.8 sn, power2.out) ---------- */

function runContentMotion() {
  root.classList.add('js');

  // Her öğe scroll'da bir kez, 12 px yukarıdan yumuşakça belirir
  gsap.utils.toArray('.content .reveal').forEach((el) => {
    // Süreç adımları aynı anda tetiklenir; soldan sağa sırayla gelsinler
    const delay = el.matches('.step') ? [...el.parentNode.children].indexOf(el) * 0.12 : 0;
    gsap.fromTo(el, { y: 12 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
  // Projeler vitrini showcase.js içinde
}

function runIntro() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  // Scroll mesafesi aşamaların toplamından gelir: 1 ekran + animasyon
  const { whiteBeat, colorize, hold, dock } = CONFIG;
  const spin = CONFIG.screensPerTurn * (SPIN_TO - SPIN_FROM) / (N - 1); // kare başına ilk sürümdeki scroll mesafesi
  const introScreens = spin + whiteBeat + colorize + hold + dock;
  // İçerik, maskot küçülüp yukarı çıkarken alttan gelir ve maskot yerleştiği anda
  // tam menünün altına oturur: arada boş beyaz ekran kalmaz.
  document.querySelector('.intro').style.height = `calc(${introScreens * 100}svh + var(--head-h))`;

  /* --- 1. Yükleme: kendi kendine dönüş --- */
  let loading = true;

  const spinTick = (() => {
    let acc = 0;
    let i = 0;
    return (time, delta) => {
      acc += delta;
      const step = 1000 / CONFIG.loaderFps;
      while (acc >= step) { acc -= step; showFrame(++i); }
    };
  })();

  framesReady.then(() => gsap.ticker.add(spinTick));
  // Açılışta sahne belirir. Maskotun kendi saydamlığına dokunmuyoruz: onu yalnızca scroll zaman çizelgesi
  // yönetir, yoksa geri sarınca yarım kalmış belirme değerine (soluk maskot) dönüyordu.
  gsap.fromTo(stage, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' });
  // Kaydırma ipucu yüklemeden itibaren görünür: scroll etmek yüklemeyi de atlatır
  if (!location.hash) gsap.to(hint, { opacity: 1, duration: 0.6, delay: 0.5 });

  const minWait = new Promise((r) => setTimeout(r, CONFIG.loaderMs));
  Promise.all([framesReady, minWait]).then(endLoader);

  // Vaka sayfasından "← Projeler" ile dönüş (index.html#projeler):
  // giriş tekrar oynamasın, doğrudan hedef bölüme gidilsin.
  const deepLink = location.hash.length > 1 && document.querySelector(location.hash);
  if (deepLink) {
    framesReady.then(() => {
      endLoader();
      requestAnimationFrame(() => {
        window.scrollTo(0, deepLink.getBoundingClientRect().top + window.scrollY);
        ScrollTrigger.update();
        tl.progress(tl.scrollTrigger.progress); // maskot animasyonsuz yerine otursun
      });
    });
  }

  const skipEvents = ['wheel', 'touchmove', 'keydown'];
  skipEvents.forEach((e) => window.addEventListener(e, onSkipIntent, { passive: true }));
  skipBtn.addEventListener('click', onSkipIntent);
  function onSkipIntent() { framesReady.then(endLoader); }

  function endLoader() {
    if (!loading) return;
    loading = false;
    skipEvents.forEach((e) => window.removeEventListener(e, onSkipIntent));
    gsap.ticker.remove(spinTick);

    // Dönüşü kesmeden, tur başlangıcı olan kareye kadar hızlıca tamamla; sonra scroll devralır.
    const settle = gsap.to({ i: shown }, {
      i: shown <= SPIN_FROM ? SPIN_FROM : SPIN_FROM + N,
      duration: (((SPIN_FROM - shown) % N + N) % N) / CONFIG.settleFps,
      ease: 'none',
      onUpdate() { showFrame(Math.round(this.targets()[0].i)); },
      onComplete() { settling = false; renderSpin(); },
    });
    settling = settle.duration() > 0;
    if (!settling) renderSpin();

    body.classList.remove('is-loading');
    gsap.to(hint, { opacity: window.scrollY < 10 ? 1 : 0, duration: 0.4, overwrite: true });
    ScrollTrigger.refresh();
  }

  /* --- 2–4. Scroll'a bağlı zaman çizelgesi --- */
  const spinState = { p: 0 };
  let settling = false;
  function renderSpin() {
    if (loading || settling) return;
    showFrame(Math.round(SPIN_FROM + (SPIN_TO - SPIN_FROM) * spinState.p));
  }

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: '.intro',
      start: 'top top',
      end: () => `+=${introScreens * window.innerHeight}`,
      scrub: CONFIG.scrub,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        setDocked(self.progress > 0.995);
        if (!loading) gsap.to(hint, { opacity: self.progress < 0.02 ? 1 : 0, duration: 0.3, overwrite: true });
      },
    },
  });

  // Dönüş
  tl.addLabel('spin')
    .to(spinState, { p: 1, duration: spin, onUpdate: renderSpin }, 'spin');

  // Bembeyaz an, sonra pembe maskot + bulut + "Hey!"
  tl.addLabel('color', `spin+=${spin + whiteBeat}`)
    .to(framesEl, { opacity: 0, duration: colorize * 0.1 }, 'color')
    .fromTo(pink, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: colorize * 0.2, ease: 'back.out(3)' }, 'color')
    .fromTo(cloud, { opacity: 0, scale: 0.4, rotation: -10 },
      { opacity: 1, scale: 1, rotation: 0, duration: colorize * 0.5, ease: 'back.out(1.6)' }, `color+=${colorize * 0.1}`)
    .fromTo(hey, { opacity: 0, scale: 0.2, rotation: -18 },
      { opacity: 1, scale: 1, rotation: 0, duration: colorize * 0.35, ease: 'back.out(2.4)' }, `color+=${colorize * 0.6}`);

  // Küçülüp en üste ortaya yerleşme
  tl.addLabel('dock', `color+=${colorize + hold}`)
    .to(hey, { opacity: 0, scale: 0.5, duration: dock * 0.3, ease: 'power2.in' }, 'dock')
    .to(cloud, { opacity: 0, scale: 0.6, duration: dock * 0.5, ease: 'power2.in' }, 'dock')
    .to(mascot, { x: dockX, y: dockY, scale: dockScale, duration: dock, ease: 'power3.inOut' }, 'dock')
    .to(nav, { opacity: 1, duration: dock * 0.4 }, `dock+=${dock * 0.6}`)
    // Yerine oturduğu an küçültülmüş çizim yerine menüdeki keskin logo görünür
    // Değerler açıkça veriliyor ki geri sarınca maskot her zaman tam görünür hâline dönsün
    .fromTo(slotLogo, { opacity: 0 }, { opacity: 1, duration: dock * 0.04, immediateRender: false }, `dock+=${dock * 0.96}`)
    .fromTo(mascot, { opacity: 1 }, { opacity: 0, duration: dock * 0.04, immediateRender: false }, `dock+=${dock * 0.96}`);
}
