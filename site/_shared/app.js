/* _shared/app.js — vanilla multi-produk. CTA via lanjut, UTM forward, Pixel, A/B, reveal, sticky, cookie. */
(function () {
  "use strict";
  var cfg = window.BB_CONFIG || {};

  // --- UTM capture ---
  var qs = new URLSearchParams(window.location.search);
  var UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"];
  var utms = {};
  UTM_KEYS.forEach(function (k) {
    var v = qs.get(k);
    if (v) { try { sessionStorage.setItem("bb_" + k, v); } catch (e) {} utms[k] = v; }
    else { try { var s = sessionStorage.getItem("bb_" + k); if (s) utms[k] = s; } catch (e) {} }
  });

  // --- Produk aktif + harga (PLAN-MULTIPRODUK §5: content_name per produk) ---
  var PRODUCT = document.documentElement.getAttribute("data-product") || qs.get("product") || "tidur-nyenyak";
  var PCFG = ((cfg.PRODUCTS || {})[PRODUCT]) || {};
  var PRICE = PCFG.PRICE || cfg.PRICE || 298000;

  function goUrl(slot) {
    var p = new URLSearchParams();
    Object.keys(utms).forEach(function (k) { p.set(k, utms[k]); });
    p.set("product", PRODUCT);
    p.set("slot", slot);
    if (!p.get("utm_term")) p.set("utm_term", "slot-" + slot);
    return "../_shared/lanjut.html?" + p.toString();
  }

  // --- A/B headline: ?h=1|2|3 (per produk) ---
  var HEADLINES_ALL = {
    "tidur-nyenyak": {
      "1": "Peluang Tidur Nyenyak Ada Tiap Malam. Tapi Ada yang Terus Nolak \u2014 Tanpa Kamu Sadari.",
      "2": "Malam Lebih Tenang, Pagi Nggak Gampang Emosi",
      "3": "Audio 30 Menit Sebelum Tidur, Dipandu Sampai Rileks"
    },
    "money-magnet": {
      "1": "Peluang Sudah Datang Berkali-kali. Tapi Ada yang Terus Nolak Tanpa Kamu Sadari.",
      "2": "Sudah Usaha Keras, Tapi Hasil Selalu Hampir.",
      "3": "Audio Malam 30 Menit Untuk Reset Filter Rezeki."
    }
  };
  var HEADLINES = HEADLINES_ALL[PRODUCT] || HEADLINES_ALL["tidur-nyenyak"];
  var h = qs.get("h");
  var headlineEl = document.getElementById("headline");
  if (h && HEADLINES[h] && headlineEl) {
    headlineEl.textContent = HEADLINES[h];
    utms["utm_term"] = utms["utm_term"] || ("angle-h" + h);
  }
  if (h && HEADLINES[h]) document.title = HEADLINES[h] + " | BrainBoost " + PRODUCT;

  // --- Pixel beda per produk (DRAFT-PLAN-MONEY-MAGNET: jangan gabung Tidur x Magnet) ---
  function fbq() { if (window.fbq) window.fbq.apply(null, arguments); }
  var ACTIVE_PIXEL = (PCFG && PCFG.PIXEL_ID) || "";
  if (!ACTIVE_PIXEL) {
    if (PRODUCT === "money-magnet") ACTIVE_PIXEL = cfg.PIXEL_ID_MAGNET || cfg.PIXEL_ID || "";
    else if (PRODUCT === "tidur-nyenyak") ACTIVE_PIXEL = cfg.PIXEL_ID_TIDUR || cfg.PIXEL_ID || "";
    else ACTIVE_PIXEL = cfg.PIXEL_ID || "";
  }
  if (ACTIVE_PIXEL) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);
    window.fbq = window.fbq || function () { (window.fbq.q = window.fbq.q || []).push(arguments); };
    window.fbq("init", ACTIVE_PIXEL);
    fbq("track", "PageView");
  } else {
    window.fbq = window.fbq || function () {};
  }

  function uid() {
    return "evt-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  // --- Semua CTA ke redirect internal + tracking ---
  var ctas = document.querySelectorAll('a[data-cta]');
  ctas.forEach(function (a) {
    var slot = a.getAttribute("data-cta");
    a.href = goUrl(slot);
    a.addEventListener("click", function () {
      var eid = uid();
      try { sessionStorage.setItem("bb_eid_" + slot, eid); } catch (e) {}
      try {
        fbq("track", "InitiateCheckout", {
          content_name: PRODUCT, content_ids: [PRODUCT],
          value: PRICE, currency: cfg.CURRENCY || "IDR",
          content_category: "checkout", event_id: eid
        });
        fbq("trackCustom", "AffiliateClick", {
          content_name: PRODUCT, cta_slot: slot, event_id: eid,
          utm_source: utms["utm_source"] || "", utm_campaign: utms["utm_campaign"] || ""
        });
      } catch (e) {}
    });
  });

  // --- ViewContent saat hero terlihat ---
  var heroSeen = false;
  var hero = document.querySelector(".hero");
  if ("IntersectionObserver" in window && hero) {
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !heroSeen) {
          heroSeen = true;
          try { fbq("track", "ViewContent", { content_name: PRODUCT, content_ids: [PRODUCT], value: PRICE, currency: cfg.CURRENCY || "IDR", event_id: uid() }); } catch (e) {}
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 }).observe(hero);
  }

  // --- Reveal on scroll ---
  var revs = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); ro.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    revs.forEach(function (el) { ro.observe(el); });
  } else {
    revs.forEach(function (el) { el.classList.add("visible"); });
  }

  // --- Sticky CTA ---
  var sticky = document.getElementById("sticky");
  var finalCta = document.getElementById("final-cta");
  var finalVisible = false;
  var pastHalf = false;
  function renderSticky() {
    var show = pastHalf && !finalVisible;
    if (sticky) {
      sticky.classList.toggle("show", show);
      sticky.setAttribute("aria-hidden", show ? "false" : "true");
    }
  }
  if ("IntersectionObserver" in window && finalCta) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { finalVisible = en.isIntersecting; renderSticky(); });
    }, { threshold: 0.3 }).observe(finalCta);
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      pastHalf = max > 0 && (window.scrollY / max) > 0.5;
      renderSticky();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Cookie banner mini (UU PDP) ---
  try {
    var c = document.getElementById("cookie");
    var ok = document.getElementById("cookie-ok");
    if (c && !localStorage.getItem("bb_cookie")) c.hidden = false;
    if (ok) ok.addEventListener("click", function () {
      try { localStorage.setItem("bb_cookie", "1"); } catch (e) {}
      c.hidden = true;
    });
  } catch (e) {}
})();
