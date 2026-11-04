# Yayın notu

Site **Netlify**'da yayında: proje adı `senadelikan`, takım `sdelikan12's team` (Personal plan, 4 Kasım 2026).
Eski proje `senadelikan-eski` (ücretsiz takım) yedek olarak duruyor; alan adı üzerinde değil.

## Güncelleme akışı

1. `/Users/mac/Projects/portfolio-website/prototypes/v2-a24` içinde düzenle.
2. rsync ile bu depoya kopyala.
3. `git commit` + `git push origin main`.
4. Netlify push'u görür, 1–2 dakikada yayınlar. Ücretli planda yayın sınırı yok.

## Alan adı / DNS (Wix'te)

- `＠` A kaydı → `75.2.60.5` (Netlify)
- `www` CNAME → `senadelikan.netlify.app`
- `tr` CNAME → `cdn3.wixdns.net` (Wix'in kendi kaydı, dokunma)

Wix'teki kırmızı "domain points outside Wix" uyarısı normal; "Tekrar Dene"ye basma.
Netlify'da "Force HTTPS" açık; http → https yönlendirmesi otomatik.

## GitHub Pages denemesi (2–3 Kasım 2026)

Pages açıldı ama GitHub özel alan adı için sertifika üretmedi; geri dönüldü.
Pages kapatıldı, `CNAME` dosyası kaldırıldı.
