"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function AboutPhoto({ hasPhoto }: { hasPhoto: boolean }) {
  const reduce = useReducedMotion();
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [16, -16]);

  return (
    <motion.div ref={photoRef} style={{ y }} className="relative mx-auto w-full max-w-md">
      {/* TODO: add /public/images/mercy.jpg */}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-accent"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-neutral-200 dark:bg-neutral-900">
        {hasPhoto ? (
          <Image
            src="/images/mercy.jpg"
            alt="Portrait of Mercy Adhiambo Ogalo"
            width={720}
            height={900}
            sizes="(max-width: 1024px) 90vw, 480px"
            quality={75}
            className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0"
          />
        ) : (
          <div className="flex aspect-[4/5] items-center justify-center font-display text-6xl font-bold">
            MAO
          </div>
        )}
      </div>
    </motion.div>
  );
}
