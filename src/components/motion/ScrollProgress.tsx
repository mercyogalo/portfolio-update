"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[80] h-0.5 origin-left bg-accent"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
