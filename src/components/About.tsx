import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowRight } from "lucide-react";
import AboutPhoto from "@/components/about/AboutPhoto";
import { FadeUp, SectionHeading, Stagger, StaggerItem } from "@/components/motion";

const chips = [
  "467 registrations handled (GSDA Summit)",
  "4 payment gateways integrated",
  "MERN + Django",
];

export default function About() {
  const hasPhoto = existsSync(join(process.cwd(), "public/images/mercy.jpeg"));

  return (
    <section id="about" aria-labelledby="about-heading" className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <AboutPhoto hasPhoto={hasPhoto} />

        <div>
          <SectionHeading id="about-heading">About me</SectionHeading>
          <FadeUp>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a full-stack developer in Nairobi. I build and ship production
              web apps with MERN and Django — REST APIs, authentication and
              role-based systems, payment integrations (Stripe, PayPal, Flutterwave,
              M-Pesa Daraja), admin dashboards, and automated backend workflows
              with Celery.
            </p>
          </FadeUp>
          <FadeUp delay={0.08} className="mt-4">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I co-instructed the MERN Stack course at Power Learn Project and I&apos;m
              a final-year BIT student at JKUAT.
            </p>
          </FadeUp>
          <Stagger className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <StaggerItem key={chip}>
                <span className="inline-flex rounded-full bg-accent-tint px-3 py-1.5 text-xs font-medium text-accent">
                  {chip}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-accent-hover"
            >
              View CV
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/Mercy_Adhiambo_Ogalo_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
