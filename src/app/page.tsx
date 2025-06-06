import Navbar from "@/components/Navbar";
import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";
import Projects from "@/components/projects";
import ExperienceSection from "@/components/experience";
import Skills from "@/components/skills";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      
      <ExperienceSection />
      <Skills />
      <ContactSection />
      {/* SplashCursor animation */}
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        PRESSURE_ITERATIONS={20}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        SHADING={true}
        COLOR_UPDATE_SPEED={10}
        TRANSPARENT={true}
      />
      {/* Add more sections as needed */}
    </div>
  );
}
