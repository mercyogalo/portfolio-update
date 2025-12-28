import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Femicare Chat Agent',
      description: 'Full-stack AI chatbot addressing female vaginal healthcare questions. Built with MERN stack featuring CRUD operations, authentication, and AI integration for accessible healthcare information.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI Integration'],
      link: 'https://ai-project-1-9gvt.onrender.com/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    },
    {
      title: 'AgriGrow Farms Inventory System',
      description: 'Comprehensive inventory management system for agriculture businesses. Features role-based authentication, dashboard analytics, and efficient tracking of stock and operations.',
      tech: ['Django', 'Python', 'MySQL', 'Bootstrap', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
    {
      title: 'Baobab Restaurant Website',
      description: 'Fully responsive restaurant website showcasing Kenyan cuisine. Features contact and reservation forms with Django backend integration and mobile-optimized design.',
      tech: ['Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
    },
    {
      title: 'M-treat Health Organization Site',
      description: 'Dynamic health organization website with automated email system for contact forms and newsletter functionality with subscription management.',
      tech: ['Django', 'React', 'REST API', 'Email Integration'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
    },
    {
      title: 'Jay Foundation Charity Site',
      description: 'Charity organization website with M-Pesa payment integration for secure donations, automated email responses, and responsive design across all devices.',
      tech: ['Django', 'JavaScript', 'M-Pesa API', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop',
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website showcasing my work, skills, and experience with smooth animations and responsive design.',
      tech: ['React', 'Tailwind CSS', 'TypeScript'],
      link: 'https://mercy-ogalo-personal-portfolio.netlify.app/',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || '#'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noopener noreferrer' : undefined}
              className="bg-white dark:bg-black rounded-md shadow-md overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-burgundy-800 dark:hover:border-slate-500 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col cursor-pointer"
            >
              {/* Image section - covering half the card */}
              <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content section */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-burgundy-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                {project.link && (
                  <div className="flex items-center gap-2 text-black dark:text-white font-medium text-sm mt-auto">
                    <ExternalLink size={16} />
                    <span>Visit Website</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
