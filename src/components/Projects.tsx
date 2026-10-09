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
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="projects-heading" align="center">
          Projects
        </SectionHeading>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: isEven ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative flex flex-col gap-0 lg:flex-row">
                  <div
                    className={`${
                      isEven ? "lg:w-[60%]" : "lg:ml-auto lg:w-[60%]"
                    } relative z-10 flex flex-col items-center gap-4 bg-neutral-900 p-4 text-white sm:gap-6 sm:p-6 md:p-8 lg:flex-row lg:p-12`}
                  >
                    <div className="flex-shrink-0">
                      <div className="relative h-[300px] w-32 rounded-[1.5rem] bg-white p-1.5 shadow-xl sm:h-[350px] sm:w-40 sm:rounded-[2rem] sm:p-2 md:h-[400px] md:w-48">
                        <div
                          className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-lg bg-white sm:h-5 sm:w-20 sm:rounded-b-xl md:w-24"
                          aria-hidden="true"
                        />
                        <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-neutral-100 sm:rounded-[1.5rem]">
                          {project.placeholder ? (
                            <div className="flex h-full items-center justify-center px-3 text-center font-display text-sm font-semibold text-neutral-500">
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
                                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                                quality={75}
                                unoptimized={project.image.startsWith("http")}
                                placeholder="blur"
                                blurDataURL={NEUTRAL_BLUR_DATA_URL}
                                className="object-contain"
                              />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide sm:text-sm">
                        {project.category}
                      </p>
                      <p className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`z-20 mt-6 flex flex-col justify-center p-4 sm:mt-8 sm:p-6 md:p-8 lg:absolute lg:top-1/2 lg:mt-0 lg:w-[47%] lg:-translate-y-1/2 lg:p-12 ${
                      isEven ? "lg:right-0" : "lg:left-0"
                    }`}
                  >
                    <p
                      className={`mb-2 text-xs uppercase tracking-wide text-muted sm:text-sm ${
                        isEven ? "text-left lg:text-right" : "text-left"
                      }`}
                    >
                      Featured Project
                    </p>
                    <h3
                      className={`mb-4 font-display text-2xl font-bold text-foreground sm:mb-6 sm:text-3xl lg:text-4xl ${
                        isEven ? "text-left lg:text-right" : "text-left"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mb-4 rounded border border-border bg-background px-4 py-4 text-sm leading-relaxed text-foreground sm:mb-6 sm:px-6 sm:py-6 md:py-8 sm:text-base">
                      {project.description}
                    </p>
                    <Stagger
                      className={`flex flex-wrap gap-2 ${
                        isEven ? "lg:justify-end" : ""
                      }`}
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
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
