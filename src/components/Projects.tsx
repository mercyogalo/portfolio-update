"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NEUTRAL_BLUR_DATA_URL } from "@/lib/images";
import { projects } from "@/data/projects";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="projects-heading" align="center">
          Projects
        </SectionHeading>
        <div className="space-y-20">
          {projects.map((project, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  fromLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div className="overflow-hidden rounded-xl border border-border bg-neutral-950 shadow-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden="true" />
                    <span className="ml-3 truncate text-xs text-neutral-400">{project.title}</span>
                  </div>
                  <div className="relative aspect-[16/10] bg-neutral-900">
                    {project.placeholder ? (
                      <div className="flex h-full items-center justify-center font-display text-xl text-accent">
                        StayEasy screenshot coming soon
                      </div>
                    ) : (
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot, ${project.category}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={75}
                          placeholder="blur"
                          blurDataURL={NEUTRAL_BLUR_DATA_URL}
                          className="object-cover object-top"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
                <div className={fromLeft ? "lg:pl-4" : "lg:pr-4 lg:text-right"}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>
                  <Stagger
                    className={`mt-5 flex flex-wrap gap-2 ${fromLeft ? "" : "lg:justify-end"}`}
                  >
                    {project.tech.split("|").map((item) => (
                      <StaggerItem key={item}>
                        <span className="rounded-full bg-accent-tint px-2.5 py-1 text-xs font-medium text-accent">
                          {item.trim()}
                        </span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
