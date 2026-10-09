"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import countries from "@/data/globe.json";

const RING_PROPAGATION_SPEED = 3;
const CAMERA_Z = 260;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

type CountryCollection = {
  features: object[];
};

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  const size = Math.min(count, Math.max(0, max - min));
  while (arr.length < size) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}

export function World({ globeConfig, data }: WorldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 2000);
    camera.position.set(0, 0, CAMERA_Z);

    let renderer: THREE.WebGLRenderer | undefined;
    let controls: OrbitControls | undefined;
    let frame = 0;
    let ringsTimer = 0;

    const globe = new ThreeGlobe();
    const polygonColor = globeConfig.polygonColor ?? "rgba(255, 140, 50, 0.95)";

    const material = globe.globeMaterial() as unknown as {
      color: THREE.Color;
      emissive: THREE.Color;
      emissiveIntensity: number;
      shininess: number;
    };
    material.color = new THREE.Color(globeConfig.globeColor ?? "#1a0c00");
    material.emissive = new THREE.Color(globeConfig.emissive ?? "#FF6A00");
    material.emissiveIntensity = globeConfig.emissiveIntensity ?? 0.35;
    material.shininess = globeConfig.shininess ?? 0.7;

    globe
      .hexPolygonsData((countries as CountryCollection).features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.65)
      .showAtmosphere(globeConfig.showAtmosphere ?? true)
      .atmosphereColor(globeConfig.atmosphereColor ?? "#FF6A00")
      .atmosphereAltitude(globeConfig.atmosphereAltitude ?? 0.18)
      .hexPolygonColor(() => polygonColor);

    globe
      .arcsData(data)
      .arcStartLat((d) => (d as Position).startLat)
      .arcStartLng((d) => (d as Position).startLng)
      .arcEndLat((d) => (d as Position).endLat)
      .arcEndLng((d) => (d as Position).endLng)
      .arcColor((e: object) => (e as Position).color)
      .arcAltitude((e) => (e as Position).arcAlt)
      .arcStroke(() => 0.3)
      .arcDashLength(globeConfig.arcLength ?? 0.9)
      .arcDashInitialGap((e) => (e as Position).order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => globeConfig.arcTime ?? 1400);

    globe
      .pointsData(
        data.flatMap((arc) => [
          { lat: arc.startLat, lng: arc.startLng, color: arc.color },
          { lat: arc.endLat, lng: arc.endLng, color: arc.color },
        ])
      )
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(false)
      .pointAltitude(0.01)
      .pointRadius(0.6);

    globe
      .ringsData([])
      .ringColor(() => polygonColor)
      .ringMaxRadius(globeConfig.maxRings ?? 3)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        ((globeConfig.arcTime ?? 1400) * (globeConfig.arcLength ?? 0.9)) /
          (globeConfig.rings ?? 1)
      );

    scene.add(globe);

    scene.add(
      new THREE.AmbientLight(globeConfig.ambientLight ?? "#FF8A3D", 1.2)
    );
    const left = new THREE.DirectionalLight(
      globeConfig.directionalLeftLight ?? "#ffffff",
      1
    );
    left.position.set(-400, 100, 400);
    scene.add(left);
    const top = new THREE.DirectionalLight(
      globeConfig.directionalTopLight ?? "#FFB347",
      0.8
    );
    top.position.set(-200, 500, 200);
    scene.add(top);
    const point = new THREE.PointLight(globeConfig.pointLight ?? "#ffffff", 0.9);
    point.position.set(200, 500, 200);
    scene.add(point);

    const tick = () => {
      frame = window.requestAnimationFrame(tick);
      controls?.update();
      if (renderer) renderer.render(scene, camera);
    };

    const start = (width: number, height: number) => {
      if (renderer) return;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = globeConfig.autoRotate ?? true;
      controls.autoRotateSpeed = globeConfig.autoRotateSpeed ?? 0.6;
      controls.minDistance = CAMERA_Z;
      controls.maxDistance = CAMERA_Z;
      controls.minPolarAngle = Math.PI / 3.5;
      controls.maxPolarAngle = Math.PI - Math.PI / 3;

      ringsTimer = window.setInterval(() => {
        const picks = genRandomNumbers(
          0,
          data.length,
          Math.max(1, Math.floor((data.length * 4) / 5))
        );
        globe.ringsData(
          data
            .filter((_, i) => picks.includes(i))
            .map((d) => ({
              lat: d.startLat,
              lng: d.startLng,
              color: d.color,
            }))
        );
      }, 2000);

      tick();
    };

    const resize = (width: number, height: number) => {
      if (!renderer || width < 2 || height < 2) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect ?? { width: 0, height: 0 };
      if (width < 2 || height < 2) return;
      if (!renderer) start(width, height);
      else resize(width, height);
    });
    observer.observe(container);

    if (container.clientWidth > 2 && container.clientHeight > 2) {
      start(container.clientWidth, container.clientHeight);
    }

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearInterval(ringsTimer);
      controls?.dispose();
      scene.remove(globe);
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      }
    };
  }, [data, globeConfig]);

  return <div ref={containerRef} className="h-full w-full" />;
}
