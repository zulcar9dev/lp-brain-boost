# PRD-MONEY-MAGNET (mini, delta dari PRD induk)

**Referensi induk:** `PRD.md` v4.1 (Tidur Nyenyak = template). File ini hanya delta Money Magnet. Struktur 13 section, tech statis, trust-first ikut induk.
**Status:** v1.1 applied 06 Okt 2026. Visual mobile + copy simpel + hybrid hijau-krem live. Perubahan di bawah mengikat.

## 1. Delta kunci
- **Produk:** BrainBoost Money Magnet by Denny Santoso. Audio malam 30-40 menit + 3 bagian (Rileks dipandu, Afirmasi lapis dua, Gelombang tenang). Istilah teknis Guided/Binaural/Theta hanya di paket, body pakai bahasa simpel.
- **Audiens:** campuran karyawan 28-45 + UMKM/freelance + ibu produktif 30-50. Benang merah: selalu hampir. Tone: teman sopan (kamu, nggak, rebahan, pencet play).
- **Mekanisme:** Filter rezeki / RAS. Bukan Pintu Waspada (Tidur).
- **Checkout:** `https://member.mahirdigital.id/lp?aff=zulk46b0&i=11` (beda dari Tidur `aff=zulk46b08&i=30`).
- **Harga:** Rp298.000 sekali bayar. Mirror LP5.
- **Pixel:** PIXEL_ID_MAGNET sendiri. Jangan gabung Tidur. `content_name: money-magnet`.
- **UTM:** `utm_campaign=magnet_{angle}` contoh `magnet_filter_cold1`.
- **Klaim:** lunak aman Meta. BOLEH: membantu, menemani, banyak yang merasa. DILARANG: dijamin kaya, pasti closing, nominal bombastis di headline, before-after ekstrem, countdown palsu, kata Official, timeline pasti Minggu1/2/Bulan1.

## 2. Copy dikunci (v1.1 simpel)
- **H1 A (default cold):** Peluang Sudah Datang Berkali-kali. Tapi Ada yang Terus Nolak Tanpa Kamu Sadari.
- **H1 B (warm):** Sudah Usaha Keras, Tapi Hasil Selalu Hampir.
- **H1 C (retargeting):** Audio Malam 30 Menit Untuk Reset Filter Rezeki.
- **Sub:** BrainBoost Money Magnet itu audio malam dari Denny Santoso. Kamu tinggal rebahan, pakai headphone, pencet play. Nggak perlu bisa meditasi. Boleh kebawa sampai ketiduran. Biar filternya yang kerja.
- **CTA semua tombol (label sama, render 2 baris mobile):** Baris1 Buka Filter Sekarang / Baris2 Rp298.000. Desktop 1 baris. Sticky: Mau Buka Filter Malam Ini?
- **Proof hero (verified MM):** 26.800+ pengguna, 4.8/5, 91.7% bintang 5.
- **Revisi v1.1:** Problem gaji numpang lewat/PHP/diambil orang/nunda; Mekanisme Otakmu punya filter rezeki; Solusi Dibetulkan sambil tidur; Outcome Peluang kelihatan/Berani eksekusi/Orderan balik/Tenang/Tidur nyenyak; Cara Putar lagu + Jujur bukan hipnosis panggung; Jaminan Akses selamanya/Hasil bertahap lunak/Penyusun jelas (tanpa 53.700+/timeline pasti); Harga Bayar sekali pakai selamanya; FAQ + Final Mulai malam ini. Rebahan, putar, tidur. Creator role Founder Tribeversity (bukan Tribelio).

## 3. Paket full (VERIFIED, tanpa label ASUMSI)
Audio BrainBoost Money Magnet + Theta Attraction Course 26 video + Money Magnet Journal + Abundance Journal + Self Analytic Worksheet + Happy Spending Journal + Vision Board Guidance + Komunitas + Akses Selamanya.

