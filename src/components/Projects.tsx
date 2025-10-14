import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Femicare Chat Agent',
      description: 'Full-stack AI chatbot addressing female vaginal healthcare questions. Built with MERN stack featuring CRUD operations, authentication, and AI integration for accessible healthcare information.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI Integration'],
      link: 'https://ai-project-1-9gvt.onrender.com/',
      featured: true,
    },
    {
      title: 'AgriGrow Farms Inventory System',
      description: 'Comprehensive inventory management system for agriculture businesses. Features role-based authentication, dashboard analytics, and efficient tracking of stock and operations.',
      tech: ['Django', 'Python', 'MySQL', 'Bootstrap', 'JavaScript'],
      featured: true,
    },
    {
      title: 'Baobab Restaurant Website',
      description: 'Fully responsive restaurant website showcasing Kenyan cuisine. Features contact and reservation forms with Django backend integration and mobile-optimized design.',
      tech: ['Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: true,
    },
    {
      title: 'M-treat Health Organization Site',
      description: 'Dynamic health organization website with automated email system for contact forms and newsletter functionality with subscription management.',
      tech: ['Django', 'React', 'REST API', 'Email Integration'],
      featured: false,
    },
    {
      title: 'Jay Foundation Charity Site',
      description: 'Charity organization website with M-Pesa payment integration for secure donations, automated email responses, and responsive design across all devices.',
      tech: ['Django', 'JavaScript', 'M-Pesa API', 'Bootstrap'],
      featured: false,
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website showcasing my work, skills, and experience with smooth animations and responsive design.',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://mercy-ogalo-personal-portfolio.netlify.app/',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Work
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </div>

        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 hover:border-slate-900 transition-all hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                      <span className="px-3 py-1 bg-slate-900 text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                  )}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-all hover:transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h4>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline text-sm"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
