import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer / Co-Instructor MERN Stack',
      company: 'Power Learn Project',
      period: 'June 2025 - Current',
      description: [
        'Handle ticketing and email support for students',
        'Developed soft skills increasing workplace efficiency',
        'Assist tutors during lessons and help learners with technical questions',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Femicare Chat Agent (PLP Final Project)',
      period: 'June 2025',
      description: [
        'Built a full-stack AI chatbot for female vaginal healthcare questions',
        'Implemented CRUD operations using MERN stack',
        'Focused on increasing knowledge accessibility in female healthcare',
        'Deployed application on Render',
      ],
      link: 'https://ai-project-1-9gvt.onrender.com/',
    },
    {
      title: 'Web Developer Intern',
      company: 'M-treat Organization (Health Organization)',
      period: 'March 2025 - May 2025',
      description: [
        'Developed contact form in Django with email notification functionality',
        'Created API handling functions in React for contact form integration',
        'Implemented newsletter backend with subscription notifications',
        'Applied comprehensive error handling across features',
      ],
    },
    {
      title: 'Web Developer & Designer',
      company: 'Baobab Restaurant Website',
      period: 'April 2025 - May 2025',
      description: [
        'Designed and developed fully responsive restaurant website showcasing Kenyan cuisine',
        'Integrated Django backend for contact and reservation forms',
        'Applied UI/UX principles reflecting brand cultural identity',
        'Improved site accessibility for diverse audiences',
      ],
    },
    {
      title: 'Web Developer & Designer',
      company: 'AgriGrow Farms',
      period: 'December 2024',
      description: [
        'Built inventory management system for agriculture-based businesses',
        'Implemented robust CRUD functionality with Django',
        'Developed role-based authentication and dashboards',
        'Increased work efficiency and tracking by 5%',
      ],
    },
    {
      title: 'Web Developer & Designer',
      company: 'Jay Foundation (Charity Organization)',
      period: 'January 2025 - February 2025',
      description: [
        'Developed dynamic website using Django backend',
        'Implemented automated email responses for contact form submissions',
        'Integrated M-Pesa payment functionality for secure donations',
        'Designed responsive interface ensuring smooth UX across devices',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-white mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="md:ml-20">
                  <div className="absolute left-8 w-4 h-4 bg-burgundy-800 dark:bg-white rounded-full -translate-x-1/2 hidden md:block"></div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-burgundy-800 dark:hover:border-slate-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-burgundy-800 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                          <Briefcase size={18} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                        <Calendar size={18} />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-black dark:text-white mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black dark:text-white font-medium hover:underline"
                      >
                        View Project
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
