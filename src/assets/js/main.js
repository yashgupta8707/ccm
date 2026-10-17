/* City College of Management — small progressive-enhancement layer.
   Nothing here is required to read the site: every section is visible,
   every form posts, and every FAQ opens without JavaScript. */
(function () {
  "use strict";

  // Signals that the enhancement layer is running: the CSS keeps the mobile
  // menu expanded in the flow while .no-js is present.
  document.documentElement.classList.remove("no-js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mobile navigation ------------------------------------------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close on Escape, and when a link is followed.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Header shadow once the page is scrolled ---------------------- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal ------------------------------------------------ */
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---- Sticky sub-menu: highlight the section in view --------------- */
  var subnav = document.querySelector(".subnav");
  if (subnav && "IntersectionObserver" in window) {
    var links = Array.prototype.slice.call(subnav.querySelectorAll("a"));
    var targets = links
      .map(function (a) {
        return document.querySelector(a.getAttribute("href"));
      })
      .filter(Boolean);

    if (targets.length) {
      var sectionObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) {
              a.classList.toggle(
                "is-active",
                a.getAttribute("href") === "#" + entry.target.id
              );
            });
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      targets.forEach(function (t) {
        sectionObserver.observe(t);
      });
    }
  }

  /* ---- Filter buttons (courses list, news list, gallery albums) ------
     Markup contract: a .filters container with data-filter-target
     pointing at the list, buttons carrying data-filter="value", and
     items carrying data-tags="space separated values". */
  document.querySelectorAll(".filters[data-filter-target]").forEach(function (bar) {
    var list = document.querySelector(bar.getAttribute("data-filter-target"));
    if (!list) return;
    var items = Array.prototype.slice.call(list.children);

    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      var value = btn.getAttribute("data-filter");

      bar.querySelectorAll("button[data-filter]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });

      var shown = 0;
      items.forEach(function (item) {
        var tags = (item.getAttribute("data-tags") || "").split(/\s+/);
        var show = value === "all" || tags.indexOf(value) !== -1;
        item.hidden = !show;
        if (show) shown++;
      });

      // Only the lists that declare an empty-state element have one to toggle;
      // querySelector("") throws, so check the attribute first.
      var emptySelector = bar.getAttribute("data-filter-empty");
      var empty = emptySelector ? document.querySelector(emptySelector) : null;
      if (empty) empty.hidden = shown !== 0;
    });
  });

  /* ---- Gallery lightbox -------------------------------------------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImage = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector("figcaption");
    var lastFocused = null;

    var closeLightbox = function () {
      lightbox.removeAttribute("open");
      document.body.style.removeProperty("overflow");
      if (lastFocused) lastFocused.focus();
    };

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-lightbox]");
      if (trigger) {
        var img = trigger.querySelector("img");
        if (!img) return;
        lastFocused = trigger;
        lbImage.src = img.currentSrc || img.src;
        lbImage.alt = img.alt;
        lbCaption.textContent = img.alt;
        lightbox.setAttribute("open", "");
        document.body.style.overflow = "hidden";
        lightbox.querySelector(".lightbox__close").focus();
        return;
      }
      if (e.target.closest(".lightbox__close") || e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.hasAttribute("open")) closeLightbox();
    });
  }

  /* ---- Analytics events for call and WhatsApp clicks ---------------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-track]");
    if (!el || typeof window.gtag !== "function") return;
    window.gtag("event", el.getAttribute("data-track") + "_click", {
      link_url: el.getAttribute("href") || "",
      page_path: location.pathname
    });
  });

  /* ---- Forms: client-side validation, then /thank-you --------------- */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var status = form.querySelector("[data-form-status]");
    var endpointReady = form.getAttribute("action").indexOf("[") === -1;

    var showError = function (field, on) {
      var box = document.getElementById(field.id + "-err");
      if (box) box.hidden = !on;
      field.setAttribute("aria-invalid", String(on));
    };

    var validate = function () {
      var firstBad = null;
      form.querySelectorAll("[required], input[type=email]").forEach(function (field) {
        if (field.type === "hidden" || field.name === "_honey") return;
        var bad = !field.checkValidity();
        showError(field, bad);
        if (bad && !firstBad) firstBad = field;
      });
      return firstBad;
    };

    form.addEventListener("input", function (e) {
      var field = e.target;
      if (field.hasAttribute("aria-invalid") && field.checkValidity()) showError(field, false);
    });

    form.addEventListener("submit", function (e) {
      var firstBad = validate();

      if (firstBad) {
        e.preventDefault();
        if (status) {
          status.textContent = "Please correct the highlighted fields.";
          status.className = "form__status is-error";
        }
        firstBad.focus();
        return;
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", "form_submit", {
          form_id: form.id,
          programme: (form.querySelector("[name=programme]") || {}).value || ""
        });
      }

      // The form endpoint in site.json is still a placeholder, so there is
      // nowhere to post to yet: confirm to the visitor and show the
      // thank-you page, exactly as the live form will.
      if (!endpointReady) {
        e.preventDefault();
        if (status) {
          status.textContent = "Thank you. Sending you to the confirmation page…";
          status.className = "form__status is-ok";
        }
        window.setTimeout(function () {
          window.location.href = form.getAttribute("data-thanks") || "/thank-you/";
        }, reduceMotion ? 0 : 400);
      }
    });
  });
})();
