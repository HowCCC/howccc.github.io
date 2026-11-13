(() => {
  const lamp = document.querySelector('[data-theme-lamp]');
  if (!lamp) return;
  const root = document.documentElement;
  const bulb = lamp.querySelector('button');
  const cord = lamp.querySelector('path');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const restLength = () => Number(getComputedStyle(lamp).getPropertyValue('--lamp-rest')) || 68;
  let rest = restLength(), length = rest, angle = 0, radialVelocity = 0, angularVelocity = 0;
  let pointer = null, startX = 0, startY = 0, startTipX = 0, startTipY = 0, lastMove = 0;
  let frame = 0, previousTime = 0, releaseTime = -Infinity;

  function syncTheme() {
    const dark = root.dataset.theme === 'dark';
    bulb.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    bulb.setAttribute('aria-pressed', String(dark));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#474747' : '#ffffff');
  }
  function toggleTheme() {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    try { localStorage.setItem('site-theme', theme); } catch (_) { /* Storage may be disabled. */ }
    syncTheme();
  }
  function render() {
    const x = length * Math.sin(angle), y = length * Math.cos(angle);
    cord.setAttribute('d', `M70 0 L${70 + x} ${y}`);
    bulb.style.transform = `translate(${x}px, ${y}px) rotate(${-angle}rad)`;
  }
  function tick(time) {
    frame = 0;
    const elapsed = Math.min((time - previousTime) / 1000 || 1 / 60, .032);
    previousTime = time;
    if (pointer === null) {
      // Polar spring-pendulum: gravity, radial elasticity, and viscous damping.
      // Substeps keep the integration stable even on slower mobile devices.
      const steps = Math.ceil(elapsed / .004), dt = elapsed / steps;
      for (let i = 0; i < steps; i++) {
        const gravity = 1100, stiffness = 190;
        const naturalLength = rest - gravity / stiffness;
        const radialAcceleration = length * angularVelocity ** 2 + gravity * Math.cos(angle)
          - stiffness * (length - naturalLength) - 13 * radialVelocity;
        const angularAcceleration = -gravity * Math.sin(angle) / length
          - 2 * radialVelocity * angularVelocity / length - 3.6 * angularVelocity;
        radialVelocity += radialAcceleration * dt;
        angularVelocity += angularAcceleration * dt;
        length = Math.max(12, length + radialVelocity * dt);
        angle += angularVelocity * dt;
      }
      if (reducedMotion.matches || (Math.abs(length - rest) < .03 && Math.abs(angle) < .001 && Math.abs(radialVelocity) < .1 && Math.abs(angularVelocity) < .005)) {
        length = rest; angle = radialVelocity = angularVelocity = 0;
        render(); return;
      }
    }
    render();
    frame = requestAnimationFrame(tick);
  }
  function wake() {
    if (!frame) { previousTime = performance.now(); frame = requestAnimationFrame(tick); }
  }
  bulb.addEventListener('pointerdown', event => {
    if (pointer !== null || !event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    pointer = event.pointerId;
    startX = event.clientX; startY = event.clientY;
    startTipX = length * Math.sin(angle); startTipY = length * Math.cos(angle);
    lastMove = performance.now(); radialVelocity = angularVelocity = 0;
    lamp.setAttribute('data-dragging', '');
    bulb.setPointerCapture(pointer);
    wake();
  });
  bulb.addEventListener('dragstart', event => event.preventDefault());
  bulb.addEventListener('pointermove', event => {
    if (event.pointerId !== pointer) return;
    const dx = startTipX + event.clientX - startX;
    const dy = startTipY + event.clientY - startY - rest;
    // Increasing resistance limits extension without an abrupt hard stop.
    const x = 42 * Math.tanh(dx / 65);
    const y = rest + (dy >= 0 ? 90 * (1 - Math.exp(-dy / 95)) : 12 * Math.tanh(dy / 30));
    const nextLength = Math.hypot(x, y), nextAngle = Math.atan2(x, y);
    const now = performance.now(), dt = Math.max((now - lastMove) / 1000, .008);
    radialVelocity = clamp((nextLength - length) / dt, -350, 350);
    angularVelocity = clamp((nextAngle - angle) / dt, -3, 3);
    length = nextLength; angle = nextAngle; lastMove = now;
    render();
  });
  function release(event, cancelled = false) {
    if (event.pointerId !== pointer) return;
    const id = pointer;
    pointer = null; releaseTime = performance.now();
    lamp.removeAttribute('data-dragging');
    if (!cancelled && length * Math.cos(angle) - rest >= 28) toggleTheme();
    if (cancelled || releaseTime - lastMove > 90) radialVelocity = angularVelocity = 0;
    if (bulb.hasPointerCapture(id)) bulb.releasePointerCapture(id);
    wake();
  }
  bulb.addEventListener('pointerup', event => release(event));
  bulb.addEventListener('pointercancel', event => release(event, true));
  bulb.addEventListener('lostpointercapture', event => release(event, true));
  // Native keyboard/assistive activation; a pointer click alone only nudges the bulb.
  bulb.addEventListener('click', event => {
    if (event.detail === 0 && performance.now() - releaseTime > 100) {
      toggleTheme(); length = rest + 16; wake();
    }
  });
  window.addEventListener('blur', () => { if (pointer !== null) release({ pointerId: pointer }, true); });
  window.addEventListener('resize', () => {
    const next = restLength();
    if (next !== rest) { if (pointer !== null) release({ pointerId: pointer }, true); rest = next; length = rest; angle = radialVelocity = angularVelocity = 0; render(); }
  });
  window.addEventListener('storage', event => {
    if (event.key === 'site-theme' && ['light', 'dark'].includes(event.newValue)) { root.dataset.theme = event.newValue; syncTheme(); }
  });
  syncTheme(); render(); lamp.hidden = false;
})();
