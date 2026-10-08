"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroBackground = dynamic(() => import("@/components/hero/HeroBackground"), {
  ssr: false,
});

const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "MERN & Django Developer",
];

const words = ["Mercy", "Adhiambo", "Ogalo"];

export default function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-20">
      <HeroBackground />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {words.map((word, index) => (
            <motion.span
              key={word}
              className="mr-[0.3em] inline-block last:mr-0"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="mt-6 min-h-[2rem] text-lg text-accent sm:text-xl" aria-live="polite">
          {roles[roleIndex]}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
          I build and ship production web apps, REST APIs, payment integrations
          and admin dashboards.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="rounded-full border border-foreground px-7 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
          >
            About me
          </a>
        </div>
        <a
          href="#about"
          className="mt-16 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-accent"
        >
          Scroll
          <motion.span
            aria-hidden="true"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
