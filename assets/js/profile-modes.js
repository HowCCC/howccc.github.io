import * as THREE from './vendor/three.module.js';
import { MTLLoader } from './vendor/MTLLoader.js';
import { OBJLoader } from './vendor/OBJLoader.js';

(() => {
  const root = document.documentElement;
  const canvas = document.querySelector('[data-profile-canvas]');
  const portrait = document.querySelector('[data-profile-portrait]');
  const convert = document.querySelector('[data-profile-convert]');
  const view3d = document.querySelector('[data-profile-3d]');
  if (!canvas || !portrait || !convert || !view3d) return;

  const key = 'profile-presentation-mode';
  const setMode = mode => {
    root.classList.toggle('profile-3d-mode', mode === '3d');
    root.classList.toggle('profile-2d-mode', mode !== '3d');
    root.dataset.profileMode = mode;
    try { localStorage.setItem(key, mode); } catch (_) {}
  };
  let saved = '3d';
  try { saved = localStorage.getItem(key) || '3d'; } catch (_) {}
  setMode(saved === '2d' ? '2d' : '3d');
  view3d.addEventListener('click', e => { e.preventDefault(); setMode('3d'); window.scrollTo({top: 0, behavior: 'smooth'}); });
  convert.addEventListener('click', e => { e.preventDefault(); setMode('2d'); });

  const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true, powerPreference: 'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, 1, .1, 1000);
  camera.position.set(0, 0, 6);
  const group = new THREE.Group(); scene.add(group);
  scene.add(new THREE.HemisphereLight(0xfff7dc, 0x52545a, 2.2));
  const keyLight = new THREE.DirectionalLight(0xffe6a0, 2.4); keyLight.position.set(2, 3, 4); scene.add(keyLight);
  const fill = new THREE.DirectionalLight(0x9fc8ff, 1.1); fill.position.set(-3, 1, 2); scene.add(fill);

  let dragging = false, lastX = 0, lastY = 0;
  let userRotationY = 0;
  let idlePhase = 0, lastFrameTime = 0;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  canvas.addEventListener('pointerdown', e => {
    dragging = true;
    userRotationY = group.rotation.y;
    idlePhase = 0;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (!dragging) return;
    userRotationY += (e.clientX - lastX) * .012;
    group.rotation.y = userRotationY;
    group.rotation.x = clamp(group.rotation.x + (e.clientY - lastY) * .008, -.55, .55);
    lastX = e.clientX;
    lastY = e.clientY;
  });
  const stop = () => {
    if (!dragging) return;
    dragging = false;
    userRotationY = group.rotation.y;
    idlePhase = 0;
  };
  canvas.addEventListener('pointerup', stop);
  canvas.addEventListener('pointercancel', stop);
  canvas.addEventListener('lostpointercapture', stop);

  const resize = () => { const r=canvas.getBoundingClientRect(); const w=Math.max(1,r.width), h=Math.max(1,r.height); renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(canvas); resize();
  const base = '/assets/models/';
  const addObject = object => {
    object.traverse(child => {
      if (!child.isMesh) return;
      if (!child.material || Array.isArray(child.material)) child.material = new THREE.MeshStandardMaterial({color: 0xc9b99a, roughness: .72, metalness: .05});
      child.material.transparent = true;
      child.material.alphaTest = .02;
      child.material.side = THREE.DoubleSide;
    });
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    // Leave a little breathing room around the head and shoulders in the compact intro panel.
    const scale = 2.05 / Math.max(size.x, size.y, size.z);
    object.scale.setScalar(scale);
    object.position.set(-center.x * scale, -center.y * scale - .04, -center.z * scale);
    group.add(object);
  };
  new MTLLoader().setPath(base).load('human_portrait_3d_model.mtl', materials => {
    materials.preload();
    new OBJLoader().setMaterials(materials).setPath(base).load('human_portrait_3d_model.obj', addObject, undefined, () => {
      new OBJLoader().setPath(base).load('human_portrait_3d_model.obj', addObject);
    });
  }, undefined, () => {
    new OBJLoader().setPath(base).load('human_portrait_3d_model.obj', addObject);
  });
  const animate = time => {
    requestAnimationFrame(animate);
    const elapsed = Math.min(time - lastFrameTime, 50);
    lastFrameTime = time;
    if (!dragging && root.dataset.profileMode === '3d' && !document.hidden) {
      idlePhase += elapsed * .0011;
      group.rotation.y = userRotationY + Math.sin(idlePhase) * .11;
    }
    renderer.render(scene, camera);
  };
  animate(0);
})();
