(function () {
    const cursorDot = document.getElementById('cursorDot');
    // Nur auf Geräten mit Maus, nicht auf Handys und Tablets
    if (cursorDot && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let cx = window.innerWidth / 2, cy = window.innerHeight / 2, hovering = false;
      function applyCursorTransform() {
        cursorDot.style.transform = 'translate(' + cx + 'px,' + cy + 'px) scale(' + (hovering ? 3.2 : 1) + ')';
      }
      document.documentElement.classList.add('has-custom-cursor');
      applyCursorTransform();
      window.addEventListener('mousemove', (ev) => {
        cx = ev.clientX; cy = ev.clientY;
        applyCursorTransform();
      });
      document.addEventListener('mouseover', (ev) => {
        if (ev.target.closest('a, button, .btn, .icon-link')) {
          hovering = true;
          cursorDot.classList.add('cursor-hover');
          applyCursorTransform();
        }
      });
      document.addEventListener('mouseout', (ev) => {
        if (ev.target.closest('a, button, .btn, .icon-link')) {
          hovering = false;
          cursorDot.classList.remove('cursor-hover');
          applyCursorTransform();
        }
      });
      window.addEventListener('touchstart', () => {
        document.documentElement.classList.remove('has-custom-cursor');
      }, { once: true, passive: true });
    }
})();

// E-Mail-Adresse in die Zwischenablage kopieren (Knopf in der Navigation)
function legacyCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  ta.style.top = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}
function copyEmailAddress() {
  const address = 'kontakt@rächtsimpel.ch';
  try { legacyCopy(address); } catch (e) { /* ignore */ }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).catch(() => {});
    }
  } catch (e) { /* ignore */ }
  const toast = document.getElementById('copyToast');
  if (toast) {
    toast.textContent = 'Adresse kopiert: ' + address;
    toast.classList.add('show');
    clearTimeout(copyEmailAddress._t);
    copyEmailAddress._t = setTimeout(() => toast.classList.remove('show'), 2500);
  }
  return false;
}
