/* WeReply vaka sayfasının bölümleri.
 * Kaynak: /Users/mac/Projects/wereply/docs/case-study.md, ekranlar canvas/project/S-*.dc.html (Sparked palet).
 * EN metinler case-study.md'den; TR çevirisi aşağıda (TR nesnesi).
 * Uygulama ekranlarındaki yazılar İngilizce kalır; onlar ürünün kendisi.
 * Yön B (2026-10-23): akış şeması + açık turuncu önce/sonra bandı + (2. adım) sabit çalışma sayfası, dört hâl. */

(() => {
  const IMG = 'assets/projects/wereply/';

  const EN = {
    // Giriş: uygulama ne, neden var, neden yalnızca katılımcı tarafı. Metin case-study.md'nin Context'i; eksikler [[ ]] ile işaretli.
    intro: {
      title: 'Context',
      paragraphs: [
        'WeReply is a two-sided product: researchers post studies, participants complete them and get paid. I designed the participant app during my internship at YouReply. I had to leave the team before the designs could be implemented, so I rebuilt them as an independent concept and renamed it WeReply.',
      ],
    },
    flow: {
      title: 'The flow',
      lead: 'Find a study, wait for the researcher to approve, get paid.',
      // Şema: uygulamanın üç adımı şerit oluyor; 0 başlamadan önceki kısım.
      // ui: uygulamadaki ekran/buton adı · t: açıklama · opt: isteğe bağlı · state: bekleyen durum · done: tamamlandı · q: karar
      lanes: [
        { n: '0', title: 'Before you start', sub: 'find a study, read what it asks', steps: [
          { ui: 'New Studies' },
          { ui: 'Study page' },
          { ui: 'Study Topic and Scope', opt: true },
          { btn: 'Participate in Research' },
        ] },
        { n: '1', title: 'Complete the survey', sub: 'answer the questions, submit', steps: [
          { ui: 'Survey' },
          { bar: '3 of 10 answered', pct: 30 },
          { btn: 'Submit answers' },
          { t: 'Awaiting review' },
        ] },
        { n: '2', title: 'Researcher confirms', sub: 'the researcher reviews your answers', steps: [
          { t: 'researcher reads the answers' },
          { q: 'approved?' },
          { t: 'Responses approved' },
        ], note: '<b>Message researcher</b> sits inside this step, next to the person who reviews you.' },
        { n: '3', title: 'Payment', sub: 'next payment cycle', steps: [
          { t: 'You got paid' },
          { ui: 'Participated Studies' },
        ] },
      ],
    },
    problem: {
      title: 'What was wrong',
      lead: 'The biggest problem with my first design, from 2024, was that in trying to give the user as much information as possible, the pages ended up overcrowded. The bottom sheet pulled all the attention to itself; in this project I put a more important action in its place, the "Participate in Research" button. With a clear hierarchy of information on the page, the user knows better what to do next.',
      items: [
        { title: 'An unclear message button', text: 'The study page had a floating chat icon. Who was it for? The app answered with a tooltip on the next screen.' },
        { title: 'The survey lived outside the app', text: 'Participants were sent to Google Forms, then had to copy an ID and paste back a completion code within three hours. Most support problems started here.' },
        { title: 'Empty middle, hidden content', text: 'The study description sat in a collapsed sheet at the bottom. The middle of the page was blank.' },
      ],
      before: 'Before · Figma, 2024',
      after: 'After · 2026',
      altBefore: 'Original study page: horizontal stepper, empty middle, chat icon, collapsed sheet',
      altAfter: 'New study page: title, time, reward, three steps with the message button inside step two',
    },
    change: {
      title: 'What changed',
      lead: 'The study page explains the process first, then stays the same page through the whole study.',
      // Sabit telefonun hâlleri: hap adı, ekran, kısa metin (case-study.md'den kısaltıldı; iki hâl yer tutucu)
      states: [
        { pill: 'Start', src: 'flow-02.jpg', title: 'The process, before commitment' },
        { pill: 'Survey', src: 'flow-04.jpg', title: 'The survey is in the app' },
        { pill: 'Waiting', src: 'flow-06.jpg', title: 'One page, four states' },
        { pill: 'Approved', src: 'flow-07.jpg', title: 'Approved' },
        { pill: 'Paid', src: 'flow-08.jpg', title: 'Paid' },
      ],
      // Sabit bloğun altında: aynı üç adım listede de
      same: { title: 'The same three steps everywhere', text: 'The step-by-step progress view the user already knows follows them to the <span lang="en">Studies</span> page as well.', study: 'Study page', list: 'Participated Studies',
        altStudy: 'Study page with three vertical steps', altList: 'Participated Studies list: each card shows the same three circles' },
      altPhone: 'Study page',
      pillsLabel: 'Study page states',
    },
    // Design system kutusu: parça başlıkları iki dilde İngilizce; örnekler uygulamanın kendi yazıları
    system: {
      title: 'Design system',
      colors: 'Color palette',
      roles: ['main action, progress', 'links, labels', 'pending step', 'ground', 'text', 'secondary text'],
      type: 'Typography',
      typeRoles: ['Heading', 'Subheading', 'Body', 'Button', 'Caption'],
      components: 'Components',
      buttons: 'Buttons',
      cards: 'Cards',
      steps: 'Steps',
    },
    outcome: {
      title: 'Outcome',
      lead: 'A nine-screen prototype of the participant flow, clickable end to end.',
      tools: 'I used Figma when I designed the original screens in 2024. The redesign was done with Claude, as live HTML artboards on a design canvas, which made the before and after and the palette trials fast to compare.',
      stripLabel: 'The nine screens',
      screen: 'Screen',
    },
  };
  // TR: problem.lead ve change.same.text Sena'nın; kalanı EN'den Claude'un çevirisi (Sena'nın isteğiyle, 2026-10-23).
  // Uygulamadaki ekran/buton adları ve ekran yazıları TR'de de İngilizce, <span lang="en"> ile.
  const en = (s) => `<span lang="en">${s}</span>`;
  const TR = {
    intro: {
      title: 'Bağlam',
      paragraphs: [
        'WeReply iki taraflı bir uygulama: araştırmacı araştırmalarını yayınlıyor, katılımcılar bu araştırmaları tamamlayıp ücret alıyor. Bu projedeki sayfaları YouReply’daki stajım sırasında tasarladım. Tasarımlar maalesef uygulanamadan benim ekipten ayrılmam gerekti, ben de onları bağımsız bir konsept olarak yeniden tasarladım ve adını WeReply koydum.',
      ],
    },
    flow: {
      title: 'Akış',
      lead: 'Bir araştırma bul, araştırmacının onaylamasını bekle, ödemeni al.',
      lanes: [
        { n: '0', title: 'Başlamadan önce', sub: 'araştırmayı bul, ne istediğini oku', steps: EN.flow.lanes[0].steps },
        { n: '1', title: 'Anketi tamamla', sub: 'soruları cevapla, gönder', steps: [
          ...EN.flow.lanes[1].steps.slice(0, 3),
          { t: 'Değerlendirme bekleniyor' },
        ] },
        { n: '2', title: 'Araştırmacı onaylar', sub: 'araştırmacı cevaplarını inceler', steps: [
          { t: 'araştırmacı cevapları okur' },
          { q: 'onaylandı mı?' },
          { t: en('Responses approved') },
        ], note: `<b lang="en">Message researcher</b> bu adımın içinde, seni değerlendiren kişinin hemen yanında duruyor.` },
        { n: '3', title: 'Ödeme', sub: 'bir sonraki ödeme döneminde', steps: [
          { t: 'Ödemeni aldın' },
          { ui: 'Participated Studies' },
        ] },
      ],
    },
    problem: {
      title: 'Sorun neydi',
      lead: `2024 yılında yaptığım ilk tasarımın en büyük sorunu kullanıcıya bilgiyi olabildiğince açık bir şekilde vermeye çalışırken sayfaların bir yerden sonra çok dolmasıydı. Alttan açılan pencere bütün ilgiyi üzerine çekiyordu, bu projede onun konumuna daha önemli bir aksiyon olan "${en('Participate in Research')}" butonunu yerleştirdim. Sayfa içi bilgi hiyerarşisi sayesinde kullanıcı nasıl hareket etmesi gerektiğini daha iyi biliyor.`,
      items: [
        { title: 'Net olmayan bir mesaj butonu', text: `${en('Study')} sayfasında havada duran bir sohbet ikonu vardı. Kimin içindi? Uygulama bunu ancak bir sonraki ekranda, bir ipucu balonuyla söylüyordu.` },
        { title: 'Anket uygulamanın dışındaydı', text: 'Katılımcılar Google Forms’a yönlendiriliyor, sonra bir kimlik numarasını kopyalayıp üç saat içinde bir tamamlama kodunu geri yapıştırmak zorunda kalıyordu. Destek sorunlarının çoğu burada başlıyordu.' },
        { title: 'Boş orta, gizli içerik', text: 'Araştırmanın açıklaması altta kapalı duran bir pencerenin içindeydi. Sayfanın ortası boştu.' },
      ],
      before: 'Önce · Figma, 2024',
      after: 'Sonra · 2026',
      altBefore: 'Orijinal araştırma sayfası: yatay adım göstergesi, boş orta alan, sohbet ikonu, kapalı alt pencere',
      altAfter: 'Yeni araştırma sayfası: başlık, süre, ödül ve mesaj butonu ikinci adımın içinde olan üç adım',
    },
    change: {
      title: 'Ne değişti',
      lead: `${en('Study')} sayfası önce süreci anlatıyor, sonra araştırma boyunca aynı sayfa olarak kalıyor.`,
      states: [
        { pill: 'Başla', src: 'flow-02.jpg', title: 'Katılmadan önce süreç' },
        { pill: 'Anket', src: 'flow-04.jpg', title: 'Anket uygulamanın içinde' },
        { pill: 'Bekle', src: 'flow-06.jpg', title: 'Tek sayfa, dört hâl' },
        { pill: 'Onaylı', src: 'flow-07.jpg', title: 'Araştırmacılar cevaplarını onayladı' },
        { pill: 'Ödendi', src: 'flow-08.jpg', title: 'Ödeme IBAN’ına gönderildi' },
      ],
      same: {
        title: 'Her yerde aynı üç adım',
        text: `Kullanıcının alıştığı adım adım takip görünümü ${en('Studies')} sayfasında da kullanıcıya eşlik ediyor.`,
        study: en('Study page'),
        list: en('Participated Studies'),
        altStudy: 'Dikey üç adımlı araştırma sayfası',
        altList: 'Participated Studies listesi: her kartta aynı üç daire',
      },
      altPhone: 'Araştırma sayfası',
      pillsLabel: 'Araştırma sayfasının hâlleri',
    },
    system: {
      ...EN.system,
      roles: ['ana aksiyon, ilerleme', 'bağlantılar, etiketler', 'bekleyen adım', 'zemin', 'metin', 'ikincil metin'],
      typeRoles: ['Başlık', 'Alt başlık', 'Gövde', 'Buton', 'Küçük yazı'],
    },
    outcome: {
      title: 'Sonuç',
      lead: 'Katılımcı akışının baştan sona tıklanabilen, dokuz ekranlık bir prototipi.',
      tools: 'Orijinal ekranları 2024’te tasarlarken Figma kullanmıştım. Yeniden tasarımı ise Claude ile bir tasarım tuvali üzerinde canlı HTML artboard’larıyla yapıldı; bu da önce/sonra karşılaştırmasını ve palet denemelerini hızlandırdı.',
      stripLabel: 'Dokuz ekran',
      screen: 'Ekran',
    },
  };
  const TEXT = { tr: TR, en: EN };

  const PALETTE = ['#FE9820', '#C96F00', '#FBDAA9', '#F8F8F6', '#1F1F1F', '#7A7A7A']; // beyaz (kartlar) palete yazılmıyor
  // Akıştaki dokuz ekran (sonuç bandı)
  const FLOW = ['flow-01.jpg', 'flow-02.jpg', 'flow-03.jpg', 'flow-04.jpg', 'flow-05.jpg', 'flow-06.jpg', 'flow-07.jpg', 'flow-08.jpg', 'flow-09.jpg'];

  const SHOTS_V = 5; // ekranlar yeniden render edilince artır (tarayıcı eski görseli göstermesin)
  // Akış ekranları 3x (1124×2436), Figma'dan gelen "önce" ekranları 2x (750×1624)
  const shot = (src, alt) => `<img class="wr-shot" src="${IMG}${src}?v=${SHOTS_V}" width="375" height="812" alt="${alt}" loading="lazy" decoding="async">`;
  const fill = (s) => (window.fillText ? window.fillText(s) : s);
  const items = (list) => `<ol class="wr-items">${list.map((it, i) => `
    <li><span class="wr-num">${String(i + 1).padStart(2, '0')}</span><h3>${it.title}</h3><p>${it.text}</p></li>`).join('')}</ol>`;

  /* ---------- Akış şeması ---------- */

  // Bir adım: ekran adı (ui), açıklama (t), buton (btn, uygulamadaki gradyan hap), ilerleme çubuğu (bar) ya da karar (q).
  // Hepsi beyaz; kaydırmada "şu an" olan adımın chip'leri açık turuncuya döner.
  const chip = (st) => {
    if (st.q) return `<li class="wr-chip is-q"><i aria-hidden="true"></i>${st.q}</li>`;
    // ui, btn ve bar uygulamanın kendi yazıları: her iki dilde İngilizce
    if (st.btn) return `<li class="wr-chip is-btn" lang="en">${st.btn}</li>`;
    if (st.bar) return `<li class="wr-chip is-bar" lang="en"><span class="wr-bar__row"><span>${st.bar}</span><span>${st.pct}%</span></span><span class="wr-bar" aria-hidden="true"><i style="width:${st.pct}%"></i></span></li>`;
    if (st.ui) return `<li class="wr-chip is-ui${st.opt ? ' is-opt' : ''}" lang="en">${st.ui}</li>`;
    return `<li class="wr-chip">${st.t}</li>`;
  };
  // Üstte uygulamanın yatay stepper'ı, her dairenin altında o adımın chip'leri.
  // Hangi daire "şu an" olduğu kaydırmaya bağlı (setupChart); JS yoksa 1 şu an, gerisi bekliyor.
  const dotClass = (n) => (n === '0' ? 'is-hollow' : 'is-pending'); // başta hiçbiri "şu an" değil
  const chart = (lanes) => `
    <div class="wr-chart case-reveal">${lanes.map((ln) => `
      <div class="wr-lane">
        <div class="wr-lane__head">
          <span class="wr-dot ${dotClass(ln.n)}" aria-hidden="true">${ln.n}</span>
          <h3 class="wr-lane__title">${ln.title}<small>${ln.sub}</small></h3>
        </div>
        <ol class="wr-chips">${ln.steps.map(chip).join('')}</ol>
        ${ln.note ? `<p class="wr-lane__note">${ln.note}</p>` : ''}
      </div>`).join('')}
    </div>`;

  // Şema görüş alanından geçerken sıradaki adım ilerler: şema ekranın alt çeyreğine girene kadar hiçbiri
  // "şu an" değil; üst kenar 3/4'e gelince 0, alt kenar 1/3'e gelince 3. (Azaltılmış harekette geçişler CSS'te kapalı.)
  const setupChart = () => {
    const chart = document.querySelector('.wr-chart');
    if (!chart) return;
    const lanes = [...chart.querySelectorAll('.wr-lane')];
    let last = -1;
    const apply = (step) => {
      if (step === last) return;
      last = step;
      lanes.forEach((ln, i) => {
        ln.classList.toggle('is-done', i < step);
        ln.classList.toggle('is-current', i === step);
        const dot = ln.querySelector('.wr-dot');
        dot.classList.remove('is-current');
        dot.classList.toggle('is-pending', i > step && i > 0);
        dot.classList.toggle('is-hollow', i > step && i === 0);
      });
    };
    const update = () => {
      const r = chart.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75; // şemanın üstü buraya gelince 0
      const end = vh * 0.33; // şemanın altı buraya gelince 3
      const p = (start - r.top) / (start - end + r.height);
      apply(p < 0 ? -1 : Math.min(lanes.length - 1, Math.floor(p * lanes.length)));
    };
    let ticking = false;
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); }); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  };
  const setupStates = () => {
    const box = document.querySelector('.wr-change');
    if (!box) return;
    const imgs = [...box.querySelectorAll('.wr-phone img')];
    const pills = [...box.querySelectorAll('[data-wr-pill]')];
    const steps = [...box.querySelectorAll('[data-wr-step]')];
    const show = (i) => {
      imgs.forEach((im, k) => im.classList.toggle('is-on', k === i));
      pills.forEach((p, k) => { p.classList.toggle('is-on', k === i); p.setAttribute('aria-pressed', k === i); });
    };
    let lock = 0; // hapla kaydırırken gözlemci araya girmesin
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting && Date.now() > lock) show(+e.target.dataset.wrStep);
    }), { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach((el) => io.observe(el));
    pills.forEach((p, i) => p.addEventListener('click', () => {
      show(i); lock = Date.now() + 900;
      steps[i].scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    }));
  };
  // Sonuç şeridi: bölüm ekrana oturunca sabitlenir, aşağı kaydırdıkça dokuz ekran yana kayar, sonra sayfa devam eder.
  // (Tekerleği şeride bağlamak işe yaramadı: sayfa kayarken başlayan hareketi tarayıcı sayfaya kilitliyor.)
  // Dokunmatikte, dar ekranda ve azaltılmış harekette sabitleme yok; şerit parmakla/kaydırma çubuğuyla kayar.
  const setupStrip = () => {
    const strip = document.querySelector('.wr-strip');
    if (!strip || !window.gsap || !window.ScrollTrigger) return;
    if (!window.matchMedia('(hover: hover) and (min-width: 761px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    strip.style.scrollSnapType = 'none';
    strip.style.overflowX = 'hidden';
    const max = () => strip.scrollWidth - strip.clientWidth;
    gsap.to(strip, {
      scrollLeft: max,
      ease: 'none',
      scrollTrigger: {
        trigger: strip.closest('.wr-outcome'),
        pin: true,
        start: 'bottom bottom', // şeridin tamamı görünürken sabitlenir
        end: () => `+=${max()}`,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });
  };
  const setup = () => { setupChart(); setupStates(); setupStrip(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(setup));
  else setTimeout(setup);

  // Design system: kenardan kenara açık turuncu bant, "Ne değişti"nin içinde "Her yerde aynı üç adım"dan önce.
  // Butonlar, kart ve adımlar uygulama ekranlarından (S-02, S-07, S-10) HTML olarak yeniden kuruldu.
  const TYPE = [ // boyut / ağırlık, örnek yazı
    [20, 600, 'How People Discover and Choose Podcasts'],
    [15, 600, 'Your progress'],
    [14, 500, 'Survey completed'],
    [13, 600, 'Message researcher'],
    [10, 400, 'Completed'],
  ];
  const CHECK = (w, h, sw) => `<svg width="${w}" height="${h}" viewBox="0 0 16 12" fill="none" aria-hidden="true"><path d="M1.5 6.5l4.5 4L14.5 1.5" stroke="#fff" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const MSG = '<svg width="15" height="14" viewBox="0 0 26 24" fill="none" aria-hidden="true"><path d="M3 2h20a1.5 1.5 0 011.5 1.5v13A1.5 1.5 0 0123 18H11l-6 4.5V18H3a1.5 1.5 0 01-1.5-1.5v-13A1.5 1.5 0 013 2z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="8" cy="10" r="1.6" fill="currentColor"/><circle cx="13" cy="10" r="1.6" fill="currentColor"/><circle cx="18" cy="10" r="1.6" fill="currentColor"/></svg>';
  const systemBox = (p) => `
        <div class="wr-ds" role="group" aria-labelledby="wr-ds">
          <div class="wr-wrap case-reveal">
            <h3 id="wr-ds" class="wr-ds__title" lang="en">${p.title}</h3>
            <div class="wr-ds__row">
              <h4 lang="en">${p.colors}</h4>
              <ul class="wr-palette">${PALETTE.map((c, i) => `
                <li><span class="wr-swatch" style="background:${c}"></span><code>${c}</code><small>${p.roles[i]}</small></li>`).join('')}
              </ul>
            </div>
            <div class="wr-ds__row">
              <h4 lang="en">${p.type} <span>Inter</span></h4>
              <ul class="wr-ds__type">${TYPE.map(([size, weight, sample], i) => `
                <li><small>${p.typeRoles[i]} · ${size} / ${weight}</small><span lang="en" style="font-size:${size}px;font-weight:${weight}">${sample}</span></li>`).join('')}
              </ul>
            </div>
            <div class="wr-ds__row">
              <h4 lang="en">${p.components}</h4>
              <div class="wr-ds__parts">
                <div class="wr-ds__part">
                  <h5 lang="en">${p.buttons}</h5>
                  <div class="wr-ds__panel wr-ds__buttons" lang="en">
                    <span class="wr-ds-btn">Participate in Research</span>
                    <span class="wr-ds-btn is-line">${MSG}Message researcher</span>
                    <span class="wr-ds-btn is-line is-sm">Go to Research</span>
                  </div>
                </div>
                <div class="wr-ds__part">
                  <h5 lang="en">${p.cards}</h5>
                  <div class="wr-ds__panel" lang="en">
                    <div class="wr-ds-card">
                      <div class="wr-ds-card__top"><b>Morning Routines and Mood</b><span class="wr-ds-btn is-line is-sm">Go to Research</span></div>
                      <p>Mar 3, 2025 · 5 min · ₺25</p>
                      <div class="wr-ds-track" aria-hidden="true">
                        <i class="wr-ds-track__line"></i><i class="wr-ds-track__fill"></i>
                        <span style="left:0">${CHECK(10, 8, 2.2)}</span><small style="left:0">Completed</small>
                        <span style="left:50%;margin-left:-10px">${CHECK(10, 8, 2.2)}</span><small style="left:50%;width:100px;margin-left:-50px;text-align:center">Confirmed</small>
                        <span style="right:0">3</span><small style="right:0;font-weight:600">Payment</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wr-ds__part">
                  <h5 lang="en">${p.steps}</h5>
                  <div class="wr-ds__panel" lang="en">
                    <ol class="wr-ds-steps">
                      <li class="is-done"><span>${CHECK(16, 12, 1.6)}</span><div><b>Survey completed</b><small>Your answers were submitted.</small></div></li>
                      <li class="is-current"><span>2</span><div><b>Researcher confirms</b><small>Awaiting researcher review.</small><span class="wr-ds-btn is-line">${MSG}Message researcher</span></div></li>
                      <li><span>3</span><div><b>Payment</b><small>₺25 is sent to your IBAN in the next payment cycle.</small></div></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  const sections = {
    intro: (t) => `
      <section class="wr-intro" aria-labelledby="wr-intro">
        <div class="wr-wrap case-reveal">
          <h2 id="wr-intro" class="wr-title">${t.title}</h2>
          ${t.paragraphs.map((p) => `<p class="wr-intro__p">${fill(p)}</p>`).join('')}
        </div>
      </section>`,

    flow: (t) => `
      <section class="wr-flow" aria-labelledby="wr-flow">
        <div class="wr-wrap">
          <div class="case-reveal">
            <h2 id="wr-flow" class="wr-title">${t.title}</h2>
            <p class="wr-lead">${t.lead}</p>
          </div>
          ${chart(t.lanes)}
        </div>
      </section>`,

    // Açık turuncu bant: solda dört sorun, sağda önce/sonra
    problem: (t) => `
      <section class="wr-problem wr-band" aria-labelledby="wr-problem">
        <div class="wr-wrap wr-problem__grid">
          <div class="case-reveal">
            <h2 id="wr-problem" class="wr-title">${t.title}</h2>
            <p class="wr-lead">${fill(t.lead)}</p>
            ${items(t.items)}
          </div>
          <div class="wr-pair case-reveal">
            <figure>${shot('before-study.jpg', t.altBefore)}<figcaption>${t.before}</figcaption></figure>
            <figure>${shot('flow-02.jpg', t.altAfter)}<figcaption>${t.after}</figcaption></figure>
          </div>
        </div>
      </section>`,

    // Ne değişti: solda hâl başına bir metin, sağda sabit çalışma sayfası; hangi metin görünürse o hâl.
    // Haplar tıklanabilir: tıklayınca hâl değişir ve metin o adıma kayar.
    change: (t, all) => `
      <section class="wr-change" aria-labelledby="wr-change">
        <div class="wr-wrap wr-change__head case-reveal">
          <h2 id="wr-change" class="wr-title">${t.title}</h2>
          <p class="wr-lead">${t.lead}</p>
        </div>
        <div class="wr-wrap wr-change__grid">
          <div>
            <ol class="wr-steps">${t.states.map((st, i) => `
              <li class="wr-step case-reveal" data-wr-step="${i}">
                <span class="wr-step__label">${st.pill}</span>
                <h3>${fill(st.title)}</h3>
              </li>`).join('')}
            </ol>
          </div>
          <div class="wr-sticky case-reveal">
            <div class="wr-phone">${t.states.map((st, i) => `
              <img class="wr-shot${i === 0 ? ' is-on' : ''}" src="${IMG}${st.src}?v=${SHOTS_V}" width="375" height="812" alt="${t.altPhone}: ${st.pill}" loading="lazy" decoding="async">`).join('')}
            </div>
            <div class="wr-pills" role="group" aria-label="${t.pillsLabel}">${t.states.map((st, i) => `
              <button type="button"${i === 0 ? ' class="is-on"' : ''} aria-pressed="${i === 0}" data-wr-pill="${i}">${st.pill}</button>`).join('')}
            </div>
          </div>
        </div>${systemBox(all.system)}
        <div class="wr-wrap wr-same case-reveal">
          <div>
            <h3 class="wr-same__title">${t.same.title}</h3>
            <p class="wr-same__text">${t.same.text}</p>
          </div>
          <div class="wr-pair">
            <figure>${shot('flow-02.jpg', t.same.altStudy)}<figcaption>${t.same.study}</figcaption></figure>
            <figure>${shot('flow-09.jpg', t.same.altList)}<figcaption>${t.same.list}</figcaption></figure>
          </div>
        </div>
      </section>`,

    outcome: (t) => `
      <section class="wr-outcome" aria-labelledby="wr-outcome">
        <div class="wr-wrap case-reveal">
          <h2 id="wr-outcome" class="wr-title">${t.title}</h2>
          <p class="wr-lead">${t.lead}</p>
          <p class="wr-outcome__tools">${t.tools}</p>
        </div>
        <ol class="wr-strip case-reveal" aria-label="${t.stripLabel}">${FLOW.map((f, i) => `
          <li>${shot(f, `${t.screen} ${i + 1}`)}</li>`).join('')}
        </ol>
      </section>`,
  };

  window.STORIES = window.STORIES || {};
  window.STORIES.wereply = {
    order: ['intro', 'flow', 'problem', 'change', 'outcome'],
    render(lang = window.LANG || 'tr') {
      if (!TEXT[lang]) lang = 'tr';
      const t = TEXT[lang];
      return `<div class="wr" lang="${lang}">${this.order.map((k) => sections[k](t[k], t)).join('')}</div>`;
    },
  };
})();
