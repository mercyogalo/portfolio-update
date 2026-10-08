import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { NEUTRAL_BLUR_DATA_URL, PORTRAIT_SRC } from "@/lib/images";

const Hero = () => {
  return (
    <section className="relative flex min-h-svh items-center bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <div className="mb-6 inline-block rounded-full bg-accent-tint px-4 py-2 text-sm font-medium text-accent">
              Hello there
            </div>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                <span className="text-slate-900 dark:text-white">I&apos;m </span>
                <span className="text-accent">
                  Mercy Adhiambo Ogalo
                </span>
                <span className="text-slate-900 dark:text-white">
                  , Full Stack Developer Based in Kenya.
                </span>
              </h1>
              <div
                className="h-1 w-24 sm:w-32 bg-accent mb-4 sm:mb-6"
                aria-hidden="true"
              />
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 leading-relaxed">
              Specializing in MERN stack development with a passion for creating
              responsive, user-friendly web applications. Experienced in Django,
              React, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm text-black hover:bg-accent-hover sm:px-7 sm:py-3 sm:text-base"
              >
                View My Portfolio
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="rounded-full border-2 border-foreground px-5 py-2.5 text-sm text-foreground hover:border-accent hover:text-accent sm:px-7 sm:py-3 sm:text-base"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={PORTRAIT_SRC}
                alt="Portrait of Mercy Adhiambo Ogalo, full-stack developer based in Nairobi, Kenya"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 448px"
                quality={75}
                placeholder="blur"
                blurDataURL={NEUTRAL_BLUR_DATA_URL}
                className="object-cover rounded-full
                  dark:shadow-[0_0_70px_rgba(220,38,38,0.45),0_0_140px_rgba(249,115,22,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
