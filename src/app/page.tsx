import Navbar from "./components/Navbar";
import NeuralBackground3D from "./components/NeuralBackground3D";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AgentPipelineVisualizer from "./components/AgentPipelineVisualizer";
import SkillsBento from "./components/SkillsBento";
import ProjectsSection from "./components/ProjectsSection";
import InteractiveTerminal from "./components/InteractiveTerminal";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CommandMenu from "./components/CommandMenu";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070b] text-white selection:bg-cyan-500 selection:text-black">
      {/* Background Neural Canvas */}
      <NeuralBackground3D />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <AgentPipelineVisualizer />
        <SkillsBento />
        <ProjectsSection />
        <InteractiveTerminal />
        <ContactSection />
        <Footer />
        <CommandMenu />
      </div>
    </main>
  );
}