## 4. Testimoni (mix LP5 + baru, lunak, display v1.1)
1. Rahmat Hadi — Dengerin 5 hari, orderan proyek mulai ada sampai sekarang. Badge: Filter terbuka hari ke-5.
2. Adrian Luis, Distributor Alat Pancing — Baru semalam beli. Pagi ini klien lama tiba-tiba order. Badge: Hasil hari pertama.
3. Admin J.D.A. Official (materi tanpa logo 2.jpeg) — 3 hari dengerin tiap mau tidur. Berasa lebih nyaman, nggak takut kurang. Badge: Perasaan lebih nyaman.
- Display: teks max 3 baris, badge selalu di bawah nama (flex column mobile), image `height:200px;object-fit:cover;object-position:top`.
- Pendukung (tidak di hero): Angelina Sinaga (orderan lama + baru datang memberi pekerjaan). Hindari nominal besar di headline.
- Disclaimer wajib: Hasil tiap orang bisa berbeda. Nama disingkat untuk privasi.

## 5. Aset publish (`site/money-magnet/assets/`)
- `hero-money-magnet.webp` 80KB (LP Launching 01, Denny tunjuk, portrait) — hero + OG. Keputusan v1.1: tampil utuh tanpa crop teks (mobile `aspect-ratio:auto;object-fit:contain`). Visual-cap disingkat: Audio malam • Rileks + Afirmasi + Gelombang tenang. Caption lebar ngikut gambar (`max-width:420px`, center, balance).
- `mockup-player.webp` 44KB (Banner audio BBMM) — section solusi.
- `problem-capek.webp` 57KB (Carousel 1/1) — pendukung problem, bukan hero.
- `testi-nyaman.webp` 35KB + `testi-order.webp` 27KB — testimoni, blur WA.
- Tech list single numbering (ol bawaan, tanpa prefix 1./2./3. manual).
- Video MP4 + X trending TIDAK diembed di LP (berat). Untuk iklan saja.
- Budget: hero <150KB, lain <100KB, width/height eksplisit, lazy kecuali hero.

## 6. Desain nuansa Money hybrid hijau-krem v1.1 (override hemat)
Reuse `../_shared/styles.css`. Override di `<style>` halaman: `--navy:#1E4D1A;--navy-2:#12300F;--card:#FFF6DE;--bg:#FFFBEB;--line:#EADFB8;--gold:#C9A227;--cta:#FFD400;--cta-ink:#1A2E05`. Hero/final/sticky/masalah hijau forest selaras foto iklan, tengah krem bersih. Eyebrow kuning + teks hijau tua. Hero sub/micro/caption `#EDF3DF/#D9E6C5`. Sticky `rgba(18,48,15,.96)`. Footer/cookie `#0F250E`. CTA kuning + border halus + shadow kuning. Radius 16/pill/8. Font Plus Jakarta Sans 500/700. Eyebrow hanya hero, center mobile. Ikon phosphor. Motion transform/opacity + reduced-motion.
Mobile <768px: btn 2 baris full-width center; hero `display:contents` order H1>sub>CTA>visual>proof, gap 12px, H1/sub/micro center; solusi teks dulu visual sesudah; H2 + close + lede + disclaimer + micro CTA center, list/quote pendek tetap kiri; tcard + jcard + grid5 + lapis judul center, ul tetap kiri; sticky compact + cookie `bottom:118px` + footer `150px`.

## 7. Acceptance (v1.1)
- [ ] 13 section mirror LP5, CTA semua ke i=11 + UTM, render 2 baris mobile label sama
- [ ] Harga Rp298.000 konsisten, akses dikirim ke email/WA, footer hijau tua trust-first + privacy + disclaimer finansial
- [ ] Pixel magnet terpisah terbaca PageView/ViewContent/InitiateCheckout/AffiliateClick
- [ ] View-source bersih komisi/aff, tanpa klaim pasti/timeline pasti
- [ ] Mobile 414px: eyebrow/H1/micro center, tombol full-width tidak kepotong, sticky compact tidak nutup, badge selalu di bawah, lapis judul center, hero caption ngikut lebar gambar
- [ ] LCP <2.5s, PageSpeed mobile >=85
