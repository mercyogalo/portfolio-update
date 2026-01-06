import { Globe, Code, Palette, Share2, Smartphone, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      icon: Globe,
      description: 'Creating beautiful and intuitive web interfaces that engage users and drive conversions.',
    },
    {
      title: 'Web Development',
      icon: Code,
      description: 'Building responsive, scalable web applications using modern technologies and best practices.',
    },
    {
      title: 'Graphic Design',
      icon: Palette,
      description: 'Designing compelling visual content that communicates your brand message effectively.',
    },
    {
      title: 'Social Media Handling',
      icon: Share2,
      description: 'Managing and optimizing your social media presence to grow your online community.',
    },
    {
      title: 'Database Management',
      icon: Database,
      description: 'Designing and managing efficient database systems for optimal performance.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-600 mb-4">
            Services
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-burgundy-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-background dark:bg-black p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="bg-burgundy-800 dark:bg-burgundy-600 p-2 sm:p-3 rounded-lg">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-black dark:text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

