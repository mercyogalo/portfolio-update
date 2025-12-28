import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-black relative pt-16 dark:shadow-[0_0_60px_rgba(128,0,32,0.4)]">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - 1/2 width */}
          <div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-burgundy-800 dark:text-white mb-4">
                Mercy Adhiambo Ogalo
              </h1>
              <div className="h-1 w-32 bg-burgundy-800 dark:bg-white mb-6"></div>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 font-light">
                Full Stack Developer & Web Designer
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Specializing in MERN stack development with a passion for creating responsive,
              user-friendly web applications. Experienced in Django, React, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:ogalomercy8@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-burgundy-800 dark:bg-white text-white dark:text-black rounded-lg hover:bg-burgundy-900 dark:hover:bg-slate-200 transition-colors"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border-2 border-burgundy-800 dark:border-white text-burgundy-800 dark:text-white rounded-lg hover:bg-burgundy-800 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
              >
                View My Work
              </button>
            </div>

            
          </div>

          {/* Image - 1/2 width */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shadow-xl">
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/855/original/WhatsApp_Image_2025-12-28_at_10.34.40_AM.jpeg?1766907331"
                  alt="Mercy Adhiambo Ogalo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
