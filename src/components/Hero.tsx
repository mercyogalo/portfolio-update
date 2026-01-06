import { ChevronDown, ArrowRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const { theme } = useTheme()

  return (
    <section className="min-h-screen flex items-center bg-accent dark:bg-black relative pt-16 dark:shadow-[0_0_60px_rgba(128,0,32,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 w-full">
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
              <a
                href="mailto:ogalomercy8@gmail.com"
                className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-burgundy-800 dark:bg-burgundy-600 text-white rounded-full hover:bg-burgundy-900 dark:hover:bg-burgundy-700 transition-colors text-sm sm:text-base"
              >
                View My Portfolio
                <ArrowRight size={16} className="text-accent" />
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-burgundy-800 dark:border-burgundy-600 text-burgundy-800 dark:text-burgundy-600 rounded-full hover:bg-burgundy-800 dark:hover:bg-burgundy-600 hover:text-white transition-colors text-sm sm:text-base"
              >
                Hire Me
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="hidden dark:block absolute inset-0 rounded-full bg-gradient-radial from-red-600/60 via-orange-500/50 to-transparent blur-3xl -z-0 scale-110"></div>
              <div className="hidden dark:block absolute inset-0 rounded-full shadow-[0_0_80px_rgba(220,38,38,0.6),0_0_120px_rgba(249,115,22,0.4),0_0_160px_rgba(239,68,68,0.3)] -z-0"></div>

              <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
                <img
                  src={
                    theme === 'dark'
                      ? 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/854/original/1.png?1766902274'
                      : 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/832/original/5.png?1766861085'
                  }
                  alt="Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full bg-white dark:bg-black p-2 border-2 border-burgundy-800 dark:border-burgundy-600"
                />
              </div>

              <div className="aspect-square rounded-full   shadow-xl relative z-10 p-2 overflow-visible">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/176/855/original/WhatsApp_Image_2025-12-28_at_10.34.40_AM.jpeg?1766907331"
                    alt="Mercy Adhiambo Ogalo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-1/4 -right-10 sm:-right-14 z-20 bg-accent text-black px-4 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap shadow-lg">
                  Web Design
                </div>

                <div className="absolute bottom-1/4 -left-10 sm:-left-14 z-20 bg-primary text-white px-4 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap shadow-lg">
                  Web Development
                </div>
              </div>

              <div className="absolute top-0 right-0 z-20 w-10 h-10 bg-white dark:bg-black border-2 border-burgundy-800 dark:border-burgundy-600 rounded-full flex items-center justify-center">
                <ChevronDown size={16} className="text-burgundy-800 dark:text-burgundy-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
