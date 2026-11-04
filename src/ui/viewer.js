// The 3D view: the part (step 1) or the stock being cut (step 4).
// Z is up, like the machine.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const OP_COLORS = { face: '#93a2b4', pocket: '#1abc9c', hole: '#4ea1ff', drill: '#4ea1ff', step: '#2ecc71', corners: '#48d1b4', cutout: '#a78bfa', rough3d: '#f5a524', rest3d: '#e3c341', finish3d: '#ff7a59', chamfer: '#f472b6', thread: '#c084fc' };

export const STOCK_COLORS = {
  softwood: '#d8b38a', hardwood: '#9c6b45', mdf: '#b59672', plastic: '#d9e2ea', aluminum: '#b9c1c9', foam: '#c7b8a5',
};

// Columns cut below the stock's bottom are holes: not drawn. With flat set,
// the grid is drawn on the bed instead (the underside).
function throughHoles(mat, bottom, flat, base) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uCut = { value: bottom - 0.05 };
    sh.uniforms.uBase = { value: base || new THREE.Color(1, 1, 1) };
    sh.uniforms.uBottom = { value: bottom };
    sh.vertexShader = 'varying float vZ;\nuniform float uBottom;\n' + (flat ? '' : 'attribute vec4 wall;\nvarying vec4 vWall;\n') + sh.vertexShader
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\n' + (flat ? 'objectNormal = vec3(0.0, 0.0, -1.0);' : ''))
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvZ = transformed.z;\n' + (flat ? 'transformed.z = uBottom;' : 'vWall = wall;'));
    sh.fragmentShader = 'varying float vZ;\nuniform float uCut;\n' + sh.fragmentShader
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (vZ < uCut) discard;');
    // The top's normals always point out of the material; a wall triangle
    // that folds over at a curve must not flip its normal, or it shows as a
    // dark or bright streak
    // A pixel between a wall's top and foot is on the wall: its normal is the
    // way the wall faces, smooth along it. On the top or the floor (at the
    // highest or lowest height around) the vertex normal, which points up.
    // Decided by height alone, so it doesn't change with the view.
    // Walls take the stock's own color, the same all the way along (per
    // column colors stripe where a tab leaves a ledge partway down).
    if (!flat) sh.fragmentShader = 'varying vec4 vWall;\nuniform vec3 uBase;\n' + sh.fragmentShader
      .replace('#include <color_fragment>', '#include <color_fragment>\nfloat onWall = dot(vWall.xy, vWall.xy) > 1e-6 ? smoothstep(0.0, 0.03, vZ - vWall.z) * smoothstep(0.0, 0.03, vWall.w - vZ) : 0.0;\ndiffuseColor.rgb = mix(diffuseColor.rgb, uBase, onWall);')
      .replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('gl_FrontFacing ? 1.0 : - 1.0', '1.0')
      + '\nif (onWall > 0.0) normal = normalize(mix(normal, (viewMatrix * vec4(normalize(vWall.xy), 0.0, 0.0)).xyz, onWall));');
  };
  mat.customProgramCacheKey = () => `through-${flat}`;
}

const sel_any = (points, key) => points.some((p) => p.key === key);

// A label that always faces the camera
function textSprite(text, color, height) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.font = '600 84px Inter, system-ui, sans-serif';
  g.fillStyle = '#' + new THREE.Color(color).getHexString();
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  s.scale.set(height * 2, height, 1);
  s.renderOrder = 6;
  return s;
}

