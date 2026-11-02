/*
 * NahiDeck site — dil seçimi, metin uygulama ve yasal sayfa oluşturma.
 * Tema (açık/koyu) CSS ile sistem ayarına göre otomatik seçilir (style.css).
 */
(function () {
  "use strict";

  // Gerçek indirme bağlantıları hazır olduğunda buraya yazılır.
  var DOWNLOADS = {
    android: "#",
    windows: "#"
  };

  var STORAGE_KEY = "nahideck_site_lang";
  var STORAGE_KEY_THEME = "nahideck_site_theme";
  var SUPPORTED = window.NAHI_LANGS.map(function (l) { return l.code; });
  // tema: kayıtlı değer yoksa otomatik (sistem) kullanılır

  // Tarayıcı dili desteklenen dillerden birine eşlenir; eşleşme yoksa İngilizce.
  function matchLang(tag) {
    var c = String(tag || "").toLowerCase();
    if (c === "tr" || c.indexOf("tr-") === 0) return "tr";
    if (c === "en" || c.indexOf("en-") === 0) return "en";
    if (c === "es" || c.indexOf("es-") === 0) return "es";
    if (c === "pt" || c.indexOf("pt-") === 0) return "pt-BR";
    if (c === "de" || c.indexOf("de-") === 0) return "de";
    if (c === "fr" || c.indexOf("fr-") === 0) return "fr";
    if (c === "az" || c.indexOf("az-") === 0) return "az";
    if (c.indexOf("zh") === 0) {
      return /(tw|hk|mo|hant)/.test(c) ? "zh-TW" : "zh-CN";
    }
    return null;
  }

  function systemLang() {
    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var m = matchLang(list[i]);
      if (m) return m;
    }
    return "en";
  }

  function currentLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* depolama kapalıysa sistem dili kullanılır */ }
    return systemLang();
  }

  function saveLang(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* yoksay */ }
  }

  function savedTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) { /* depolama kapaliysa otomatik */ }
    return null;
  }

  function systemDark() {
    try { return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; }
    catch (e) { return false; }
  }

  function effectiveTheme() {
    var s = savedTheme();
    if (s) return s;
    return systemDark() ? "dark" : "light";
  }

  function saveTheme(code) {
    try {
      if (code === null) localStorage.removeItem(STORAGE_KEY_THEME);
      else localStorage.setItem(STORAGE_KEY_THEME, code);
    } catch (e) { /* yoksay */ }
  }

  function applyTheme(code) {
    try {
      if (code === "light" || code === "dark") {
        document.documentElement.setAttribute("data-theme", code);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    } catch (e) { /* yoksay */ }
  }

  function renderThemeIcon() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var eff = effectiveTheme();
    // güneş (açık) / ay (koyu) SVG
    if (eff === "light") {
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    } else {
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
    }
  }

  function buildThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    renderThemeIcon();
    btn.onclick = function () {
      var next = effectiveTheme() === "light" ? "dark" : "light";
      saveTheme(next);
      applyTheme(next);
      renderThemeIcon();
    };
  }

  function t(lang, key) {
    var table = window.NAHI_UI[lang] || window.NAHI_UI.en;
    return table[key] !== undefined ? table[key] : window.NAHI_UI.en[key];
  }

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  // Yasal blokları DOM'a çevirir. İçerik yalnızca legal.js'ten gelir.
  function renderBlocks(blocks) {
    var frag = document.createDocumentFragment();
    blocks.forEach(function (b) {
      var type = b[0];
      if (type === "h") {
        frag.appendChild(el("h2", null, b[1]));
      } else if (type === "h3") {
        frag.appendChild(el("h3", null, b[1]));
      } else if (type === "p") {
        frag.appendChild(el("p", null, b[1]));
      } else if (type === "ul" || type === "ol") {
        var list = el(type);
        b[1].forEach(function (item) { list.appendChild(el("li", null, item)); });
        frag.appendChild(list);
      } else if (type === "table") {
        var table = el("table");
        var thead = el("thead");
        var hr = el("tr");
        b[1].forEach(function (h) { hr.appendChild(el("th", null, h)); });
        thead.appendChild(hr);
        table.appendChild(thead);
        var tbody = el("tbody");
        b[2].forEach(function (row) {
          var tr = el("tr");
          row.forEach(function (cell) { tr.appendChild(el("td", null, cell)); });
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        frag.appendChild(table);
      } else if (type === "card" || type === "danger") {
        var box = el("div", type === "danger" ? "card card-danger" : "card");
        box.appendChild(renderBlocks(b[1]));
        frag.appendChild(box);
      }
    });
    return frag;
  }

  function renderLegal(lang, kind) {
    var root = document.getElementById("legal");
    if (!root) return;
    var doc = (window.NAHI_LEGAL[lang] || window.NAHI_LEGAL.en)[kind];
    root.innerHTML = "";
    document.title = doc.title + " — NahiDeck";
    root.appendChild(el("h1", null, doc.title));
    if (doc.updated) {
      root.appendChild(el("p", "meta", t(lang, "legal_updated") + ": " + doc.updated));
    }
    root.appendChild(renderBlocks(doc.blocks));
  }

  function applyText(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(lang, node.getAttribute("data-i18n"));
    });
  }

  function buildLangSelect(lang, onChange) {
    var select = document.getElementById("lang-select");
    if (!select) return;
    select.innerHTML = "";
    window.NAHI_LANGS.forEach(function (l) {
      var opt = el("option", null, l.label);
      opt.value = l.code;
      if (l.code === lang) opt.selected = true;
      select.appendChild(opt);
    });
    select.onchange = function () {
      saveLang(select.value);
      onChange(select.value);
    };
  }

  function applyDownloads() {
    var a = document.getElementById("download-android");
    var w = document.getElementById("download-windows");
    if (a) a.href = DOWNLOADS.android;
    if (w) w.href = DOWNLOADS.windows;
  }

  function render(lang) {
    applyText(lang);
    var legalKind = document.body.getAttribute("data-legal");
    if (legalKind) renderLegal(lang, legalKind);
    buildLangSelect(lang, render);
    buildThemeToggle();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyDownloads();
    applyTheme(effectiveTheme());
    render(currentLang());

    // Sistem teması değişirse ve kullanıcı "otomatik" seçtiyse uygula.
    try {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq && mq.addEventListener) {
        mq.addEventListener("change", function () {
          if (!savedTheme()) {
            applyTheme(effectiveTheme());
            renderThemeIcon();
          }
        });
      }
    } catch (e) { /* yoksay */ }

    // Vitrin satırları kaydırınca sağdan uçarak gelsin.
    try {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      }, { threshold: 0.15 });
      document.querySelectorAll(".showcase-row").forEach(function (el) { io.observe(el); });
    } catch (e) { /* yoksay */ }
  });
})();
