import Contract from "@/components/Contact";
import FloatNavbar from "@/components/FloatNavbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection/>
      <TechStack/>
      <Projects/>
      <div className="relative z-50 ">
        <FloatNavbar />
      </div>
      <Contract/>
    </div>
  );
}
