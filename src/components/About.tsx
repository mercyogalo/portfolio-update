import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowRight } from "lucide-react";
import AboutPhoto from "@/components/about/AboutPhoto";
import { FadeUp, SectionHeading, Stagger, StaggerItem } from "@/components/motion";
import { CV_PDF_PATH } from "@/lib/site";

const chips = [
  "467 registrations handled (GSDA Summit)",
  "4 payment gateways integrated",
  "MERN",
  "Django",
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
          I&apos;m Mercy Adhiambo Ogalo, a full-stack developer , with 1+ years of experience building personal projects and client applications.
          <br /> <br />
          I believe being a good developer goes beyond writing code. I'm a solutions-oriented person who adapts to challenges, takes ownership, and looks for ways to make things work. I value honesty, integrity, and hard work, and I see every role as an opportunity to learn, grow, and make a meaningful contribution.
          <br /> <br />
          Whether I'm building software, collaborating with a team, or taking on responsibilities beyond my role, I strive to leave things better than I found them.

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
              href={CV_PDF_PATH}
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
