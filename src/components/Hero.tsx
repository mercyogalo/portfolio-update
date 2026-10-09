"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const HeroGlobe = dynamic(() => import("@/components/hero/HeroGlobe"), {
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
    <section
      id="home"
      className="relative h-svh min-h-[640px] overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 z-0">
        <HeroGlobe />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent to-black"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
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
          <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
            I build and ship production web apps, REST APIs, payment integrations
            and admin dashboards — with clients across Kenya, Zambia, the UK,
            the Netherlands and Burkina Faso.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black hover:bg-accent-hover"
            >
              View Projects
            </a>
            <a
              href="/cv"
              className="rounded-full border border-white px-7 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
