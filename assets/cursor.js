(function () {
    const cursorDot = document.getElementById('cursorDot');
    if (cursorDot) {
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
