// Language switch and copy-to-clipboard. The initial language is set by the inline script in <head>.
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.lang = lang;
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); });
  });
  buttons.forEach(function (b) {
    b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === root.getAttribute("data-lang")));
  });

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
