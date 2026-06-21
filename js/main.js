/* =========================================================
   RAGTIME COFFEE — behavior
   - 多言語切替（localStorage 保存）
   - ヘッダー縮小 / モバイルナビ
   - スクロール出現アニメ
   - 出店スケジュールを data/schedule.json から描画
   ========================================================= */
(function () {
  "use strict";

  var SUPPORTED = ["ja", "en", "zh", "ko"];
  var scheduleData = null;

  /* ---------- i18n ---------- */
  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "ja";
    var dict = window.I18N[lang];

    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("ragtime.lang", lang); } catch (e) {}
    if (scheduleData) renderSchedule(lang);
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("ragtime.lang"); } catch (e) {}
    var lang = saved || (navigator.language || "ja").slice(0, 2);
    if (SUPPORTED.indexOf(lang) === -1) lang = "ja";

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
    applyLang(lang);
  }

  /* ---------- header & mobile nav ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("nav");

    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------- hero parallax ---------- */
  function initParallax() {
    var photo = document.querySelector(".hero-photo");
    if (!photo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight) {
          photo.style.transform = "translateY(" + (y * 0.18).toFixed(1) + "px) scale(1.05)";
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- schedule ---------- */
  function todayStart() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function renderSchedule(lang) {
    var list = document.getElementById("scheduleList");
    if (!list || !scheduleData) return;
    var dict = window.I18N[lang] || window.I18N.ja;
    var wd = dict["_weekdays"];

    var today = todayStart();
    var entries = (scheduleData.entries || [])
      .slice()
      .sort(function (a, b) { return a.date < b.date ? -1 : 1; });

    // 今日以降を優先表示。無ければ直近の過去を出す。
    var upcoming = entries.filter(function (e) { return new Date(e.date + "T00:00:00") >= today; });
    var show = upcoming.length ? upcoming : entries.slice(-3);

    list.innerHTML = "";
    if (!show.length) {
      var empty = document.createElement("div");
      empty.className = "sch-empty";
      empty.textContent = dict["schedule.empty"];
      list.appendChild(empty);
      return;
    }

    show.forEach(function (e) {
      var dt = new Date(e.date + "T00:00:00");
      var isPast = dt < today;

      var place = (e.place && (e.place[lang] || e.place.ja)) || "";
      var addr = (e.address && (e.address[lang] || e.address.ja)) || "";

      var card = document.createElement("div");
      card.className = "sch-card" + (isPast ? " is-past" : "");

      var dateBox = document.createElement("div");
      dateBox.className = "sch-date";
      dateBox.innerHTML =
        '<span class="d">' + dt.getDate() + "</span>" +
        '<span class="ymw">' + (dt.getMonth() + 1) + "/" + dt.getDate() +
        " (" + wd[dt.getDay()] + ")</span>";

      var info = document.createElement("div");
      info.className = "sch-info";
      var h = '<div class="sch-place">' + esc(place) + "</div>";
      if (addr) h += '<div class="sch-addr">' + esc(addr) + "</div>";
      if (e.time) h += '<div class="sch-time">' + esc(e.time) + "</div>";
      info.innerHTML = h;

      card.appendChild(dateBox);
      card.appendChild(info);

      if (e.mapUrl) {
        var map = document.createElement("a");
        map.className = "sch-map";
        map.href = e.mapUrl;
        map.target = "_blank";
        map.rel = "noopener";
        map.textContent = dict["schedule.map"];
        card.appendChild(map);
      }
      list.appendChild(card);
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- instagram ---------- */
  var IG_GLYPH = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>';

  function loadInstagram() {
    var grid = document.getElementById("igGrid");
    if (!grid) return;
    fetch("data/instagram.json", { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (json) {
        var posts = (json && json.posts) || [];
        grid.innerHTML = "";
        if (!posts.length) {
          grid.innerHTML = '<div class="ig-empty">Instagram &nbsp;@ragtime.coffee</div>';
          return;
        }
        posts.slice(0, 6).forEach(function (p, i) {
          var a = document.createElement("a");
          a.className = "ig-tile";
          a.href = p.permalink || (json.profile || "https://www.instagram.com/ragtime.coffee/");
          a.target = "_blank";
          a.rel = "noopener";
          if (p.image) {
            var img = document.createElement("img");
            img.src = p.image;
            img.alt = p.caption || "RAGTIME COFFEE Instagram";
            img.loading = "lazy";
            a.appendChild(img);
            if (p.caption) {
              var cap = document.createElement("span");
              cap.className = "ig-cap";
              cap.textContent = p.caption;
              a.appendChild(cap);
            }
          } else {
            /* 画像未設定: ブランド配色のテキストカード（仮ビジュアル） */
            a.classList.add("is-placeholder", "ph-" + (i % 4));
            a.innerHTML =
              '<span class="ph-mark">' + IG_GLYPH + "</span>" +
              '<span class="ph-cap">' + esc(p.caption || "@ragtime.coffee") + "</span>";
          }
          grid.appendChild(a);
        });
      })
      .catch(function () {
        grid.innerHTML = '<div class="ig-empty">Instagram &nbsp;@ragtime.coffee</div>';
      });
  }

  function loadSchedule() {
    fetch("data/schedule.json", { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (json) {
        scheduleData = json;
        renderSchedule(document.documentElement.lang || "ja");
      })
      .catch(function () {
        var list = document.getElementById("scheduleList");
        if (list) {
          var dict = window.I18N[document.documentElement.lang] || window.I18N.ja;
          list.innerHTML = '<div class="sch-empty">' + esc(dict["schedule.empty"]) + "</div>";
        }
      });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    initLang();
    initHeader();
    initParallax();
    initReveal();
    loadSchedule();
    loadInstagram();
  });
})();