/* ==========================================================================
   Kipu — privacy site
   JavaScript mínimo, sin dependencias, sin analítica y sin red.
   Responsabilidades:
     1. Alternar tema claro/oscuro (preferencia del sistema por defecto).
     2. Resaltar la sección actual en el índice.
     3. Conservar la sección al cambiar de idioma.
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'kipu-privacy-theme';
  var root = document.documentElement;

  /* ------------------------------------------------------------ Tema ----- */

  var toggle = document.getElementById('theme-toggle');

  function storedTheme() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === 'dark' || value === 'light' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function saveTheme(value) {
    try {
      if (value === 'dark' || value === 'light') {
        window.localStorage.setItem(STORAGE_KEY, value);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      /* Almacenamiento no disponible: el tema sigue funcionando en esta página. */
    }
  }

  function systemTheme() {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function effectiveTheme() {
    return storedTheme() || systemTheme();
  }

  function renderTheme() {
    var theme = effectiveTheme();
    root.setAttribute('data-theme', theme);

    if (!toggle) return;

    var isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');

    var label = isDark
      ? toggle.getAttribute('data-label-light')
      : toggle.getAttribute('data-label-dark');
    if (!label) return;

    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);

    var text = toggle.querySelector('.theme-toggle__label');
    if (text) text.textContent = label;
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      saveTheme(next);
      renderTheme();
    });
  }

  renderTheme();

  if (window.matchMedia) {
    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var onSystemChange = function () {
      if (!storedTheme()) renderTheme();
    };
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', onSystemChange);
    } else if (typeof query.addListener === 'function') {
      query.addListener(onSystemChange);
    }
  }

  /* --------------------------------------------------- Índice activo ----- */

  var tocLinks = Array.prototype.slice.call(
    document.querySelectorAll('.toc a[href^="#"]')
  );

  if (tocLinks.length && 'IntersectionObserver' in window) {
    var targets = tocLinks
      .map(function (link) {
        var id = link.getAttribute('href').slice(1);
        var heading = document.getElementById(id);
        return heading ? { link: link, heading: heading } : null;
      })
      .filter(Boolean);

    var setCurrent = function (id) {
      targets.forEach(function (item) {
        if (item.heading.id === id) {
          item.link.setAttribute('aria-current', 'location');
        } else {
          item.link.removeAttribute('aria-current');
        }
      });
    };

    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) {
            return entry.isIntersecting;
          })
          .sort(function (a, b) {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

        if (visible.length) setCurrent(visible[0].target.id);
      },
      { rootMargin: '-84px 0px -68% 0px', threshold: 0 }
    );

    targets.forEach(function (item) {
      observer.observe(item.heading);
    });
  }

  /* ---------------------------------------------- Cambio de idioma ------- */

  var languageLinks = Array.prototype.slice.call(
    document.querySelectorAll('[data-lang-base]')
  );

  if (languageLinks.length) {
    var syncHash = function () {
      var hash = window.location.hash;
      languageLinks.forEach(function (link) {
        var base = link.getAttribute('data-lang-base');
        if (base) link.setAttribute('href', hash ? base + hash : base);
      });
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
  }
})();
