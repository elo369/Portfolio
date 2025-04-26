import Image from "next/image";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

interface tech {
  image:string,
  name:string
}
const TechStack = () => {
  const techStacks:tech[] = [
    {
      image: "/html.png",
      name: "HTML",
    },
    {
      image: "/css-3.png",
      name: "CSS",
    },
    {
      image: "/java-script.png",
      name: "Javascript",
    },
    {
      image: "/typescript.png",
      name: "Typescript",
    },
    {
      image: "/atom.png",
      name: "React.js",
    },
    {
      image: "/developer.png",
      name: "Node.js",
    },
    {
      image: "/nextjs.svg",
      name: "Next.js",
    },
    {
      image: "/icons8-express-js-100.png",
      name: "Express.js",
    },
    {
      image: "/icons8-tailwind-css-192.png",
      name: "Tailwind",
    },
    {
      image: "/icons8-mongodb-96.png",
      name: "Mongodb",
    },
  ];
  return (
    <div id="tech" className="min-h-screen sm:min-h-[70vh] relative py-30 sm:top:10 ">
      <div>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight bottom-5 sm:text-5xl md:top-1 bg-black">
          Tech Stack
        </h2>
        <div className="sm:w-[40rem] w-full h-40 relative bottom-8 m-auto right-8 sm:right-0">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
        <div className="flex flex-wrap flex-row lg:w-full md:w-[80vw] sm:w-[90vw] sm:m-auto md:m-auto h-[30vh] bg-black gap-7 lg:px-27  relative md:bottom-0  b justify-center items-center min-h-70 bottom-35">
          {techStacks.map((stacks) => (
            <div
              key={stacks.name}
              className="border border-black lg:p-7 md:p-3 sm:p-4 flex flex-col justify-center items-center text-white bg-[#303030] rounded-md lg:w-50 md:w-25 sm:w-18 gap-1 w-30 px-10 py-2"
            >
              <Image
                width={80}
                height={50}
                src={stacks.image}
                alt="image"
                className="w-17 "
              />
              <p className="sm:text-sm md:text-md text-[10px] bg-gradient-to-b from-neutral-500 to-white bg-clip-text text-transparent">{stacks.name}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default TechStack;
