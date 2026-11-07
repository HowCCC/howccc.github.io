// Fetch models only as the bottom of the page approaches the viewport.
const gallery = document.querySelector('[data-cat-gallery]');
if (gallery) {
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    initGallery().catch(error => {
      console.error('Cat gallery:', error);
      gallery.querySelectorAll('[role="status"]').forEach(status => {
        status.textContent = '3D unavailable';
      });
    });
  }, { rootMargin: '300px' });
  observer.observe(gallery);
}

async function initGallery() {
  const [THREE, { MTLLoader }, { OBJLoader }] = await Promise.all([
    import('./vendor/three.module.js'), import('./vendor/MTLLoader.js'), import('./vendor/OBJLoader.js')
  ]);
  const canvas = gallery.querySelector('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const models = [
    ['1', 'third'],
    ['2', 'forth'],
    ['3', 'second'],
    ['4', 'first'],
    ['5', 'tripo_convert']
  ];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const views = models.map((model, index) => {
    const scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x808090, 2));
    const light = new THREE.DirectionalLight(0xffffff, 2.4);
    light.position.set(3, 4, 5);
    scene.add(light);
    const group = new THREE.Group();
    scene.add(group);
    const camera = new THREE.PerspectiveCamera(32, 1, .1, 30);
    camera.position.set(0, 0, 5);
    const button = gallery.querySelector(`[data-cat-slot="${index}"]`);
    const view = { scene, group, camera, angle: 0, dragging: false, phase: 0 };
    let pointer = null;
    let lastX = 0;
    button.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      pointer = event.pointerId;
      lastX = event.clientX;
      view.angle = group.rotation.y;
      view.phase = 0;
      view.dragging = true;
      button.setPointerCapture(pointer);
    });
    button.addEventListener('pointermove', event => {
      if (event.pointerId !== pointer) return;
      view.angle += (event.clientX - lastX) * .015;
      lastX = event.clientX;
      group.rotation.y = view.angle;
    });
    const stop = () => { pointer = null; view.dragging = false; };
    button.addEventListener('pointerup', stop);
    button.addEventListener('pointercancel', stop);
    button.addEventListener('lostpointercapture', stop);
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home'].includes(event.key)) return;
      event.preventDefault();
      view.angle = event.key === 'Home' ? 0 : view.angle + (event.key === 'ArrowLeft' ? -.2 : .2);
      view.phase = 0;
      group.rotation.y = view.angle;
    });
    return view;
  });
  let width = 1, height = 1;
  new ResizeObserver(() => {
    width = Math.max(1, gallery.clientWidth);
    height = Math.max(1, gallery.clientHeight);
    renderer.setSize(width, height, false);
    views.forEach(view => {
      view.camera.aspect = width / models.length / height;
      view.camera.position.z = Math.max(5, 1.25 / (Math.tan(THREE.MathUtils.degToRad(16)) * view.camera.aspect));
      view.camera.updateProjectionMatrix();
    });
  }).observe(gallery);

  let visible = false, frame = 0, lastTime = 0;
  function animate(time) {
    const delta = Math.min(time - lastTime, 50) / 1000;
    lastTime = time;
    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setScissorTest(true);
    views.forEach((view, index) => {
      if (!view.dragging && !reducedMotion.matches) view.phase += delta * .8;
      view.group.rotation.y = view.angle + (view.dragging || reducedMotion.matches ? 0 : Math.sin(view.phase) * .12);
      const left = Math.round(index * width / models.length);
      const slotWidth = Math.round((index + 1) * width / models.length) - left;
      renderer.setViewport(left, 0, slotWidth, height);
      renderer.setScissor(left, 0, slotWidth, height);
      renderer.render(view.scene, view.camera);
    });
    frame = requestAnimationFrame(animate);
  }
  function updateAnimation() {
    cancelAnimationFrame(frame);
    if (visible && !document.hidden) frame = requestAnimationFrame(animate);
  }
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    updateAnimation();
  }).observe(gallery);
  document.addEventListener('visibilitychange', updateAnimation);

  // Independent models load together; failure in one does not hide the others.
  await Promise.all(models.map(async ([folder, filename], index) => {
    const status = gallery.querySelector(`[data-cat-slot="${index}"] [role="status"]`);
    try {
      const base = `${gallery.dataset.modelBase}${folder}/`;
      const materials = await new MTLLoader().setPath(base).loadAsync(`${filename}.mtl`);
      materials.preload();
      const object = await new OBJLoader().setMaterials(materials).setPath(base).loadAsync(`${filename}.obj`);
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const scale = 2.1 / Math.max(size.x, size.y, size.z);
      object.scale.setScalar(scale);
      object.position.copy(center).multiplyScalar(-scale);
      views[index].group.add(object);
      status.hidden = true;
    } catch (error) {
      status.textContent = 'Unable to load';
      console.error(`Cat ${folder}:`, error);
    }
  }));
}
