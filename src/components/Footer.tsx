"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { LOGO_DARK_SRC, LOGO_LIGHT_SRC, NEUTRAL_BLUR_DATA_URL } from "@/lib/images";

const Footer = () => {
  const { theme } = useTheme();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary dark:bg-black text-white py-8 md:py-12 relative dark:shadow-[0_0_60px_rgba(128,0,32,0.4)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src={theme === "dark" ? LOGO_DARK_SRC : LOGO_LIGHT_SRC}
              alt="Ogalo Mercy Portfolio"
              width={128}
              height={64}
              quality={75}
              placeholder="blur"
              blurDataURL={NEUTRAL_BLUR_DATA_URL}
              className="h-12 sm:h-16 w-auto object-contain mb-3 md:mb-4 rounded-full"
            />
            <p className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-white">Mercy Adhiambo Ogalo</p>
            <p className="text-sm sm:text-base text-white/90 mb-4">
              Full Stack Developer passionate about creating impactful web solutions with modern technologies.
            </p>
           
          </div>

          
          <div className="mt-4 sm:mt-0">
            <p className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-white">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-white/90 dark:text-burgundy-600 hover:text-white dark:hover:text-burgundy-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 sm:mt-0 sm:col-span-2 md:col-span-1">
            <p className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-white">Get In Touch</p>
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
                className="text-white/80 dark:text-burgundy-600 hover:text-white dark:hover:text-burgundy-400 transition-colors"
                aria-label="Mercy Ogalo on GitHub"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mercy-ogalo-9a1b69272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 dark:text-burgundy-600 hover:text-white dark:hover:text-burgundy-400 transition-colors"
                aria-label="Mercy Ogalo on LinkedIn"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:ogalomercy8@gmail.com"
                className="text-white/80 dark:text-burgundy-600 hover:text-white dark:hover:text-burgundy-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="tel:+254743264872"
                className="text-white/80 dark:text-burgundy-600 hover:text-white dark:hover:text-burgundy-400 transition-colors"
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
