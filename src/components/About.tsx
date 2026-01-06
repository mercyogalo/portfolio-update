import { ArrowRight } from 'lucide-react'

const About = () => {
  const skills = ['React.js', 'Django', 'Express.js', 'TypeScript', 'Node.js', 'Mpesa integration']

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-accent dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="hidden dark:block absolute inset-0 rounded-full bg-gradient-radial from-red-600/60 via-orange-500/50 to-transparent blur-3xl -z-0 scale-110"></div>
              <div className="hidden dark:block absolute inset-0 rounded-full shadow-[0_0_80px_rgba(220,38,38,0.6),0_0_120px_rgba(249,115,22,0.4),0_0_160px_rgba(239,68,68,0.3)] -z-0"></div>

              <div className="aspect-square rounded-full overflow-hidden shadow-xl relative z-10 p-2">
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/855/original/WhatsApp_Image_2025-12-28_at_10.34.40_AM.jpeg?1766907331"
                  alt="Mercy Adhiambo Ogalo"
                  className="w-full h-full object-cover rounded-full"
                />

                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-wrap gap-1 sm:gap-2 justify-center max-w-[85%] sm:max-w-[80%]">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-burgundy-800 dark:bg-burgundy-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <p className="text-primary dark:text-white text-xs sm:text-sm uppercase tracking-wide font-bold dark:text-burgundy-600">
                About Me
              </p>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Who is <span className="text-primary">Mercy Ogalo</span>?
            </h3>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer specializing in MERN stack development with extensive experience in Django, React, and modern web technologies.
            </p>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Currently working as a Full Stack Developer and Co-Instructor at Power Learn Project, I thrive in collaborative environments and am dedicated to creating impactful digital solutions.
            </p>

            <a
              href="/Mercy_Adhiambo_Ogalo_CV.pdf"
              download
              className="inline-flex items-center gap-1 bg-primary p-1 rounded-full hover:opacity-90 transition-opacity"
            >
              <span className="bg-accent text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base">
                Download CV
              </span>
              <span className="bg-accent p-2 sm:p-3 rounded-full flex items-center justify-center">
                <ArrowRight size={12} className="text-primary sm:w-[18px] sm:h-[18px]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
