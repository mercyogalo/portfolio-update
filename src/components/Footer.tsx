import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { navLinks } from "@/data/nav";
import { CONTACT_EMAIL, PERSON_NAME, SOCIAL_LINKS } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">
              {PERSON_NAME}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm text-white/70">
              Full-stack developer in Nairobi building production web apps, APIs
              and payment integrations.
            </p>
          </div>

          <div>
            <p className="mb-3 font-display text-lg font-bold">Quick Links</p>
            <ul className="space-y-2">
              {navLinks
                .filter((link) => link.href !== "#testimonials" || process.env.NODE_ENV !== "production")
                .map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-accent">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-display text-lg font-bold">Get in touch</p>
            <ul className="mb-4 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" />
                <a href={SOCIAL_LINKS.email} className="hover:text-accent">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+254743264872" className="hover:text-accent">
                  +254 743 264 872
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
                aria-label="Mercy Ogalo on GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
                aria-label="Mercy Ogalo on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
