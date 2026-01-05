import { Code2, Database, Palette, Server, Wrench, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Typescript', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'Django', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'REST API', level: 90 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'XAMPP', level: 75 },
      ],
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'C++', level: 70 },
        { name: 'Web Hosting', level: 88 },
      ],
    },
  ];

 

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-400 mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-burgundy-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative h-auto min-h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg bg-white dark:bg-black p-6 border border-slate-200 dark:border-slate-800"
            >
              {/* Skills List - Always visible */}
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-burgundy-800 dark:text-burgundy-400" size={24} />
                  <h3 className="text-xl font-bold text-burgundy-800 dark:text-burgundy-400">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-burgundy-800 dark:text-burgundy-400 text-xs font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-burgundy-800 dark:bg-burgundy-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
