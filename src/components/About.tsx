import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = ['React.js', 'Django', 'Node.js', 'MongoDB'];

  return (
    <section id="about" className="py-20 bg-accent dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-burgundy-600 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-burgundy-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with skills */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md">
              {/* Glow effect - red-orange shadow behind image - only in dark mode */}
              <div className="hidden dark:block absolute inset-0 rounded-full bg-gradient-radial from-red-600/60 via-orange-500/50 to-transparent blur-3xl -z-0 scale-110"></div>
              <div className="hidden dark:block absolute inset-0 rounded-full shadow-[0_0_80px_rgba(220,38,38,0.6),0_0_120px_rgba(249,115,22,0.4),0_0_160px_rgba(239,68,68,0.3)] -z-0"></div>
              
              <div className="aspect-square rounded-full overflow-hidden bg-primary dark:bg-slate-700 shadow-xl relative z-10 p-2">
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/855/original/WhatsApp_Image_2025-12-28_at_10.34.40_AM.jpeg?1766907331"
                  alt="Mercy Adhiambo Ogalo"
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
                
                {/* Skills at bottom center inside image */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-wrap gap-2 justify-center max-w-[80%]">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-burgundy-800 dark:bg-burgundy-600 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with a Bachelor's degree in Business Information Technology
              from Jomo Kenyatta University of Agriculture and Technology. My journey in web development
              has been driven by curiosity and a commitment to creating impactful digital solutions.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Currently working as a Full Stack Developer and Co-Instructor at Power Learn Project,
              I specialize in the MERN stack and have extensive experience with Django, React, and modern
              web technologies. I thrive in collaborative environments and am dedicated to continuous learning.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My work spans from building AI-powered healthcare chatbots to developing comprehensive
              inventory management systems. I believe in writing clean, maintainable code and creating
              user experiences that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
