# PRD — Landing Page Affiliate Audio BrainBoost Tidur Nyenyak

**Project:** `lp-brain-boost`
**Tipe:** Landing page affiliate produk digital (audio) — traffic dari Facebook / Meta Ads
**Funnel:** Direct to checkout affiliate link
**Status:** v4.1 — PRD induk Tidur Nyenyak sebagai template monorepo, scope multi-produk lihat PLAN-MULTIPRODUK.md (05 Okt 2026). Tanpa coding.
**Bahasa:** Indonesia

---

## 1. Ringkasan Eksekutif

**Scope dokumen (aturan v4.1):** PRD ini KHUSUS `tidur-nyenyak` dan berlaku sebagai **template induk** untuk semua LP BrainBoost di monorepo. Aturan scale-up (struktur `/site/`, `_shared/`, SOP nambah produk, hub opsional) ada di `PLAN-MULTIPRODUK.md` — jangan diduplikat ke sini. PRD per produk lain (`PRD-MONEY-MAGNET.md`, `PRD-RELAXATION.md`) cukup tulis delta: H1, mekanisme, outcome, testimoni, paket Lapis A/B, harga, checkout URL.

Bangun satu landing page ringan, mobile-first, siap Meta Ads untuk produk **BrainBoost Tidur Nyenyak by Denny Santoso** — audio hypnosis + afirmasi 30-40 menit dengan binaural beats / theta wave untuk menemani rutinitas tidur.

Materi yang sudah masuk dan diverifikasi:
- `Produk Knowledge BB Tidur Nyenyak.pdf` — deskripsi, manfaat, cara kerja, FAQ, copywriting vendor
- `Gambar BB Tidur Nyenyak/` — 9 aset (hero, teknologi, cara pakai, manfaat, mockup player)
- `Testimoni/` — 4 screenshot (2 relevan tidur, 2 dari varian Money Magnet)
- `link affiliate mahir digital.png` — 2 link (INTERNAL, jangan tampilkan di LP):
  - Checkout: `https://member.mahirdigital.id/lp?aff=zulk46b08&i=30` (dipakai untuk semua CTA)
  - Default: `https://member.mahirdigital.id/lp?aff=zulk46b08&product=brainboost-tidur-nyenyak`
- `layout halaman checkout mahir digital.png` — harga resmi terverifikasi: **Rp298.000** sekali bayar. Form checkout: Nama + Email + No. WA. Produk digital dikirim ke data yang diinput. Ada kolom kode kupon. Tombol: "Buat Pesanan Rp298.000".
- Referensi benchmark struktur (bukan isi): `https://dennysantoso.id/brainboostmoneymagnet5` (LP 5 Money Magnet) — dipakai sebagai patokan urutan section, ritme problem→mekanisme→solusi→creator→outcome→testimoni badge→paket→jaminan→FAQ→final CTA. Angka proof MM (26.800+, 4.8/5, 53.700+) DILARANG dipakai mentah untuk Tidur Nyenyak (keputusan user: hanya data tidur).

LP ini BUKAN checkout. Satu-satunya konversi = klik keluar ke link checkout di atas (target _blank + UTM forwarding). Tugas LP: message-match iklan → edukasi 60 detik → bukti sosial → tutup keraguan (FAQ) → dorong checkout.

---

## 2. Product Knowledge (dari PDF vendor — diringkas, bukan dikarang)

**Apa itu:** Audio hypnosis & afirmasi 30-40 menit dipandu Denny Santoso, kombinasi:
1. Guided Relaxation (relaksasi otot + napas)
2. Binaural Affirmation (afirmasi + sugesti hypnosis)
3. Theta Wave (binaural beats untuk fase rileks sebelum tidur)

**Klaim vendor (wajib dilembutkan di LP agar lolos Meta — lihat §9):**
- Membantu tidur lebih cepat, lebih dalam, jarang terbangun
- Menenangkan sistem saraf & menghentikan pikiran aktif / overthinking
- Bangun lebih segar, mood stabil
- Cara pakai: dengarkan sebelum tidur, pakai headphone, rutin min. 21 hari, biarkan audio berjalan sampai selesai
- Analogi vendor: BB Tidur Nyenyak = "obat tidur alami", BB Relaxation = "spa untuk pikiran" → **jangan pakai kata "obat" di LP/iklan**

