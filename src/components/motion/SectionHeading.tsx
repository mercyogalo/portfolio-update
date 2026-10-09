"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  id,
  eyebrow,
  children,
  align = "left",
}: {
  id: string;
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
}) {
  const reduce = useReducedMotion();
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex flex-col ${alignment} sm:mb-14`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <motion.h2
        id={id}
        className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.h2>
      <motion.div
        aria-hidden="true"
        className="mt-4 h-1 w-20 origin-left bg-accent"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
