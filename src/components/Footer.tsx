import { Github, Linkedin, Mail, Phone, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mercy Adhiambo Ogalo</h3>
            <p className="text-slate-300 mb-4">
              Full Stack Developer passionate about creating impactful web solutions with modern technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/mercyogalo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mercy-ogalo-9a1b69272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ogalomercy8@gmail.com"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+254743264872"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('education')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail size={18} />
                <a href="mailto:ogalomercy8@gmail.com" className="hover:text-white transition-colors">
                  ogalomercy8@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone size={18} />
                <a href="tel:+254743264872" className="hover:text-white transition-colors">
                  +254 743 264 872
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
