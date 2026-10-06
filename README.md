# lp-brain-boost — Monorepo LP BrainBoost (template induk: Tidur Nyenyak v4.1)

Landing page statis, mobile-first, HTML murni + native CSS + vanilla JS.
Trust-first: tampil sebagai **Tim BrainBoost Indonesia / mitra edukasi**.

## Struktur (monorepo, ikut PLAN-MULTIPRODUK.md)
- `PRD.md` — template induk (tidur-nyenyak)
- `PLAN-MULTIPRODUK.md` — SOP scale-up + tracking multi-produk
- `DRAFT-PLAN-MONEY-MAGNET.md` — draft plan Magnet (sudah dieksekusi, arsip)
- `site/_shared/` — `styles.css`, `app.js`, `config.js` (mapping + Pixel per produk), `lanjut.html`, `privacy.html`
- `site/index.html` — hub minimal (pilih Tidur / Magnet)
- `site/tidur-nyenyak/index.html` — LP Tidur Nyenyak (CTA via `../_shared/lanjut.html`)
- `site/tidur-nyenyak/assets/` — WebP publish (hero <150KB, lain <100KB, testimoni blur)
- `site/money-magnet/index.html` — LP Money Magnet (nuansa emas, CTA Buka Filter Sekarang)
- `site/money-magnet/assets/` — WebP publish Magnet
- `site/money-magnet/PRD-MONEY-MAGNET.md` — delta Magnet dari PRD induk
- `materi/tidur-nyenyak/` — arsip mentah vendor Tidur (JANGAN upload ke hosting)
- `materi/money-magnet/` — arsip mentah vendor Magnet: `foto-iklan/`, `landing-page/`, `product-knowledge/`, `testimoni/`, `video-iklan/`, `x-trending/` (JANGAN upload)

## Pixel beda per produk (jangan digabung)
1. Buka `site/_shared/config.js`
2. Isi `PIXEL_ID_TIDUR` dan `PIXEL_ID_MAGNET` masing-masing (boleh juga per `PRODUCTS[x].PIXEL_ID`)
3. Deploy ulang. Cek Test Events per Pixel: `PageView`, `ViewContent`, `InitiateCheckout` (`content_name` = id produk).

## Checkout per produk
- Tidur: `aff=zulk46b08&i=30`, Rp298.000 sekali bayar
- Magnet: `aff=zulk46b0&i=11`, Rp298.000 sekali bayar, akses selamanya
- Jangan ketukar. Semua CTA lewat `lanjut.html` + UTM (`utm_campaign={produk}_{angle}`).

## Cara deploy (Cloudflare Pages)
1. Push repo. Publish directory: `site`
2. Build command kosong. Pasang custom domain + HTTPS + verifikasi domain di BM
3. Setelah domain fix: jadikan `og:image` + favicon URL absolut (lihat TODO-DEPLOY di tiap `index.html`)

## Cara tambah varian headline (A/B)
- Tidur `?h=1|2|3`, Magnet `?h=1|2|3` (mapping di `_shared/app.js` per produk)
- Pasang `utm_term=angle-h4` dst di ad set untuk varian baru.

## Catatan
- Harga mirror halaman resmi Mahir Digital. Checkout 100% di Mahir Digital.
- Lapis B Tidur berlabel `ASUMSI-MM` — hapus bloknya jika vendor menolak. Paket Magnet full tampil (verified).
- Video MP4 + materi mentah tidak ikut deploy (publish dir hanya `site/`).
