/* Lean site JS — replaces the 238KB GreenSock-based bundle.
   Only keeps features the editorial redesign actually uses:
   1. Section-nav (TOC scroll-spy)
   2. Mermaid code-block swap
   3. Sidebar toggle (in case CSS hiding is removed)
*/

(function () {
  "use strict";

  /* --- Glassmorphic nav: increase opacity on scroll --- */
  var topNav = document.querySelector(".top-nav");
  if (topNav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        topNav.classList.add("top-nav--scrolled");
      } else {
        topNav.classList.remove("top-nav--scrolled");
      }
    });
  }

  /* --- Sidebar toggle (hamburger menu) --- */
  var toggler = document.querySelector(".sidebar__toggler");
  if (toggler) {
    toggler.addEventListener("click", function () {
      var expanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", String(!expanded));
      document.body.classList.toggle("sidebar-open");
    });
  }

  /* --- Section-nav scroll-spy (TOC highlighting) --- */
  if (document.querySelector(".section-nav")) {
    var heads = [];
    var selector = "";
    for (var i = 1; i <= 6; i++) {
      selector += ".content h" + i;
      if (i < 6) selector += ", ";
    }
    var headEls = document.querySelectorAll(selector);
    var navItems = document.querySelectorAll(".section-nav li");
    headEls.forEach(function (el, idx) {
      heads.push({ offset: el.offsetTop - 20, nav: navItems[idx] });
    });

    var current = null;
    window.addEventListener("scroll", function () {
      var scrollY = window.scrollY;
      var found = null;
      for (var j = 0; j < heads.length; j++) {
        var next = heads[j + 1];
        if ((!next && scrollY > heads[j].offset) ||
            (scrollY >= heads[j].offset && next && scrollY < next.offset)) {
          found = heads[j];
          break;
        }
      }
      if (found !== current) {
        if (current && current.nav) current.nav.classList.remove("active");
        if (found && found.nav) found.nav.classList.add("active");
        current = found;
      }
    });
  }

  /* --- Mermaid code-block swap --- */
  var mermaidBlocks = document.getElementsByClassName("language-mermaid");
  while (mermaidBlocks.length > 0) {
    var code = mermaidBlocks[0];
    var text = code.innerText;
    var div = document.createElement("div");
    div.className = "mermaid";
    div.innerHTML = text;
    var parent = code.parentNode;
    while (parent.tagName !== "DIV") parent = parent.parentNode;
    parent.replaceChild(div, code.parentNode);
  }
})();
