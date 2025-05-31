"use client"
import Contract from "@/components/Contact";
import FloatNavbar from "@/components/FloatNavbar";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { motion, useScroll } from "motion/react"

export default function Home() {
      const { scrollYProgress } = useScroll()

  return (
    <div className="bg-black">
       <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    // backgroundColor: "#ff0088",
                }}
                className="z-60 bg-gradient-to-r from-violet-600 to-indigo-600"
            />
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
