import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
