import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center bg-accent dark:bg-black relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-burgundy-800 dark:bg-burgundy-600 text-white rounded-full text-sm font-medium">
              Hello there
            </div>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                <span className="text-slate-900 dark:text-white">I'm </span>
                <span className="text-burgundy-800 dark:text-burgundy-600">
                  Mercy Adhiambo Ogalo
                </span>
                <span className="text-slate-900 dark:text-white">
                  , Full Stack Developer Based in Kenya.
                </span>
              </h1>
              <div className="h-1 w-24 sm:w-32 bg-burgundy-800 dark:bg-burgundy-600 mb-4 sm:mb-6"></div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 leading-relaxed">
              Specializing in MERN stack development with a passion for creating
              responsive, user-friendly web applications. Experienced in Django,
              React, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-burgundy-800 dark:bg-burgundy-600 text-white rounded-full hover:bg-burgundy-900 dark:hover:bg-burgundy-700 transition-colors text-sm sm:text-base"
              >
                View My Portfolio
                <ArrowRight size={16} className="text-accent" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-burgundy-800 dark:border-burgundy-600 text-burgundy-800 dark:text-burgundy-600 rounded-full hover:bg-burgundy-800 dark:hover:bg-burgundy-600 hover:text-white dark:hover:text-white transition-colors text-sm sm:text-base"
              >
                Hire Me
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md aspect-square">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/855/original/WhatsApp_Image_2025-12-28_at_10.34.40_AM.jpeg?1766907331"
                alt="Mercy Adhiambo Ogalo"
                className="w-full h-full object-cover rounded-full
                  dark:shadow-[0_0_70px_rgba(220,38,38,0.45),0_0_140px_rgba(249,115,22,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
