import { Github, Linkedin, Mail, Phone, Heart, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary dark:bg-burgundy-800 text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src={theme === 'dark' 
                ? "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/854/original/1.png?1766902274"
                : "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/832/original/5.png?1766861085"
              }
              alt="Logo"
              className="h-12 sm:h-16 w-auto object-contain mb-3 md:mb-4 rounded-full"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-white">Mercy Adhiambo Ogalo</h3>
            <p className="text-sm sm:text-base text-white/90 mb-4">
              Full Stack Developer passionate about creating impactful web solutions with modern technologies.
            </p>
           
          </div>

          
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm sm:text-base text-white/90 hover:text-white transition-colors w-full text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-sm sm:text-base text-white/90 hover:text-white transition-colors w-full text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-sm sm:text-base text-white/90 hover:text-white transition-colors w-full text-left"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-sm sm:text-base text-white/90 hover:text-white transition-colors w-full text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('education')}
                  className="text-sm sm:text-base text-white/90 hover:text-white transition-colors w-full text-left"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm sm:text-base text-white/90 hover:text-white transition-colors w-full text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0 sm:col-span-2 md:col-span-1">
            <h4 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-sm sm:text-base text-white/90">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:ogalomercy8@gmail.com" className="hover:text-white transition-colors break-all">
                  ogalomercy8@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base text-white/90">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+254743264872" className="hover:text-white transition-colors">
                  +254 743 264 872
                </a>
              </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5">
              <a
                href="https://github.com/mercyogalo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mercy-ogalo-9a1b69272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:ogalomercy8@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="tel:+254743264872"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </a>
              
            </div>
          </div>



        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
