/* Proje verileri: ana sayfa vitrini, arşiv (projects.html) ve vaka sayfası hepsi buradan beslenir.
 * Yeni proje eklemek için diziye bir nesne eklemen yeterli.
 * featured: true olanlar ana sayfadaki vitrinde de görünür; arşivde hepsi listelenir.
 * art.img varsa kart ve kapakta gerçek görsel, yoksa yer tutucu taslak (art.mock) çizilir.
 * Dürüst metin: ölçülmemiş sonuç ya da gerçek olmayan alıntı yazma. */

// [[...]] ile işaretli metin Sena'nın dolduracağı yerdir: sayfada limon bir not olarak görünür
window.fillText = (s) => String(s ?? '—').replace(/\[\[(.+?)\]\]/g,
  `<span class="todo"><span class="todo__tag">${t('todo', 'Sena dolduracak')}</span> $1</span>`);

// concept: true olan projelerde "Concept design" yıldız sticker'ı (vaka sayfası başlığı ve ana sayfa kartı)
window.conceptTagHTML = () => '<span class="concept-tag" lang="en">'
  + '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50.0,2.0L60.4,11.4L74.0,8.4L78.3,21.7L91.6,26.0L88.6,39.6L98.0,50.0L88.6,60.4L91.6,74.0L78.3,78.3L74.0,91.6L60.4,88.6L50.0,98.0L39.6,88.6L26.0,91.6L21.7,78.3L8.4,74.0L11.4,60.4L2.0,50.0L11.4,39.6L8.4,26.0L21.7,21.7L26.0,8.4L39.6,11.4Z"/></svg>'
  + '<span>Concept<br>design</span></span>';

window.CATEGORIES = {
  uiux: 'UI/UX',
  product: 'Product',
  concept: L('Kişisel konsept', 'Personal concept'),
};

window.PROJECTS = [
  {
    slug: 'wholly',
    title: 'Wholly',
    featured: true,
    category: 'concept',
    year: 2026,
    role: L('Marka, UX/UI', 'Brand, UX/UI'),
    tools: 'Figma, Claude',
    summary: L('Tariflerini tek yerde topla, haftanın menüsünü seç; malzemelerin hepsi tek bir alışveriş listesinde buluşsun.',
      'Collect your recipes in one place and pick the week’s menu; all the ingredients come together on one shopping list.'),
    // Alıntı yok: yerine uygulamanın kendi sloganı
    quote: { text: 'collect. choose. shop. cook.', by: 'Wholly', lang: 'en' },
    art: { bg: '#2448C4', img: 'assets/projects/wholly/cover.jpg' },
    logo: 'assets/projects/wholly/brand/wholly-logo.svg', // başlıkta adın yerine logo
    concept: true, // gerçek değil, kişisel konsept: logonun yanında "Concept design" sticker
    caseCover: false, // vaka sayfasında kapak görseli yok; kartlarda kalır
    link: null, // proje bağlantısı yok; Behance hesabı ana sayfanın altında
    // [[...]] Sena'nın dolduracağı yerdir, sayfada limon notla görünür.
    // Görsellerin içindeki yazılar İngilizce (Behance'ten).
    case: [], // bütün vaka bölümleri story-wholly.js'te
  },
];
