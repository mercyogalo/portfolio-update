import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with a Bachelor's degree in Business Information Technology
              from Jomo Kenyatta University of Agriculture and Technology. My journey in web development
              has been driven by curiosity and a commitment to creating impactful digital solutions.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Currently working as a Full Stack Developer and Co-Instructor at Power Learn Project,
              I specialize in the MERN stack and have extensive experience with Django, React, and modern
              web technologies. I thrive in collaborative environments and am dedicated to continuous learning.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              My work spans from building AI-powered healthcare chatbots to developing comprehensive
              inventory management systems. I believe in writing clean, maintainable code and creating
              user experiences that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-colors">
              <Code2 className="text-slate-900 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clean Code</h3>
              <p className="text-slate-600">
                Writing maintainable and scalable solutions
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-colors">
              <Lightbulb className="text-slate-900 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Creative</h3>
              <p className="text-slate-600">
                Innovative approaches to problem-solving
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-colors">
              <Users className="text-slate-900 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Team Player</h3>
              <p className="text-slate-600">
                Collaborative and communicative in teams
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-slate-900 transition-colors">
              <Zap className="text-slate-900 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Learner</h3>
              <p className="text-slate-600">
                Quick to adapt to new technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
