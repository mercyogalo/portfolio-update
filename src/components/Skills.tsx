import { Code2, Database, Palette, Server, Wrench, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'border-blue-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Material-UI', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'border-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'Django', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'REST API', level: 90 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'border-amber-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'XAMPP', level: 75 },
      ],
    },
    {
      title: 'Design & Other',
      icon: Palette,
      color: 'border-rose-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'C++', level: 70 },
        { name: 'Web Hosting', level: 88 },
      ],
    },
  ];

  const softSkills = [
    { icon: MessageSquare, title: 'Communication', description: 'Clear and effective communication' },
    { icon: Wrench, title: 'Problem Solving', description: 'Analytical thinking and solutions' },
    { icon: Code2, title: 'Time Management', description: 'Efficient task prioritization' },
    { icon: Server, title: 'Adaptability', description: 'Quick to learn new technologies' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl border-l-4 ${category.color} shadow-md hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-slate-900" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-900 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-all hover:transform hover:-translate-y-1"
              >
                <skill.icon className="text-slate-900 mb-4" size={32} />
                <h4 className="text-lg font-bold text-slate-900 mb-2">{skill.title}</h4>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
