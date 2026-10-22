// Language links, mobile menu and copy-to-clipboard. The page language comes from the URL (/ or /vi/), set by the inline script in <head>.
(function () {
  var root = document.documentElement;
  var lang = root.getAttribute("data-lang");

  document.querySelectorAll("[data-lang-link]").forEach(function (a) {
    if (a.getAttribute("data-lang-link") === lang) a.setAttribute("aria-current", "page");
    // keep the reader on the same section when switching language
    a.addEventListener("click", function () {
      if (location.hash) a.setAttribute("href", a.getAttribute("href").split("#")[0] + location.hash);
    });
  });

  var menuBtn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (menuBtn && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", function () { setMenu(menu.hidden); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { setMenu(false); menuBtn.focus(); }
    });
    var wide = window.matchMedia("(min-width: 901px)");
    var onWide = function (e) { if (e.matches) setMenu(false); };
    if (wide.addEventListener) wide.addEventListener("change", onWide); else wide.addListener(onWide);
  }

  function selectText(el) {
    if (!el) return;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var target = document.getElementById(btn.getAttribute("aria-controls"));
      var done = function () {
        btn.classList.add("is-copied");
        setTimeout(function () { btn.classList.remove("is-copied"); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { selectText(target); });
      } else {
        selectText(target);
      }
    });
  });
})();
