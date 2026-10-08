import dynamic from "next/dynamic";
import { ScrollProgress } from "@/components/motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HashFocus = dynamic(() => import("@/components/HashFocus"));

export default function Home() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Companies />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <HashFocus />
    </div>
  );
}