**Pembeda vs BB Relaxation (masukkan sebagai section komparasi singkat):**
- Tidur Nyenyak = fokus tidur (insomnia, susah tidur, sering terbangun) — cocok walau tidak stres
- Relaxation = fokus stres/anxiety/overthinking siang hari — efek samping bisa tidur lebih nyenyak
- Bisa digabung: Relaxation sore + Tidur Nyenyak malam (upsell halus, tapi CTA tetap 1 link Tidur Nyenyak di v1)

**Harga & checkout (sudah terverifikasi dari screenshot, jangan ubah tanpa konfirmasi vendor):**
- Harga: **Rp298.000** (Subtotal = Total, tidak ada ongkir — label "Total Berat: 1 Kg" di checkout abaikan, itu template default sistem).
- Sekali bayar, bukan langganan (tidak ada teks langganan di checkout).
- Garansi: tidak tertulis di screenshot — **jangan klaim garansi di LP**. Jika butuh, tulis "Detail garansi & akses mengikuti halaman resmi setelah klik tombol".
- Akses: produk digital dikirim ke Nama + Email + No. WA yang diinput di checkout (info box biru di screenshot). Di LP tulis: "Setelah pembayaran, akses dikirim ke email/WA yang kamu isi di halaman resmi."
- Kode kupon ada kolomnya di checkout — di LP jangan janjikan diskon/kupon, cukup tulis "Punya kode kupon? Bisa dimasukkan di halaman pembayaran."
- [INTERNAL ONLY, JANGAN RENDER DI LP] Komisi 25% = Rp74.500/sale → untuk hitung target ROAS internal: BEP CPA ≈ Rp74.500. Angka ini tidak boleh muncul di copy, footer, FAQ, atau README publik.

---

## 3. Audit Aset Visual (9 file di `Gambar BB Tidur Nyenyak/`)

