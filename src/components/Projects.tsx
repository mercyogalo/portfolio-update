import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Femicare Chat Agent',
      category: 'AI Healthcare Chatbot',
      description: 'Full-stack AI chatbot addressing female vaginal healthcare questions. Built with MERN stack featuring CRUD operations, authentication, and AI integration for accessible healthcare information.',
      tech: 'MongoDB | Express.js | React | Node.js | AI Integration',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      color: 'bg-green-200',
    },
    {
      title: 'AgriGrow Farms',
      category: 'Inventory Management App',
      description: 'Comprehensive inventory management system for agriculture businesses. Features role-based authentication, dashboard analytics, and efficient tracking of stock and operations.',
      tech: 'Django | Python | MySQL | Bootstrap | JavaScript',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/307/original/screencapture-localhost-8000-acc-home-2025-06-17-12_50_49.png?1750159724',
      color: 'bg-teal-200',
    },
    {
      title: 'Baobab Website',
      category: 'Restaurant Website',
      description: 'Fully responsive restaurant website showcasing Kenyan cuisine. Features contact and reservation forms with Django backend integration and mobile-optimized design.',
      tech: 'Django | HTML5 | CSS3 | JavaScript | Bootstrap',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/308/original/screencapture-localhost-8000-2025-06-17-12_29_16.png?1750159747',
      color: 'bg-purple-200',
    },
    {
      title: 'M-treat Health Organization Site',
      category: 'Health Organization App',
      description: 'Dynamic health organization website with automated email system for contact forms and newsletter functionality with subscription management.',
      tech: 'Django | React | REST API | Email Integration',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/177/169/original/screencapture-linkedin-in-pascal20239-2026-01-05-18_04_36.png?1767626972',
      color: 'bg-green-200',
    },
    {
      title: 'Jay Foundation',
      category: 'Charity Organization App',
      description: 'Charity organization website with M-Pesa payment integration for secure donations, automated email responses, and responsive design across all devices.',
      tech: 'Django | JavaScript | M-Pesa API | Bootstrap',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/309/original/screencapture-localhost-8000-2025-06-17-12_25_42.png?1750159770',
      color: 'bg-teal-200',
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
      <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-400 mb-4">
            Projects
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-0 relative">
                  {/* Colored block with phone and text */}
                  <div className={` ${isEven ? 'lg:w-[60%]' : 'lg:w-[60%] lg:ml-auto'} bg-primary dark:bg-black p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 relative z-10`}>
                    {/* Phone Mockup */}
                    <div className="flex-shrink-0">
                      <div className="relative w-48 h-[400px] bg-white rounded-[2rem] p-2 shadow-xl">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-white rounded-b-xl z-10"></div>
                        {/* Screen */}
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Text on right side of colored block */}
                    <div className="flex-1 text-accent">
                      <p className="text-sm uppercase tracking-wide mb-2 font-medium">
                        {project.category}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description panel - at bottom on small/medium, overlapping on large */}
                  <div className={`mt-8 lg:mt-0 ${isEven ? 'lg:absolute lg:right-0 lg:w-[47%]' : 'lg:absolute lg:left-0 lg:w-[47%]'} lg:top-1/2 lg:-translate-y-1/2 p-8 lg:p-12 flex flex-col justify-center z-20`}>
                    <p className={`text-primary dark:text-white text-sm uppercase tracking-wide mb-2 ${isEven ? 'lg:text-right text-left' : 'text-left'}`}>
                      Featured Project
                    </p>
                    <h3 className={`text-3xl lg:text-4xl font-bold text-primary dark:text-burgundy-400 mb-6 ${isEven ? 'lg:text-right text-left' : 'text-left'}`}>
                      {project.title}
                    </h3>
                    <p className="text-foreground dark:text-white mb-6 py-8 px-6 rounded leading-relaxed bg-accent dark:bg-black">
                      {project.description}
                    </p>
                    <p className={`text-primary dark:text-white mb-8 font-medium ${isEven ? 'lg:text-right text-left' : 'text-left'}`}>
                      {project.tech}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-800 dark:border-white text-slate-800 dark:text-white hover:bg-slate-800 dark:hover:bg-white hover:text-white dark:hover:text-slate-800 transition-colors font-medium w-fit ${isEven ? 'lg:ml-auto mr-auto lg:mr-0' : 'mr-auto'}`}
                      >
                        VIEW DETAILS
                        <ExternalLink size={18} />
                      </a>
                    )}
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
