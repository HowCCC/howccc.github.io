import * as THREE from './vendor/three.module.js';
import { MTLLoader } from './vendor/MTLLoader.js';
import { OBJLoader } from './vendor/OBJLoader.js';

(() => {
  const root = document.documentElement;
  const canvas = document.querySelector('[data-profile-canvas]');
  const portrait = document.querySelector('[data-profile-portrait]');
  if (!canvas || !portrait) return;

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
  keyLight.position.set(2, 3, 4);
  scene.add(keyLight);
  const fill = new THREE.DirectionalLight(0x9fc8ff, 1.15);
  fill.position.set(-3, 1, 2);
  scene.add(fill);

  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let userRotationY = 0;
  let idlePhase = 0;
  let lastFrameTime = 0;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  canvas.addEventListener('pointerdown', event => {
    dragging = true;
    userRotationY = modelGroup.rotation.y;
    idlePhase = 0;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', event => {
    if (!dragging) return;
    userRotationY += (event.clientX - lastX) * .012;
    modelGroup.rotation.y = userRotationY;
    modelGroup.rotation.x = clamp(modelGroup.rotation.x + (event.clientY - lastY) * .008, -.45, .45);
    lastX = event.clientX;
    lastY = event.clientY;
  });
  const stopDragging = () => {
    if (!dragging) return;
    dragging = false;
    userRotationY = modelGroup.rotation.y;
    idlePhase = 0;
  };
  canvas.addEventListener('pointerup', stopDragging);
  canvas.addEventListener('pointercancel', stopDragging);
  canvas.addEventListener('lostpointercapture', stopDragging);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const addModel = object => {
    object.traverse(child => {
      if (!child.isMesh) return;
      if (!child.material || Array.isArray(child.material)) {
        child.material = new THREE.MeshStandardMaterial({ color: 0xc9b99a, roughness: .72, metalness: .05 });
      }
      child.material.transparent = true;
      child.material.alphaTest = .02;
      child.material.side = THREE.DoubleSide;
    });
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 2.5 / Math.max(size.x, size.y, size.z);
    object.scale.setScalar(scale);
    object.position.set(-center.x * scale + .14, -center.y * scale - .08, -center.z * scale + .26);
    modelGroup.add(object);
  };

  const base = '/assets/models/';
  new MTLLoader().setPath(base).load('human_character_3d_model.mtl', materials => {
    materials.preload();
    new OBJLoader().setMaterials(materials).setPath(base).load('human_character_3d_model.obj', addModel, undefined, () => {
      new OBJLoader().setPath(base).load('human_character_3d_model.obj', addModel);
    });
  }, undefined, () => {
    new OBJLoader().setPath(base).load('human_character_3d_model.obj', addModel);
  });

  const animate = time => {
    requestAnimationFrame(animate);
    const elapsed = Math.min(time - lastFrameTime, 50);
    lastFrameTime = time;
    if (!dragging && !document.hidden) {
      idlePhase += elapsed * .0011;
      modelGroup.rotation.y = userRotationY + Math.sin(idlePhase) * .11;
    }
    renderer.render(scene, camera);
  };
  animate(0);
})();
