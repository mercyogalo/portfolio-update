import { Briefcase, Calendar, MapPin, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer / Co-Instructor MERN Stack',
      company: 'Power Learn Project',
      startDate: 'June 2025',
      endDate: 'Current',
      duration: '1 mo',
      location: 'Kenya',
      workType: 'Remote',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'Teaching', 'Student Support'],
      iconColor: 'bg-purple-500',
    },
    {
      role: 'Full Stack Developer',
      company: 'Femicare Chat Agent',
      startDate: 'June 2025',
      endDate: 'June 2025',
      duration: '1 mo',
      location: 'Remote',
      workType: 'Remote',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI Integration', 'CRUD Operations'],
      iconColor: 'bg-teal-500',
    },
    {
      role: 'Web Developer Intern',
      company: 'M-treat Organization',
      startDate: 'March 2025',
      endDate: 'May 2025',
      duration: '3 mos',
      location: 'Kenya',
      workType: 'Remote',
      skills: ['Django', 'React', 'REST API', 'Email Integration', 'Newsletter'],
      iconColor: 'bg-green-500',
    },
    {
      role: 'Web Developer & Designer',
      company: 'Baobab Restaurant',
      startDate: 'April 2025',
      endDate: 'May 2025',
      duration: '2 mos',
      location: 'Kenya',
      workType: 'Remote',
      skills: ['Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'UI/UX Design'],
      iconColor: 'bg-orange-500',
    },
    {
      role: 'Web Developer & Designer',
      company: 'AgriGrow Farms',
      startDate: 'December 2024',
      endDate: 'December 2024',
      duration: '1 mo',
      location: 'Kenya',
      workType: 'Remote',
      skills: ['Django', 'Python', 'MySQL', 'Bootstrap', 'JavaScript', 'Inventory Management'],
      iconColor: 'bg-purple-500',
    },
    {
      role: 'Web Developer & Designer',
      company: 'Jay Foundation',
      startDate: 'January 2025',
      endDate: 'February 2025',
      duration: '2 mos',
      location: 'Kenya',
      workType: 'Remote',
      skills: ['Django', 'JavaScript', 'M-Pesa API', 'Bootstrap', 'Payment Integration'],
      iconColor: 'bg-pink-500',
    },
  ];

  // Calculate duration display
  const getDurationDisplay = (startDate: string, endDate: string, duration: string) => {
    if (endDate === 'Current') {
      return `${startDate} - Present - ${duration}`;
    }
    return `${startDate} - ${endDate} - ${duration}`;
  };

  // Show first 3 skills, then "+X more"
  const displaySkills = (skills: string[]) => {
    const visibleSkills = skills.slice(0, 3);
    const remainingCount = skills.length - 3;
    return { visibleSkills, remainingCount };
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-600 mb-4 text-center">
            Professional Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => {
            const { visibleSkills, remainingCount } = displaySkills(exp.skills);
            return (
              <div
                key={index}
                className="bg-primary-foreground  dark:bg-black rounded-xl p-6 hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-start gap-4">
                  {/* Logo/Icon */}
                  <div className={`${exp.iconColor} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Briefcase className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-burgundy-800 dark:text-burgundy-600 font-semibold mb-3">
                      {exp.company}
                    </p>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm mb-2">
                      <Calendar size={16} />
                      <span>{getDurationDisplay(exp.startDate, exp.endDate, exp.duration)}</span>
                    </div>

                    {/* Location and Work Type */}
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe size={14} />
                        <span>{exp.workType}</span>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {visibleSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900 text-burgundy-800 dark:text-burgundy-300 text-xs font-medium rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {remainingCount > 0 && (
                        <span className="px-3 py-1 bg-burgundy-100 dark:bg-burgundy-900 text-burgundy-800 dark:text-burgundy-300 text-xs font-medium rounded">
                          +{remainingCount} more
                        </span>
                      )}
                    </div>
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

export default Experience;
