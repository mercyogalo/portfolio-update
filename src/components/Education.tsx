import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Business Information Technology',
    institution: 'Jomo Kenyatta University of Agriculture and Technology',
  };

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

  const certifications = [
    'Introduction to Coding - She Codes Basic',
    'Web Development - She Codes Plus',
    'Introduction to Web Development - Code First Girls',
    'Introduction to UI/UX - Le Wagon',
    'Responsive Web Development - She Codes',
    'Introduction to Cybersecurity - Cisco',
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-white mb-4">
            Education & Training
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-white mx-auto"></div>
        </div>

        <div className="mb-16">
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border-2 border-burgundy-800 dark:border-white max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-burgundy-800 dark:text-white" size={32} />
              <h3 className="text-2xl font-bold text-burgundy-800 dark:text-white">Formal Education</h3>
            </div>
            <p className="text-xl text-slate-800 dark:text-slate-200 font-semibold mb-2">{education.degree}</p>
            <p className="text-slate-700 dark:text-slate-300">{education.institution}</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <BookOpen className="text-burgundy-800 dark:text-white" size={28} />
            <h3 className="text-3xl font-bold text-burgundy-800 dark:text-white">Professional Training</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-burgundy-800 dark:hover:border-slate-500 transition-colors"
              >
                <h4 className="text-xl font-bold text-burgundy-800 dark:text-white mb-2">{training.title}</h4>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">{training.organization}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{training.period}</p>
                <ul className="space-y-2">
                  {training.description.map((item, idx) => (
                    <li key={idx} className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-black dark:text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Award className="text-burgundy-800 dark:text-white" size={28} />
            <h3 className="text-3xl font-bold text-burgundy-800 dark:text-white">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-burgundy-800 dark:hover:border-slate-500 transition-all hover:transform hover:-translate-y-1 text-center"
              >
                <Award className="text-burgundy-800 dark:text-white mx-auto mb-2" size={24} />
                <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
