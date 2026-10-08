"use client";

import { Quote } from "lucide-react";
import { getPublishedTestimonials } from "@/data/testimonials";
import { SectionHeading, Stagger, StaggerItem } from "@/components/motion";

export default function Testimonials() {
  const items = getPublishedTestimonials();
  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="px-4 py-20 sm:px-6 md:py-28"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="testimonials-heading" align="center">
          What people say
        </SectionHeading>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <StaggerItem key={item.id}>
              <figure
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${items.length}`}
                className="flex min-h-[260px] flex-col rounded-2xl border border-border bg-background p-6"
              >
                <Quote className="mb-4 text-accent" size={28} aria-hidden="true" />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground sm:text-base">
                  {item.quote}
                </blockquote>
                <hr className="my-4 border-border" />
                <figcaption>
                  <p className="font-semibold">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </p>
                  <p className="text-sm text-muted">
                    {item.role}
                    {item.organization ? ` · ${item.organization}` : ""}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-accent-tint px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent">
                    {item.relationship}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
