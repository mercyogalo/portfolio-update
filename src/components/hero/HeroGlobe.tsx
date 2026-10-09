"use client";

import { World } from "@/components/ui/globe";
import ErrorBoundary from "@/components/ErrorBoundary";

const ORANGE = "#FF6A00";
const ORANGE_DEEP = "#E65F00";
const ORANGE_LIGHT = "#FFB347";

const LOCATIONS = {
  kenya: { lat: -1.2921, lng: 36.8219 },
  zambia: { lat: -15.3875, lng: 28.3228 },
  netherlands: { lat: 52.3676, lng: 4.9041 },
  uk: { lat: 51.5072, lng: -0.1276 },
  burkinaFaso: { lat: 12.3714, lng: -1.5197 },
};

const colors = [ORANGE, ORANGE_DEEP, ORANGE_LIGHT];

function arc(
  order: number,
  from: keyof typeof LOCATIONS,
  to: keyof typeof LOCATIONS,
  arcAlt: number,
  colorIndex: number
) {
  return {
    order,
    startLat: LOCATIONS[from].lat,
    startLng: LOCATIONS[from].lng,
    endLat: LOCATIONS[to].lat,
    endLng: LOCATIONS[to].lng,
    arcAlt,
    color: colors[colorIndex % colors.length],
  };
}

const clientArcs = [
  arc(1, "kenya", "netherlands", 0.35, 0),
  arc(1, "kenya", "zambia", 0.15, 1),
  arc(2, "kenya", "uk", 0.4, 2),
  arc(2, "kenya", "burkinaFaso", 0.25, 0),
  arc(3, "netherlands", "uk", 0.08, 1),
  arc(3, "uk", "zambia", 0.45, 2),
  arc(4, "netherlands", "burkinaFaso", 0.3, 0),
  arc(4, "zambia", "burkinaFaso", 0.22, 1),
  arc(5, "uk", "burkinaFaso", 0.32, 2),
  arc(5, "netherlands", "zambia", 0.42, 0),
  arc(6, "zambia", "kenya", 0.18, 1),
  arc(6, "uk", "kenya", 0.38, 2),
  arc(7, "burkinaFaso", "kenya", 0.28, 0),
  arc(7, "netherlands", "kenya", 0.36, 1),
];

const globeConfig = {
  pointSize: 4,
  globeColor: "#1a0c00",
  showAtmosphere: true,
  atmosphereColor: ORANGE,
  atmosphereAltitude: 0.18,
  emissive: "#FF6A00",
  emissiveIntensity: 0.35,
  shininess: 0.7,
  polygonColor: "rgba(255, 140, 50, 0.95)",
  ambientLight: "#FF8A3D",
  directionalLeftLight: "#ffffff",
  directionalTopLight: ORANGE_LIGHT,
  pointLight: "#ffffff",
  arcTime: 1400,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.6,
};

export default function HeroGlobe() {
  return (
    <div className="h-full w-full">
      <ErrorBoundary fallback={null}>
        <World data={clientArcs} globeConfig={globeConfig} />
      </ErrorBoundary>
    </div>
  );
}
