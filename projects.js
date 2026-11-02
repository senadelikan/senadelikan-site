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

// Vaka künyesindeki araç logoları (Simple Icons, tek renk): sayfanın mürekkep rengini alır (currentColor).
// tools metnindeki her ad buradaki anahtarla eşleşirse logosuyla, eşleşmezse yalnız adıyla görünür.
window.TOOL_ICONS = {
  Figma: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z',
  Illustrator: 'M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z',
  Claude: 'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z',
};
window.toolsHTML = (tools) => '<ul class="tool-list">' + String(tools).split(',').map((s) => s.trim()).map((name) => {
  const d = window.TOOL_ICONS[name];
  return `<li>${d ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>` : ''}<span lang="en">${name}</span></li>`;
}).join('') + '</ul>';

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
    tools: 'Figma, Illustrator, Claude',
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
  {
    slug: 'wereply',
    title: 'WeReply',
    featured: true,
    category: 'uiux',
    year: '2024–2026',
    caseYear: L('2024 staj<br>2026 <span lang="en">concept design</span>', '2024 internship<br>2026 concept design'), // vaka künyesinde iki satır; arşiv ve sıralama year'ı kullanır
    role: L('UI/UX tasarım', 'UI/UX design'),
    tools: 'Figma, Claude',
    // Taslak metin: case-study.md'den; Sena metinleri yeniden yazacak
    summary: L('Bir araştırma katılım uygulamasında anket akışının yeniden tasarımı. YouReply stajımda başladığım, uygulanmamış bir konsept.',
      'Redesign of the survey flow in a research-participation app. Concept work from my internship at YouReply, not shipped.'),
    // Alıntı yok: yerine kapaktaki slogan
    quote: { text: 'Find. Answer. Get paid.', by: 'WeReply', lang: 'en' },
    art: { bg: '#303C3C', img: 'assets/projects/wereply/cover.jpg?v=3' }, // kapak: /Users/mac/Projects/wereply/cover/cover.html'in Moss renkleriyle kopyası, tools/snap.swift ile 600×469 @1 → 1200×938
    concept: true, // YouReply bu tasarımları kullanmadı
    caseCover: false,
    link: null,
    case: [], // bütün vaka bölümleri story-wereply.js'te
  },
];
