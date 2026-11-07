// Five playful cats, loaded only when the bottom gallery approaches.
const guardians = [...document.querySelectorAll('[data-cat-slot]')];
if (guardians.length) {
  const observer = new IntersectionObserver(entries => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
      observer.unobserve(entry.target);
      initGuardian(entry.target).catch(error => {
        console.error('Cat gallery:', error);
        const status = entry.target.querySelector('[role="status"]');
        if (status) status.textContent = '3D unavailable';
      });
    });
  }, { rootMargin: '260px' });
  guardians.forEach(guardian => observer.observe(guardian));
}

async function initGuardian(guardian) {
  const [THREE, { MTLLoader }, { OBJLoader }] = await Promise.all([
    import('./vendor/three.module.js'), import('./vendor/MTLLoader.js'), import('./vendor/OBJLoader.js')
  ]);
  const canvas = guardian.querySelector('canvas');
  const status = guardian.querySelector('[role="status"]');
  const models = {
    1: ['1', 'third'], 2: ['2', 'forth'], 3: ['3', 'second'],
    4: ['4', 'first'], 5: ['5', 'tripo_convert']
  };
  const [folder, filename] = models[Number(guardian.dataset.catSlot) + 1] || models[1];
  const base = `${guardian.closest('[data-cat-gallery]').dataset.modelBase}${folder}/`;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x73737d, 2));
  const key = new THREE.DirectionalLight(0xfff3cb, 2.6);
  key.position.set(2, 3, 4);
  scene.add(key);
  const group = new THREE.Group();
  scene.add(group);
  const camera = new THREE.PerspectiveCamera(30, 1, .1, 30);
  camera.position.set(0, .05, 5);
  const index = Number(guardian.dataset.catSlot);
  let rotation = 0;
  let dragging = false;
  let pointerId = null;
  let lastX = 0;
  let phase = 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  guardian.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    dragging = true; pointerId = event.pointerId; lastX = event.clientX;
    rotation = group.rotation.y; phase = 0;
    guardian.setPointerCapture(pointerId);
  });
  guardian.addEventListener('pointermove', event => {
    if (!dragging || event.pointerId !== pointerId) return;
    rotation += (event.clientX - lastX) * .014;
    group.rotation.y = rotation; lastX = event.clientX;
  });
  const stop = () => { dragging = false; pointerId = null; };
  guardian.addEventListener('pointerup', stop);
  guardian.addEventListener('pointercancel', stop);
  guardian.addEventListener('lostpointercapture', stop);
  guardian.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home'].includes(event.key)) return;
    event.preventDefault();
    rotation = event.key === 'Home' ? 0 : rotation + (event.key === 'ArrowLeft' ? -.2 : .2);
    phase = 0; group.rotation.y = rotation;
  });
  const resize = () => {
    const rect = guardian.getBoundingClientRect();
    renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
    camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height);
    camera.position.z = Math.max(5, 1.3 / (Math.tan(THREE.MathUtils.degToRad(15)) * camera.aspect));
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(guardian);
  resize();
  try {
    const materials = await new MTLLoader().setPath(base).loadAsync(`${filename}.mtl`);
    materials.preload();
    const object = await new OBJLoader().setMaterials(materials).setPath(base).loadAsync(`${filename}.obj`);
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 1.85 / Math.max(size.x, size.y, size.z);
    object.scale.setScalar(scale);
    object.position.copy(center).multiplyScalar(-scale);
    group.add(object);
    if (status) status.hidden = true;
  } catch (error) {
    if (status) status.textContent = 'Unable to load';
    throw error;
  }
  let frame;
  let lastTime = performance.now();
  const render = time => {
    const delta = Math.min(time - lastTime, 50) / 1000;
    lastTime = time;
    if (!dragging && !reducedMotion.matches && !document.hidden) phase += delta;
    const t = phase;
    const active = !dragging && !reducedMotion.matches;
    group.rotation.set(0, rotation, 0);
    group.position.y = 0;
    if (active) {
      // Different personalities: sway, nod, float, dance, and slow turntable.
      if (index === 0) { group.rotation.y += Math.sin(t * .9) * .35; group.rotation.z = Math.sin(t * 1.8) * .045; }
      if (index === 1) { group.rotation.x = Math.sin(t * 1.3) * .12; group.rotation.y += Math.sin(t * .65) * .18; }
      if (index === 2) { group.position.y = Math.sin(t * 1.25) * .12; group.rotation.y += Math.sin(t * .8) * .28; }
      if (index === 3) { group.rotation.z = Math.sin(t * 1.6) * .13; group.position.y = Math.sin(t * 3.2) * .055; group.rotation.y += Math.sin(t * .7) * .2; }
      if (index === 4) group.rotation.y += t * .28;
    }
    guardian.style.setProperty('--shadow-scale', String(1 - Math.max(0, group.position.y) * 1.4));
    renderer.render(scene, camera);
    frame = requestAnimationFrame(render);
  };
  let visible = false;
  const updateAnimation = () => {
    cancelAnimationFrame(frame);
    if (visible && !document.hidden) frame = requestAnimationFrame(render);
  };
  const visibility = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    updateAnimation();
  });
  visibility.observe(guardian);
  document.addEventListener('visibilitychange', updateAnimation);
}