Branding konsisten: ungu lavender (#A9A6F5-ish), putih, ikon line. Aman untuk Meta (tidak ada dokter/pil/jarum).

| File | Isi | Rekomendasi pakai |
|---|---|---|
| `18.jpg` | Cover "BrainBoost Tidur Nyenyak" + ilustrasi headphone | **Hero utama** (potrait, cocok mobile) |
| `Thumbnail Tribeversity (3).png` | Sama seperti 18 tapi crop vertikal bersih | Alternatif hero / OG image |
| `TIDUR NYENYAK MOCKUP.png` + `LP (4).png` | Mockup player 3D "Denny Santoso - Popular" | Section "Apa yang didapat" (bukti produk digital) |
| `19.jpg` | Teknologi: Guided Relaxation + Binaural Affirmation + Theta Wave | Section "Cara kerja" (jangan dipecah, tampil utuh) |
| `20.jpg` | Cara penggunaan: Sebelum Tidur / Bangun Tidur / Anytime | Section "Cara pakai" |
| `21.jpg` + `22.jpg` | Cara kerja BrainBoost 1-5 (bawah sadar → theta → reprogram) | Ringkas jadi 3 langkah, jangan tampilkan 2 gambar panjang sekaligus (berat + teks kecil di HP) — pakai sebagai accordion/teks ulang |
| `23.jpg` | 5 Manfaat: overthinking, tidur cepat, stres, segar, mood stabil | Section "Manfaat" (tampilkan utuh atau remake jadi grid agar SEO/readable) |

Aturan optimasi: konversi semua ke WebP max 1200px, hero <150KB, lainnya <100KB, `width/height` eksplisit, lazy kecuali hero.

---

## 4. Audit Testimoni (4 file di `Testimoni/` — PENTING)

| File | Isi asli | Status untuk LP Tidur Nyenyak |
|---|---|---|
| `Emotion 29.jpeg` — Lisa Untari | "baru kmrn malam beli... sebelum tidur langsung dengerin, baru dapat 1/2 langsung ketiduran... paginya mood lumayan happy, ke anak nggak marah-marah" | **Pakai utama (P1).** Paling relevan: proof tidur cepat + mood pagi. |
| `Emotion 28.jpeg` — Tikno Setijadi | "mendengarkan sambil tiduran... benar merasa ada perasaan tenang di hati... sudah set keinginan sebelum mendengarkan" | **Pakai (P2).** Proof rileks + ritual malam. |
| `Emotion 04 (1).jpeg` — Listy Tia | Grup Money Magnet, "baru denger 1 malam... pikiran jadi lebih enteng" | **Pakai sebagai brand proof (P3) dengan label jujur "BrainBoost series"** — jangan klaim sebagai Tidur Nyenyak. |
| `Emotion 07 (2).jpeg` — Renz | Grup Money Magnet, gerd + obat nexium/rantin, "akhirnya bisa tidur nyenyak sampai pagi" | **JANGAN tampilkan sebagai gambar / jangan kutip obat.** Menyebut penyakit + nama obat = auto-reject Meta + risiko kesehatan. Boleh parafrase aman: "setelah rutinitas malam lebih tenang, akhirnya bisa tidur sampai pagi — Renz*" dengan disclaimer, atau simpan untuk funnel WA, bukan LP publik v1. |

Keputusan: LP v1 tampilkan 3 testimoni (Lisa, Tikno, Listy). Blur nomor/nama lengkap, tampilkan inisial + kota jika ada. Tambahkan disclaimer "Hasil tiap orang bisa berbeda."

---

## 5. Target Audiens Final (berdasarkan materi, bukan tebakan)

### Persona primer: "Overthinker Lelah" (35-45 tahun, dominan perempuan + karyawan)
- Masalah (dari PDF): badan lelah tapi pikiran aktif, sering terbangun, bangun tetap capek, sudah coba susu/matikan lampu tapi gagal
- Bahasa mereka (dari testimoni): "pikiran muter", "langsung ketiduran", "mood happy pagi", "nggak marah-marah ke anak"
- Motivasi: ingin ritual malam simpel (play audio), tanpa obat, tanpa belajar meditasi
- Keberatan: "masa cuma dengerin audio bisa tidur?", "saya gaptek", "berapa lama efeknya?"

### Persona sekunder
1. **Ibu 30-45 / sandwich generation:** tidur terpotong, emosi pagi tidak stabil → angle "bangun lebih segar, pagi tidak gampang emosi"
2. **Pekerja shift / kreator / mahasiswa:** jam tidur berantakan → angle "reset rutinitas malam"
3. **Penikmat self-growth Denny Santoso:** sudah kenal Tribeversity → angle otoritas kreator

### Targeting Meta yang disarankan (untuk referensi pengiklan)
- Usia 28-50, wanita + pria, minat: insomnia, meditasi, self improvement, Denny Santoso, Tribeversity, kesehatan tidur
- Placement: Feed + Reels + Stories (9:16 crop dari 18.jpg)
- Hindari targeting + copy yang menyebut atribut personal ("Kamu insomnia?") di level iklan

---

## 6. Proposisi Nilai & Angle (v4.0 mirror Money Magnet — dipoles copywriting + humanizer)

Prinsip: struktur ikut MM 1:1, isi 100% tidur. Jelas > pintar. Bahasa testimoni > bahasa vendor. Satu section satu ide.

**Mekanisme tunggal (pengganti "filter invisible / RAS" versi tidur): "Pintu Waspada yang Kekunci".**
> Siang otak mode waspada itu bagus. Malam harusnya turun ke mode istirahat (theta). Masalahnya: pikiran masih siaga — notif, cicilan, omongan orang ikut naik ke kasur. BrainBoost nemenin nurunin mode itu. Bukan disuruh lupa masalah. Cuma dibantu rileks dulu, biar ngantuk datang sendiri.
Larangan: jangan sebut RAS menolak rezeki, jangan bawa uang/rezeki ke LP tidur, jangan sebut "menyembuhkan insomnia".

**H1 hero — 3 opsi mirror MM (pilih 2 untuk A/B):**
- Opsi A (mirror MM paling dekat, recommended cold traffic): "Peluang Tidur Nyenyak Ada Tiap Malam. Tapi Ada yang Terus Nolak — Tanpa Kamu Sadari." — *Rationale: struktur kalimat MM, ganti objek rezeki→tidur. Stop-scroll + rasa "ini gue".*
- Opsi B (hasil pagi, proof Lisa): "Malam Lebih Tenang, Pagi Nggak Gampang Emosi" — *Rationale: benefit spesifik pagi, kuat untuk ibu 30-45, aman Meta.*
- Opsi C (fungsional retargeting): "Audio 30 Menit Sebelum Tidur, Dipandu Sampai Rileks" — *Rationale: jawab skeptis "masa cuma audio?", kasih durasi + dipandu.*

Subheadline (1 saja, nada teman):
> "BrainBoost Tidur Nyenyak itu audio panduan 30-40 menit dari Denny Santoso. Kamu tinggal rebahan, pakai headphone, pencet play. Nggak perlu bisa meditasi. Nggak usah dipaksa fokus — biarin aja kebawa sampai ketiduran."

**3 teknologi numbered persis MM (jangan diubah urutannya):**
1. Guided Relaxation — badan & napas dituntun rileks total, pintu waspada mulai turun.
2. Binaural Affirmation — afirmasi dua layer masuk saat logika sudah lelah nolak.
3. Theta Wave — gelombang theta, zona paling reseptif persis sebelum tidur.

**CTA copy kunci v4.0 (satu label untuk semua tombol, ikut MM "Buka Filter Sekarang"):**
- Primer: "Buka Pintu Tidur Sekarang — Rp298.000"
- Sekunder (di bawah harga): sama, jangan bikin varian "Dapatkan/Claim/Klaim".
- Sticky mobile: "Mau Tidur Lebih Nyenyak Malam Ini?"
- Microcopy: "Rp298.000 · Bayar sekali · Isi Nama+Email+WA di halaman resmi · Akses dikirim ke email/WA kamu"

**Angle testing (satu angle = satu ad set):**
1. Pintu kekunci malam → visual 18.jpg + H1 A
2. Mood pagi ibu → kutipan Lisa + H1 B
3. Ritual simpel → visual 20.jpg + H1 C. Jangan sebut "tanpa obat" di iklan, pakai di LP saja.

---

## 7. User Flow & Funnel (direct checkout)

```
Meta Ads (foto 18.jpg / mockup) → LP (/) → CTA → https://member.mahirdigital.id/lp?aff=zulk46b08&i=30 + UTM (tab baru) → checkout vendor → beli
```

- Tidak ada form/cart di LP. Semua CTA (`hero|manfaat|cara|testimoni|faq|final|sticky`) ke URL checkout yang sama.
- JS wajib teruskan UTM iklan ke checkout: `utm_source=facebook&utm_medium=cpc&utm_campaign={...}&utm_content={...}&utm_term={angle}`
- `rel="nofollow sponsored noopener"`, `target="_blank"`
- Sticky bottom CTA muncul setelah 50% scroll (mobile), sembunyi saat final CTA terlihat.

---

## 8. Struktur Landing Page (v4.0 mirror MM — 13 section, urutan dikunci)

1. **Announcement tipis:** "Audio panduan tidur • Denny Santoso • Play dari HP"
2. **Hero (mirror MM):** eyebrow "BrainBoost Tidur Nyenyak" + H1 (A/B/C §6) + sub + visual 18.jpg + CTA primer "Buka Pintu Tidur Sekarang — Rp298.000" + microcopy "Rp298.000 · Bayar sekali · Akses dikirim ke email/WA" + proof tidur saja (kutipan Lisa mini, TANPA angka 26.800+/4.8/5 MM)
3. **Problem 5x ✕ (mirror MM "Pernahkah Kamu Mengalami Ini?"):** "Mata merem, pikiran jalan terus" / "Kebangun jam 2-3 pagi, susah merem lagi" / "Ada cara bagus (susu/lampu/musik) tapi tetap melek" / "Bangun jam 6 tapi badan kayak nggak istirahat" / "Pagi gampang kepancing emosi ke anak/pasangan". Tutup: "Ini bukan kurang usaha. Ini pola — mode waspada kebawa ke kasur."
4. **Mekanisme "Pintu Waspada" (pengganti RAS MM):** analogi pintu gerbang mode waspada→istirahat, solusi bukan begadang dikurangi doang tapi turunkan modenya. Visual dukung: 21.jpg+22.jpg diringkas teks (jangan tampil 2 gambar panjang utuh di mobile).
5. **Solusi 3 teknologi numbered (19.jpg, urutan MM):** 1 Guided Relaxation / 2 Binaural Affirmation / 3 Theta Wave + kalimat "bekerja bersamaan tiap malam, tanpa effort".
6. **Creator Denny Santoso (mirror MM, tanpa angka liar):** foto/inisial + "Dipandu Denny Santoso — praktisi NLP & founder Tribeversity". DILARANG tulis 20 tahun / 53.700+ / 26.800+ kecuali vendor kirim bukti tertulis Tidur Nyenyak.
7. **Outcome "Apa yang berubah" 5x ✓ (bahasa lunak):** pikiran muter pelan reda / lebih gampang merem / badan & napas ikut rileks / bangun berasa lebih enteng / pagi lebih stabil. Tanpa janji tanggal pasti.
8. **Testimoni 3 + badge (mirror MM):** Lisa + badge "Ketiduran di setengah audio" / Tikno + badge "Tenang di hati malam pertama" / Listy + badge "Pikiran lebih enteng" + label jujur "BrainBoost series" untuk Listy. Disclaimer hasil beda-beda. Renz tetap pending.
9. **Paket — 2 lapis (keputusan user: samakan MM, dengan guardrail):** Lapis A (VERIFIED, selalu tampil): audio 30-40 menit + panduan 21 hari + akses via email/WA. Lapis B [ASUMSI, HAPUS JIKA VENDOR MENOLAK]: 26 video lesson + journals + worksheet + vision board + komunitas + akses selamanya (copy dari MM). Di PRD dan build, Lapis B wajib dibungkus komentar `<!-- ASUMSI-MM -->` agar gampang dicabut. Dilarang klaim Lapis B di iklan sebelum verifikasi.
10. **Jaminan 3 kartu (mirror MM, nada lunak):** Akses fleksibel (tanpa klaim "selamanya" kecuali vendor setuju) / Hasil bertahap "Minggu 1: biasanya berasa lebih tenang → Minggu 2-4: pola malam lebih konsisten" (bukan janji) / Cara pakai tenang (headphone, rebahan, boleh ketiduran).
11. **Harga Rp298.000 mirror MM:** kartu "BrainBoost Tidur Nyenyak — Rp298.000 sekali bayar" + CTA sama persis "Buka Pintu Tidur Sekarang — Rp298.000" + "Akses via Tribeversity/halaman resmi setelah pembayaran" (ikut bahasa MM, sesuaikan jika vendor koreksi).
12. **FAQ (mirror MM 5 + 2 tidur):** cara pakai? / berapa lama efek? / apakah hipnosis? (jawab: bukan, bisa berhenti kapan saja) / akses setelah bayar? / biaya tambahan? (jawab: tidak, sekali bayar) + "Ini obat?" (bukan) + "Bedanya vs Relaxation?" (tabel PDF).
13. **Final CTA + footer trust-first:** H1 mini "Pintunya Sudah Ada. Tinggal Dibuka Malam Ini." + tombol sama + "*Hasil tiap orang beda. Bukan pengganti saran medis." + footer TANPA komisi/affiliate (lihat §9).

---

## 9. Copy & Compliance Meta (aturan keras)

BOLEH: "membantu", "menemani", "dirancang untuk mendukung rutinitas tidur", "banyak pendengar merasa lebih rileks".
DILARANG di LP & iklan: "mengatasi/menyembuhkan insomnia", "obat tidur alami", nama penyakit + nama obat (nexium/gerd/mag), "dijamin", "100% berhasil", before-after ekstrem, countdown/stok palsu, kata "Official" (kamu affiliate), logo Facebook/Meta.
DILARANG KERAS di LP (aturan trust v3.2): kata "komisi", "affiliate", "aff=", "25%", "dropship", "makelar", atau kalimat "kami dapat komisi jika Anda membeli". Semua info komisi hanya untuk kalkulasi internal pengiklan.
DILARANG pakai angka MM untuk Tidur Nyenyak (aturan v4.0): "26.800+ pengguna", "4.8/5", "91.7% bintang 5", "53.700+ orang", "akses selamanya", "26 video/jurnal/komunitas" — kecuali ada bukti tertulis vendor khusus Tidur Nyenyak. Lapis B paket wajib berlabel ASUMSI dan gampang dicabut.
Testimoni Renz wajib disensor/dipending (lihat §4).
Wajib footer (trust-first, tanpa komisi): "Halaman ini dikelola oleh tim pemasaran BrainBoost Indonesia sebagai mitra edukasi produk. Pembayaran & pengiriman akses diproses di halaman resmi Mahir Digital. Produk berupa audio relaksasi dan bukan pengganti saran medis. Jika gangguan tidur berat, konsultasikan ke profesional."

---

## 10. Design & Tech — Frontend / Backend / Techstack (rekomendasi final + anti-AI-slop)

**Design Read:** Reading this as: affiliate wellness landing for overthinker lelah 28-50th (trust-first, health-adjacent), with a calm-night language, leaning toward native CSS + single-file static + restrained motion.
**Dials:** `DESIGN_VARIANCE: 4 / MOTION_INTENSITY: 3 / VISUAL_DENSITY: 4` — tenang & terpercaya, bukan Awwwards eksperimental. Alasan: audiens stres/tidur butuh rasa aman, bukan stimulasi visual. Motion di atas 3 wajib hormati `prefers-reduced-motion`.

### 10.1 Keputusan arsitektur (ringkas)
- **Frontend: statis single-file (RECOMMENDED untuk v1).** `index.html` + `styles.css` (native CSS, bukan Tailwind CDN runtime) + `app.js` vanilla (<50KB JS) + `config.js`. Total <400KB. Alasan: LCP <2.5s di HP Android 4G, lolos review Meta (tidak ada redirect aneh), murah & gampang dipindah host.
- **Alternatif yang DITOLAK untuk v1:** Next.js/React SPA (`output: 'export'` memang bisa hasilkan `out/` statis per Context7, tapi overkill untuk 1 LP — bundle React + hydration hanya untuk tampilkan teks + gambar = buang 80-150KB), WordPress/Elementor (berat, plugin rentan, CLS jebol, Pixel double-fire), page-builder gratisan (domain mencurigakan = trust turun + risiko reject BM).
- **Naik ke Next.js static export HANYA jika:** sudah punya 3+ varian LP + butuh A/B routing + i18n. Caranya (Context7 `/vercel/next.js`): `next.config.js → { output: 'export' }` → `next build` → folder `out/` di-host statis. Tidak ada server Node dibutuhkan.
- **Backend: TIDAK ADA (by design).** Tidak ada DB, login, cart, payment. Checkout, payment, pengiriman akses 100% di sistem Mahir Digital. LP hanya forward ke `CHECKOUT_URL` + UTM. Satu-satunya "backend" fase 2: serverless endpoint (Cloudflare Worker / Vercel Edge) untuk Meta CAPI + deduplikasi `event_id` — bukan untuk v1.

### 10.2 Frontend detail (anti-slop, ikut skill design-taste)
- **Layout:** hero split kiri-teks / kanan-visual `18.jpg` di desktop, stack tunggal di <768px. Larang: hero centered + 3 kartu equal + mesh-gradient ungu + glassmorphism di semua kartu. Ungu dipakai karena brand asli (override LILA RULE dengan intent), bukan default AI: bg utama navy `#2E2B5E`, kartu `#EDEBFF`, teks `#1B1830`, **satu aksen CTA dikunci**: amber `#FFB020` (kontras AA di navy) — jangan campur hijau/biru di section lain.
- **Shape lock:** radius 16px untuk kartu, pill penuh untuk tombol, 8px untuk input (jika ada). Jangan campur.
- **Eyebrow restraint:** max 1 eyebrow per 3 section. Hero memakai "BrainBoost Tidur Nyenyak" (dikunci ikut §8.2), section lain tanpa eyebrow — langsung headline.
- **Section rhythm:** variasi keluarga layout (split → full-width quote Lisa → grid manfaat → accordion cara kerja → tabel vs → kartu testimoni). Larang zigzag image-teks 3x berturut-turut dan bento kosong.
- **Tipografi:** Plus Jakarta Sans self-host `@font-face + font-display: swap` (1 font, 2 weight: 500/700). Larang Inter-default & serif display (Fraunces/Instrument = AI tell). H1 `28-34px` mobile, `40-52px` desktop, max 2 baris. Body `16px, max-w 65ch`. Italic hanya untuk penekanan kata yang sama font, jaga `leading 1.1 + pb-1` bila ada descender (y/g/j).
- **Ikon:** satu family `@phosphor-icons` (moon, headphones, sparkle). Larang emoji di UI + larang hand-draw SVG ilustrasi. Visual wajib foto/aset asli vendor (9 file), bukan div fake-screenshot. Testimoni max 3 baris + nama + label jujur.
- **Motion:** hanya `transform/opacity`, `ease [0.16,1,0.3,1] 0.6s`, reveal-on-scroll ringan via IntersectionObserver (bukan `window.scroll` listener). Sticky CTA pakai `transform translate`, bukan `top` animation. Semua motion mati total di `prefers-reduced-motion: reduce`.
- **A11y & stabilitas:** `min-h-[100dvh]` bukan `h-screen`, Grid bukan flex-math, `width/height` eksplisit di semua `<img>` (CLS <0.1), CTA 1 baris, satu label CTA dikunci v4.0: "Buka Pintu Tidur Sekarang — Rp298.000" dipakai di semua tombol (hero/paket/final/sticky).

### 10.3 Styling approach (Context7 Tailwind learning)
- Mobile-first seperti dokumentasi Tailwind (`/websites/tailwindcss`): tulis base mobile dulu, tambah `md:` untuk desktop. Tapi untuk v1 **jangan pakai Tailwind Play CDN** (runtime JIT ~100KB+, render-blocking). Pilih: (A) native CSS + variables (recommended, paling ringan), atau (B) Tailwind v4 CLI build (`@import "tailwindcss"`, purge otomatis → CSS final <20KB). Jangan campur keduanya.
- Breakpoints kunci: `640 / 768 / 1024`. Container `max-w-[720px]` mobile content, `max-w-[1120px]` desktop wrapper.

### 10.4 Tracking, config & hosting
- `config.js`: `PIXEL_ID=""` (placeholder), `CHECKOUT_URL=https://member.mahirdigital.id/lp?aff=zulk46b08&i=30`, `PRICE=298000`. `COMMISSION` hanya di catatan internal pengiklan (spreadsheet ads), JANGAN masuk ke `config.js` yang terkirim ke browser / JANGAN render di HTML. Jangan hardcode di HTML.
- Events: `PageView` → `ViewContent` (hero `IntersectionObserver`, `value: 298000 IDR`) → `AffiliateClick` + `InitiateCheckout` (semua CTA, kirim `content_name`, `value`, `utm_*`, `data-cta`, `event_id` untuk CAPI nanti).
- Hosting: Cloudflare Pages (recommended: gratis, edge cepat ID, gampang custom domain) / Netlify / Vercel Static. Wajib: domain sendiri + HTTPS + verifikasi domain di BM + halaman `/privacy.html` + cookie banner mini (UU PDP).
- Struktur file v1: `/index.html /styles.css /app.js /config.js /privacy.html /assets/*.webp /README.md`.
- Budget & DoD tech: PageSpeed mobile ≥85, LCP <2.5s, INP <200ms, CLS <0.1, JS <50KB, CSS <30KB, hero WebP <150KB, A/B `?h=1|2|3` via JS swap + `utm_term`.

---

## 11. Acceptance Criteria

- [ ] Struktur §8 v4.0 13 section mirror MM lengkap, testimoni ada badge, paket Lapis B berlabel ASUMSI-MM
- [ ] Tidak ada angka MM liar (26.800+/53.700+/4.8/5) di copy Tidur Nyenyak
- [ ] Semua CTA ke checkout `aff=zulk46b08&i=30` + UTM forwarding terbukti (klik uji)
- [ ] Pixel PageView/ViewContent/AffiliateClick terbaca di Test Events
- [ ] 9 aset tampil tajam tapi ringan (WebP), testimoni blur data pribadi
- [ ] Footer legal trust-first + Privacy + disclaimer kesehatan ada, TANPA kata komisi/affiliate/aff=
- [ ] View-source LP tidak mengandung string "komisi", "COMMISSION", "aff=zulk" terlihat (aff hanya di href checkout, idealnya disamarkan via redirect `/lanjut/`)
- [ ] Harga di LP persis Rp298.000 dan copy pengiriman akses (email/WA) match dengan screenshot checkout
- [ ] LCP <2.5s, tidak ada klaim garansi/diskon ngarang
- [ ] README: cara ganti PIXEL_ID, cara deploy, cara tambah varian headline

---

## 12. Next: Siap Build (putusan user 29 Sep – 04 Okt 2026)

Keputusan yang sudah dikunci (jangan tanya ulang saat build):
1. `PIXEL_ID` = placeholder dulu (`config.js` kosong, tinggal tempel nanti)
2. Testimoni Renz di-pending (demi keamanan akun iklan) — LP hanya pakai Lisa, Tikno, Listy
3. Harga = Rp298.000 terverifikasi dari `layout halaman checkout mahir digital.png` — LP mirror 1:1, tanpa klaim garansi/diskon tambahan
4. Build `index.html` DITAHAN dulu sesuai instruksi user 30 Sep 2026 — fokus saat ini hanya PRD. Jangan eksekusi coding LP sampai ada perintah eksplisit "bangun LP".
5. Trust rule v3.2 (30 Sep 2026): LP tampil sebagai brand/mitra resmi, bukan lapak affiliate. Larang tampilkan komisi 25% / kata affiliate-berkomisi di copy mana pun. Komisi hanya untuk hitung BEP internal.
6. Mirror rule v4.0 (04 Okt 2026): struktur ikut `dennysantoso.id/brainboostmoneymagnet5` 1:1; angka proof hanya data tidur; paket samakan MM dengan label ASUMSI (siap cabut); tambah creator + timeline lunak + 3 jaminan.
7. Monorepo rule v4.1 (05 Okt 2026): PRD ini template induk. Dilarang coding (`index.html`/`styles.css`/`app.js`) sampai ada perintah eksplisit. Perubahan hanya di `PRD.md` + `PLAN-MULTIPRODUK.md`.
8. Deviasi terkunci (audit 05 Okt 2026, disetujui user — berlaku sebagai bagian PRD sampai direvisi): (a) sub hero + closing problem memakai titik, bukan em-dash (aturan humanizer); (b) redaksi akses memakai "Mahir Digital" (ikut screenshot checkout terverifikasi, bukan "Tribeversity"); (c) eyebrow hero dikunci ikut §8.2 ("BrainBoost Tidur Nyenyak"), menggantikan contoh lama di §10.2.

*Referensi file: `Produk Knowledge BB Tidur Nyenyak.pdf`, `Gambar BB Tidur Nyenyak/18-23.jpg + 3 PNG`, `Testimoni/Emotion*.jpeg`, `link affiliate mahir digital.png`, `layout halaman checkout mahir digital.png`, benchmark: `https://dennysantoso.id/brainboostmoneymagnet5`.*
