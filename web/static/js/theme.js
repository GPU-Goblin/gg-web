// Applied before the page draws (no flash): the visitor's choice of light or dark, else the system's.
(function () {
  try {
    var t = localStorage.getItem("gg-theme");
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
