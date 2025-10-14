import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
            Mercy Adhiambo Ogalo
          </h1>
          <div className="h-1 w-32 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-slate-700 font-light">
            Full Stack Developer & Web Designer
          </p>
        </div>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Specializing in MERN stack development with a passion for creating responsive,
          user-friendly web applications. Experienced in Django, React, and modern web technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:ogalomercy8@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
          >
            View My Work
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/mercyogalo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mercy-ogalo-9a1b69272"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:ogalomercy8@gmail.com"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Mail size={28} />
          </a>
          <a
            href="tel:+254743264872"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Phone size={28} />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
