import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import Image from "next/image";

const HeroSection = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black z-1 min-h-screen top-4">
      <h2 id="hero" className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight sm:text-4xl md:top-10 lg:top-0 bottom-5">
      Hey, I&apos;M Rohit Rikame
      </h2>
      <div className="z-2 flex md:flex-row bottom-5 relative sm:flex-col items-center sm:gap-3 lg:top-2 flex-col gap-5">
        <Image
          src={"/portfolioPhoto2.jpg"}
          alt="portfolioPhoto"
          width={200}
          height={200}
          className="rounded-full sm:w-30 md:w-45 lg:w-55 w-33"
        />
        <p className="max-w-xl mx-auto text-sm md:text-lg dark:text-neutral-400 text-center bg-gradient-to-b from-neutral-500 to-white bg-clip-text text-transparent left-2 relative top-3 sm:top-6 md:px-3 ">
        I&apos;m a 21-year-old BCom student with a strong passion for full stack
          development. Skilled in the MERN stack and Next.js, I enjoy building
          creative, user-friendly, and efficient web applications. I&apos;ve
          dedicated myself to mastering full-stack development and continuously
          expanding my technical skills. I&apos;m currently focused on sharpening my
          development expertise and exploring new tools and technologies to grow
          as a professional in the tech world.
        </p>
      </div>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-[#4e91de] via-[#bba7a2] to-[#e56a4a] dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight top-6 sm:text-3xl md:bottom-5 md:right-2">
        Full Stack Developer
      </h2>
    </BackgroundLines>
  );
};

export default HeroSection;
