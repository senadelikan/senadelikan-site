/* Wholly vaka sayfasının Behance tasarımından kodlanan bölümleri.
 * Kaynak: /Users/mac/Projects/wholly/behance-ui/canvas/project/Section*.dc.html
 * Metinler iki dilde: tr şu an gösterilen, en Sena'nın Behance'teki özgün metni (TR/EN anahtarı için).
 * Uygulama ekranlarındaki yazılar İngilizce kalır; onlar ürünün kendisi. */

(() => {
  const IMG = 'assets/projects/wholly/';

  const TEXT = {
    tr: {
      problem: {
        title: 'problem',
        lead: 'Tarifler ekran görüntülerinde, kaydedilenlerde, bir defterde ya da arkadaşının gönderdiği bir mesajda kaybolup gidiyor. Bütün bu karmaşada haftalık menü oluşturmayı başarabildiysen harika, ancak sonrası daha da zor. Alışveriş listesi oluşturmak, listeyi market reyonlarına göre sıralamak ve alışveriş yapmak!',
        items: [
          { title: 'dağınıklık', text: 'Tarifler her yerde! Aradığını bulmak çok zor.' },
          { title: 'elle yazma', text: 'Beğendiğin bir tarifi baştan sona yeniden yazmak gerekiyor.' },
          { title: 'kafadan hesap', text: 'Üç tarif ikişer soğan istiyor, toplam altı soğan mı almalıyım?' },
        ],
      },
      works: {
        title: 'wholly nasıl çalışıyor',
        lead: 'Haftanın yemek düzenine uygun üç adım.',
        items: [
          { title: 'konuş', text: 'Bir yemek adı ya da bir bağlantı ile başla. Kalanını asistana bırak.' },
          { title: 'seç', text: 'Bu haftanın yemeklerini karttan tek dokunuşla seç.' },
          { title: 'alışveriş', text: 'Reyonlara göre gruplanan malzemelerin hepsi tek listede.' },
        ],
      },
      flow: {
        title: 'kullanıcı akışı',
        lead: 'Uygulama ilk açıldığında başlayıp yemeği pişirene kadar ilerleyen akış: dört aşama, uygulamanın sorduğu üç soru ve arada çıkabilecek yan durumlar.',
        next: 'sonraki',
        sideTitle: 'yol boyunca',
        lanes: [
          { title: 'konuş', steps: [
            { ui: 'Saved Recipes', s: 'boş: Olly bekliyor' },
            { ui: 'Add Recipe', s: 'yemek adı yaz ya da bağlantı yapıştır' },
            { q: 'kaynağa mı baksın, bildiklerinden mi yararlansın?' },
            { t: 'asistan tarifi buluyor' },
            { t: 'tarif taslağı alttan açılıyor' },
            { q: 'olmuş mu?', a: 'hayır: düzelt ya da sohbete devam et' },
            { ui: 'Save', s: '<span lang="en">Saved Recipes</span>’a dön' },
          ] },
          { title: 'seç', steps: [
            { ui: 'Saved Recipes' },
            { t: 'arama ya da kategori seç', s: 'isteğe bağlı', opt: true },
            { t: 'tarif kartı ya da detay ekranı' },
            { t: 'porsiyon sayısını ayarla', s: 'isteğe bağlı · miktarlar da değişir', opt: true },
            { ui: 'Add to list' },
          ] },
          { title: 'alışveriş', steps: [
            { ui: 'Lists', s: 'reyonlara göre tek liste' },
            { ui: 'Start Shopping' },
            { t: 'ürünleri işaretle', s: 'reyon reyon' },
            { ui: 'Finish Shopping' },
            { t: 'işaretlenmeyenler', s: 'listede kalır' },
          ] },
          { title: 'pişir', steps: [
            { t: 'tarif ayrıntısı' },
            { ui: 'Start Cooking' },
            { t: 'adım adım', s: 'gereken adımlarda sayaç' },
            { t: 'hazır' },
            { q: 'listede kalsın mı?' },
            { t: 'listede tut ya da çıkar' },
          ] },
        ],
        side: [
          { t: 'çevrimdışı', s: '<span lang="en">Lists</span> ve alışveriş çalışmaya devam eder; yeni tarifler için bağlantı gerekir.' },
          { t: 'sonuç yok', s: 'Sonuç çıkmayınca arama seni yeniden asistana yönlendirir.' },
          { t: 'profil', s: 'Her ekrandan avatarına ulaşabilirsin.' },
        ],
      },
      collect: {
        title: 'konuş',
        lead: 'Yeni bir tarif ekleme süreci sohbet ile başlıyor. Yemek adını yaz ya da bağlantı yapıştır; asistan tarifi bulur, sen onay verince taslak oluşur.',
        steps: [
          { title: 'sor', text: 'Yemeğin adını yaz ya da bağlantıyı yapıştır. Taslak, ekranın altında boş hâliyle duruyor.' },
          { title: 'o da sana sorar', text: 'Önce sana güvenilir bir tarif sitesine mi gitmeli yoksa kendisi mi tarif vermeli diye sorar.' },
          { title: 'taslağı gözden geçir', text: 'Tarif taslağını aç ve gözden geçir, istersen sen de düzenleyebilirsin.' },
          { title: 'kaydet', text: 'Tarif menüne eklemeye hazır!' },
        ],
      },
      choose: {
        title: 'seç',
        lead: 'İstediğin tarifi haftalık menüne eklemek için karttan ya da tarif ekranından bir kez dokunman yeterli.',
        steps: [
          { title: 'her yerde aynı kart', text: 'Kartlar her yerde aynı kalır. Buton ise senin kararına göre hareket eder.' },
          { title: 'aradığını hemen bul', text: 'Aramayla bulabilir ya da kategorileri tek tek gezebilirsin.' },
          { title: 'tarifi ekle', text: '<span lang="en">Add to list</span> butonu ile kolayca listene ekle.' },
          { title: 'porsiyonu ayarla', text: 'Porsiyon sayısını değiştir; listedeki miktarlar da ona göre güncellensin.' },
        ],
      },
      shop: {
        title: 'alışveriş',
        lead: 'Seçtiğin yemeklerin malzemeleri tek listede buluşuyor. Aynı malzemeler tek kalemde toplanıyor; liste de tarif sırasına değil, market reyonlarına göre düzenleniyor.',
        recipe: 'Tarif',
        inCart: '6 üründen {n} tanesi sepette',
        list: 'Tek liste',
        count: 'Reyonlara göre 6 ürün',
        steps: [
          { title: 'malzeme hangi tarif için lazımdı?', text: 'Bir malzemenin hangi tarifler için gerektiğini görebilirsin. Ancak miktar toplu olarak gözükür.' },
          { title: 'reyon reyon', text: 'Deniz ürünleri, süt ürünleri ve yumurta, sebze-meyve… Markette izleyeceğin sırayla.' },
          { title: 'alışveriş modu', text: 'Tek elle alışveriş için geniş satırlar.' },
          { title: 'tamamlandı', text: 'İşaretlemediklerin bir sonraki alışverişe kadar listede kalır.' },
        ],
      },
      cook: {
        title: 'sonra sıra pişirmede',
        lead: 'Pişirme modu adım adım ilerliyor. Gereken adımlara senin için sayaç kuruyor.',
      },
      web: {
        title: 'web ve telefon',
        lead: 'Tek ürün, iki ekran. Web ve telefon aynı bileşenleri, aynı ölçüleri kullanıyor; telefondaki düzen de başparmakla rahatça kullanılacak şekilde kurgulandı.',
        web: 'Web',
        phone: 'Telefon',
        rows: [
          { title: 'aynı ölçü, kolay erişim', text: 'Butonlar 28px, etiketler 25, alanlar 36. Görünmeyen 44px dokunma alanı kullanımı kolaylaştırıyor.' },
          { title: 'tek kart, iki sütun', text: 'Web’de yan yana üç 320px kart, telefonda 174px genişliğinde iki kart var. Kart tasarımı her yerde aynı.' },
          { title: 'alt menü', text: 'Web’de <span lang="en">Recipes</span> ve <span lang="en">Lists</span> üst menüde; telefonda başparmağın hemen altındaki sekme çubuğunda. Üstte yalnızca logo ve avatar kalıyor.' },
          { title: 'panel telefonda alttan açılıyor', text: 'Web’de taslak sohbetin yanında duruyor; telefonda ekranın altından açılan bir panele dönüşüyor.' },
        ],
      },
      wait: {
        title: 'uygulama beklerken',
        lead: 'Boş ekran hata gibi görünebilir. Olly varsa, bir başlangıç noktası gibi hissettirir. Yalnızca uygulama senden bir şey beklerken görünür.',
        items: [
          { title: 'henüz tarif yok', text: 'Henüz kaydedilmiş tarif yok. <span lang="en">“Nothing\'s cooking yet.”</span> Olly boş tencereyi tutuyor.' },
          { title: 'sonuç çıkmadı', text: 'Aramada sonuç çıkmıyorsa senden bir şey beklenmiyor; Olly de görünmüyor.' },
          { title: 'henüz seçim yok', text: 'Henüz yemek seçmedin. <span lang="en">“Still deciding what to cook?”</span> Olly tarif kitabına göz atıyor.' },
          { title: 'çevrimdışı, ama çalışıyor', text: 'Kırmızı renk de yok, <span lang="en">“Oops”</span> da. Önce nelerin çalıştığını, sonra nelerin beklediğini söylüyor.' },
        ],
      },
      system: {
        title: 'tasarım sistemi',
        lead: 'Tek ana renk mavi; durumları göstermek için gök mavisi tonları kullanılıyor. Uygulamadaki tüm metinler Nunito. Web ve telefon aynı 36 bileşenden oluşuyor; her bileşenin web ve dokunmatik için ayrı boyutu var.',
        roles: ['eylemler, bağlantılar, <span lang="en">Added</span>', 'üzerine gelince', 'etiket kenarlığı', 'seçili etiket', '<span lang="en">Added</span>, işaretli, asistan', 'üzerine gelince, bildirimler', 'metin', 'arka plan'],
        type: 'tipografi',
        typeText: 'Uygulamadaki her metin Nunito ile yazılıyor; yazı kalınlıkları hafif tutuluyor. Montserrat Alternates yalnızca tanıtım işlerinde kullanılıyor.',
        weights: '400 · 500 · 600 · 700 · 800 · arayüz',
        marketing: 'Montserrat Alternates · yalnızca tanıtım',
        components: 'bileşenler',
        groups: {
          actions: { label: 'Eylemler', note: '28 px yükseklik · telefonda 44 px dokunma alanı' },
          selection: { label: 'Seçim', note: 'seçim etiketleri 25 px · onay kutusu 21 px' },
          fields: { label: 'Alanlar', note: '36 px · telefonda 16 px metin, iOS yakınlaştırmasın diye' },
          content: { label: 'İçerik' },
          tags: { label: 'Etiketler ve bildirimler', note: 'kırmızı kullanılmıyor; hata da diğerleri gibi bir durum' },
          nav: { label: 'Gezinme' },
          icons: { label: 'Simgeler' },
        },
      },
      brand: {
        title: 'marka kimliği',
        lead: 'İsim <span lang="en">Whole + Tally</span>: bütün işi tek sistemde tamamla.',
        slogan: 'every meal, one list.',
        heroAlt: 'Olly büyük W işaretini onay işaretinin ucundan tutup taşıyor; arka planda yarım ton efektli bir mutfak fotoğrafı var',
        logoTitle: 'Logo',
        eqLabel: 'W + alışveriş sepeti + onay işareti = Wholly işareti',
        logo: [
          'Wholly’nin W harfi, alışveriş sepeti ve onay işareti: üçünü tek bir işarette buluşturdum.',
          'Wholly’nin W’si iki küçük tekerlek üstüne oturuyor; böylece alışveriş arabasını çağrıştırıyor. Onay işareti de arabanın içinden yükselip kulp oluyor. Tek çizgide tasarlandığı için Olly işareti elinde taşıyabiliyor. Logo, illüstrasyonun yanına iliştirilmiş değil; sahnenin içindeki bir nesne.',
        ],
        variants: { secondary: 'ikincil işaret', logo: 'logo', wordmark: 'yazı logosu', mark: 'işaret' },
        ollyTitle: 'maskot · Olly',
        olly: [
          'Olly, Wholly’nin aşçısı ve uygulamayı kullanan kişiyi temsil ediyor: yemek yapmayı ciddiye alan ama yine de listeye ihtiyaç duyan biri. Adı Wholly’nin içinde zaten gizli. Tek kalınlıkta ve arayüzle aynı mavide çizildi; böylece sonradan eklenmiş gibi değil, arayüzün bir parçası gibi duruyor.',
          'Uygulamada yalnızca bir şey beklenirken beliriyor: boş bir tencerenin ya da okunmamış bir kitabın yanında. Uygulamanın dışında ise öne çıkıyor; logo düzeninde ve tanıtım görsellerinde onay işaretini o taşıyor.',
        ],
        ollyAlt: 'Wholly’nin aşçısı Olly, boş tencereyi tutup yukarıyı işaret ediyor',
        fridgeAlt: 'Açık buzdolabının yarım ton efektli fotoğrafı üzerinde markanın üç rengi: #C6DCF0, #2448C4, #FBFBFC',
        voiceTitle: 'Ses tonu',
        voice: 'Wholly, gerçekten yemek yapan biri gibi konuşuyor: sakin, doğrudan, biraz da kuru mizahlı. Sıcakkanlı ama lafı uzatmıyor; meşgul olduğunu varsayıp işini kolaylaştırıyor.',
        visualTitle: 'Görsel dil',
        visual: 'Tek bir koyu mavi, geri kalanı beyaza yakın. Renk süs değil; durumu ya da kategoriyi gösteriyor. Samimiyeti illüstrasyonlar taşıyor, ekranlar sade kalıyor.',
      },
      story: {
        title: 'nasıl başladı',
        paragraphs: [
          'Wholly tarifleri tek yerde topluyor, seçtiğin yemeklerin malzemelerini tek bir alışveriş listesinde bir araya getiriyor.',
          'Yemek listemi haftalık olarak oluşturuyorum ve bunu her seferinde elle yapmak epey yorucu. Tarifler kayboluyor, alışveriş listesini oluşturmak ise çok vakit alıyor…',
          'Önce çözümü Notion’da kurduğum bir düzen ile aradım, bir yere kadar da çalışıyordu. Ancak tarifleri, malzemeleri tek tek düzenlemem gerekiyordu. Wholly de bu sorun üzerine ortaya çıktı. Tüm sistemi otomatik hale getiren bir sistem.',
        ],
        stepsTitle: 'süreç',
        steps: [
          { title: 'keşfet', text: 'Sorunu önce kendi haftalık planımda yaşadım. Notion’da çözmeye çalışınca bu kez başka sorunlar çıktı. Ben de hepsini çözecek bir sistem kurguladım.' },
          { title: 'tasarla', text: 'Önce fikirlerimi bir kağıda karaladım, sonra Figma’ya taşıdım. AI ise bu süreçte yardımcım oldu.' },
          { title: 'geliştir', text: 'Web için yaptığım arayüzleri mobile de taşıdım. Bir sonraki aşama bu fikri gerçek bir ürüne dönüştürmek.' },
        ],
        learnedTitle: 'ne öğrendim',
        learned: 'Bu projede en çok yapay zekâyla bir projeyi nasıl ilerleteceğimi öğrendim.',
      },
      closing: {
        thanks: 'okuduğun için teşekkürler',
        meta: 'Wholly · UI/UX vaka çalışması · 2026 · Sena Delikan',
        photoAlt: 'Aynı mutfak tezgâhı bu kez yukarıdan, sakin bir hâlde görünüyor: pişmiş somon teriyaki kasesi, soya sosu, bir bardak su ve tarifin hazır olduğunu gösteren telefon',
      },
    },
    en: {
      problem: {
        title: 'the problem',
        lead: 'Recipes live everywhere: screenshots, bookmarks, a notebook, a message from a friend. Picking the week\'s meals is the easy part. Then comes the list: every recipe read again, every onion counted twice, the whole thing rewritten in the order of the shop.',
        items: [
          { title: 'scattered', text: 'Saved in five places, found in none.' },
          { title: 'typed by hand', text: 'Adding a recipe meant copying it out.' },
          { title: 'merged in your head', text: 'Three recipes, two onions each. Is that six?' },
        ],
      },
      works: {
        title: 'how wholly works',
        lead: 'Three steps, in the order a week of cooking actually happens.',
        items: [
          { title: 'talk', text: 'Ask for a dish or paste a link. The recipe comes back filled in.' },
          { title: 'choose', text: 'Pick this week\'s meals with one tap on the card.' },
          { title: 'shop', text: 'One list, merged and grouped by aisle.' },
        ],
      },
      flow: {
        title: 'user flow',
        lead: 'The whole path, from an empty app to a cooked meal. Four stages, three questions the app asks, and the side states that can appear along the way.',
        next: 'next',
        sideTitle: 'along the way',
        lanes: [
          { title: 'talk', steps: [
            { ui: 'Saved Recipes', s: 'empty: Olly waits' },
            { ui: 'Add Recipe', s: 'ask for a dish or paste a link' },
            { q: 'a source, or what it knows?' },
            { t: 'the assistant finds it' },
            { t: 'the draft sheet rises' },
            { q: 'looks right?', a: 'no: edit or keep talking' },
            { ui: 'Save', s: 'back to Saved Recipes' },
          ] },
          { title: 'choose', steps: [
            { ui: 'Saved Recipes' },
            { t: 'search or a category', s: 'optional', opt: true },
            { t: 'recipe card or recipe detail' },
            { t: 'change servings', s: 'optional · the amounts follow', opt: true },
            { ui: 'Add to list' },
          ] },
          { title: 'shop', steps: [
            { ui: 'Lists', s: 'one list, merged by aisle' },
            { ui: 'Start Shopping' },
            { t: 'tick items', s: 'aisle by aisle' },
            { ui: 'Finish Shopping' },
            { t: 'unchecked items', s: 'stay on the list' },
          ] },
          { title: 'cook', steps: [
            { t: 'recipe detail' },
            { ui: 'Start Cooking' },
            { t: 'one step at a time', s: 'timers where needed' },
            { t: 'ready' },
            { q: 'keep it on the list?' },
            { t: 'keep or remove' },
          ] },
        ],
        side: [
          { t: 'offline', s: 'Lists and shopping keep working; new recipes wait.' },
          { t: 'no results', s: 'The search points back to the assistant.' },
          { t: 'profile', s: 'From the avatar, on every screen.' },
        ],
      },
      collect: {
        title: 'talk',
        lead: 'Adding a recipe used to be the part I stopped doing. So it starts with a conversation: ask for a dish or paste a link, the assistant finds it, and the draft fills in once you say yes.',
        steps: [
          { title: 'ask', text: 'Name a dish or paste a link. The draft waits at the bottom, empty.' },
          { title: 'it asks back', text: 'A source, or what it already knows? It checks before it uses one.' },
          { title: 'check the draft', text: 'The recipe rises as a sheet. You check it; you don\'t type it.' },
          { title: 'saved', text: 'Filed under its category, ready to pick.' },
        ],
      },
      choose: {
        title: 'choose',
        lead: 'To add a recipe to your weekly menu, one tap is enough, on the card or on the recipe screen.',
        steps: [
          { title: 'one card everywhere', text: 'The card stays the same everywhere. The button changes with your choice.' },
          { title: 'find it fast', text: 'Search, or browse one category at a time.' },
          { title: 'add from the recipe', text: 'Add to list sits beside the name, not in a bar at the bottom.' },
          { title: 'adjust servings', text: 'Change the servings and the list uses the new amounts.' },
        ],
      },
      shop: {
        title: 'shop',
        lead: 'Every ingredient from every chosen meal lands on one list. The same items are added up, and the list follows the aisles of the shop, not the recipes.',
        recipe: 'Recipe',
        inCart: '{n} of 6 in the cart',
        list: 'One list',
        count: '6 items, by aisle',
        steps: [
          { title: 'merged, with its sources', text: 'See which recipes need an ingredient. The amount shows as one total.' },
          { title: 'grouped by aisle', text: 'Seafood, dairy and eggs, produce, in the order you walk the shop.' },
          { title: 'shopping mode', text: 'Big rows for one thumb.' },
          { title: 'done', text: 'Anything left unchecked stays on the list for next time.' },
        ],
      },
      cook: {
        title: 'and then you cook',
        lead: 'Cook mode shows one step at a time, with a timer where a step needs one. At the end it asks one question: keep the recipe on the list, or take it off.',
      },
      web: {
        title: 'web and phone',
        lead: 'One product on two screens. Web and phone share the same parts and the same sizes; the phone changes only what a thumb needs.',
        web: 'Web',
        phone: 'Phone',
        rows: [
          { title: 'same size, bigger reach', text: 'Buttons stay 28px, chips 25, fields 36. An invisible 44px tap area does the work.' },
          { title: 'one card, two columns', text: 'The web shows three 320px cards in a row; the phone shows two at 174px. The same card everywhere.' },
          { title: 'navigation at the bottom', text: 'On web, Recipes and Lists sit in the top bar; on the phone, in a tab bar under the thumb. The top keeps only the mark and the avatar.' },
          { title: 'panels become sheets', text: 'On web the draft sits beside the chat; on the phone it rises from the bottom as a sheet.' },
        ],
      },
      wait: {
        title: 'when the app is waiting',
        lead: 'An empty screen reads like an error. With Olly on it, it reads like a starting point. She only shows up where the app is waiting for you.',
        items: [
          { title: 'nothing yet', text: 'No recipes saved. "Nothing\'s cooking yet." Olly holds an empty pot.' },
          { title: 'nothing found', text: 'A search with no results isn\'t waiting for you, so Olly stays out of it.' },
          { title: 'still deciding', text: 'No meals picked. "Still deciding what to cook?" Olly reads a recipe book.' },
          { title: 'offline, not broken', text: 'Never red, never "Oops". It says what still works first, then what waits.' },
        ],
      },
      system: {
        title: 'the design system',
        lead: 'One blue, a sky scale for state, and Nunito for every word in the app. 36 components, each in a web size and a touch size, so the phone and the web are built from the same parts.',
        roles: ['actions, links, Added', 'hover', 'chip border', 'selected chip', 'Added, checked, assistant', 'hover, notices', 'text', 'ground'],
        type: 'type',
        typeText: 'Nunito for every word in the app, weights kept light. Montserrat Alternates only in marketing.',
        weights: '400 · 500 · 600 · 700 · 800 · interface',
        marketing: 'Montserrat Alternates · marketing only',
        components: 'components',
        groups: {
          actions: { label: 'Actions', note: '28 px tall, 44 px tap area on the phone' },
          selection: { label: 'Selection', note: 'chips 25 px · checkbox 21 px' },
          fields: { label: 'Fields', note: '36 px · 16 px text on the phone, so iOS does not zoom' },
          content: { label: 'Content' },
          tags: { label: 'Tags and notices', note: 'never red: a failure is a state like any other' },
          nav: { label: 'Navigation' },
          icons: { label: 'Icons' },
        },
      },
      brand: {
        title: 'brand identity',
        lead: 'The name is Whole + Tally: get the whole job done in one system.',
        slogan: 'every meal, one list.',
        heroAlt: 'Olly carrying the big W mark by the tip of its check, in front of a halftone kitchen photo',
        logoTitle: 'Logo',
        eqLabel: 'W + shopping cart + check = the Wholly mark',
        logo: [
          'Three things in one mark: the W of Wholly, a shopping cart, and a check.',
          'The letterform sits on two small wheels, so the W reads as a cart without being drawn as one, and the check sweeps up out of it like the handle. It\'s drawn as one stroke, which is why Olly can pick it up and carry it — the mark is an object in the illustration, not a logo placed beside it.',
        ],
        variants: { secondary: 'secondary mark', logo: 'logo', wordmark: 'wordmark', mark: 'mark' },
        ollyTitle: 'mascot · Olly',
        olly: [
          'Olly is Wholly\'s cook, and its stand-in for whoever\'s using it: someone who takes cooking seriously and still needs a list. Her name was already hiding inside the brand\'s. She\'s drawn in one weight of line, in the same blue as everything else, so she belongs to the interface rather than sitting on top of it.',
          'Inside the product she only shows up where the app is waiting: an empty pot, an unread book. Outside it, she leads: in the lockup and the marketing art she\'s the one carrying the check mark.',
        ],
        ollyAlt: 'Olly, the Wholly cook, holding an empty pot and pointing up',
        fridgeAlt: 'The three brand colors over a halftone photo of an open fridge: #C6DCF0, #2448C4, #FBFBFC',
        voiceTitle: 'Voice',
        voice: 'Wholly talks like someone who actually cooks: calm, direct, a little dry. It\'s warm, but it keeps things short — it assumes you\'re busy and gets out of the way.',
        visualTitle: 'Visual',
        visual: 'One deep blue, everything else near-white. Color means state or category, never decoration. The wordmark and the illustrations carry the friendliness, so the screens can stay plain.',
      },
      story: {
        title: 'how it started',
        paragraphs: [
          'Wholly collects your recipes in one place and turns the ingredients of the meals you choose into a single shopping list.',
          'I built it because I plan my meals a week at a time, and doing that by hand is miserable work. Recipes get lost, and even when picking the meals goes fine, the shopping list is the hard part.',
          'I tried solving it in Notion first. The structure was right; the work was not — every recipe typed in by hand, every overlap spotted and merged myself. Eventually adding a recipe got heavy enough that I stopped adding them. That\'s when it became a product idea: keep the structure, remove the manual work.',
        ],
        stepsTitle: 'process',
        steps: [
          { title: 'listen', text: 'I lived the problem first in my own weekly planning. Then I tried to solve it in Notion, but that opened up even more problems. So I designed a system to solve all of them.' },
          { title: 'sketch', text: 'I sketched my ideas on paper first, then moved them into Figma. AI was my assistant along the way.' },
          { title: 'build', text: 'I carried the web interfaces over to mobile. The next step is turning the idea into a real product.' },
        ],
        learnedTitle: 'what I learned',
        learned: 'What I learned most from this project is how to move a project forward with AI.',
      },
      closing: {
        thanks: 'thanks for reading',
        meta: 'Wholly · UI/UX case study · 2026 · Sena Delikan',
        photoAlt: 'The same kitchen counter seen from above, now calm: a finished salmon teriyaki bowl, soy sauce, a glass of water and a phone showing the recipe is ready',
      },
    },
  };

  const PHOTOS = [
    { src: 'problem-1.jpg', pos: '50% 50%', alt: L('Masada üst üste yığılmış yer imli yemek kitabı, basılı tarifler, tarif kartları ve bir telefon', 'A bookmarked cookbook, printed recipes, recipe cards and a phone piled up on a table') },
    { src: 'problem-2.jpg', pos: '50% 0%', alt: L('Yemek kitabındaki malzemeleri deftere elle yazan bir el', 'A hand copying ingredients from a cookbook into a notebook') },
    { src: 'problem-3.jpg', pos: '50% 60%', alt: L('Soğan dolu bir sepetin üstünde tutulan, çetele işaretli buruşuk bir alışveriş listesi', 'A crumpled shopping list with tally marks, held over a basket of onions') },
  ];

  // Kırpılmış ekran ızgaraları: works 3.png'den (topla, seç, alışveriş), wait 10.png'den (boş durumlar)
  const SCREENS = {
    works: { w: 712, h: 600, headOnBrand: true, shots: [
      { src: 'works-1.jpg', alt: L('Tarif ekleme sohbeti: asistan tarifi bir kaynaktan buluyor', 'Add recipe chat: the assistant finds the recipe from a source') },
      { src: 'works-2.jpg', alt: L('Kayıtlı tarifler: arama, kategoriler ve tarif kartları', 'Saved recipes: search, categories and recipe cards') },
      { src: 'works-3.jpg', alt: L('Alışveriş listesi: reyon filtreleri ve işaretlenen malzemeler', 'Shopping list: aisle filters and checked ingredients') },
    ] },
    wait: { w: 530, h: 600, shots: [
      { src: 'wait-1.jpg', alt: L('Boş tarifler ekranı: boş tencere tutan Olly ve “Nothing’s cooking yet”', 'Empty recipes screen: Olly holding an empty pot and “Nothing’s cooking yet”') },
      { src: 'wait-2.jpg', alt: L('Sonuçsuz arama: “Nothing matches pizza”, Olly yok', 'Search with no results: “Nothing matches pizza”, no Olly') },
      { src: 'wait-3.jpg', alt: L('Boş liste: tarif kitabı okuyan Olly ve “Still deciding what to cook?”', 'Empty list: Olly reading a recipe book and “Still deciding what to cook?”') },
      { src: 'wait-4.jpg', alt: L('Çevrimdışı uyarısı: listenin telefonda kayıtlı olduğunu sakin bir notla söylüyor', 'Offline notice: a calm note saying the list is saved on the phone') },
    ] },
  };

  /* ---------- Küçük etkileşimler (seç) ---------- */

  const ICON_ADD = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const ICON_CHECK = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M1.5 6.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const addBtn = (added) => `<button type="button" class="wh-addbtn${added ? ' is-added' : ''}" data-wh-add aria-pressed="${added}">${added ? ICON_CHECK : ICON_ADD}<span>${added ? 'Added' : 'Add to list'}</span></button>`;
  const setAdd = (btn, on) => {
    btn.classList.toggle('is-added', on);
    btn.setAttribute('aria-pressed', on);
    btn.innerHTML = `${on ? ICON_CHECK : ICON_ADD}<span>${on ? 'Added' : 'Add to list'}</span>`;
  };

  // Salmon Teriyaki Bowl, 2 kişilik (RecipeDetailFull)
  const SERVINGS = { base: 2, min: 1, max: 8, groups: [
    { name: 'Main', items: [{ n: 'Salmon fillet (boneless)', q: 250, u: 'g' }] },
    { name: 'Base', items: [{ n: 'Jasmine rice', q: 1, u: 'cup' }] },
  ] };
  const FRACTIONS = { 0.25: '¼', 0.5: '½', 0.75: '¾' };
  const amount = (q, u) => {
    if (u === 'g') return `${Math.round(q)} g`;
    const whole = Math.floor(q); const frac = FRACTIONS[Math.round((q - whole) * 4) / 4] || '';
    const num = whole ? `${whole}${frac}` : frac || '0';
    return `${num} ${u}${q > 1 && u === 'cup' ? 's' : ''}`;
  };
  const servingsRows = (s) => SERVINGS.groups.map((g) => `
    <p class="wh-serv__group">${g.name}</p>
    ${g.items.map((it) => `<p class="wh-serv__row"><span>${amount(it.q * s / SERVINGS.base, it.u)}</span><b>${it.n}</b></p>`).join('')}`).join('');
  const servingsNote = (s) => (s === SERVINGS.base ? 'The recipe as written, for 2 servings.' : 'Scaled from 2 servings. Your list uses these amounts.');
  const servingsHTML = (s) => `
    <div class="wh-split__extra wh-serv" lang="en" data-wh-serv="${s}">
      <div class="wh-serv__head">
        <span class="wh-serv__label">ingredients:</span>
        <span class="wh-serv__stepper">
          <button type="button" data-wh-step="-1" aria-label="Fewer servings">−</button>
          <output aria-live="polite">Serves ${s}</output>
          <button type="button" data-wh-step="1" aria-label="More servings">+</button>
        </span>
      </div>
      <p class="wh-serv__note">${servingsNote(s)}</p>
      <div class="wh-serv__rows">${servingsRows(s)}</div>
    </div>`;

  // Olay dinleyicileri belgeye bir kez bağlanır; bölümler sonradan çizilse de çalışır
  // Alışveriş şeması: satırı işaretle, sayaç güncellensin
  const tick = (row) => {
    const on = row.getAttribute('aria-pressed') !== 'true';
    row.setAttribute('aria-pressed', on);
    const list = row.closest('.wh-merge__list');
    const n = list.querySelectorAll('[data-wh-tick][aria-pressed="true"]').length;
    const count = list.querySelector('.wh-merge__count');
    count.textContent = n ? count.dataset.tpl.replace('{n}', n) : count.dataset.idle;
  };
  // Üstüne gelinen (ya da odaklanan) ürünün tarif kartlarındaki kaynağı vurgulanır
  const highlight = (row, on) => {
    const merge = row.closest('.wh-merge');
    merge.querySelectorAll('.wh-merge__items .is-source').forEach((el) => el.classList.remove('is-source'));
    if (on) merge.querySelectorAll(`.wh-merge__items [data-wh-ing="${row.dataset.whIng}"]`).forEach((el) => el.classList.add('is-source'));
  };
  ['pointerover', 'focusin'].forEach((type) => document.addEventListener(type, (e) => {
    const row = e.target.closest?.('[data-wh-tick]');
    if (row) highlight(row, true);
  }));
  ['pointerout', 'focusout'].forEach((type) => document.addEventListener(type, (e) => {
    const row = e.target.closest?.('[data-wh-tick]');
    if (row && !row.contains(e.relatedTarget)) highlight(row, false);
  }));

  // Kullanıcı akışı: aşamalar 01'den 04'e kendiliğinden, bir kez oynar. Her aşamada adımlar
  // sırayla yanar, sonunda "sıradaki" hapı; aşama sıfırlanır, sıradakine geçilir.
  // Ekranda olmayan aşama bekler; azaltılmış harekette hiç oynamaz.
  const STEP_MS = 550;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const inView = (lane) => lane.whVisible ? Promise.resolve() : new Promise((r) => { lane.whWake = r; });
  const playLane = async (lane) => {
    const items = [...lane.querySelectorAll('.wh-flow__step, .wh-flow__next')];
    await inView(lane);
    lane.classList.add('is-playing');
    for (const el of items) {
      await inView(lane);
      items.forEach((x) => x.removeAttribute('aria-current'));
      el.classList.add('is-lit');
      el.setAttribute('aria-current', 'step');
      await wait(STEP_MS);
    }
    await wait(1000);
    lane.classList.remove('is-playing');
    items.forEach((el) => { el.classList.remove('is-lit'); el.removeAttribute('aria-current'); });
  };
  const setupFlow = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lanes = [...document.querySelectorAll('.wh-flow .wh-flow__inner')];
    if (!lanes.length) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      e.target.whVisible = e.isIntersecting;
      if (e.isIntersecting && e.target.whWake) { e.target.whWake(); e.target.whWake = null; }
    }), { threshold: 0.6 });
    lanes.forEach((lane) => io.observe(lane));
    (async () => {
      for (const lane of lanes) await playLane(lane);
      io.disconnect();
    })();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupFlow);
  else setTimeout(setupFlow);

  document.addEventListener('click', (e) => {
    const scroller = e.target.closest('[data-wh-scroll]');
    if (scroller && !window.matchMedia('(hover: hover)').matches) { scroller.classList.toggle('is-scrolled'); return; }
    const row = e.target.closest('[data-wh-tick]');
    if (row) { tick(row); return; }
    const add = e.target.closest('[data-wh-add]');
    if (add) {
      const on = add.getAttribute('aria-pressed') !== 'true';
      // Aynı tarifin butonları (seç: 2. ve 3. ekran) birlikte değişir
      const r = add.dataset.whRecipe;
      (r ? document.querySelectorAll(`[data-wh-recipe="${r}"]`) : [add]).forEach((b) => setAdd(b, on));
      return;
    }
    const step = e.target.closest('[data-wh-step]');
    if (step) {
      const box = step.closest('[data-wh-serv]');
      const s = Math.min(SERVINGS.max, Math.max(SERVINGS.min, Number(box.dataset.whServ) + Number(step.dataset.whStep)));
      box.dataset.whServ = s;
      box.querySelector('output').textContent = `Serves ${s}`;
      box.querySelector('.wh-serv__note').textContent = servingsNote(s);
      const rows = box.querySelector('.wh-serv__rows');
      if (rows) rows.innerHTML = servingsRows(s);
      // Telefon ekranındaki miktarlar: her hücre kendi 2 kişilik değerinden hesaplanır
      box.querySelectorAll('[data-wh-q]').forEach((c) => { c.textContent = amount(Number(c.dataset.whQ) * s / SERVINGS.base, c.dataset.whU); });
      box.querySelector('[data-wh-step="-1"]').disabled = s <= SERVINGS.min;
      box.querySelector('[data-wh-step="1"]').disabled = s >= SERVINGS.max;
    }
  });

  // Seç ekranlarının üstündeki etkileşimli parçalar: görseldeki butonların tam yerine kodla çizilir.
  // Konumlar 530 px genişlikteki ekran görselinin pikselleri; cqw'ye çevrilir (530 px = 100cqw)
  const at = (x, y, w, h) => `left:${(x / 5.3).toFixed(2)}cqw;top:${(y / 5.3).toFixed(2)}cqw;width:${(w / 5.3).toFixed(2)}cqw;height:${(h / 5.3).toFixed(2)}cqw`;
  const hotAdd = (recipe, name, x, y, w, h) => `<button type="button" class="wh-addbtn is-added wh-hot__add" style="${at(x, y, w, h)}" data-wh-add data-wh-recipe="${recipe}" aria-pressed="true" aria-label="${name}: add to list">${ICON_CHECK}<span>Added</span></button>`;
  const HOT = {
    main: () => `<div class="wh-hot" lang="en" style="--wh-hot-bg:#FAFBFD">
        ${hotAdd('salmon', 'Salmon Teriyaki Bowl', 31, 642, 218, 39)}
        ${hotAdd('quinoa', 'Mediterranean Quinoa Salad', 281, 642, 218, 39)}
        ${hotAdd('onigiri', 'Tuna Onigiri', 31, 987, 218, 39)}
        ${hotAdd('tamago', 'Tamagoyaki', 281, 987, 218, 39)}
      </div>`,
    // Salmon Teriyaki Bowl detayı; ekranda 4 kişilik, miktarlar 2 kişilik değerlerden hesaplanır
    detail: () => `<div class="wh-hot" lang="en" data-wh-serv="4">
        ${hotAdd('salmon', 'Salmon Teriyaki Bowl', 328, 351, 175, 39)}
        <span class="wh-serv__stepper wh-hot__stepper" style="${at(328, 491, 175, 38)}">
          <button type="button" data-wh-step="-1" aria-label="Fewer servings">−</button>
          <output aria-live="polite">Serves 4</output>
          <button type="button" data-wh-step="1" aria-label="More servings">+</button>
        </span>
        <p class="wh-serv__note wh-hot__note" style="${at(56, 537, 450, 24)}">${servingsNote(4)}</p>
        ${[[630, 250, 'g'], [712, 1, 'cup'], [793, 3, 'tbsp'], [834, 2, 'tbsp'], [875, 1, 'tbsp'], [915, 1, 'tbsp']].map(([y, q, u]) =>
          `<span class="wh-hot__q" style="${at(88, y - 16, 170, 32)}" data-wh-q="${q}" data-wh-u="${u}">${amount(q * 2, u)}</span>`).join('')}
      </div>`,
  };

  // İkiye bölünmüş adım bölümleri (topla, seç): bir yanda dört adım, öbür yanda iki telefon.
  // Telefonlar ve kesitler 2x Behance görsellerinden kesildi; rozet numaraları kodda çizilir.
  // extras: adımın altındaki küçük görsel (img) ya da kodla çizilmiş arayüz parçası (html)
  const SPLIT = {
    collect: {
      num: '01', theme: 'light', live: true,
      extras: {
        0: { img: 'collect-ask.jpg', w: 600, h: 224, alt: L('Boş tarif taslağı ve “How can I help you?” mesaj alanı', 'Empty recipe draft and the “How can I help you?” message field') },
        3: { img: 'collect-saved.jpg', w: 600, h: 224, alt: L('Kaydedilen tarifler kendi kategorilerinde: Dessert ve Main Course', 'Saved recipes in their categories: Dessert and Main Course') },
      },
      phones: [
        { n: 2, live: 'chat' },
        { n: 3, live: 'draft', alt: L('Alttan yükselen tarif taslağı: bağlantı ve malzeme listesi, kaydet butonu', 'Recipe draft rising from the bottom: link, ingredient list and save button') },
      ],
    },
    choose: {
      num: '02', theme: 'brand', mirror: true,
      extras: {
        // Etkileşimli: WhollyUI AddToListButton'ın iki hâli; dokununca durum değişir
        0: { html: (t) => `<div class="wh-split__extra wh-addbtns" lang="en">
            ${addBtn(false)}${addBtn(true)}
          </div>` },
        // Etkileşimli: porsiyon seçici; miktarlar tarifin 2 kişilik değerlerinden hesaplanır
        3: { html: (t) => `${servingsHTML(4)}` },
      },
      phones: [
        { n: 2, src: 'choose-main.jpg', hot: HOT.main, alt: L('Kayıtlı tarifler ekranı: arama, kategori çipleri ve aynı boyda tarif kartları', 'Saved recipes screen: search, category chips and same-size recipe cards') },
        { n: 3, src: 'choose-detail.jpg', hot: HOT.detail, alt: L('Tarif detayı: adın yanında Added butonu, porsiyon seçici ve malzemeler', 'Recipe detail: Added button beside the name, servings picker and ingredients') },
      ],
    },
    // Alışveriş: yalnızca adımlar (başlık üstteki şemada); 1 ve 4 halka rozet
    shop: {
      theme: 'brand', mirror: true, ring: true, extras: {},
      phones: [
        { n: 2, src: 'shop-list.jpg', alt: L('Lists ekranı: seçili tarifler ve reyon filtreli alışveriş listesi', 'Lists screen: chosen recipes and a shopping list with aisle filters') },
        { n: 3, src: 'shop-mode.jpg', alt: L('Alışveriş modu: reyonlara göre gruplu büyük satırlar, işaretlenen ürünler', 'Shopping mode: big rows grouped by aisle, checked items') },
      ],
    },
  };

  // Alışveriş şeması: iki tarifin malzemeleri tek listede birleşiyor (WhollyUI verisi, İngilizce)
  const MERGE = {
    recipes: [
      { name: 'Salmon Teriyaki Bowl', items: [['250 g', 'Salmon fillet'], ['1 cup', 'Jasmine rice'], ['3 tbsp', 'Soy sauce'], ['2 tbsp', 'Mirin']] },
      { name: 'Nasu Dengaku', items: [['2', 'Eggplants'], ['2 tbsp', 'White miso'], ['1 tbsp', 'Soy sauce'], ['1 tbsp', 'Mirin']] },
    ],
    list: [
      { name: 'Eggplants', amount: '2', aisle: 'Produce', from: [1] },
      { name: 'Salmon fillet', amount: '250 g', aisle: 'Seafood', from: [0] },
      { name: 'Jasmine rice', amount: '1 cup', aisle: 'Grains', from: [0] },
      { name: 'Soy sauce', amount: '4 tbsp', aisle: 'Spices & Sauces', from: [0, 1], merged: true },
      { name: 'Mirin', amount: '3 tbsp', aisle: 'Spices & Sauces', from: [0, 1], merged: true },
      { name: 'White miso', amount: '2 tbsp', aisle: 'Spices & Sauces', from: [1] },
    ],
  };

  const pad = (n) => String(n).padStart(2, '0');
  const ARROW = '<svg class="wh-arrow" width="22" height="12" viewBox="0 0 22 12" aria-hidden="true"><path d="M1 6 H19 M14 1 L20 6 L14 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // Akıştaki bir adım: ekran adı (ui, İngilizce), açıklama (t) ya da uygulamanın sorusu (q).
  // Ok, adımın içinde durur; dar ekranda satır kırılınca kutusuyla birlikte alta geçer.
  const flowStep = (st, last) => {
    const arrow = last ? '' : `<span class="wh-flow__arr" aria-hidden="true">${ARROW}</span>`;
    if (st.q) {
      return `<li class="wh-flow__step is-dec"><span class="wh-flow__dec"><span class="wh-flow__dia" aria-hidden="true"></span>
        <span class="wh-flow__q">${st.q}</span>${st.a ? `<span class="wh-flow__qa">${st.a}</span>` : ''}</span>${arrow}</li>`;
    }
    const name = st.ui ? `<span class="wh-flow__bt" lang="en">${st.ui}</span>` : `<span class="wh-flow__bt">${st.t}</span>`;
    return `<li class="wh-flow__step"><span class="wh-flow__box${st.opt ? ' is-opt' : ''}">${name}${st.s ? `<span class="wh-flow__bs">${st.s}</span>` : ''}</span>${arrow}</li>`;
  };

  // Gök mavisi başlık bandı + mavi bantta üst kısmı kırpılmış ekranlar ızgarası
  const screensSection = (key, t) => {
    const sc = SCREENS[key];
    // Başlık normalde gök mavisi bantta; headOnBrand ise ekranlarla aynı lacivert bantta durur
    const head = `<div class="wh-wrap wh-head case-reveal">
            <h2 id="wh-${key}" class="wh-title">${t.title}</h2>
            <p class="wh-lead">${t.lead}</p>
          </div>`;
    return `
      <section class="wh-works wh-works--${sc.shots.length}" aria-labelledby="wh-${key}">
        ${sc.headOnBrand ? '' : `<div class="wh-band wh-band--sky">${head}</div>`}
        <div class="wh-band wh-band--brand">
          ${sc.headOnBrand ? head : ''}
          <ol class="wh-wrap wh-works__grid">
            ${t.items.map((it, i) => `
              <li class="wh-works__item case-reveal">
                <img src="${IMG}${sc.shots[i].src}" width="${sc.w}" height="${sc.h}" alt="${sc.shots[i].alt}" style="aspect-ratio: ${sc.w} / ${sc.h}" loading="lazy" decoding="async">
                <span class="wh-num" aria-hidden="true">${pad(i + 1)}</span>
                <h3 class="wh-item-title">${it.title}</h3>
                <p>${it.text}</p>
              </li>`).join('')}
          </ol>
        </div>
      </section>`;
  };

  const extraHTML = (ex, t) => (ex.html ? ex.html(t)
    : `<img class="wh-split__extra" src="${IMG}${ex.img}" width="${ex.w}" height="${ex.h}" alt="${ex.alt}" loading="lazy" decoding="async">`);

  // Rozetler tasarımdaki gibi: 1 ve 4 açık, 2 ve 3 (telefonlarla eşleşen) vurgulu
  /* ---------- Topla: canlı sohbet ve alttan yükselen taslak ---------- */

  // Sohbet, Behance'teki 2. ekranın metni; uygulamanın kendi dili olduğu için İngilizce
  const CHAT = [
    { who: 'user', html: 'Hi, can you give me a blueberry cake recipe?' },
    { who: 'bot', html: 'Of course! Would you like me to look this recipe up in trusted sources, or should I write one from my own knowledge?' },
    { who: 'user', html: 'I\'d love it if you could find one from a source.' },
    { who: 'status', html: 'Searching sources…' },
    { who: 'bot', html: 'After searching online I found the blueberry cake recipe below. Have a look and see whether it matches what you had in mind:<span class="wh-msg__gap"></span>Source: <u>Home Baking - Blueberry Cake</u><span class="wh-msg__gap"></span>Ingredients<br>For the batter:<ul><li>3 eggs</li><li>1.5 cups granulated sugar</li><li>1 cup yogurt</li><li>1 cup vegetable oil</li><li>3 cups flour</li><li>250 g blueberries</li></ul>' },
  ];
  const ICON_X = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const ICON_MIC = '<svg viewBox="0 0 12 16" aria-hidden="true"><rect x="3.5" y="1" width="5" height="9" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M1 7.5a5 5 0 0 0 10 0M6 12.5V15" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';

  const phoneHTML = (ph) => {
    const badge = `<span class="wh-badge is-strong" aria-hidden="true">${ph.n}</span>`;
    if (ph.live === 'chat') {
      return `
        <figure class="wh-phone case-reveal">
          <div class="wh-chat" lang="en" role="img" aria-label="Add recipe chat: the user asks for a blueberry cake recipe, the assistant asks whether to use a source, then finds one">
            <div class="wh-chat__bar"><b>Add recipe</b><span class="wh-chat__x">${ICON_X}</span></div>
            <div class="wh-chat__log" aria-hidden="true">
              ${CHAT.map((m) => `<div class="wh-msg is-${m.who}">${m.html}</div>`).join('')}
              <div class="wh-msg is-typing"><i></i><i></i><i></i></div>
            </div>
            <div class="wh-chat__input" aria-hidden="true"><span>+</span><span class="wh-chat__ph">Write a message...</span>${ICON_MIC}</div>
            <div class="wh-chat__peek" aria-hidden="true"><span>New recipe</span><span>empty · pull up to see the draft</span></div>
          </div>
          ${badge}
        </figure>`;
    }
    // Taslak: üstteki sohbet kodla çizilir (satırlar tam görünsün), altında taslak sayfası.
    // Ekrandan uzun; üstüne gelince (dokunmatikte dokununca) yavaşça aşağı kayar.
    if (ph.live === 'draft') {
      return `
        <figure class="wh-phone case-reveal">
          <div class="wh-draft" data-wh-scroll tabindex="0">
            <div class="wh-draft__scroll">
              <div class="wh-draft__top" lang="en" aria-hidden="true">
                <div class="wh-chat__bar"><b>Add recipe</b><span class="wh-chat__x">${ICON_X}</span></div>
                <div class="wh-chat__log">
                  <div class="wh-msg is-user">Yes, this recipe works.</div>
                  <div class="wh-msg is-status">Creating the recipe…</div>
                  <div class="wh-msg is-bot">Recipe summary: Blueberry Cake<ul><li>Category: Dessert</li><li>Serves: 8</li><li>Time: 30 min prep + 30 min baking = 60 min total</li></ul></div>
                </div>
              </div>
              <img class="wh-draft__sheet" src="${IMG}collect-draft-sheet.jpg" width="530" height="888" alt="${ph.alt}" loading="lazy" decoding="async">
            </div>
          </div>
          ${badge}
        </figure>`;
    }
    return `
      <figure class="wh-phone case-reveal${ph.hot ? ' has-hot' : ''}">
        <img src="${IMG}${ph.src}" width="530" height="1146" alt="${ph.alt}" loading="lazy" decoding="async">
        ${ph.hot ? ph.hot() : ''}
        ${badge}
      </figure>`;
  };

  // Sohbet uzayınca en eski mesajlar bütün olarak gizlenir; üstte yarım satır kalmaz
  const fitChat = (log) => {
    const msgs = [...log.querySelectorAll('.wh-msg')];
    msgs.forEach((m) => m.classList.remove('is-gone'));
    // Mesajlar alttan dizildiği için taşma üstte olur; ilk görünen mesaj üst kenarı aşıyorsa gizlenir
    const top = log.getBoundingClientRect().top;
    for (const m of msgs) {
      if (getComputedStyle(m).display === 'none') continue;
      if (m.getBoundingClientRect().top >= top) break;
      m.classList.add('is-gone');
    }
  };

  // Oynatma: mesajlar sırayla gelir (asistan önce "yazıyor"). Bitince 5 sn bekler, baştan başlar.
  // Bölüm ekranda değilken her adımda bekler.
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const visible = (stage) => stage.whVisible ? Promise.resolve() : new Promise((r) => { stage.whWake = r; });
  const step = async (stage, ms) => { await sleep(ms); await visible(stage); };
  const playChat = async (stage) => {
    const log = stage.querySelector('.wh-chat__log');
    const msgs = [...log.querySelectorAll('.wh-msg:not(.is-typing)')];
    const typing = log.querySelector('.wh-msg.is-typing');
    for (;;) {
      msgs.forEach((m) => m.classList.remove('is-in'));
      fitChat(log);
      await step(stage, 500);
      for (const m of msgs) {
        if (m.classList.contains('is-bot')) {
          typing.classList.add('is-in');
          fitChat(log);
          await step(stage, 900);
          typing.classList.remove('is-in');
        }
        m.classList.add('is-in');
        fitChat(log);
        await step(stage, m.classList.contains('is-status') ? 1100 : 1000);
      }
      await step(stage, 5000);
    }
  };

  // Bölüm ekrana gelince oynamaya başlar; azaltılmış harekette son hâl görünür
  const setupLive = () => {
    // Taslağın kayma payı: içerik ekrandan ne kadar uzunsa o kadar
    document.querySelectorAll('[data-wh-scroll]').forEach((screen) => {
      const inner = screen.firstElementChild;
      new ResizeObserver(() => {
        screen.style.setProperty('--wh-draft-shift', `${Math.min(0, screen.clientHeight - inner.offsetHeight)}px`);
      }).observe(inner);
    });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-wh-live]').forEach((stage) => {
      const log = stage.querySelector('.wh-chat__log');
      new ResizeObserver(() => fitChat(log)).observe(log);
      if (reduced) return;
      stage.classList.add('is-armed');
      let started = false;
      new IntersectionObserver((entries) => {
        stage.whVisible = entries[entries.length - 1].isIntersecting;
        if (!stage.whVisible) return;
        if (stage.whWake) { stage.whWake(); stage.whWake = null; }
        if (!started) { started = true; playChat(stage); }
      }, { threshold: 0.35 }).observe(stage);
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupLive);
  else setTimeout(setupLive);

  // headless: başlık başka yerde (ör. alışveriş şemasının üstünde); o zaman bölüm etiketi yerine div
  const splitSection = (key, t, headless = false) => {
    const cfg = SPLIT[key];
    const tag = headless ? 'div' : 'section';
    return `
      <${tag} class="wh-split wh-split--${cfg.theme}${cfg.mirror ? ' is-mirror' : ''}${headless ? ' is-headless' : ''}"${headless ? '' : ` aria-labelledby="wh-${key}"`}>
        <div class="wh-split__inner">
          <div class="wh-split__text">
            ${headless ? '' : `<div class="case-reveal">
              <h2 id="wh-${key}" class="wh-title wh-split__head"><span class="wh-num">${cfg.num}</span>${t.title}</h2>
              <p class="wh-lead">${t.lead}</p>
            </div>`}
            <ol class="wh-split__steps">
              ${t.steps.map((st, i) => `
                <li class="wh-split__step case-reveal">
                  <span class="wh-badge${i === 1 || i === 2 ? ' is-strong' : cfg.ring ? ' is-ring' : ''}" aria-hidden="true">${i + 1}</span>
                  <div>
                    <h3 class="wh-split__st">${st.title}</h3>
                    <p>${st.text}</p>
                    ${cfg.extras[i] ? extraHTML(cfg.extras[i], t) : ''}
                  </div>
                </li>`).join('')}
            </ol>
          </div>
          <div class="wh-split__stage"${cfg.live ? ' data-wh-live' : ''}>
            <div class="wh-split__phones">
              ${cfg.phones.map((ph) => phoneHTML(ph)).join('')}
            </div>
          </div>
        </div>
      </${tag}>`;
  };

  // Pişir: 8.png'den (2x) kesilen üç ekranın üst kısmı, alttan yükseliyor
  const COOK = [
    { src: 'cook-1.jpg', alt: L('Pişirme modu, adım 1/6: pirinci yıka; bu adımın malzemesi ve 12 dakikalık zamanlayıcı', 'Cook mode, step 1/6: rinse the rice; this step’s ingredient and a 12-minute timer') },
    { src: 'cook-2.jpg', alt: L('Pişirme modu, adım 4/6: somonu pişir; çalışan zamanlayıcı 02:27', 'Cook mode, step 4/6: cook the salmon; timer running at 02:27') },
    { src: 'cook-3.jpg', alt: L('Tarif hazır: listeden çıkar ya da bir dahaki sefere tut', 'Recipe ready: remove it from the list or keep it for next time') },
  ];

  const cookSection = (t) => `
    <section class="wh-cook" aria-labelledby="wh-cook">
      <div class="wh-cook__inner">
        <div class="wh-cook__text case-reveal">
          <h2 id="wh-cook" class="wh-title">${t.title}</h2>
          <p class="wh-lead">${t.lead}</p>
        </div>
        <div class="wh-cook__screens case-reveal">
          ${COOK.map((c) => `<img src="${IMG}${c.src}" width="420" height="760" alt="${c.alt}" loading="lazy" decoding="async">`).join('')}
        </div>
      </div>
    </section>`;

  // Webden telefona: 9.png'den (2x) kesilen web ve telefon kesitleri, satır satır
  const WEB = [
    { w: { src: 'web-1w.jpg', w: 856, h: 186, alt: L('Web: Saved Recipes başlığı, arama alanı ve kategori çipleri', 'Web: Saved Recipes heading, search field and category chips') },
      p: { src: 'web-1p.jpg', w: 636, h: 288, alt: L('Telefon: aynı başlık; Add Recipe butonunun etrafında kesikli çizgiyle 44 px dokunma alanı', 'Phone: the same heading; a dashed 44 px tap area around the Add Recipe button') } },
    { w: { src: 'web-2w.jpg', w: 856, h: 244, alt: L('Web: yan yana üç tarif kartı', 'Web: three recipe cards in a row') },
      p: { src: 'web-2p.jpg', w: 636, h: 398, alt: L('Telefon: yan yana iki tarif kartı, Added butonlarıyla', 'Phone: two recipe cards in a row, with Added buttons') } },
    { w: { src: 'web-3w.jpg', w: 856, h: 106, alt: L('Web: üst çubukta logo, Recipes ve Lists', 'Web: logo, Recipes and Lists in the top bar') },
      p: { src: 'web-3p.jpg', w: 636, h: 88, alt: L('Telefon: altta Recipes ve Lists sekmeleri', 'Phone: Recipes and Lists tabs at the bottom') } },
    { w: { src: 'web-4w.jpg', w: 856, h: 576, alt: L('Web: tarif taslağı sohbetin yanında bir panelde', 'Web: recipe draft in a panel beside the chat') },
      p: { src: 'web-4p.jpg', w: 348, h: 756, alt: L('Telefon: tarif taslağı alttan yükselen bir sayfada', 'Phone: recipe draft in a sheet rising from the bottom') }, tall: true },
  ];
  const webImg = (im, cls) => `<img class="wh-web__crop ${cls}" src="${IMG}${im.src}" width="${im.w}" height="${im.h}" alt="${im.alt}" loading="lazy" decoding="async">`;

  const webSection = (t) => `
    <section class="wh-web" aria-labelledby="wh-web">
      <div class="wh-wrap wh-head case-reveal">
        <h2 id="wh-web" class="wh-title">${t.title}</h2>
        <p class="wh-lead">${t.lead}</p>
      </div>
      <div class="wh-wrap wh-web__grid wh-web__tags" aria-hidden="true"><span></span><span>${t.web}</span><span>${t.phone}</span></div>
      ${t.rows.map((r, i) => `
        <div class="wh-web__band${i % 2 ? '' : ' is-sky'}">
          <div class="wh-wrap wh-web__grid wh-web__row case-reveal">
            <div class="wh-web__text">
              <span class="wh-badge is-strong" aria-hidden="true">${i + 1}</span>
              <h3 class="wh-split__st">${r.title}</h3>
              <p>${r.text}</p>
            </div>
            <figure class="wh-web__cell"><figcaption>${t.web}</figcaption>${webImg(WEB[i].w, 'is-web')}</figure>
            <figure class="wh-web__cell${WEB[i].tall ? ' is-tall' : ''}"><figcaption>${t.phone}</figcaption>${webImg(WEB[i].p, 'is-phone')}</figure>
          </div>
        </div>`).join('')}
    </section>`;

  // Tasarım sistemi: renkler ve yazı ölçüleri WhollyUI token'larından; bileşen kutularının içi 11.png'den (2x)
  const SWATCHES = [
    ['brand-600', '#2448C4'], ['brand-800', '#182F83'], ['sky-300', '#C6DCF0'], ['sky-250', '#D1E3F3'],
    ['sky-200', '#DDEAF6'], ['sky-100', '#ECF3F9'], ['ink-800', '#302F3C'], ['surface', '#FBFBFC'],
  ];
  const TYPE_ROWS = [
    ['m-title', 'Saved Recipes', '24/30 · 700'],
    ['m-step', 'Lay the salmon in skin side down.', '22/30 · 500'],
    ['m-headline', 'Salmon Teriyaki Bowl', '18/24 · 700'],
    ['m-body', 'Ask for a dish or paste a link.', '15/22 · 400'],
    ['m-label', 'Add to list', '15/20 · 400'],
    ['m-meta', '30 items to buy', '13/18 · 400'],
    ['m-caption', 'Main Course', '12/16 · 600'],
  ];
  const DS_GROUPS = [
    { key: 'actions', w: 666, h: 478, alt: L('Butonlar: Add Recipe, Start Shopping, Remove All, kapat, Add to list ve Added, porsiyon seçici, açık ve kapalı anahtar', 'Buttons: Add Recipe, Start Shopping, Remove All, close, Add to list and Added, servings picker, switch on and off') },
    { key: 'selection', w: 666, h: 294, alt: L('Çipler (seçili, onaylı, Clear All) ve işaretli, işaretsiz onay kutusu', 'Chips (selected, checked, Clear All) and a checked and unchecked checkbox') },
    { key: 'fields', w: 668, h: 226, alt: L('Arama alanı ve asistan mesaj alanı', 'Search field and assistant message field') },
    { key: 'content', w: 1398, h: 522, alt: L('Tarif kartı, alışveriş listesi satırı ve sohbet balonları', 'Recipe card, shopping list row and chat bubbles'), wide: true },
    { key: 'tags', w: 668, h: 258, alt: L('Kategori ve reyon etiketi, sakin çevrimdışı bildirimi', 'Category and aisle tags, calm offline notice') },
    { key: 'nav', w: 1398, h: 178, alt: L('Üst çubuk (logo ve avatar) ve alt sekme çubuğu (Recipes, Lists)', 'Top bar (logo and avatar) and bottom tab bar (Recipes, Lists)'), wide: true },
    { key: 'icons', w: 668, h: 162, alt: L('Material Symbols ikonları', 'Material Symbols icons') },
  ];

  const systemSection = (t) => `
    <section class="wh-sys" aria-labelledby="wh-system">
      <div class="wh-band wh-band--brand">
        <div class="wh-wrap wh-sys__colors">
          <div class="case-reveal">
            <h2 id="wh-system" class="wh-title">${t.title}</h2>
            <p class="wh-lead">${t.lead}</p>
          </div>
          <div class="case-reveal">
            ${t.colors ? `<h3 class="wh-split__st">${t.colors}</h3>` : ''}
            <ul class="wh-sys__swatches">
              ${SWATCHES.map(([name, hex], i) => `
                <li><span class="wh-sys__chip" style="background: ${hex}"></span>
                  <span class="wh-sys__swname" lang="en">${name}</span>
                  <span class="wh-sys__swmeta">${hex}<br>${t.roles[i]}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      <div class="wh-band wh-band--sky">
        <div class="wh-wrap wh-sys__type case-reveal">
          <div class="wh-sys__specimen">
            <h3 class="wh-split__st">${t.type}</h3>
            <p class="wh-sys__typetext">${t.typeText}</p>
            <p class="wh-sys__aa" aria-hidden="true">Aa</p>
            <p class="wh-sys__font" lang="en">Nunito</p>
            <p class="wh-sys__weights" aria-hidden="true"><span>Aa</span><span>Aa</span><span>Aa</span><span>Aa</span><span>Aa</span></p>
            <p class="wh-sys__small">${t.weights}</p>
            <p class="wh-sys__alt"><span class="wh-sys__alt-aa" aria-hidden="true">Aa</span><span class="wh-sys__small">${t.marketing}</span></p>
          </div>
          <dl class="wh-sys__rows" lang="en">
            ${TYPE_ROWS.map(([k, sample, spec]) => `<div><dt class="wh-t-${k}">${sample}</dt><dd>${k} · ${spec}</dd></div>`).join('')}
          </dl>
        </div>
      </div>
      <div class="wh-wrap wh-sys__comps">
        <div class="wh-sys__comphead case-reveal"><h3 class="wh-split__st">${t.components}</h3>${t.componentsMeta ? `<p>${t.componentsMeta}</p>` : ''}</div>
        <div class="wh-sys__groups">
          ${DS_GROUPS.map((g) => {
            const tx = t.groups[g.key];
            return `
            <figure class="wh-sys__group${g.wide ? ' is-wide' : ''} case-reveal">
              <figcaption class="wh-sys__glabel">${tx.label}</figcaption>
              <img src="${IMG}ds-${g.key}.jpg" width="${g.w}" height="${g.h}" alt="${g.alt}" loading="lazy" decoding="async">
              ${tx.note ? `<p class="wh-sys__note">${tx.note}</p>` : ''}
            </figure>`;
          }).join('')}
        </div>
      </div>
    </section>`;

  // Marka: logo hâlleri WhollyUI paketinden (SVG, renk currentColor); kolaj marka kapağındaki karolardan
  const LOGOS = {"logo": {"vb": "111 117 204 59", "svg": "<path d=\"M201.127 141.446V155.068C201.127 161.944 197.238 165.904 190.197 165.904C186.961 165.904 184.295 165.034 182.459 162.598C180.667 164.948 178.087 165.904 174.676 165.904C167.593 165.904 163.788 161.944 163.788 155.068V141.446H170.609V154.547C170.609 158.418 171.878 160.204 174.762 160.204C177.646 160.204 179.048 158.421 179.048 154.547V141.446H185.867V154.547C185.867 158.418 187.267 160.204 190.153 160.204C193.039 160.204 194.306 158.421 194.306 154.547V141.446H201.127Z\" fill=\"currentColor\"/><path d=\"M228.536 152.503V165.906H221.714V153.549C221.714 149.764 219.964 148.022 216.948 148.022C213.67 148.022 211.309 150.023 211.309 154.332V165.909H204.489L204.209 135.257H211.029L211.309 144.934C213.145 143.105 215.767 142.147 218.784 142.147C224.336 142.147 228.533 145.368 228.533 152.503H228.536Z\" fill=\"currentColor\"/><path d=\"M231.923 153.647C231.923 146.477 237.135 141.387 244.263 141.387C251.39 141.387 256.558 146.477 256.558 153.647C256.558 160.817 251.388 165.906 244.263 165.906C237.138 165.906 231.923 160.817 231.923 153.647ZM249.972 153.647C249.972 149.53 247.513 147.054 244.26 147.054C241.008 147.054 238.507 149.532 238.507 153.647C238.507 157.761 241.008 160.242 244.26 160.242C247.513 160.242 249.972 157.764 249.972 153.647Z\" fill=\"currentColor\"/><path d=\"M259.805 157.813L259.637 135.257H266.457L266.625 157.422C266.625 159.423 267.686 160.291 269.555 160.511C270.376 160.606 271.489 160.634 271.953 160.625V165.909H268.244C262.955 165.909 259.805 163.038 259.805 157.815V157.813Z\" fill=\"currentColor\"/><path d=\"M314.26 141.387L314.479 163.171C314.479 171.872 309.89 175.257 301.671 175.257C297.341 175.257 293.144 174.168 290.435 172.036L293.515 167.664C295.484 169.273 298.545 170.276 301.473 170.276C306.062 170.276 307.662 168.263 307.662 164.041V163.257C305.871 165.041 303.421 165.955 300.712 165.955C294.81 165.955 290.657 162.692 290.657 155.423L290.438 141.385H297.259L297.479 154.423C297.479 158.383 299.228 160.125 302.245 160.125C305.262 160.125 307.667 158.124 307.667 153.815L307.448 141.385H314.269H314.262L314.26 141.387Z\" fill=\"currentColor\"/><path d=\"M275.203 157.813L275.035 135.257H281.855L282.023 157.422C282.023 159.423 283.084 160.291 284.953 160.511C285.774 160.606 286.887 160.634 287.351 160.625V165.909H283.642C278.353 165.909 275.203 163.038 275.203 157.815V157.813Z\" fill=\"currentColor\"/><path d=\"M181.52 118.787C172.778 123.856 154.444 137.403 150.102 163.656C149.973 164.432 149.293 165 148.495 165H147.299C147.299 163.587 146.139 162.441 144.707 162.441C143.275 162.441 142.114 163.587 142.114 165C140.702 165 141.521 159.067 144.707 151.345C150 138.517 161.829 120.748 180.844 117.021C181.909 116.812 182.457 118.243 181.521 118.786L181.52 118.787Z\" fill=\"currentColor\"/><path d=\"M144.707 141.045V162.441C143.275 162.441 142.115 163.587 142.115 165H140.879C140.089 165 139.412 164.452 139.257 163.689L134.733 141.366C134.525 140.353 135.309 139.412 136.352 139.412H143.053C143.966 139.412 144.707 140.143 144.707 141.044L144.707 141.045Z\" fill=\"currentColor\"/><path d=\"M134.335 141.275V163.138C134.335 164.168 133.49 165 132.449 165H131.95C131.95 163.587 130.79 162.441 129.358 162.441C129.162 162.441 128.969 162.463 128.787 162.503C128.741 162.514 128.694 162.524 128.652 162.537L128.473 161.665L124.416 141.642C124.183 140.488 125.076 139.413 126.269 139.413H132.449C133.492 139.413 134.335 140.246 134.335 141.275Z\" fill=\"currentColor\"/><path d=\"M128.786 162.504C128.74 162.515 128.694 162.525 128.651 162.538C127.562 162.84 126.764 163.829 126.764 165H125.465C124.889 165 124.353 164.707 124.047 164.224L111.255 147.088C110.732 146.263 111.042 145.175 111.924 144.74L118.872 141.308C119.803 140.85 120.923 141.331 121.223 142.312L128.074 160.601L128.472 161.664L128.786 162.502V162.504Z\" fill=\"currentColor\"/>"}, "mark": {"vb": "339 123 71 48", "svg": "<path d=\"M409.52 124.787C400.778 129.856 382.444 143.403 378.102 169.656C377.973 170.432 377.293 171 376.495 171H375.299C375.299 169.587 374.139 168.441 372.707 168.441C371.275 168.441 370.114 169.587 370.114 171C368.702 171 369.521 165.067 372.707 157.345C378 144.517 389.829 126.748 408.844 123.021C409.909 122.812 410.457 124.243 409.521 124.786L409.52 124.787Z\" fill=\"currentColor\"/><path d=\"M372.707 147.045V168.441C371.275 168.441 370.115 169.587 370.115 171H368.879C368.089 171 367.412 170.452 367.257 169.689L362.733 147.366C362.525 146.353 363.309 145.412 364.352 145.412H371.053C371.966 145.412 372.707 146.143 372.707 147.044L372.707 147.045Z\" fill=\"currentColor\"/><path d=\"M362.335 147.275V169.138C362.335 170.168 361.49 171 360.449 171H359.95C359.95 169.587 358.79 168.441 357.358 168.441C357.162 168.441 356.969 168.463 356.787 168.503C356.741 168.514 356.694 168.524 356.652 168.537L356.473 167.665L352.416 147.642C352.183 146.488 353.076 145.413 354.269 145.413H360.449C361.492 145.413 362.335 146.246 362.335 147.275Z\" fill=\"currentColor\"/><path d=\"M356.786 168.504C356.74 168.515 356.694 168.525 356.651 168.538C355.562 168.84 354.764 169.829 354.764 171H353.465C352.889 171 352.353 170.707 352.047 170.224L339.255 153.088C338.732 152.263 339.042 151.175 339.924 150.74L346.872 147.308C347.803 146.85 348.923 147.331 349.223 148.312L356.074 166.601L356.472 167.664L356.786 168.502V168.504Z\" fill=\"currentColor\"/>"}, "wordmark": {"vb": "444 131 151 40", "svg": "<path d=\"M481.414 137.195V150.817C481.414 157.692 477.515 161.651 470.462 161.651C467.219 161.651 464.547 160.782 462.708 158.343C460.912 160.692 458.326 161.651 454.908 161.651C447.811 161.651 444 157.692 444 150.817V137.195H450.836V150.295C450.836 154.168 452.105 155.952 454.998 155.952C457.891 155.952 459.292 154.168 459.292 150.295V137.195H466.127V150.295C466.127 154.168 467.528 155.952 470.421 155.952C473.314 155.952 474.583 154.168 474.583 150.295V137.195H481.419H481.415H481.414Z\" fill=\"currentColor\"/><path d=\"M508.878 148.25V161.651H502.042V149.293C502.042 145.508 500.29 143.766 497.267 143.766C493.981 143.766 491.617 145.768 491.617 150.074V161.648H484.781L484.499 131H491.335L491.617 140.675C493.456 138.849 496.084 137.889 499.109 137.889C504.672 137.889 508.879 141.108 508.879 148.245L508.878 148.25Z\" fill=\"currentColor\"/><path d=\"M512.272 149.393C512.272 142.224 517.492 137.134 524.635 137.134C531.778 137.134 536.958 142.224 536.958 149.393C536.958 156.561 531.778 161.651 524.635 161.651C517.492 161.651 512.272 156.561 512.272 149.393ZM530.359 149.393C530.359 145.277 527.894 142.798 524.637 142.798C521.379 142.798 518.871 145.275 518.871 149.393C518.871 153.51 521.378 155.988 524.637 155.988C527.896 155.988 530.359 153.509 530.359 149.393Z\" fill=\"currentColor\"/><path d=\"M540.214 153.557L540.043 131.005H546.879L547.049 153.168C547.049 155.169 548.114 156.036 549.984 156.256C550.805 156.352 551.92 156.377 552.388 156.371V161.653H548.67C543.368 161.653 540.214 158.782 540.214 153.561V153.557Z\" fill=\"currentColor\"/><path d=\"M594.781 137.134L595 158.915C595 167.618 590.401 171 582.162 171C577.825 171 573.619 169.913 570.903 167.78L573.988 163.411C575.96 165.021 579.026 166.022 581.962 166.022C586.561 166.022 588.163 164.009 588.163 159.786V159.003C586.367 160.787 583.913 161.702 581.197 161.702C575.283 161.702 571.121 158.438 571.121 151.173L570.901 137.136H577.737L577.956 150.172C577.956 154.131 579.708 155.871 582.731 155.871C585.754 155.871 588.163 153.87 588.163 149.563L587.943 137.136H594.779L594.781 137.134Z\" fill=\"currentColor\"/><path d=\"M555.644 153.557L555.473 131.005H562.309L562.479 153.168C562.479 155.169 563.544 156.036 565.414 156.256C566.235 156.352 567.35 156.377 567.818 156.371V161.653H564.1C558.798 161.653 555.644 158.782 555.644 153.561V153.557Z\" fill=\"currentColor\"/>"}, "secondary": {"vb": "642 123 47 48", "svg": "<path d=\"M688.523 124.787C679.837 129.856 661.619 143.403 657.306 169.656C657.177 170.432 656.501 171 655.708 171H654.52C654.52 169.587 653.367 168.441 651.944 168.441C650.521 168.441 649.368 169.587 649.368 171C647.965 171 648.779 165.067 651.944 157.345C657.204 144.517 668.957 126.748 687.851 123.021C688.91 122.812 689.454 124.243 688.524 124.786L688.523 124.787Z\" fill=\"currentColor\"/><path d=\"M651.944 147.045V168.441C650.521 168.441 649.368 169.587 649.368 171H648.14C647.355 171 646.682 170.452 646.528 169.689L642.033 147.366C641.827 146.353 642.606 145.412 643.642 145.412H650.3C651.208 145.412 651.943 146.143 651.943 147.044L651.944 147.045Z\" fill=\"currentColor\"/>"}};
  const logo = (k, cls = '') => `<svg class="wh-logo ${cls}" viewBox="${LOGOS[k].vb}" role="img" aria-label="Wholly">${LOGOS[k].svg}</svg>`;
  // Logo denklemi: W + araba + onay = işaret (araba ve onay çizgi ikon, işaret WhollyUI'den)
  const CART = '<svg class="wh-eq__icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M5 7h5l5 23h21l5-15H13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="38" r="3" fill="currentColor"/><circle cx="33" cy="38" r="3" fill="currentColor"/></svg>';
  const CHECK = '<svg class="wh-eq__icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M8 25l10 10L40 13" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // Logo hâlleri ızgarası: tasarımdaki 2 × 2 düzen, zemin ve etiketle
  const VARIANTS = [
    { k: 'secondary', bg: 'surface' },
    { k: 'logo', bg: 'brand' },
    { k: 'wordmark', bg: 'sky' },
    { k: 'mark', bg: 'surface' },
  ];

  const brandSection = (t) => `
    <section class="wh-brand" aria-labelledby="wh-brand">
      <div class="wh-band wh-band--brand">
        <div class="wh-wrap wh-brand__intro">
          <figure class="wh-brand__photo is-hero case-reveal"><img src="${IMG}brand/brand-hero.jpg" width="1600" height="1111" alt="${t.heroAlt}" loading="lazy" decoding="async"></figure>
          <div class="case-reveal">
            <h2 id="wh-brand" class="wh-title">${t.title}</h2>
            <p class="wh-lead">${t.lead}</p>
            <p class="wh-brand__slogan" lang="en">${t.slogan}</p>
          </div>
        </div>
      </div>
      <div class="wh-band wh-band--sky">
        <div class="wh-wrap wh-brand__logo case-reveal">
          <h3 class="wh-title">${t.logoTitle}</h3>
          ${t.logo.map((p) => `<p class="wh-lead">${p}</p>`).join('')}
        </div>
      </div>
      <div class="wh-band wh-band--brand">
        <p class="wh-wrap wh-eq case-reveal" role="img" aria-label="${t.eqLabel}">
          <span class="wh-eq__w" aria-hidden="true">W</span><span class="wh-eq__op" aria-hidden="true">+</span>${CART}<span class="wh-eq__op" aria-hidden="true">+</span>${CHECK}<span class="wh-eq__op" aria-hidden="true">=</span>${logo('mark', 'wh-eq__mark')}
        </p>
      </div>
      <div class="wh-brand__light">
        <ul class="wh-wrap wh-brand__variants">
          ${VARIANTS.map((v) => `<li class="wh-variant is-${v.bg} is-${v.k} case-reveal">${logo(v.k)}<span class="wh-variant__label">${t.variants[v.k]}</span></li>`).join('')}
        </ul>
        <div class="wh-wrap wh-brand__olly">
          <div class="case-reveal">
            <h3 class="wh-title">${t.ollyTitle}</h3>
            ${t.olly.map((p) => `<p>${p}</p>`).join('')}
          </div>
          <img class="case-reveal" src="${IMG}brand/olly-pot.svg" width="566" height="467" alt="${t.ollyAlt}" loading="lazy" decoding="async">
        </div>
      </div>
      <div class="wh-band wh-band--sky">
        <div class="wh-wrap wh-brand__voice">
          <figure class="wh-brand__photo is-fridge case-reveal"><img src="${IMG}brand/brand-fridge.jpg" width="1600" height="555" alt="${t.fridgeAlt}" loading="lazy" decoding="async"></figure>
          <div class="case-reveal"><h3 class="wh-title">${t.voiceTitle}</h3><p class="wh-lead">${t.voice}</p></div>
          <div class="case-reveal"><h3 class="wh-title">${t.visualTitle}</h3><p class="wh-lead">${t.visual}</p></div>
        </div>
        ${t.note ? `<p class="wh-wrap wh-note">${t.note}</p>` : ''}
      </div>
    </section>`;

  // [[...]] notları (Sena'nın dolduracağı yer) projects.js'teki fillText ile limon not olur
  const fill = (s) => (window.fillText ? window.fillText(s) : s);

  const storySection = (t) => `
    <section class="wh-story" aria-labelledby="wh-story">
      <div class="wh-wrap wh-story__inner">
        <div class="wh-story__intro case-reveal">
          <h2 id="wh-story" class="wh-title">${t.title}</h2>
          ${t.paragraphs.map((p) => `<p class="wh-lead">${p}</p>`).join('')}
        </div>
        <div class="case-reveal">
          <h3 class="wh-title wh-story__sub">${t.stepsTitle}</h3>
          <ol class="wh-story__steps">
            ${t.steps.map((st, i) => `
              <li><span class="wh-num" aria-hidden="true">${pad(i + 1)}</span><h4 class="wh-item-title">${st.title}</h4><p>${fill(st.text)}</p></li>`).join('')}
          </ol>
        </div>
        <div class="case-reveal">
          <h3 class="wh-title wh-story__sub">${t.learnedTitle}</h3>
          <p class="wh-lead">${fill(t.learned)}</p>
        </div>
      </div>
    </section>`;

  // Kapanış: sakin tezgâh fotoğrafı; boş telefonun yerine "tarif hazır" ekranı, Behance'teki açıyla
  const closingSection = (t) => `
    <section class="wh-closing" aria-label="${t.thanks}">
      <div class="wh-closing__photo">
        <img src="${IMG}closing.jpg" width="1600" height="1122" alt="${t.photoAlt}" loading="lazy" decoding="async">
        <span class="wh-closing__screen" aria-hidden="true"><img src="${IMG}cook-3.jpg" width="420" height="760" alt="" loading="lazy" decoding="async"></span>
      </div>
      <div class="wh-closing__text case-reveal">
        <p class="wh-closing__slogan" lang="en">collect.<br>choose.<br>shop.<br>cook.</p>
        ${logo('logo', 'wh-closing__logo')}
        <p class="wh-closing__thanks">${t.thanks}</p>
        <p class="wh-closing__meta">${t.meta}</p>
      </div>
    </section>`;

  const CHECKBOX = '<span class="wh-check" aria-hidden="true"></span>';
  const MERGE_SVG = (vertical) => (vertical
    ? `<svg class="wh-merge__lines wh-merge__lines--v" viewBox="0 0 200 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 50 2 C 50 45, 100 45, 100 86 M 150 2 C 150 45, 100 45, 100 86" vector-effect="non-scaling-stroke"/>
        <path d="M 94 78 L 100 87 L 106 78" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>`
    : `<svg class="wh-merge__lines wh-merge__lines--h" width="340" height="420" viewBox="0 0 340 420" aria-hidden="true">
        <path d="M 10 105 C 170 105, 170 210, 326 210"/><path d="M 10 315 C 170 315, 170 210, 326 210"/>
        <path d="M 316 200 L 330 210 L 316 220" stroke-linejoin="round"/></svg>`);

  const shopSection = (t) => `
    <section class="wh-shop" aria-labelledby="wh-shop">
      <div class="wh-wrap wh-shop__top">
        <div class="wh-shop__intro case-reveal">
          <h2 id="wh-shop" class="wh-title wh-split__head"><span class="wh-num">03</span>${t.title}</h2>
          <p class="wh-lead">${t.lead}</p>
        </div>
        <div class="wh-merge case-reveal">
          <div class="wh-merge__recipes">
            ${MERGE.recipes.map((r, i) => `
              <div class="wh-merge__card">
                <p class="wh-merge__eyebrow">${t.recipe} ${i + 1}</p>
                <p class="wh-merge__rname" lang="en">${r.name}</p>
                <dl class="wh-merge__items" lang="en">
                  ${r.items.map(([a, n]) => `<div data-wh-ing="${n}"><dt>${a}</dt><dd>${n}</dd></div>`).join('')}
                </dl>
              </div>`).join('')}
          </div>
          ${MERGE_SVG(false)}${MERGE_SVG(true)}
          <div class="wh-merge__list">
            <p class="wh-merge__listhead"><span class="wh-merge__eyebrow">${t.list}</span><span class="wh-merge__count" aria-live="polite" data-idle="${t.count}" data-tpl="${t.inCart}">${t.count}</span></p>
            <ul lang="en">
              ${MERGE.list.map((it) => `
                <li><button type="button" class="wh-merge__row${it.merged ? ' is-merged' : ''}" data-wh-tick data-wh-ing="${it.name}" aria-pressed="false">
                  ${CHECKBOX}
                  <span class="wh-merge__name">${it.name}</span>
                  <span class="wh-merge__amt">${it.amount}</span>
                  <span class="wh-merge__meta"><span class="wh-merge__aisle">${it.aisle}</span>${it.from.map((k) => `<span>${MERGE.recipes[k].name}</span>`).join('')}</span>
                </button></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      ${splitSection('shop', t, true)}
    </section>`;

  const sections = {
    problem: (t) => `
      <section class="wh-problem" aria-labelledby="wh-problem">
        <div class="wh-band wh-band--brand">
          <div class="wh-wrap case-reveal">
            <h2 id="wh-problem" class="wh-title">${t.title}</h2>
            <p class="wh-lead">${t.lead}</p>
          </div>
        </div>
        <div class="wh-band wh-band--sky">
          <ol class="wh-wrap wh-problem__grid">
            ${t.items.map((it, i) => `
              <li class="wh-problem__item case-reveal">
                <img src="${IMG}${PHOTOS[i].src}" width="720" height="894" alt="${PHOTOS[i].alt}"
                  style="object-position: ${PHOTOS[i].pos}" loading="lazy" decoding="async">
                <span class="wh-num" aria-hidden="true">${pad(i + 1)}</span>
                <h3 class="wh-item-title">${it.title}</h3>
                <p>${it.text}</p>
              </li>`).join('')}
          </ol>
          ${t.note ? `<p class="wh-wrap wh-note">${t.note}</p>` : ''}
        </div>
      </section>`,

    works: (t) => screensSection('works', t),
    wait: (t) => screensSection('wait', t),


    collect: (t) => splitSection('collect', t),
    choose: (t) => splitSection('choose', t),
    shop: shopSection,
    cook: cookSection,
    web: webSection,
    system: systemSection,
    brand: brandSection,
    story: storySection,
    closing: closingSection,

    flow: (t) => `
      <section class="wh-flow wh-band wh-band--sky-200" aria-labelledby="wh-flow">
        <div class="wh-wrap wh-head case-reveal">
          <h2 id="wh-flow" class="wh-title">${t.title}</h2>
          <p class="wh-lead">${t.lead}</p>
        </div>
        ${t.lanes.map((lane, i) => `
          <div class="wh-flow__lane">
            <div class="wh-wrap wh-flow__inner case-reveal">
              <div class="wh-flow__head">
                <h3 class="wh-flow__name"><span class="wh-num">${pad(i + 1)}</span><span class="wh-flow__title">${lane.title}</span></h3>
              </div>
              <ol class="wh-flow__row">
                ${lane.steps.map((st, k) => flowStep(st, k === lane.steps.length - 1)).join('')}
                ${i < t.lanes.length - 1 ? `<li class="wh-flow__next">${t.next}: ${pad(i + 2)}</li>` : ''}
              </ol>
            </div>
          </div>`).join('')}
        <div class="wh-flow__lane wh-flow__lane--side">
          <div class="wh-wrap case-reveal">
            <p class="wh-flow__eyebrow">${t.sideTitle}</p>
            <ul class="wh-flow__side">
              ${t.side.map((sd) => `<li><span class="wh-flow__bt">${sd.t}</span><span class="wh-flow__bs">${sd.s}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </section>`,
  };

  // order: sayfadaki sıra. Henüz kodlanmayan bölümler projects.js'teki eski düzenle gösterilir.
  window.STORIES = window.STORIES || {};
  window.STORIES.wholly = {
    order: ['problem', 'works', 'flow', 'collect', 'choose', 'shop', 'cook', 'web', 'wait', 'system', 'brand', 'story', 'closing'],
    render(lang = window.LANG || 'tr') {
      const t = TEXT[lang] || TEXT.tr;
      return `<div class="wh" lang="${lang}">${this.order.map((k) => sections[k](t[k])).join('')}</div>`;
    },
  };
})();