export class Viewer {
  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'ncc-viewport';
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.el.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 10000);
    this.camera.up.set(0, 0, 1);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.12;
    this.controls.addEventListener('start', () => { this.userMoved = true; });
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(-0.6, -1, 1.6);
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(1, 0.6, 0.4);
    this.scene.add(fill);
    this.content = new THREE.Group();
    this.scene.add(this.content);
    this.onFrame = null;
    this.alive = true;
    this.resize = new ResizeObserver(() => this.fit());
    this.resize.observe(this.el);
    const loop = (t) => {
      if (!this.alive) return;
      if (!this.el.isConnected && this.detachedSince && t - this.detachedSince > 3000 && !document.querySelector('.ncc-wrapper')) { this.dispose(); return; }
      if (!this.el.isConnected) this.detachedSince ||= t; else this.detachedSince = 0;
      if (this.onFrame) this.onFrame(t);
      this.controls.update();
      if (this.el.isConnected) this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    this.setupPicking();
  }

  fit() {
    const w = this.el.clientWidth, h = this.el.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // Until the operator turns or zooms, keep the part filling the view
    if (!this.userMoved) this.refit();
  }

  clear() {
    for (const c of [...this.content.children]) {
      this.content.remove(c);
      c.traverse((o) => { o.geometry?.dispose(); if (o.material) [].concat(o.material).forEach((m) => m.dispose()); });
    }
    this.pickMesh = null;
    this.markers = null;
  }

  // Looks at a box from the front-left, a little above, as close as it can
  // while the whole box stays in view (margin: share of the view kept clear).
  frame(min, max, margin = 0.08) {
    this.fitBox = [min, max, margin];
    this.userMoved = false;
    this.refit();
  }

  refit() {
    if (!this.fitBox) return;
    const [min, max, margin] = this.fitBox;
    const c = new THREE.Vector3((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
    const size = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2], 1e-3);
    const dir = new THREE.Vector3(-0.45, -0.8, 0.75).normalize();
    const corners = [];
    for (const x of [min[0], max[0]]) for (const y of [min[1], max[1]]) for (const z of [min[2], max[2]]) corners.push(new THREE.Vector3(x, y, z));
    // Each round: move in or out so the box's outline on screen fills the
    // view less the margin, then slide sideways so that outline is centred
    // (perspective makes the near end bigger, so the middle isn't the centre).
    const target = c.clone();
    let d = size * 2;
    const place = () => {
      this.camera.position.copy(target).addScaledVector(dir, d);
      this.camera.near = d / 100; this.camera.far = d * 100;
      this.camera.lookAt(target);
      this.camera.updateMatrixWorld();
      this.camera.updateProjectionMatrix();
    };
    for (let i = 0; i < 8; i++) {
      place();
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const p of corners) {
        const q = p.clone().project(this.camera);
        x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y);
      }
      const ext = Math.max((x1 - x0) / 2, (y1 - y0) / 2);
      if (!(ext > 0)) break;
      const halfH = d * Math.tan((this.camera.fov * Math.PI) / 360), halfW = halfH * this.camera.aspect;
      const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1);
      target.addScaledVector(right, ((x0 + x1) / 2) * halfW).addScaledVector(up, ((y0 + y1) / 2) * halfH);
      d *= ext / (1 - margin);
    }
    place();
    this.controls.target.copy(target);
    this.controls.update();
  }

  showPart(mesh, overlays = []) {
    this.clear();

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(mesh.positions, 3));
    g.setIndex(new THREE.BufferAttribute(mesh.indices, 1));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x8ea4bb, metalness: 0.15, roughness: 0.55, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
    this.content.add(m);
    this.pickMesh = m;
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(g, 25), new THREE.LineBasicMaterial({ color: 0x2b3a4c, transparent: true, opacity: 0.55 }));
    this.content.add(edges);
    for (const o of overlays) this.addLoops(o.loops, o.z, o.color, o.dashed, o.opacity);
    g.computeBoundingBox();
    const b = g.boundingBox;
    if (!this.keepCamera) this.frame(b.min.toArray(), b.max.toArray());
  }

  addLoops(loops, z, color, dashed, opacity = 0.95) {
    for (const loop of loops) {
      const pts = loop.map(([x, y]) => new THREE.Vector3(x, y, z));
      const geo = new THREE.BufferGeometry().setFromPoints([...pts, pts[0]]);
      const mat = dashed
        ? new THREE.LineDashedMaterial({ color, dashSize: 2, gapSize: 1.5, transparent: true, opacity, depthTest: false })
        : new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthTest: false });
      const line = new THREE.Line(geo, mat);
      if (dashed) line.computeLineDistances();
      line.renderOrder = 2;
      this.content.add(line);
    }
  }

  // A click (not a drag) on the part reports the face's direction.
  setupPicking() {
    const dom = this.renderer.domElement;
    let down = null;
    dom.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
    dom.addEventListener('pointerup', (e) => {
      if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) return;
      const r = dom.getBoundingClientRect();
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), this.camera);
      // Markers (zero points) first: each carries the key it stands for
      if (this.markers?.length && this.onMarker) {
        const m = ray.intersectObjects(this.markers)[0];
        if (m?.object.userData.axis) { this.onAxis?.(m.object.userData.axis); return; }
        if (m) { this.onMarker(m.object.userData.key); return; }
      }
      if (!this.pickMesh || !this.onPick) return;
      const hit = ray.intersectObject(this.pickMesh)[0];
      if (!hit || !hit.face) return;
      const n = hit.face.normal.clone();
      // A face seen from behind is the other side
      if (n.dot(ray.ray.direction) > 0) n.negate();
      this.onPick([n.x, n.y, n.z]);
    });
  }

  // Step 2: the stock with the part inside, the nine zero points on the
  // face Z0 is on, and X/Y/Z arrows (red, green, blue) from the chosen one.
  showZero({ stock, part, points, selected, zFace, color, accent = '#4c6ef5' }) {
    this.clear();

    const W = stock.maxX - stock.minX, D = stock.maxY - stock.minY, T = stock.top - stock.bottom;
    const size = Math.max(W, D, T);
    const box = new THREE.BoxGeometry(W, D, T);
    box.translate((stock.minX + stock.maxX) / 2, (stock.minY + stock.maxY) / 2, (stock.top + stock.bottom) / 2);
    const block = new THREE.Mesh(box, new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.45, roughness: 0.9, depthWrite: false }));
    block.renderOrder = 2;
    this.content.add(block);
    this.content.add(new THREE.LineSegments(new THREE.EdgesGeometry(box), new THREE.LineBasicMaterial({ color: new THREE.Color(color).multiplyScalar(0.6) })));
    if (part) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(part.positions, 3));
      g.setIndex(new THREE.BufferAttribute(part.indices, 1));
      g.computeVertexNormals();
      this.partMesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x8ea4bb, metalness: 0.15, roughness: 0.55 }));
      this.content.add(this.partMesh);
    } else this.partMesh = null;
    const z = zFace === 'bed' ? stock.bottom : stock.top;
    const r = size * 0.014;
    this.markers = [];
    for (const p of points) {
      const sel = p.key === selected;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(sel ? r * 1.3 : r, 24, 16), new THREE.MeshBasicMaterial({ color: sel ? accent : 0xffffff }));
      dot.position.set(p.x, p.y, z);
      dot.userData.key = p.key;
      dot.renderOrder = 4;
      dot.material.depthTest = false;
      if (!sel) {
        const ring = new THREE.Mesh(new THREE.SphereGeometry(r * 1.25, 24, 16), new THREE.MeshBasicMaterial({ color: 0x5e6b75, depthTest: false }));
        ring.renderOrder = 3;
        dot.add(ring);
        // A bigger invisible ball so a finger can hit it
      }
      const hit = new THREE.Mesh(new THREE.SphereGeometry(r * 3.5, 12, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.key = p.key;
      dot.add(hit);
      this.markers.push(hit);
      this.content.add(dot);
      if (sel) {
        const pulse = new THREE.Mesh(new THREE.RingGeometry(r * 1.6, r * 2, 40), new THREE.MeshBasicMaterial({ color: accent, transparent: true, depthTest: false, side: THREE.DoubleSide }));
        pulse.position.copy(dot.position);
        pulse.renderOrder = 4;
        this.content.add(pulse);
        this.pulse = pulse;
        const L = size * 0.24;
        for (const [dir, col, label] of [[[1, 0, 0], 0xe74c3c, 'X'], [[0, 1, 0], 0x2ecc71, 'Y'], [[0, 0, 1], 0x4e8cff, 'Z']]) {
          // A thin rod rather than a 1px line, so the arrow reads at a glance
          const arrow = new THREE.ArrowHelper(new THREE.Vector3(...dir), dot.position, L, col, L * 0.15, L * 0.065);
          arrow.line.visible = false;
          const rod = new THREE.Mesh(new THREE.CylinderGeometry(size * 0.0028, size * 0.0028, L * 0.86, 12), new THREE.MeshBasicMaterial({ color: col, depthTest: false }));
          rod.position.y = L * 0.43;
          rod.renderOrder = 5;
          arrow.add(rod);
          arrow.cone.material.depthTest = false;
          arrow.renderOrder = 5; arrow.cone.renderOrder = 5;
          this.content.add(arrow);
          const sprite = textSprite(label, col, size * 0.05);
          sprite.position.copy(dot.position).add(new THREE.Vector3(...dir).multiplyScalar(L * 1.18));
          this.content.add(sprite);
          // A tap on the arrow or its letter turns the part (wider than the
          // thin arrow, so a finger finds it)
          const hit = new THREE.Mesh(new THREE.CylinderGeometry(L * 0.1, L * 0.1, L * 1.3, 10), new THREE.MeshBasicMaterial({ visible: false }));
          hit.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...dir));
          hit.position.copy(dot.position).add(new THREE.Vector3(...dir).multiplyScalar(L * 0.65));
          hit.userData.axis = label.toLowerCase();
          this.content.add(hit);
          this.markers.unshift(hit);
        }
      }
    }
    const front = textSprite('Front', 0x93a2b4, size * 0.04);
    front.position.set((stock.minX + stock.maxX) / 2, stock.minY - size * 0.08, stock.bottom);
    this.content.add(front);
    if (!this.keepCamera) this.frame([stock.minX, stock.minY, stock.bottom], [stock.maxX, stock.maxY, stock.top]);
    if (!sel_any(points, selected)) this.pulse = null;
    this.onFrame = (t) => {
      if (!this.pulse) return;
      const k = (t % 1600) / 1600;
      this.pulse.scale.setScalar(1 + k * 1.6);
      this.pulse.material.opacity = 0.8 * (1 - k);
      this.pulse.lookAt(this.camera.position);
    };
  }

  // Spins the part half a turn about its middle, around the Z axis (turned
  // on the table) or the X axis (turned over), easing in and out.
  spin(axis, ms = 700) {
    const m = this.partMesh;
    if (!m) return Promise.resolve();
    m.geometry.computeBoundingBox();
    const c = m.geometry.boundingBox.getCenter(new THREE.Vector3());
    const ax = axis === 'x' ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);
    m.matrixAutoUpdate = false;
    const t0 = performance.now();
    return new Promise((done) => {
      const step = (now) => {
        const k = Math.min(1, (now - t0) / ms), e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
        m.matrix.makeTranslation(c.x, c.y, c.z)
          .multiply(new THREE.Matrix4().makeRotationAxis(ax, Math.PI * e))
          .multiply(new THREE.Matrix4().makeTranslation(-c.x, -c.y, -c.z));
        m.matrixWorldNeedsUpdate = true;
        if (k < 1 && m.parent) requestAnimationFrame(step); else done();
      };
      requestAnimationFrame(step);
    });
  }

  // Step 4: the stock as a heightmap, the tool, and the toolpaths.
  showStock(hm, stockColor, part) {
    this.clear();
    this.keepCamera = false;

    const nx = hm.nx, ny = hm.ny, n = nx * ny;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
    const base = new THREE.Color(stockColor);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i;
      pos[k * 3] = hm.x0 + i * hm.cell; pos[k * 3 + 1] = hm.y0 + j * hm.cell; pos[k * 3 + 2] = hm.h[k];
      col[k * 3] = base.r; col[k * 3 + 1] = base.g; col[k * 3 + 2] = base.b;
    }
    const idx = new Uint32Array((nx - 1) * (ny - 1) * 6);
    let q = 0;
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      idx[q++] = a; idx[q++] = b; idx[q++] = d; idx[q++] = a; idx[q++] = d; idx[q++] = c;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
    const nor = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) nor[k * 3 + 2] = 1;
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3).setUsage(THREE.DynamicDrawUsage));
    const wall0 = new Float32Array(n * 4);
    for (let k = 0; k < n; k++) { wall0[k * 4 + 2] = hm.h[k]; wall0[k * 4 + 3] = hm.h[k]; }
    g.setAttribute('wall', new THREE.BufferAttribute(wall0, 4).setUsage(THREE.DynamicDrawUsage));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    // Smooth shading from the surface slope: curved walls read as curves,
    // not as stripes of grid facets
    const topMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: false, roughness: 0.8, metalness: stockColor === STOCK_COLORS.aluminum ? 0.5 : 0.05, side: THREE.DoubleSide });
    throughHoles(topMat, hm.bottom, false, base);
    const top = new THREE.Mesh(g, topMat);
    this.content.add(top);
    this.stock = { hm, geo: g, base, sides: this.makeSides(hm, base) };
    // The underside: the same grid laid flat on the bed, with the same holes
    const underMat = new THREE.MeshStandardMaterial({ color: base.clone().multiplyScalar(0.7), roughness: 0.9, side: THREE.DoubleSide });
    throughHoles(underMat, hm.bottom, true);
    this.content.add(new THREE.Mesh(g, underMat));

    if (part) {
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(part.positions, 3));
      pg.setIndex(new THREE.BufferAttribute(part.indices, 1));
      pg.computeVertexNormals();
      this.partGhost = new THREE.Mesh(pg, new THREE.MeshStandardMaterial({ color: 0x4ea1ff, transparent: true, opacity: 0.25, depthWrite: false }));
      this.partGhost.visible = false;
      this.content.add(this.partGhost);
    }
    this.tool = new THREE.Group();
    this.content.add(this.tool);
    this.frame([hm.x0, hm.y0, hm.bottom], [hm.x0 + (nx - 1) * hm.cell, hm.y0 + (ny - 1) * hm.cell, hm.top]);
  }

  // Walls around the stock that follow its edges as they are cut.
  makeSides(hm, base) {
    const edge = [];
    for (let i = 0; i < hm.nx; i++) edge.push(i);
    for (let j = 1; j < hm.ny; j++) edge.push(j * hm.nx + hm.nx - 1);
    for (let i = hm.nx - 2; i >= 0; i--) edge.push((hm.ny - 1) * hm.nx + i);
    for (let j = hm.ny - 2; j >= 0; j--) edge.push(j * hm.nx);
    const pos = new Float32Array(edge.length * 6), nor = new Float32Array(edge.length * 6);
    const idx = [];
    // One side after another: front, right, back, left; each faces straight
    // out, so a cut running off the edge doesn't stripe the side
    const sideOf = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const ends = [hm.nx, hm.nx + hm.ny - 1, 2 * hm.nx + hm.ny - 2];
    for (let e = 0; e < edge.length; e++) {
      const k = edge[e], x = hm.x0 + (k % hm.nx) * hm.cell, y = hm.y0 + Math.floor(k / hm.nx) * hm.cell;
      pos.set([x, y, hm.h[k], x, y, hm.bottom], e * 6);
      const [nx, ny] = sideOf[e < ends[0] ? 0 : e < ends[1] ? 1 : e < ends[2] ? 2 : 3];
      nor.set([nx, ny, 0, nx, ny, 0], e * 6);
      if (e < edge.length - 1) { const a = e * 2; idx.push(a, a + 1, a + 3, a, a + 3, a + 2); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setIndex(idx);
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: base.clone().multiplyScalar(0.85), roughness: 0.85, side: THREE.DoubleSide }));
    this.content.add(m);
    return { g, edge };
  }

  // Copies cut columns into the mesh; rows j0..j1 changed. Columns on a
  // wall sit on the tool's edge (hm.sx/sy), so walls follow the real curve.
  refreshStock(j0, j1, opColors) {
    const s = this.stock;
    if (!s || j1 < j0) return;
    const { hm, geo, base } = s;
    const nx = hm.nx, ny = hm.ny, H = hm.h;
    const pos = geo.attributes.position, col = geo.attributes.color, nor = geo.attributes.normal, wall = geo.attributes.wall;
    const c = new THREE.Color();
    const a0 = Math.max(0, j0), a1 = Math.min(ny - 1, j1);
    const step = hm.cell * 1.5;
    // Largest rise (sign 1) or drop (sign -1) to any of the 8 neighbours:
    // a column touching a wall only across a diagonal is on it too
    const jump = (i, j, sign) => {
      const hk = H[j * nx + i];
      let m = 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const ii = i + di, jj = j + dj;
        if ((di || dj) && ii >= 0 && jj >= 0 && ii < nx && jj < ny) m = Math.max(m, sign * (H[jj * nx + ii] - hk));
      }
      return m;
    };
    for (let j = a0; j <= a1; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i;
      pos.array[k * 3] = hm.x0 + i * hm.cell + (hm.sx ? hm.sx[k] : 0);
      pos.array[k * 3 + 1] = hm.y0 + j * hm.cell + (hm.sy ? hm.sy[k] : 0);
      pos.array[k * 3 + 2] = H[k];
      const o = hm.op[k];
      if (o) {
        c.copy(base).lerp(opColors[o - 1], 0.28);
        // Deeper cuts a little darker, so floors read
        c.multiplyScalar(0.82 + 0.18 * Math.max(0, Math.min(1, (H[k] - hm.bottom) / Math.max(1, hm.top - hm.bottom))));
      } else c.copy(base);
      col.array[k * 3] = c.r; col.array[k * 3 + 1] = c.g; col.array[k * 3 + 2] = c.b;
    }
    // Normals from the drawn points: across the row x across the column
    const P = pos.array;
    const n0 = Math.max(0, a0 - 1), n1 = Math.min(ny - 1, a1 + 1);
    for (let j = n0; j <= n1; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i;
      // On a wall (a neighbour much higher or lower): the normal points up
      // for the top or floor, and `wall` carries the way the wall faces; the
      // shader picks one per pixel, by how steep the triangle is
      // wall = (facing x, y, lowest, highest of the column and its neighbours)
      const W = wall.array, up = jump(i, j, 1), down = jump(i, j, -1);
      W[k * 4] = 0; W[k * 4 + 1] = 0; W[k * 4 + 2] = H[k]; W[k * 4 + 3] = H[k];
      if (hm.wx && (hm.wx[k] || hm.wy[k]) && (up > step || down > step)) {
        W[k * 4] = hm.wx[k]; W[k * 4 + 1] = hm.wy[k]; W[k * 4 + 2] = H[k] - down; W[k * 4 + 3] = H[k] + up;
        nor.array[k * 3] = 0; nor.array[k * 3 + 1] = 0; nor.array[k * 3 + 2] = 1;
        continue;
      }
      const l = (j * nx + Math.max(0, i - 1)) * 3, r = (j * nx + Math.min(nx - 1, i + 1)) * 3;
      const d = (Math.max(0, j - 1) * nx + i) * 3, u = (Math.min(ny - 1, j + 1) * nx + i) * 3;
      const ux = P[r] - P[l], uy = P[r + 1] - P[l + 1], uz = P[r + 2] - P[l + 2];
      const vx = P[u] - P[d], vy = P[u + 1] - P[d + 1], vz = P[u + 2] - P[d + 2];
      let x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
      const len = Math.hypot(x, y, z) || 1;
      if (z < 0) { x = -x; y = -y; z = -z; }
      nor.array[k * 3] = x / len; nor.array[k * 3 + 1] = y / len; nor.array[k * 3 + 2] = z / len;
    }
    // Ranges add up until the next upload (three clears them after it), so a
    // second refresh before a frame keeps the first one's rows
    pos.addUpdateRange(a0 * nx * 3, (a1 - a0 + 1) * nx * 3);
    col.addUpdateRange(a0 * nx * 3, (a1 - a0 + 1) * nx * 3);
    nor.addUpdateRange(n0 * nx * 3, (n1 - n0 + 1) * nx * 3);
    wall.addUpdateRange(n0 * nx * 4, (n1 - n0 + 1) * nx * 4);
    pos.needsUpdate = true; col.needsUpdate = true; nor.needsUpdate = true; wall.needsUpdate = true;
    const sp = s.sides.g.attributes.position;
    s.sides.edge.forEach((k, e) => { sp.array[e * 6 + 2] = H[k]; });
    sp.needsUpdate = true;
  }

  // The bit as it sits in the spindle: cutter and a short shank, no holder,
  // so a small part isn't hidden behind it. A surfacing bit is a short wide
  // head on a 1/4" shank, like the real ones.
  setTool(tool, maxDepth) {
    for (const c of [...this.tool.children]) {
      this.tool.remove(c);
      c.traverse((m) => { m.geometry?.dispose(); m.material?.dispose(); });
    }
    const r = tool.diameter / 2;
    const wide = tool.kind === 'surfacing' || r > 6.35;
    const flute = wide ? Math.max(maxDepth + 1, Math.min(8, r * 0.5)) : Math.max(tool.fluteLength || 0, Math.min(25, Math.max(maxDepth + 3, tool.diameter * 2)));
    const metal = new THREE.MeshStandardMaterial({ color: 0xd5dbe1, metalness: 0.85, roughness: 0.3 });
    let tip;
    if (tool.kind === 'vbit' || tool.kind === 'chamfer' || tool.kind === 'drill') {
      const h = r / Math.tan(((tool.angle || (tool.kind === 'drill' ? 118 : 90)) * Math.PI) / 360);
      tip = new THREE.Mesh(new THREE.ConeGeometry(r, h, 48), metal);
      tip.rotation.x = -Math.PI / 2; tip.position.z = h / 2;
    } else if (tool.kind === 'ball') {
      // Flutes down to a round end, its lowest point at the tip
      tip = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, flute - r, 64), metal);
      body.rotation.x = Math.PI / 2; body.position.z = r + (flute - r) / 2;
      const end = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 24, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), metal);
      end.rotation.x = Math.PI / 2; end.position.z = r;
      tip.add(body, end);
    } else {
      tip = new THREE.Mesh(new THREE.CylinderGeometry(r, r, flute, 64), metal);
      tip.rotation.x = Math.PI / 2; tip.position.z = flute / 2;
    }
    const sr = wide ? 3.175 : Math.max(r, Math.min(3.175, r * 1.5));
    const shankLen = 20;
    const shank = new THREE.Mesh(new THREE.CylinderGeometry(sr, sr, shankLen, 32), new THREE.MeshStandardMaterial({ color: 0xaab3bc, metalness: 0.8, roughness: 0.35 }));
    shank.rotation.x = Math.PI / 2; shank.position.z = flute + shankLen / 2;
    this.tool.add(tip, shank);
  }

  moveTool(x, y, z) { this.tool.position.set(x, y, z); }

  // Feed moves per op color, rapids thin and grey.
  showPaths(ops) {
    if (this.paths) { this.content.remove(this.paths); this.paths.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); }); }
    this.paths = new THREE.Group();
    for (const op of ops) {
      const t = op.track;
      if (!t) continue;
      const feed = [], rapid = [];
      for (let i = 4; i < t.length; i += 4) {
        (t[i + 3] > 0 ? feed : rapid).push(t[i - 4], t[i - 3], t[i - 2] + 0.02, t[i], t[i + 1], t[i + 2] + 0.02);
      }
      const add = (arr, color, opacity) => {
        if (!arr.length) return;
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
        const l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
        l.renderOrder = 3;
        this.paths.add(l);
      };
      add(feed, OP_COLORS[op.kind] || '#1abc9c', 0.75);
      add(rapid, '#93a2b4', 0.3);
    }
    this.content.add(this.paths);
  }

  dispose() {
    this.alive = false;
    this.resize.disconnect();
    this.clear();
    this.controls.dispose();
    this.renderer.dispose();
  }
}
