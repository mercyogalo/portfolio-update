"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const orbs = [
  { size: 420, className: "bg-accent/25", duration: 18, x: ["-10%", "18%"], y: ["-8%", "22%"] },
  { size: 280, className: "bg-white/10 dark:bg-white/10", duration: 22, x: ["30%", "8%"], y: ["20%", "-12%"] },
  { size: 360, className: "bg-neutral-400/20 dark:bg-neutral-500/15", duration: 16, x: ["60%", "78%"], y: ["-6%", "18%"] },
  { size: 220, className: "bg-accent/15", duration: 25, x: ["70%", "40%"], y: ["55%", "28%"] },
  { size: 180, className: "bg-white/10", duration: 14, x: ["8%", "28%"], y: ["60%", "78%"] },
];

export default function HeroBackground() {
  const reduce = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(120);
  const y = useMotionValue(120);
  const ghostX = useMotionValue(120);
  const ghostY = useMotionValue(120);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const lagX = useSpring(ghostX, { stiffness: 30, damping: 18, mass: 0.8 });
  const lagY = useSpring(ghostY, { stiffness: 30, damping: 18, mass: 0.8 });

  useEffect(() => {
    if (reduce) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const layer = layerRef.current;
    if (!layer) return;

    if (finePointer) {
      const onMove = (event: PointerEvent) => {
        const rect = layer.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
        ghostX.set(event.clientX - rect.left);
        ghostY.set(event.clientY - rect.top);
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    }

    let vx = 1.2;
    let vy = 0.9;
    let px = 160;
    let py = 180;
    let frame = 0;

    const tick = () => {
      const rect = layer.getBoundingClientRect();
      px += vx;
      py += vy;
      if (px < 80 || px > rect.width - 80) vx *= -1;
      if (py < 80 || py > rect.height - 80) vy *= -1;
      x.set(px);
      y.set(py);
      ghostX.set(px);
      ghostY.set(py);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ghostX, ghostY, reduce, x, y]);

  if (reduce) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          style={{ width: orb.size, height: orb.size }}
          animate={{ x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-2xl"
        style={{ x: lagX, y: lagY, willChange: "transform" }}
      />
      <motion.div
        className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/50 blur-2xl"
        style={{ x: springX, y: springY, willChange: "transform" }}
      />
    </div>
  );
}
