"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { experiences, formatDateRange } from "@/data/experience";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="experience-heading" align="center">
          Professional Experience
        </SectionHeading>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2"
          />
          <Stagger className="space-y-8">
            {experiences.map((exp) => (
              <StaggerItem key={`${exp.company}-${exp.role}`}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-2xl border border-border bg-background p-5 shadow-sm hover:border-accent hover:shadow-accent-glow sm:p-6"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-tint text-accent">
                      <Briefcase size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold sm:text-xl">{exp.role}</h3>
                      <p className="font-medium text-accent">{exp.company}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted sm:text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} aria-hidden="true" />
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location} · {exp.workType}
                    </span>
                  </div>
                  {exp.bullets.length > 0 ? (
                    <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-muted">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent-tint px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
