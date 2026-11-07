import * as THREE from './vendor/three.module.js';
import { MTLLoader } from './vendor/MTLLoader.js';
import { OBJLoader } from './vendor/OBJLoader.js';
import { GLTFLoader } from './vendor/GLTFLoader.js';

(() => {
  const root = document.documentElement;
  const canvas = document.querySelector('[data-profile-canvas]');
  const portrait = document.querySelector('[data-profile-portrait]');
  const frame = portrait?.querySelector('[data-profile-switch]');
  if (!canvas || !portrait || !frame) return;
  root.classList.add('profile-3d-mode');
  root.classList.remove('profile-2d-mode');
  root.dataset.profileMode = '3d';

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, .1, 1000);
  camera.position.set(0, .12, 5.3);
  const modelGroup = new THREE.Group();
  scene.add(modelGroup);
  scene.add(new THREE.HemisphereLight(0xfff7dc, 0x52545a, 2.1));
  const keyLight = new THREE.DirectionalLight(0xffe6a0, 2.3);
  keyLight.position.set(2, 3, 4); scene.add(keyLight);
  const fill = new THREE.DirectionalLight(0x9fc8ff, 1.15);
  fill.position.set(-3, 1, 2); scene.add(fill);

  let dragging = false, canvasPointerBlocked = false, lastX = 0, lastY = 0, userRotationY = 0, idlePhase = 0, lastFrameTime = 0;
  let currentIndex = 0, switching = false;
  const models = [null, null];
  const status = portrait.querySelector('[role="status"]');
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const setOpacity = (object, opacity) => object?.traverse(child => {
    if (!child.isMesh || !child.material) return;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach(material => { material.transparent = true; material.opacity = opacity; material.depthWrite = opacity > .98; });
  });
  const prepareObject = object => {
    object.traverse(child => {
      if (!child.isMesh) return;
      if (!child.material || Array.isArray(child.material)) child.material = new THREE.MeshStandardMaterial({ color: 0xc9b99a, roughness: .72, metalness: .05 });
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach(material => { material.transparent = true; material.alphaTest = .02; material.side = THREE.DoubleSide; });
    });
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 2.5 / Math.max(size.x, size.y, size.z);
    object.scale.setScalar(scale);
    object.position.set(-center.x * scale + .14, -center.y * scale - .08, -center.z * scale + .26);
    return object;
  };
  const loadFirst = () => new Promise(resolve => {
    const add = object => { models[0] = prepareObject(object); modelGroup.add(models[0]); resolve(models[0]); };
    new MTLLoader().setPath('/assets/models/').load('human_character_3d_model.mtl', materials => {
      materials.preload();
      new OBJLoader().setMaterials(materials).setPath('/assets/models/').load('human_character_3d_model.obj', add, undefined, () => new OBJLoader().setPath('/assets/models/').load('human_character_3d_model.obj', add));
    }, undefined, () => new OBJLoader().setPath('/assets/models/').load('human_character_3d_model.obj', add));
  });
  const loadSecond = () => {
    if (models[1]) return Promise.resolve(models[1]);
    return new GLTFLoader().setPath('/assets/models/second-avatar/').loadAsync('portrait.glb').then(result => {
      models[1] = prepareObject(result.scene); setOpacity(models[1], 0); modelGroup.add(models[1]); return models[1];
    });
  };

  const photos = [...portrait.querySelectorAll('.profile-portrait__backdrop img')];
  const resize = () => { const rect = canvas.getBoundingClientRect(); renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false); camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height); camera.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(canvas); resize();
  const showStatus = message => { if (status) { status.textContent = message; status.hidden = !message; } };
  const setPhoto = index => { photos.forEach((photo, i) => photo.classList.toggle('is-current', i === index)); portrait.dataset.profileIndex = String(index + 1); frame.setAttribute('aria-label', `Switch to portrait ${index === 0 ? 2 : 1} of 2`); };
  const switchTo = async index => {
    if (switching || index === currentIndex) return;
    switching = true; frame.setAttribute('aria-busy', 'true'); showStatus('Preparing portrait…');
    try {
      // Decode the destination photo before changing either part of the portrait.
      await photos[index].decode();
      const target = index === 0 ? models[0] : await loadSecond();
      if (!target) throw new Error('Target portrait is not ready');
      if (index === 0) setOpacity(target, 0);
      if (!target.parent) modelGroup.add(target);
      const from = models[currentIndex]; const start = performance.now(); setPhoto(index);
      const animateSwitch = now => { const progress = Math.min(1, (now - start) / 760); const eased = progress < .5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2; setOpacity(from, 1 - eased); setOpacity(target, eased); if (progress < 1) requestAnimationFrame(animateSwitch); else { if (from) modelGroup.remove(from); currentIndex = index; switching = false; frame.removeAttribute('aria-busy'); showStatus(''); } };
      requestAnimationFrame(animateSwitch);
    } catch (error) { console.error('Second portrait:', error); frame.removeAttribute('aria-busy'); showStatus('Unable to load portrait'); switching = false; }
  };
  frame.addEventListener('click', () => switchTo(currentIndex === 0 ? 1 : 0));
  const pointIsInFrame = event => { const rect = frame.getBoundingClientRect(); return event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom; };
  canvas.addEventListener('pointerdown', event => { if (pointIsInFrame(event)) { canvasPointerBlocked = true; return; } canvasPointerBlocked = false; dragging = true; userRotationY = modelGroup.rotation.y; idlePhase = 0; lastX = event.clientX; lastY = event.clientY; canvas.setPointerCapture(event.pointerId); });
  canvas.addEventListener('pointermove', event => { if (canvasPointerBlocked || !dragging) return; userRotationY += (event.clientX - lastX) * .012; modelGroup.rotation.y = userRotationY; modelGroup.rotation.x = clamp(modelGroup.rotation.x + (event.clientY - lastY) * .008, -.45, .45); lastX = event.clientX; lastY = event.clientY; });
  const stopDragging = () => { canvasPointerBlocked = false; if (dragging) { dragging = false; userRotationY = modelGroup.rotation.y; idlePhase = 0; } };
  canvas.addEventListener('click', event => { if (pointIsInFrame(event)) switchTo(currentIndex === 0 ? 1 : 0); });
  canvas.addEventListener('pointerup', stopDragging); canvas.addEventListener('pointercancel', stopDragging); canvas.addEventListener('lostpointercapture', stopDragging);
  loadFirst().then(() => { const idle = window.requestIdleCallback || (callback => setTimeout(callback, 1400)); idle(() => loadSecond().catch(() => {})); });
  const animate = time => { requestAnimationFrame(animate); const elapsed = Math.min(time - lastFrameTime, 50); lastFrameTime = time; if (!dragging && !document.hidden && !switching) { idlePhase += elapsed * .0011; modelGroup.rotation.y = userRotationY + Math.sin(idlePhase) * .11; } renderer.render(scene, camera); };
  animate(0);
})();
