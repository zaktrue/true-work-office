/* True Work Office - dependency-free content-image lightbox (site standard).
   Turns every content image inside <article> into a click/keyboard trigger
   that opens the full-size image in a dimmed overlay scaled to the viewport.
   Close on click, backdrop, the close button, or Esc. No new tab, no external
   libraries. Motion is CSS-driven and respects prefers-reduced-motion. */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") { fn(); }
    else { document.addEventListener("DOMContentLoaded", fn); }
  }

  ready(function () {
    var article = document.querySelector("article");
    if (!article) { return; }

    var targets = [];
    Array.prototype.forEach.call(article.querySelectorAll("img"), function (img) {
      if (img.classList.contains("no-lightbox")) { return; }
      if (img.closest("a")) { return; } // already a link; leave it alone
      targets.push(img);
    });
    if (!targets.length) { return; }

    var overlay, overlayImg, overlayCaption, closeBtn, lastFocused;

    function build() {
      overlay = document.createElement("div");
      overlay.className = "lightbox-overlay";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "Expanded image");
      overlay.hidden = true;

      overlayImg = document.createElement("img");
      overlayImg.className = "lightbox-overlay-img";
      overlayImg.alt = "";

      overlayCaption = document.createElement("div");
      overlayCaption.className = "lightbox-caption";

      closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "lightbox-close";
      closeBtn.setAttribute("aria-label", "Close expanded image");
      closeBtn.innerHTML = "&times;";

      overlay.appendChild(overlayImg);
      overlay.appendChild(overlayCaption);
      overlay.appendChild(closeBtn);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", function (e) {
        if (e.target === overlay || e.target === overlayImg || e.target === closeBtn) { close(); }
      });
      closeBtn.addEventListener("click", close);
    }

    function open(img) {
      if (!overlay) { build(); }
      lastFocused = document.activeElement;
      overlayImg.src = img.currentSrc || img.src;
      overlayImg.alt = img.alt || "";
      var cap = img.getAttribute("alt") || "";
      overlayCaption.textContent = cap;
      overlayCaption.style.display = cap ? "" : "none";
      overlay.hidden = false;
      document.body.classList.add("lightbox-open");
      void overlay.offsetWidth; // reflow so the transition runs
      overlay.classList.add("is-visible");
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }

    function close() {
      if (!overlay) { return; }
      overlay.classList.remove("is-visible");
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("lightbox-open");
      var done = function () {
        overlay.hidden = true;
        overlayImg.src = "";
        overlay.removeEventListener("transitionend", done);
      };
      var cs = window.getComputedStyle(overlay);
      if (parseFloat(cs.transitionDuration) > 0) { overlay.addEventListener("transitionend", done); }
      else { done(); }
      if (lastFocused && lastFocused.focus) { lastFocused.focus(); }
    }

    function onKey(e) {
      if (e.key === "Escape" || e.key === "Esc") { close(); }
    }

    targets.forEach(function (img) {
      img.classList.add("lightbox-img");
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.setAttribute("aria-label", (img.alt ? img.alt + ": expand image" : "Expand image"));
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () { open(img); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); }
      });
    });
  });
})();
