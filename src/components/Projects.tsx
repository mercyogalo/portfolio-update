import Image from "next/image";
import { NEUTRAL_BLUR_DATA_URL } from "@/lib/images";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4">
            Projects
          </h2>
          <div
            className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.title} className="relative">
                <div className="flex flex-col lg:flex-row gap-0 relative">
                  <div
                    className={` ${isEven ? "lg:w-[60%]" : "lg:w-[60%] lg:ml-auto"} bg-primary dark:bg-slate-900 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 relative z-10`}
                  >
                    <div className="flex-shrink-0">
                      <div className="relative w-32 sm:w-40 md:w-48 h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-xl">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 bg-white rounded-b-lg sm:rounded-b-xl z-10" />
                        <div className="relative w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.title} project screenshot, ${project.category}`}
                            fill
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                            quality={75}
                            placeholder="blur"
                            blurDataURL={NEUTRAL_BLUR_DATA_URL}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-accent text-center lg:text-left">
                      <p className="text-xs sm:text-sm uppercase tracking-wide mb-2 font-medium">
                        {project.category}
                      </p>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mt-6 sm:mt-8 lg:mt-0 ${isEven ? "lg:absolute lg:right-0 lg:w-[47%]" : "lg:absolute lg:left-0 lg:w-[47%]"} lg:top-1/2 lg:-translate-y-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center z-20 `}
                  >
                    <p
                      className={`text-primary dark:text-white text-xs sm:text-sm uppercase tracking-wide mb-2 ${isEven ? "lg:text-right text-left" : "text-left"}`}
                    >
                      Featured Project
                    </p>
                    <h3
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-primary dark:text-accent mb-4 sm:mb-6 ${isEven ? "lg:text-right text-left" : "text-left"}`}
                    >
                      {project.title}
                    </h3>
                    <p className="mb-4 rounded border border-border bg-background px-4 py-4 text-sm leading-relaxed text-foreground sm:mb-6 sm:px-6 sm:py-6 md:py-8 sm:text-base">
                      {project.description}
                    </p>
                    <p
                      className={`text-primary dark:text-accent mb-6 sm:mb-8 font-medium text-sm sm:text-base ${isEven ? "lg:text-right text-left" : "text-left"}`}
                    >
                      {project.tech}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
