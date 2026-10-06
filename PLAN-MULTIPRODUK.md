# Plan Scale-Up: Dari 1 LP Tidur Nyenyak → Monorepo Semua Produk BrainBoost

**Keputusan user (04 Okt 2026):** semua varian BrainBoost • monorepo 1 project • direct per produk • output: plan + contoh struktur folder
**Aturan tetap:** jangan build LP (`index.html`) dulu. Dokumen ini hanya rencana + struktur. Eksekusi coding menunggu perintah eksplisit.
**Bahasa:** Indonesia santai, langkah konkret.

---

## 1. Intinya dulu (biar nggak salah arah)

- **Satu produk = satu LP.** Iklan Magnet → LP Magnet → checkout Magnet. Iklan Tidur → LP Tidur → checkout Tidur. Jangan campur dalam satu halaman panjang. Kalau dicampur, message-match hancur, Meta bingung, CVR turun.
- **Satu project, banyak folder (monorepo).** Project tetap `lp-brain-boost`. Tiap produk tinggal tambah 1 folder. Template, warna, tombol, Pixel dipakai bareng. Ubah footer sekali, semua LP ikut rapi.
- **Funnel tetap direct.** Tidak ada keranjang belanja di project kita. Semua tombol keluar ke checkout Mahir Digital masing-masing produk + UTM.
- **Trust-first tetap jalan.** Kata komisi/affiliate/aff= dilarang tampil di LP mana pun. Komisi hanya angka internal di spreadsheet iklan.

Kenapa bukan project terpisah per produk? Karena capek: update Pixel harus buka 3 repo, warna bisa beda-beda, bug footer harus betulin 3 kali. Monorepo = betulin sekali, rapi semua.

---

## 2. Struktur folder yang disarankan (copy-paste ready)

```
/lp-brain-boost/
  PRD.md (induk Tidur Nyenyak v4.0 — tetap di sini)
  PLAN-MULTIPRODUK.md (file ini)
  /materi/ (arsip mentah vendor, jangan diupload ke hosting)
    /tidur-nyenyak/ (pindahan dari folder lama)
    /money-magnet/ (baru — taruh PDF/foto/testimoni MM di sini)
    /relaxation/ (baru — menyusul)
  /site/ (ini yang diupload ke Cloudflare/Netlify — hanya file web)
    /_shared/
      styles.css (1 file CSS untuk semua LP)
      app.js (Pixel + UTM + sticky CTA + FAQ accordion)
      config.js (PIXEL_ID + mapping checkout per produk)
      header.html (snippet, di-include manual)
      footer.html (trust-first, tanpa komisi)
      privacy.html
    /tidur-nyenyak/
      index.html (pindahan LP Tidur Nyenyak nanti)
      /assets/ (webp khusus tidur)
    /money-magnet/
      index.html (nanti)
      PRD-MONEY-MAGNET.md (mini, 1-2 halaman, referensi ke PRD induk)
      /assets/
    /relaxation/
      index.html (nanti)
      PRD-RELAXATION.md (nanti)
      /assets/
    index.html (hub opsional — lihat §4, boleh belakangan)
```

**Migrasi file lama (saat eksekusi nanti, bukan sekarang):**
1. `Gambar BB Tidur Nyenyak/` → `materi/tidur-nyenyak/foto-iklan/`
2. `Testimoni/` → `materi/tidur-nyenyak/testimoni/` (plus subfolder `money-magnet/` untuk testimoni MM dari referensi)
3. `Produk Knowledge BB Tidur Nyenyak.pdf` → `materi/tidur-nyenyak/`
4. `link affiliate mahir digital.png` + `layout halaman checkout...png` → `materi/tidur-nyenyak/` (internal, jangan masuk `/site/`)

---

## 3. Template bareng biar nggak belang

Semua LP pakai kerangka yang sama (hasil mirror MM §8 PRD induk), tinggal ganti isi:

1. Announcement tipis
2. Hero (H1 + CTA + harga + 1 kutipan)
3. Problem 5x ✕
4. Mekanisme tunggal (Tidur = "Pintu Waspada", Magnet = "Filter Invisible/RAS", Relax = "Mode Siaga Siang")
5. Solusi 3 teknologi numbered
6. Creator Denny (tanpa angka liar kecuali ada bukti per produk)
7. Outcome 5x ✓ (bahasa lunak)
8. Testimoni 3 + badge
9. Paket 2 lapis (Lapis A verified selalu tampil, Lapis B ASUMSI-MM siap cabut)
10. Jaminan 3 kartu (lunak)
11. Harga mirror checkout
12. FAQ
13. Final CTA + footer trust-first

