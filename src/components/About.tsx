import Image from "next/image";
import { ArrowRight } from 'lucide-react'
import { NEUTRAL_BLUR_DATA_URL, PORTRAIT_SRC } from "@/lib/images";

const About = () => {
  const skills = ['React.js', 'Django', 'Express.js', 'TypeScript', 'Node.js', 'Mpesa integration']

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-accent dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
              <Image
                src={PORTRAIT_SRC}
                alt="Mercy Adhiambo Ogalo standing for a professional portrait"
                fill
                sizes="(max-width: 768px) 90vw, 448px"
                quality={75}
                placeholder="blur"
                blurDataURL={NEUTRAL_BLUR_DATA_URL}
                className="object-cover rounded-full
                  dark:shadow-[0_0_70px_rgba(220,38,38,0.45),0_0_140px_rgba(249,115,22,0.35)]"
              />

              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-wrap gap-1 sm:gap-2 justify-center max-w-[85%] sm:max-w-[80%]">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-burgundy-800 dark:bg-burgundy-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <p className="text-primary dark:text-white text-xs sm:text-sm uppercase tracking-wide font-bold dark:text-burgundy-600">
                About Me
              </p>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Who is <span className="text-primary">Mercy Ogalo</span>?
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
              I&apos;m a passionate Full Stack Developer specializing in MERN stack development with extensive experience in Django, React, and modern web technologies.
            </p>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Currently working as a Full Stack Developer and Co-Instructor at Power Learn Project, I thrive in collaborative environments and am dedicated to creating impactful digital solutions.
            </p>

            <a
              href="/Mercy_Adhiambo_Ogalo_CV.pdf"
              download
              className="inline-flex items-center gap-1 bg-primary p-1 rounded-full hover:opacity-90 transition-opacity"
            >
              <span className="bg-accent text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base">
                Download CV
              </span>
              <span className="bg-accent p-2 sm:p-3 rounded-full flex items-center justify-center">
                <ArrowRight size={12} className="text-primary sm:w-[18px] sm:h-[18px]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
