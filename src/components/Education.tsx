import { BookOpen } from 'lucide-react';

const Education = () => {
  

  const trainings = [
    {
      title: 'Full Stack MERN Stack',
      organization: 'Power Learn Project (PLP)',
      period: 'Feb 2025 - July 2025',
      description: [
        '8-week intensive program diving into MERN stack',
        'Express.js and Node.js backend development',
        'React.js frontend integration',
        'Tailwind CSS for modern styling',
      ],
    },
    {
      title: 'Django Web Development Program',
      organization: 'eMobilis',
      period: 'Oct 2024 - Dec 2024',
      description: [
        '3-month intensive Django development program',
        'Front-End: HTML5, CSS3, Bootstrap',
        'Back-End: Python, Django, REST Framework',
        'Database: MySQL, XAMPP',
      ],
    },
    {
      title: 'Frontend Development',
      organization: 'She Codes Foundation',
      period: 'Nov 2023 - March 2024',
      description: [
        'Frontend development fundamentals',
        'HTML5, CSS3, JavaScript, React, Bootstrap',
        'Web hosting and API integration',
        'Git/GitHub version control',
      ],
    },
    {
      title: 'Introduction to JavaScript',
      organization: 'Code First Girls',
      period: 'Aug 2024 - Oct 2024',
      description: [
        'JavaScript fundamentals and DOM manipulation',
        'Practice projects and final project completion',
      ],
    },
    {
      title: 'Introduction to Web Development',
      organization: 'Code First Girls',
      period: 'Dec 2023 - Jan 2024',
      description: [
        'Frontend development fundamentals',
        'HTML, CSS3, JavaScript, UI/UX design',
        'Group project collaboration',
      ],
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-600 mb-4">
            Education & Training
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-burgundy-600 mx-auto"></div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="bg-accent dark:bg-black p-4 sm:p-6 rounded-lg transition-all hover:transform hover:-translate-y-1 hover:shadow-xl border border-slate-200 dark:border-slate-800"
              >
                <h4 className="text-lg sm:text-xl font-bold text-primary dark:text-burgundy-600 mb-2">{training.title}</h4>
                <p className="text-primary dark:text-white font-medium mb-1 text-sm sm:text-base">{training.organization}</p>
                <p className="text-primary dark:text-white text-xs sm:text-sm mb-3 sm:mb-4">{training.period}</p>
                <ul className="space-y-1 sm:space-y-2">
                  {training.description.map((item, idx) => (
                    <li key={idx} className="text-primary dark:text-white text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-primary dark:text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
