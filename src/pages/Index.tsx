
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ParallaxBanner from "@/components/ParallaxBanner";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <FloatingElements />
      <Navigation />
      {/* <Hero3D /> */}
      <ParallaxBanner />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
