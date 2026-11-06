"use client";

import {
  Code2,
  CreditCard,
  Image as ImageIcon,
  Palette,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { FadeUp, SectionHeading, Stagger, StaggerItem } from "@/components/motion";
import {
  OPEN_WHATSAPP_EVENT,
  separateCosts,
  services,
  workSteps,
} from "@/data/services";

const icons = [Code2, ShoppingBag, CreditCard, Palette, Wrench, ImageIcon];

function openWhatsAppChooser() {
  window.dispatchEvent(new Event(OPEN_WHATSAPP_EVENT));
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="services-heading" eyebrow="What I do" align="center">
          Web developer in Nairobi, Kenya
        </SectionHeading>
        <FadeUp>
          <p className="mx-auto mb-4 max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg">
            Building websites, online stores and payment integrations for growing
            businesses.
          </p>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m Mercy Ogalo, a full stack web developer and designer based in
            Nairobi, Kenya. I help small and growing businesses build professional
            websites, sell online, accept M-Pesa and card payments, and keep their
            sites running smoothly.
          </p>
        </FadeUp>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={service.title}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 hover:border-accent">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-tint text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeUp className="mt-12 text-center">
          <p className="font-display text-xl font-bold sm:text-2xl">
            Need a web developer in Kenya?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Tell me about your project and I&apos;ll help you plan, build and launch it.
          </p>
          <button
            type="button"
            onClick={openWhatsAppChooser}
            className="mt-6 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black hover:bg-accent-hover"
          >
            Let&apos;s work together →
          </button>
        </FadeUp>

        <div id="how-i-work" className="mt-24">
          <SectionHeading id="how-i-work-heading" eyebrow="How I work" align="center">
            A clear process, so you always know what to expect
          </SectionHeading>
          <FadeUp>
            <p className="mx-auto mb-10 max-w-3xl text-center text-muted">
              Open to: freelance projects, contract work, part-time roles and
              full-time roles. Websites, online stores, payment integrations,
              website maintenance and design work.
            </p>
          </FadeUp>

          <ul className="steps steps-vertical mx-auto w-full max-w-3xl">
            {workSteps.map((step, index) => (
              <li
                key={step.title}
                className="step step-primary"
                data-content={String(index + 1)}
              >
                <div className="mb-8 ml-2 text-left">
                  <p className="font-display text-lg font-bold">{step.title}</p>
                  <p className="mt-1 text-sm font-normal leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          <FadeUp>
            <h3 className="font-display text-xl font-bold">Longer projects</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              For larger projects, I break the work into milestones. Each
              milestone has its own deliverable and payment, so progress and
              payments stay in step.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h3 className="font-display text-xl font-bold">What you cover separately</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Your project cost is my development fee. These services are paid
              for directly by you, in your own accounts, so everything stays in
              your name from day one:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {separateCosts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I&apos;ll guide you through setting everything up, and I can do the
              technical setup with temporary access.
            </p>
          </FadeUp>
        </div>

        <FadeUp className="mt-12 text-center">
          <p className="font-display text-xl font-bold sm:text-2xl">Ready to start?</p>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Tell me about your project and I&apos;ll send you a quote.
          </p>
          <button
            type="button"
            onClick={openWhatsAppChooser}
            className="mt-6 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black hover:bg-accent-hover"
          >
            Let&apos;s work together →
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
