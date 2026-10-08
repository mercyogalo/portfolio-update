import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import { experiences, formatDateRange } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-600 mb-4 text-center">
            Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-primary-foreground dark:bg-black rounded-xl p-4 sm:p-6 hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-accent w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-burgundy-800 dark:text-burgundy-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    {exp.company}
                  </p>

                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">
                    <Calendar size={14} />
                    <span>{formatDateRange(exp.startDate, exp.endDate)}</span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={14} />
                      <span>{exp.workType}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900 text-burgundy-800 dark:text-burgundy-300 text-xs font-medium rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
