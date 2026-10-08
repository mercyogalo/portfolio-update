"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FadeUp, SectionHeading, Stagger, StaggerItem } from "@/components/motion";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

const items = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+254 743 264 872",
    href: "tel:+254743264872",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "github.com/mercyogalo",
    href: SOCIAL_LINKS.github,
    external: true,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Mercy Ogalo",
    href: SOCIAL_LINKS.linkedin,
    external: true,
    icon: Linkedin,
  },
  {
    label: "Portfolio",
    value: "mercyogalo.dev",
    href: "https://mercyogalo.dev",
    external: true,
    icon: Globe,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading id="contact-heading" align="center">
          Let&apos;s work together
        </SectionHeading>
        <FadeUp>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted">
            I&apos;m open to projects and full-time roles. Reach me directly — no form, no wait.
          </p>
        </FadeUp>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            const body = (
              <div className="flex items-start gap-3 rounded-2xl border border-border p-4 transition hover:border-accent">
                <Icon className="mt-0.5 text-accent" size={20} aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
                  <p className="mt-1 font-medium underline-offset-4 group-hover:underline group-hover:decoration-accent">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <StaggerItem key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="group block"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-accent-hover"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </div>
    </section>
  );
}
