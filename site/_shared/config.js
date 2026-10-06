/* _shared/config.js — Pixel beda per produk + mapping checkout (PLAN-MULTIPRODUK §5, DRAFT-PLAN-MONEY-MAGNET §2).
   Ganti PIXEL_ID_* saat sudah ada. Jangan hardcode URL checkout di HTML. */
window.BB_CONFIG = {
  PIXEL_ID: "",
  PIXEL_ID_TIDUR: "",
  PIXEL_ID_MAGNET: "",
  CURRENCY: "IDR",
  PRODUCTS: {
    "tidur-nyenyak": {
      CHECKOUT_URL: "https://member.mahirdigital.id/lp?aff=zulk46b08&i=30",
      PRICE: 298000,
      PIXEL_ID: ""
    },
    "money-magnet": {
      CHECKOUT_URL: "https://member.mahirdigital.id/lp?aff=zulk46b0&i=11",
      PRICE: 298000,
      PIXEL_ID: ""
    },
    "relaxation": { CHECKOUT_URL: "", PRICE: 0, PIXEL_ID: "" }
  }
};