**Yang dikunci global (ubah di `_shared/`, berlaku semua):** warna navy `#2E2B5E` + kartu `#EDEBFF` + CTA amber `#FFB020`, font Plus Jakarta Sans, radius 16/pill/8, 1 label CTA per produk (contoh Tidur: "Buka Pintu Tidur Sekarang — Rp298.000", Magnet: "Buka Filter Sekarang — Rp298.000"), motion hanya transform/opacity + reduced-motion.

---

## 4. Hub `/` perlu atau tidak? (jawaban: belakangan)

Untuk fase direct-per-produk, hub **tidak wajib**. Iklan langsung ke `/money-magnet/` atau `/tidur-nyenyak/`. Hub (`/site/index.html`) baru berguna kalau:
- Kamu mau pasang di bio ("pilih kebutuhanmu: tidur / uang / tenang")
- Mau cross-sell: tiap LP kasih 1 teaser kecil di bawah ("Butuh yang lain? Lihat Money Magnet →") tanpa ganggu CTA utama.

Aturan cross-sell: teaser hanya teks + 1 link di bawah FAQ, di atas footer. Jangan pasang 2 tombol checkout beda produk dalam 1 viewport. CTA utama tetap 1 produk.

---

## 5. Tracking multi-produk (biar iklan nggak ketukar)

- 1 Pixel untuk semua LP (gampang). Bedakan di `content_name` + `content_ids`: `tidur-nyenyak`, `money-magnet`, `relaxation`.
- UTM wajib bawa nama produk: `utm_campaign={produk}_{angle}` contoh `magnet_filter_cold1`, `tidur_pintu_cold1`. JS di `_shared/app.js` teruskan UTM ke checkout masing-masing (mapping di `config.js`, bukan hardcode per halaman).
- Retargeting per produk: ViewContent Magnet 7 hari tanpa beli → iklan Magnet lagi. Jangan campur audiens Tidur ↔ Magnet di awal.

---

## 6. SOP nambah produk baru (tinggal ulang 7 langkah ini)

1. Buat folder `materi/{produk}/` → masukkan PDF + foto + testimoni + screenshot harga/checkout.
2. Tulis `site/{produk}/PRD-{PRODUK}.md` mini (copy PRD induk, ganti: H1, mekanisme, outcome, testimoni, paket Lapis A/B, harga).
3. Optimasi aset ke WebP (hero <150KB, lainnya <100KB).
4. Duplikat `site/tidur-nyenyak/index.html` → `site/{produk}/index.html`, ganti teks + `data-product` + `CHECKOUT_URL`.
5. Tambah mapping di `_shared/config.js` (1 baris per produk).
6. Uji: klik semua CTA (UTM kebawa?), Pixel Test Events (content_name benar?), PageSpeed ≥85, view-source bersih dari kata komisi/aff.
7. Deploy 1 URL dulu (`/money-magnet/`), jalanin iklan kecil, baru lanjut produk berikut.

---

## 7. Urutan kerja yang aman (4 fase)

- **Fase 0 — Fondasi (tanpa coding LP):** bereskan PRD induk v4.0 (sudah), kunci template §8, kunci guardrail angka/bonus.
- **Fase 1 — Money Magnet:** kumpulin materi MM asli (PDF, harga, checkout, testimoni), tulis PRD-MONEY-MAGNET mini, tiru struktur MM5 yang sudah dibedah (filter/RAS, 8 bonus hanya jika terbukti).
- **Fase 2 — Relaxation:** sama seperti fase 1, mekanisme "mode siaga".
- **Fase 3 — Hub + cross-sell:** baru bikin `/site/index.html` + teaser silang setelah 2 LP jalan stabil.

**Risiko terbesar:** paket "samakan MM" untuk Tidur Nyenyak (26 video + jurnal + komunitas) belum terbukti. Di tiap PRD produk, Lapis B wajib label ASUMSI dan bisa dicabut 5 menit tanpa rusak layout.

---

## 8. Checklist sebelum nambah produk dianggap beres

- [ ] Materi per produk lengkap di `materi/{produk}/` (bukan campur)
- [ ] PRD mini per produk ada + tulis mana Lapis A verified vs Lapis B asumsi
- [ ] Semua CTA ke checkout produk yang benar (bukan ketukar Tidur↔Magnet)
- [ ] Footer tanpa komisi/aff, harga mirror checkout, klaim lunak (banyak yang merasa, biasanya, beda-beda)
- [ ] PageSpeed mobile ≥85, LCP <2.5s, gambar WebP

---

*Mulai dari sini dulu. Perintah berikutnya yang ditunggu: "tulis PRD-MONEY-MAGNET mini" atau "rapikan folder materi ke struktur §2". Build `index.html` tetap ditahan.*
