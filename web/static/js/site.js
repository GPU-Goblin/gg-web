// The theme button, and closing the open menus on a click elsewhere or on Escape.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme")
        ? root.getAttribute("data-theme") === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("gg-theme", next); } catch (e) {}
    });
  }
  document.addEventListener("click", function (e) {
    document.querySelectorAll("details.lang[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll("details.lang[open]").forEach(function (d) { d.removeAttribute("open"); });
    var box = document.getElementById("nav-open");
    if (box) box.checked = false;
  });
})();
