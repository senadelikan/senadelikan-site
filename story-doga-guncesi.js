/* Doğa Güncesi vaka sayfasının bölümleri — bant düzeni (2 Kasım 2026, ilk sürüm; Sena bundan devam edecek).
 * "Sabit sahne" denemesi _story-doga-guncesi-sahne.js/.css olarak yedekte.
 * Kaynak: ~/Projects/doğa-güncesi (PDF 05-Ciktilar/logosuz, illüstrasyonlar 07-Depo/photoshop-exports),
 * süreç notları InDesign Scripts Panel v2/OKUBENI.md ve 09-Arsiv/linkedin-prompt.md.
 * Sayfa kitabın kendi dilinde: beyaz kâğıt, Poppins, dört bölüm paleti (Deniz, Orman, Tarla, Kent).
 * Dürüst metin: kitap baskı aşamasında; müşteri yalnızca "KAGED / DAFI"; yazarın adı ve fotoğrafı geçmez.
 * TR ve EN aynı dosyada (TEXT.tr / TEXT.en), WeReply ve Wholly gibi; bölüm adları, slogan ve yazı örnekleri de çevrildi (Sena, 4 Kasım 2026). */

(() => {
  const IMG = 'assets/projects/doga-guncesi/';
  const page = (n, alt, cls = '') => `<img class="dg-page ${cls}" src="${IMG}pages/p${n}.jpg" width="839" height="1191" alt="${alt}" loading="lazy" decoding="async">`;

  // Dört bölüm: palet tonları kitabın DG_Kurulum.jsx'inden (Deniz ve Orman hex olarak tasarımdan; Tarla ve Kent CMYK'dan ekrana yaklaştırıldı)
  // Bölüm adları (no/title/sub) dile göre TEXT.<dil>.chapters.list içinde; sırası buradakiyle aynı.
  const CHAPTERS = [
    { key: 'deniz', page: '10', tones: ['#394988', '#596ca3', '#7c90bb', '#a1b9d8'], ground: '#eef2f8' },
    { key: 'orman', page: '22', tones: ['#074734', '#45674d', '#778d63', '#afbc7b'], ground: '#f2f5ee' },
    { key: 'tarla', page: '36', tones: ['#7a4a1c', '#b5651d', '#d9a24c', '#ecd08f'], ground: '#fbf4e6' },
    { key: 'kent', page: '45', tones: ['#4a2d52', '#6f4a7c', '#9a7aa8', '#c6b0d0'], ground: '#f7f3f8' },
  ];

  // Kurulan sayfa (bant): Orman bölümünden s. 29 (Böcekler ve Küçük Canlılar). box: [sol%, üst%, genişlik%], cy: parçanın dikey merkezi (%)
  // Tarif satırları script'in kendisi: iki dilde de aynı kalır.
  const STEPS = [
    { key: 'baslik', tip: 'baslik', args: [['no', '04'], ['metin', 'Böcekler ve Küçük Canlılar']], img: 'baslik.png', w: 1190, h: 285, box: [11.3, 7.1, 70.9], cy: 13 },
    { key: 'resim', tip: 'resim', args: [['dosya', 'bocekler.png'], ['hiza', 'sağ']], img: 'orman-bocekler.png', w: 455, h: 700, box: [59.5, 25.5, 32.5], cy: 42 },
    { key: 'tablo', tip: 'tablo', args: [['sütun', 'Tür Grubu · Gözlem Ortamı · İpucu']], img: 'tablo.png', w: 1380, h: 760, box: [11.3, 55.9, 82.2], cy: 72 },
    { key: 'altbilgi', tip: 'altbilgi', args: [['sol', 'KAGED / DAFI'], ['sağ', '29']], img: 'altbilgi.png', w: 1380, h: 105, box: [11.3, 93.1, 82.2], cy: 95 },
  ];
  // Baskı şeridi: 02 (künye) ve 05 (önsöz) yok: yazarın adı/fotoğrafı var, sitede kişi adı ve görseli olmasın
  const STRIP = ['06', '03', '20', '26', '27', '53', '60', '16'];

  const TEXT = {
    tr: {
      cover: {
        kicker: 'Kitap',
        title: 'Dört ekosistem için bir gözlem rehberi',
        tagline: 'Gözlemle · Keşfet · Kaydet', // sayfanın üstündeki başlığın altına yerleşir (kapak sloganı)
        subtitle: 'Türkiye’nin Dört Ekosistemi için Kapsamlı Doğa Gözlem Rehberi',
        lead: 'KAGED / DAFI için hazırlanan bir doğa rehberi tasarımı.',
        facts: [['78', 'sayfa'], ['A5', '148 × 210 mm'], ['4', 'bölüm, 4 palet'], ['2026', 'baskı aşamasında']],
        pageAlt: 'Doğa Güncesi ön kapağı',
      },
      chapters: {
        kicker: 'Bölümler',
        title: 'Dört ekosistem, dört renk paleti',
        lead: 'Kitap dört ana bölümden oluşuyor: deniz, orman, tarla ve kent.',
        list: [
          { no: 'Bölüm bir', title: 'Deniz & Kıyı', sub: 'Türkiye’nin Mavi Mirası' },
          { no: 'Bölüm iki', title: 'Orman & Dağ', sub: 'Türkiye’nin Yeşil Kalesi' },
          { no: 'Bölüm üç', title: 'Tarla & Mera', sub: 'Açık Alanların Sessiz Zenginliği' },
          { no: 'Bölüm dört', title: 'Kent Doğası', sub: 'Şehrin İçindeki Vahşi Yaşam' },
        ],
        toneNames: ['Koyu', 'Ana', 'Orta', 'Açık'],
        paletteLabel: (c) => `${c.title} paleti`,
        dotsLabel: 'Bölümler arasında geçiş',
        pageAlt: (c) => `${c.title} bölüm kapağı`,
      },
      system: {
        kicker: 'Sayfa sistemi',
        title: 'Tek düzen, dört renk',
        lead: 'Sayfaların hepsi aynı ızgaraya oturur ve birkaç sayfa tipinden türer. Bölüm değişince düzen değil, yalnızca palet değişir; okuyucu kitabın neresinde olduğunu renkten anlar.',
        pages: [
          // Her sayfa tipi başka bir bölümden: düzen aynı, yalnızca palet değişiyor
          { n: '16', ch: 0, title: 'Bölüm sayfası', text: 'Başlık, gövde metni, tür tablosu ve IUCN rozetleri.' },
          { n: '27', ch: 1, title: 'Tür kartı', text: 'Bilimsel ad, kısa bilgi ve çizim alanı; altta bölümün illüstrasyonu.' },
          { n: '41', ch: 2, title: 'Gözlem formu', text: 'Tarih, konum, hava durumu hapları; elle doldurulacak çizgiler.' },
          { n: '52', ch: 3, title: 'Günlük kayıt', text: 'Ay evresi ve hava ikonları, gözlem ve çizim alanları.' },
        ],
        pageAlt: (p) => `${p.title}: kitaptan örnek sayfa`,
      },
      type: {
        kicker: 'Yazı',
        font: 'Poppins',
        weights: '400 · 500 · 600 · 700',
        weightsNote: 'Regular · Medium · SemiBold · Bold',
        rows: [
          ['h1', 'KIYI KUŞLARI', 'H1 · Bölüm başlığı · Bold'],
          ['h2', 'Nerede gözleyeceksin?', 'H2 · Alt başlık · SemiBold'],
          ['etiket', 'TÜRKİYE KIYI RAKAMLARI', 'Etiket · Küçük harf aralıklı · Medium'],
          ['govde', 'Kıyı kuşları kayalık, kumsal ve lagünlerde beslenir.', 'Gövde · Regular'],
          ['not', 'Kaynak: IUCN Kırmızı Liste (2024)', 'Dipnot · Italic'],
        ],
      },
      code: {
        kicker: 'Üretim',
        title: 'Kitap elle dizilmedi, AI ile kodla kuruldu',
        lead: 'Yetmiş sekiz sayfanın tamamı Adobe Illustrator ile hazırladığım tasarım şablonlarını takip ederek InDesign’da Claude ile yazdığım script’lerle kuruldu.',
        buildLabel: 'Sayfa 29 adım adım kuruluyor',
        buildAlt: 'Sayfa 29: başlık, böcek illüstrasyonu, tür grubu tablosu ve altbilgi',
        linesLabel: 'Tarif satırları',
        dotsLabel: 'Adımlar',
        stepLabel: (i, tip) => `${i}. adım: ${tip}`,
        steps: STEPS,
        honest: 'Son hataları araç değil göz buldu. Göz hâlâ gerekiyor.',
      },
      print: {
        kicker: 'Baskı',
        title: 'Baskı aşamasında',
        lead: 'Metin tarafı bitti, kitap baskıya hazırlanıyor. Ön kısım (künye, içindekiler, önsöz, ekipman listesi) ve arka kısım (doğa takvimi, ay döngüleri, çizim rehberi, kaynakça) bölümlerle yarışmasın diye ılık nötr griyle dizildi.',
        strip: STRIP,
        stripLabel: 'Kitaptan sayfalar',
        pageAlt: (n) => `Kitaptan sayfa ${Number(n)}`,
      },
    },
    en: {
      cover: {
        kicker: 'The book',
        title: 'An observation guide to four ecosystems',
        tagline: 'Observe · Explore · Record',
        subtitle: 'A Comprehensive Nature Observation Guide to Turkey’s Four Ecosystems',
        lead: 'A nature guide designed for KAGED / DAFI.',
        facts: [['78', 'pages'], ['A5', '148 × 210 mm'], ['4', 'chapters, 4 palettes'], ['2026', 'going to print']],
        pageAlt: 'Doğa Güncesi front cover',
      },
      chapters: {
        kicker: 'Chapters',
        title: 'Four ecosystems, four color palettes',
        lead: 'The book has four main chapters: sea, forest, field and city.',
        list: [
          { no: 'Chapter one', title: 'Sea & Coast', sub: 'Turkey’s Blue Heritage' },
          { no: 'Chapter two', title: 'Forest & Mountain', sub: 'Turkey’s Green Fortress' },
          { no: 'Chapter three', title: 'Field & Meadow', sub: 'The Quiet Wealth of Open Land' },
          { no: 'Chapter four', title: 'Urban Nature', sub: 'Wildlife Inside the City' },
        ],
        toneNames: ['Dark', 'Main', 'Mid', 'Light'],
        paletteLabel: (c) => `${c.title} palette`,
        dotsLabel: 'Switch between chapters',
        pageAlt: (c) => `${c.title} chapter opener`,
      },
      system: {
        kicker: 'Page system',
        title: 'One layout, four colors',
        lead: 'Every page sits on the same grid and comes from a handful of page types. When the chapter changes, only the palette changes, not the layout; the reader can tell where they are in the book from the color.',
        pages: [
          { n: '16', ch: 0, title: 'Chapter page', text: 'Heading, body text, species table and IUCN badges.' },
          { n: '27', ch: 1, title: 'Species card', text: 'Scientific name, a short note and a drawing area; the chapter’s illustration below.' },
          { n: '41', ch: 2, title: 'Observation form', text: 'Date, location and weather pills; lines to fill in by hand.' },
          { n: '52', ch: 3, title: 'Daily log', text: 'Moon phase and weather icons, space for notes and drawings.' },
        ],
        pageAlt: (p) => `${p.title}: sample page from the book`,
      },
      type: {
        kicker: 'Type',
        font: 'Poppins',
        weights: '400 · 500 · 600 · 700',
        weightsNote: 'Regular · Medium · SemiBold · Bold',
        rows: [
          ['h1', 'SHOREBIRDS', 'H1 · Chapter heading · Bold'],
          ['h2', 'Where will you observe?', 'H2 · Subheading · SemiBold'],
          ['etiket', 'TURKEY’S COAST IN NUMBERS', 'Label · Spaced capitals · Medium'],
          ['govde', 'Shorebirds feed on rocky shores, beaches and lagoons.', 'Body · Regular'],
          ['not', 'Source: IUCN Red List (2024)', 'Footnote · Italic'],
        ],
      },
      code: {
        kicker: 'Production',
        title: 'The book wasn’t typeset by hand; it was built with code and AI',
        lead: 'All seventy-eight pages were built in InDesign with scripts I wrote with Claude, following the design templates I had prepared in Adobe Illustrator.',
        buildLabel: 'Page 29 being built step by step',
        buildAlt: 'Page 29: heading, insect illustration, species group table and footer',
        linesLabel: 'Recipe lines',
        dotsLabel: 'Steps',
        stepLabel: (i, tip) => `Step ${i}: ${tip}`,
        steps: STEPS,
        honest: 'The last mistakes were caught by eye, not by the tool. The eye is still needed.',
      },
      print: {
        kicker: 'Print',
        title: 'Going to print',
        lead: 'The text is done and the book is being prepared for print. The front matter (imprint, contents, foreword, equipment list) and the back matter (nature calendar, moon cycles, drawing guide, bibliography) are set in a warm neutral gray so they don’t compete with the chapters.',
        strip: STRIP,
        stripLabel: 'Pages from the book',
        pageAlt: (n) => `Page ${Number(n)} from the book`,
      },
    },
  };
  let LANG_NOW = 'tr'; // render() ayarlar; bölüm başlıklarının büyük harfi dile göre

  const sections = {
    cover: (t) => `
      <section class="dg-cover" aria-labelledby="dg-cover">
        <div class="dg-wrap dg-cover__grid">
          <div class="dg-cover__body case-reveal">
            <p class="dg-kicker">${t.kicker}</p>
            <h2 id="dg-cover" class="dg-title">${t.title}</h2>
            <p class="dg-lead">${t.lead}</p>
            <dl class="dg-facts">${t.facts.map(([v, l]) => `<div><dt>${v}</dt><dd>${l}</dd></div>`).join('')}</dl>
          </div>
          <figure class="dg-cover__stage case-reveal" aria-hidden="true">
            <img class="dg-cover__art" src="${IMG}art/ana-kapak.png" width="1400" height="783" alt="" decoding="async">
          </figure>
        </div>
      </section>`,

    // Bölümler: tam ekran renkli bant; aşağı kaydırdıkça dört bölüm yatay kayar, zemin bölümün rengini alır.
    // Başlık bantın içinde (sol: etiket + başlık, sağ: açıklama); altta dört nokta hangi bölümde olduğumuzu gösterir.
    chapters: (t) => `
      <section class="dg-chapters" aria-labelledby="dg-chapters" style="--ground:${CHAPTERS[0].ground}">
        <div class="dg-chapters__sticky">
          <header class="dg-wrap dg-chapters__head">
            <div>
              <p class="dg-kicker">${t.kicker}</p>
              <h2 id="dg-chapters" class="dg-title">${t.title}</h2>
            </div>
            <p class="dg-lead">${t.lead}</p>
          </header>
          <div class="dg-track" aria-live="polite">
            ${CHAPTERS.map((c0, i) => { const c = { ...c0, ...t.list[i] }; return `
            <article class="dg-ch dg-ch--${c.key}" style="--c0:${c.tones[0]};--c1:${c.tones[1]};--c2:${c.tones[2]};--c3:${c.tones[3]}" aria-hidden="${i ? 'true' : 'false'}">
              <div class="dg-wrap dg-ch__grid">
                <div class="dg-ch__text">
                  <p class="dg-ch__no">${c.no}</p>
                  <h3 class="dg-ch__title">${c.title.toLocaleUpperCase(LANG_NOW)}</h3>
                  <p class="dg-ch__sub">${c.sub}</p>
                  <ul class="dg-tones" aria-label="${t.paletteLabel(c)}">${c.tones.map((hex, k) => `
                    <li><small>${t.toneNames[k]}</small><code>${hex}</code><span style="background:${hex}"></span></li>`).join('')}
                  </ul>
                </div>
                <figure class="dg-ch__page">${page(c.page, t.pageAlt(c))}</figure>
              </div>
              <img class="dg-ch__art dg-ch__art--top" src="${IMG}art/${c.key}-1.png" alt="" loading="${i ? 'lazy' : 'eager'}" decoding="async">
              <img class="dg-ch__art dg-ch__art--bottom" src="${IMG}art/${c.key}-2.png" alt="" loading="${i ? 'lazy' : 'eager'}" decoding="async">
            </article>`; }).join('')}
          </div>
          <ol class="dg-dots" aria-label="${t.dotsLabel}">${CHAPTERS.map((c, i) => `
            <li><button type="button" data-i="${i}" aria-label="${t.list[i].title}" ${i ? '' : 'aria-current="true"'}></button></li>`).join('')}
          </ol>
        </div>
      </section>`,

    system: (t, all) => `
      <section class="dg-system" aria-labelledby="dg-system">
        <div class="dg-wrap case-reveal">
          <p class="dg-kicker">${t.kicker}</p>
          <h2 id="dg-system" class="dg-title">${t.title}</h2>
          <p class="dg-lead">${t.lead}</p>
        </div>
        <ol class="dg-wrap dg-pages">${t.pages.map((p) => `
          <li class="case-reveal">
            <figure>${page(p.n, t.pageAlt(p))}</figure>
            <h3>${p.title} <small class="dg-pages__ch" style="color:${CHAPTERS[p.ch].tones[1]}">${all.chapters.list[p.ch].title}</small></h3>
            <p>${p.text}</p>
          </li>`).join('')}
        </ol>
      </section>`,

    // Yazı: Wholly/WeReply'daki tipografi bölümleri gibi — solda numune (Aa, aile adı, ağırlıklar), sağda kademeler
    type: (t) => `
      <section class="dg-type" aria-labelledby="dg-type">
        <div class="dg-wrap dg-type__grid">
          <div class="dg-type__specimen case-reveal">
            <h2 id="dg-type" class="dg-kicker">${t.kicker}</h2>
            <p class="dg-type__aa" aria-hidden="true">Aa</p>
            <p class="dg-type__font" lang="en">${t.font}</p>
            <p class="dg-type__weights" aria-hidden="true"><span>Aa</span><span>Aa</span><span>Aa</span><span>Aa</span></p>
            <p class="dg-type__small">${t.weights} <span>·</span> ${t.weightsNote}</p>
          </div>
          <dl class="dg-type__rows case-reveal">
            ${t.rows.map(([k, sample, spec]) => `<div><dt class="dg-t-${k}">${sample}</dt><dd>${spec}</dd></div>`).join('')}
          </dl>
        </div>
      </section>`,

    code: (t) => `
      <section class="dg-code" aria-labelledby="dg-code">
        <div class="dg-code__sticky">
          <header class="dg-wrap dg-code__head">
            <div><p class="dg-kicker">${t.kicker}</p><h2 id="dg-code" class="dg-title">${t.title}</h2></div>
            <p class="dg-lead">${t.lead}</p>
          </header>
          <div class="dg-wrap dg-build" role="group" aria-label="${t.buildLabel}">
            <ol class="dg-build__lines" aria-label="${t.linesLabel}">${t.steps.map((st, i) => `
              <li class="dg-line" data-i="${i}"><span class="dg-line__no" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><code>{ <i>tip</i>: <b>"${st.tip}"</b>${st.args.map(([k, v]) => `, <i>${k}</i>: <b>"${v}"</b>`).join('')} }</code></li>`).join('')}
            </ol>
            <div class="dg-build__view">
              <div class="dg-build__page" role="img" aria-label="${t.buildAlt}">${t.steps.map((st) => `
                <img class="dg-build__part dg-build__part--${st.key}" data-cy="${st.cy}" src="${IMG}parts/${st.img}" width="${st.w}" height="${st.h}" alt="" decoding="async" style="left:${st.box[0]}%; top:${st.box[1]}%; width:${st.box[2]}%">`).join('')}
              </div>
            </div>
          </div>
          <ol class="dg-dots" aria-label="${t.dotsLabel}">${t.steps.map((st, i) => `
            <li><button type="button" data-i="${i}" aria-label="${t.stepLabel(i + 1, st.tip)}"${i === 0 ? ' aria-current="true"' : ''}></button></li>`).join('')}
          </ol>
        </div>
      </section>
      <section class="dg-code-notes" aria-label="${t.kicker}">
        <div class="dg-wrap"><p class="dg-honest case-reveal">${t.honest}</p></div>
      </section>`,

    print: (t) => `
      <section class="dg-print" aria-labelledby="dg-print">
        <div class="dg-wrap case-reveal">
          <p class="dg-kicker">${t.kicker}</p>
          <h2 id="dg-print" class="dg-title">${t.title}</h2>
          <p class="dg-lead">${t.lead}</p>
        </div>
        <div class="dg-strip-clip"><ul class="dg-strip" aria-label="${t.stripLabel}">${t.strip.map((n) => `
          <li>${page(n, t.pageAlt(n))}</li>`).join('')}
        </ul></div>
      </section>`,
  };

  /* ---------- Hareket: illüstrasyonlar sayfayla birlikte hafifçe kayar, kapak sahnesi nefes alır ---------- */
  // Sayfanın üstündeki vaka başlığı kapağın kendisidir: altına kitabın sloganı gelir (ikinci bir "Doğa Güncesi" yazılmaz)
  const setupHero = () => {
    const title = document.querySelector('.is-doga-guncesi .case-hero__title');
    if (!title || title.nextElementSibling?.classList.contains('dg-hero-tagline')) return;
    title.insertAdjacentHTML('afterend', `<p class="dg-hero-tagline">${(TEXT[window.LANG] || TEXT.tr).cover.tagline}</p>`);
  };

  const setupMotion = () => {
    setupHero();
    if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelector('.dg-chapters')?.classList.add('dg-chapters--static');
      document.querySelector('.dg-code')?.classList.add('dg-code--static');
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // Kapak: illüstrasyon yavaşça yükselip iner; kaydırdıkça metinden biraz geri kalır (derinlik)
    const art = document.querySelector('.dg-cover__art');
    if (art) gsap.to(art, { y: -6, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });

    // Bölümler: bant ekrana kilitlenir; kaydırdıkça şerit yatay kayar, zemin rengi değişir, noktalar güncellenir
    const section = document.querySelector('.dg-chapters');
    const track = section?.querySelector('.dg-track');
    if (section && track) {
      const panels = [...track.querySelectorAll('.dg-ch')];
      const sticky = section.querySelector('.dg-chapters__sticky');
      const dots = [...section.querySelectorAll('.dg-dots button')];
      const n = panels.length;
      const HOLD = 0.35, MOVE = 1; // kısa bekleme: kaydırma akarken şerit de aksın, 'dur-kalk' hissi olmasın
      const setActive = (i) => {
        dots.forEach((d, k) => { if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
        panels.forEach((p, k) => p.setAttribute('aria-hidden', k === i ? 'false' : 'true'));
      };
      const tl = gsap.timeline({
        defaults: { ease: 'none' }, // kaydırmayla bire bir, doğrusal: hız değişimi takılma gibi hissettiriyordu
        scrollTrigger: {
          trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6, // yarım saniyelik yumuşatma; daha uzunu 'geride kalıyor' hissi veriyor
          // Bant kilitliyken üst menü saklı kalsın: yukarı kaydırınca geri gelip bandın üstünü örtmesin.
          onToggle: (st) => document.body.classList.toggle('is-nav-locked', st.isActive),
          onUpdate: (st) => {
            const now = st.progress * tl.duration();
            let i = 0;
            for (let k = 1; k < n; k += 1) if (now >= tl.labels[`c${k}`] + MOVE / 2) i = k;
            setActive(i);
          },
        },
      });
      tl.to({}, { duration: HOLD });
      CHAPTERS.forEach((c, i) => {
        if (i === 0) return;
        tl.addLabel(`c${i}`)
          .to(track, { xPercent: -100 * i / n, duration: MOVE }, `c${i}`)
          .to(sticky, { backgroundColor: c.ground, duration: MOVE }, `c${i}`) // yalnızca görünen kat boyanır
          .to({}, { duration: HOLD });
      });
      // Noktaya tıklayınca o bölümün kaydırma konumuna git
      const st = tl.scrollTrigger;
      dots.forEach((d) => d.addEventListener('click', () => {
        const i = Number(d.dataset.i);
        const t = i ? tl.labels[`c${i}`] + MOVE + HOLD / 2 : HOLD / 2;
        const y = st.start + (st.end - st.start) * (t / tl.duration());
        window.scrollTo({ top: y, behavior: 'smooth' });
      }));
    }

    // Kurulan sayfa bandı: bölümler bandıyla aynı mekanik — kilitlenir, kaydırdıkça adım adım satır eklenir, parça sayfaya iner
    const build = document.querySelector('.dg-code');
    if (build) {
      const lines = [...build.querySelectorAll('.dg-line')];
      const parts = [...build.querySelectorAll('.dg-build__part')];
      const bdots = [...build.querySelectorAll('.dg-dots button')];
      const n = lines.length;
      const HOLD = 0.5, MOVE = 1;
      const setStep = (i) => {
        bdots.forEach((d, k) => { if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
        lines.forEach((l, k) => { l.classList.toggle('is-on', k === i); l.classList.toggle('is-done', k < i); });
      };
      gsap.set(parts.slice(1), { autoAlpha: 0, y: 24 });
      gsap.set(lines.slice(1), { autoAlpha: 0, y: 10 });
      // Kamera: sayfa görüntü kutusundan uzun; her adımda aktif parça ortalanır (ölçek sabit)
      const view = build.querySelector('.dg-build__view');
      const page = build.querySelector('.dg-build__page');
      const camY = (i) => {
        const hv = view.clientHeight, hp = page.offsetHeight;
        const cy = Number(parts[i].dataset.cy) / 100 * hp;
        return Math.max(hv - hp, Math.min(0, hv / 2 - cy));
      };
      gsap.set(page, { y: () => camY(0), transformOrigin: '50% 0' });
      const btl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: build, start: 'top top', end: 'bottom bottom', scrub: 0.6,
          onToggle: (st) => document.body.classList.toggle('is-nav-locked', st.isActive),
          onUpdate: (st) => {
            const now = st.progress * btl.duration();
            let i = 0;
            for (let k = 1; k < n; k += 1) if (now >= btl.labels[`s${k}`] + MOVE / 2) i = k;
            setStep(i);
          },
        },
      });
      btl.to({}, { duration: HOLD });
      lines.forEach((l, i) => {
        if (i === 0) return;
        btl.addLabel(`s${i}`)
          .to(lines[i], { autoAlpha: 1, y: 0, duration: MOVE * 0.5 }, `s${i}`)
          .to(page, { y: () => camY(i), duration: MOVE }, `s${i}`) // son adımda da aynı ölçek: kamera altbilgiye iner, sayfa küçülmez
          .to(parts[i], { autoAlpha: 1, y: 0, duration: MOVE }, `s${i}+=${MOVE * 0.2}`)
          .to({}, { duration: HOLD });
      });
      const bst = btl.scrollTrigger;
      bdots.forEach((d) => d.addEventListener('click', () => {
        const i = Number(d.dataset.i);
        const t = i ? btl.labels[`s${i}`] + MOVE + HOLD / 2 : HOLD / 2;
        window.scrollTo({ top: bst.start + (bst.end - bst.start) * (t / btl.duration()), behavior: 'smooth' });
      }));
      setStep(0);
    }

    // Baskı şeridi: WeReply'daki çözüm — bölüm tamamı görünürken sabitlenir, sayfa kaydırması şeridi yana kaydırır
    // (scrollLeft sürülür, liste kaymaz; bölüm çözülünce sayfa normal akar). Yalnızca fare/geniş ekranda.
    const strip = document.querySelector('.dg-strip');
    if (strip && window.matchMedia('(hover: hover) and (min-width: 761px)').matches) {
      strip.style.scrollSnapType = 'none';
      strip.style.overflowX = 'hidden';
      const max = () => Math.max(0, strip.scrollWidth - strip.clientWidth);
      gsap.to(strip, {
        scrollLeft: max,
        ease: 'none',
        scrollTrigger: {
          trigger: strip.closest('.dg-print'),
          pin: true,
          start: 'bottom bottom', // şeridin tamamı görünürken sabitlenir
          end: () => `+=${max()}`,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }
    document.querySelectorAll('.dg img').forEach((img) => img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true }));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(setupMotion));
  else setTimeout(setupMotion);

  window.STORIES = window.STORIES || {};
  window.STORIES['doga-guncesi'] = {
    order: ['cover', 'chapters', 'system', 'type', 'code', 'print'],
    render(lang = window.LANG || 'tr') {
      if (!TEXT[lang]) lang = 'tr';
      LANG_NOW = lang;
      const t = TEXT[lang];
      return `<div class="dg" lang="${lang}">${this.order.map((k) => sections[k](t[k], t)).join('')}</div>`;
    },
  };
})();
