/* Light/dark theme toggle for the style-guide site.
   Loaded synchronously in <head> so the stored theme is applied before paint
   (no flash). Flips a `dark` class on <html>; tokens.css does the rest. */
(function () {
  var KEY = 'rcdk-theme';
  var KIT_UPDATED = '2026-08-19';  // bump when you ship an update
  function isDark() { return document.documentElement.classList.contains('dark'); }
  function apply(dark) { document.documentElement.classList.toggle('dark', dark); }

  // 1) Apply stored preference (falling back to the OS setting) immediately.
  try {
    var stored = localStorage.getItem(KEY);
    if (stored === 'dark' || stored === 'light') {
      apply(stored === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      apply(true);
    }
  } catch (e) {}

  // 2) Wire the toggle button(s) once the DOM is ready.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.kit-nav-stamp').forEach(function (el) { el.textContent = 'Updated ' + KIT_UPDATED; });
    var buttons = document.querySelectorAll('.kit-theme-toggle');
    buttons.forEach(function (btn) { btn.setAttribute('aria-pressed', String(isDark())); });
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dark = !isDark();
        apply(dark);
        try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(dark)); });
      });
    });
  });
})();
