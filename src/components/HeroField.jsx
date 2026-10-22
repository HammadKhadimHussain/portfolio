import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 80);
    camera.position.z = 26;

    const count = window.innerWidth < 760 ? 32 : 56;
    const spread = { x: 38, y: 22, z: 16 };
    const positions = new Float32Array(count * 3);
    const speeds = [];

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * spread.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;
      speeds.push({
        x: (Math.random() - 0.5) * 0.016,
        y: (Math.random() - 0.5) * 0.016,
        z: (Math.random() - 0.5) * 0.008,
      });
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointMat = new THREE.PointsMaterial({
      color: 0xb6f3cd,
      size: 0.16,
      transparent: true,
      opacity: 0.92,
      sizeAttenuation: true,
      depthWrite: false,
    });
    scene.add(new THREE.Points(pointGeo, pointMat));

    const maxPairs = count * 3;
    const linePositions = new Float32Array(maxPairs * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7ee0a8,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (event) => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let frame = 0;
    let alive = true;
    let paused = false;
    const linkDistance = 7.4;

    const loop = () => {
      if (!alive || paused) return;
      frame = requestAnimationFrame(loop);
      const pos = pointGeo.attributes.position.array;

      for (let i = 0; i < count; i += 1) {
        pos[i * 3] += speeds[i].x;
        pos[i * 3 + 1] += speeds[i].y;
        pos[i * 3 + 2] += speeds[i].z;
        if (Math.abs(pos[i * 3]) > spread.x / 2) speeds[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > spread.y / 2) speeds[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > spread.z / 2) speeds[i].z *= -1;
      }
      pointGeo.attributes.position.needsUpdate = true;

      const lineArray = lineGeo.attributes.position.array;
      let pairs = 0;
      for (let i = 0; i < count && pairs < maxPairs; i += 1) {
        for (let j = i + 1; j < count && pairs < maxPairs; j += 1) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz > linkDistance * linkDistance) continue;
          const offset = pairs * 6;
          lineArray[offset] = pos[i * 3];
          lineArray[offset + 1] = pos[i * 3 + 1];
          lineArray[offset + 2] = pos[i * 3 + 2];
          lineArray[offset + 3] = pos[j * 3];
          lineArray[offset + 4] = pos[j * 3 + 1];
          lineArray[offset + 5] = pos[j * 3 + 2];
          pairs += 1;
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, pairs * 2);

      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.035;
      camera.position.y += (-mouseY * 0.9 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const onVisibility = () => {
      paused = document.hidden;
      if (!paused) loop();
    };
    document.addEventListener("visibilitychange", onVisibility);
    loop();

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      observer.disconnect();
      pointGeo.dispose();
      pointMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={ref} className="hero-field" aria-hidden="true" />;
}
