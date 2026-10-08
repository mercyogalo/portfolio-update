"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { companies, clients } from "@/data/companies";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";

function Wordmark({
  name,
  url,
  role,
}: {
  name: string;
  url?: string;
  role: string;
}) {
  const content = (
    <span
      title={role}
      className="inline-flex h-10 items-center font-display text-sm font-bold tracking-tight text-foreground/70 grayscale opacity-70 transition hover:text-accent hover:opacity-100 hover:grayscale-0 dark:brightness-100 sm:text-base"
    >
      {name}
    </span>
  );

  if (!url) return content;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-sm focus-visible:outline-none"
      title={role}
    >
      {content}
    </a>
  );
}

export default function Companies() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const loop = [...companies, ...companies];

  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="border-y border-border px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="companies-heading" eyebrow="Collaborations" align="center">
          Companies & organizations I&apos;ve worked with
        </SectionHeading>

        {reduce ? (
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {companies.map((company) => (
              <Wordmark key={company.name} {...company} />
            ))}
          </div>
        ) : (
          <>
            <Stagger className="hidden justify-center gap-12 md:flex">
              {companies.map((company) => (
                <StaggerItem key={company.name}>
                  <Wordmark {...company} />
                </StaggerItem>
              ))}
            </Stagger>
            <div
              className="relative overflow-hidden md:hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
              <motion.div
                className="flex w-max gap-10"
                animate={paused ? undefined : { x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {loop.map((company, index) => (
                  <Wordmark key={`${company.name}-${index}`} {...company} />
                ))}
              </motion.div>
            </div>
          </>
        )}

        <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-muted">
          Client projects
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {clients.map((client) => (
            <Wordmark key={client.name} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
