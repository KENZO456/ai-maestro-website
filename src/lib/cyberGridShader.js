import * as THREE from 'three';

const vert = `void main() { gl_Position = vec4(position, 1.0); }`;
const frag = `
  precision mediump float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec2 iMouse;
  uniform vec3 uBase;
  uniform vec3 uAccent;
  uniform float uIntensity;

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;
    float t = iTime * 0.2;
    float mouseDist = length(uv - mouse);
    uv += sin(mouseDist * 16.0 - t * 4.0) * 0.08 * smoothstep(0.4, 0.0, mouseDist);
    vec2 gridUv = abs(fract(uv * 10.0) - 0.5);
    float line = pow(1.0 - min(gridUv.x, gridUv.y), 50.0);
    vec3 color = uBase * line * (0.55 + sin(t * 2.0) * 0.18);
    float energy = sin(uv.x * 18.0 + t * 5.0) * sin(uv.y * 18.0 + t * 3.0);
    color += uAccent * smoothstep(0.85, 1.0, energy) * line;
    color += vec3(1.0) * smoothstep(0.10, 0.0, mouseDist) * 0.4;
    gl_FragColor = vec4(color * uIntensity, 1.0);
  }
`;

function hexToVec3(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function mountCyberShader(container, opts = {}) {
  const intensity = opts.intensity ?? 1.0;
  const base = hexToVec3(opts.base || '#1100D8');
  const accent = hexToVec3(opts.accent || '#FAF8F4');
  const RES_CAP = 720;
  const DPR_CAP = 1;

  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
  container.appendChild(renderer.domElement);
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const clock = new THREE.Clock();

  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2() },
    iMouse: { value: new THREE.Vector2(0, 0) },
    uBase: { value: new THREE.Vector3(...base) },
    uAccent: { value: new THREE.Vector3(...accent) },
    uIntensity: { value: intensity },
  };

  const material = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  function onResize() {
    const cw = container.clientWidth || 1;
    const ch = container.clientHeight || 1;
    const longEdge = Math.max(cw, ch);
    const scale = longEdge > RES_CAP ? RES_CAP / longEdge : 1;
    const rw = Math.max(1, Math.round(cw * scale));
    const rh = Math.max(1, Math.round(ch * scale));
    renderer.setSize(rw, rh, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    uniforms.iResolution.value.set(rw, rh);
  }
  const ro = new ResizeObserver(onResize);
  ro.observe(container);
  onResize();

  let lastMove = 0;
  function onMouseMove(e) {
    const now = performance.now();
    if (now - lastMove < 33) return;
    lastMove = now;
    const r = container.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * uniforms.iResolution.value.x;
    const y = uniforms.iResolution.value.y - ((e.clientY - r.top) / r.height) * uniforms.iResolution.value.y;
    uniforms.iMouse.value.set(x, y);
  }
  window.addEventListener('mousemove', onMouseMove, { passive: true });

  let visible = false;
  const io = new IntersectionObserver((entries) => {
    visible = entries.some((e) => e.isIntersecting);
  }, { threshold: 0 });
  io.observe(container);

  let lastFrame = 0;
  const minFrameDelta = 1 / 30;
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    const t = clock.getElapsedTime();
    if (t - lastFrame < minFrameDelta) return;
    lastFrame = t;
    uniforms.iTime.value = t;
    renderer.render(scene, camera);
  });

  return function dispose() {
    window.removeEventListener('mousemove', onMouseMove);
    ro.disconnect();
    io.disconnect();
    renderer.setAnimationLoop(null);
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    material.dispose();
    mesh.geometry.dispose();
    renderer.dispose();
  };
}
