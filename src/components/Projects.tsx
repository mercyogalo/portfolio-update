import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Qatalyst Project',
      category: 'Blockchain Project',
      description: 'Qatalyst project is a web3 platform to help people manage staff and customers in their business. Is a platform for small business owners who have a problem with managing queues due to the number. I worked on the UI design and the frontend functionality ',
      tech: 'Typescript | Tailwind CSS ',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/177/190/original/screencapture-localhost-8080-2026-01-05-17_50_50.png?1767684394',
      
    },
    {
      title: 'AgriGrow Farms',
      category: 'Inventory Management App',
      description: 'Comprehensive inventory management system for agriculture businesses. Features role-based authentication, dashboard analytics, and efficient tracking of stock and operations.',
      tech: 'Django | Python | MySQL | Bootstrap | JavaScript',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/307/original/screencapture-localhost-8000-acc-home-2025-06-17-12_50_49.png?1750159724',
      
    },
    {
      title: 'Baobab Website',
      category: 'Restaurant Website',
      description: 'Fully responsive restaurant website showcasing Kenyan cuisine. Features contact and reservation forms with Django backend integration and mobile-optimized design.',
      tech: 'Django | HTML5 | CSS3 | JavaScript | Bootstrap',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/308/original/screencapture-localhost-8000-2025-06-17-12_29_16.png?1750159747',
      
    },
    {
      title: 'M-treat Health Organization Site',
      category: 'Health Organization App',
      description: 'Dynamic health organization website with automated email system for contact forms and newsletter functionality with subscription management.',
      tech: 'Django | React | REST API | Email Integration',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/177/169/original/screencapture-linkedin-in-pascal20239-2026-01-05-18_04_36.png?1767626972',
     
    },
    {
      title: 'Jay Foundation',
      category: 'Charity Organization App',
      description: 'Charity organization website with M-Pesa payment integration for secure donations, automated email responses, and responsive design across all devices.',
      tech: 'Django | JavaScript | M-Pesa API | Bootstrap',
      image: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/309/original/screencapture-localhost-8000-2025-06-17-12_25_42.png?1750159770',
      
    },
    
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-600 mb-4">
            Projects
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row gap-0 relative">
                  {/* Colored block with phone and text */}
                  <div className={` ${isEven ? 'lg:w-[60%]' : 'lg:w-[60%] lg:ml-auto'} bg-primary dark:bg-slate-900 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 relative z-10`}>
                    {/* Phone Mockup */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 sm:w-40 md:w-48 h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-xl">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 bg-white rounded-b-lg sm:rounded-b-xl z-10"></div>
                        {/* Screen */}
                        <div className="w-full h-full bg-white rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Text on right side of colored block */}
                    <div className="flex-1 text-accent text-center lg:text-left">
                      <p className="text-xs sm:text-sm uppercase tracking-wide mb-2 font-medium">
                        {project.category}
                      </p>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                 
                  <div className={`mt-6 sm:mt-8 lg:mt-0 ${isEven ? 'lg:absolute lg:right-0 lg:w-[47%]' : 'lg:absolute lg:left-0 lg:w-[47%]'} lg:top-1/2 lg:-translate-y-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center z-20 `}>
                    <p className={`text-primary dark:text-white text-xs sm:text-sm uppercase tracking-wide mb-2 ${isEven ? 'lg:text-right text-left' : 'text-left'}`}>
                      Featured Project
                    </p>
                    <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-primary dark:text-burgundy-600 mb-4 sm:mb-6 ${isEven ? 'lg:text-right text-left' : 'text-left'}`}>
                      {project.title}
                    </h3>
                    <p className="text-foreground dark:text-white mb-4 sm:mb-6 py-4 sm:py-6 md:py-8 px-4 sm:px-6 rounded leading-relaxed bg-accent dark:bg-black text-sm sm:text-base">
                      {project.description}
                    </p>
                    <p className={`text-primary dark:text-burgundy-600 mb-6 sm:mb-8 font-medium text-sm sm:text-base ${isEven ? 'lg:text-right text-left' : 'text-left'}`}>
                      {project.tech}
                    </p>
                   
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
