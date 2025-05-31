"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
interface Lang {
  imgLang: string;
  language: string;
}

interface Pro {
  image: string;
  title: string;
  link: string;
  github: string;
  lang: Lang[];
}

const Projects = () => {
  const projects: Pro[] = [
    {
      image: "/chat.jpg",
      title: "Chat Application",
      link: "Live demo is currently facing issues",
      github: "https://github.com/elo369/ChatApp",
      lang: [
        {
          imgLang: "/atom.png",
          language: "React",
        },
        {
          imgLang: "/icons8-tailwind-css-192.png",
          language: "Tailwind",
        },
        {
          imgLang: "/icons8-express-js-100.png",
          language: "Express",
        },
        {
          imgLang: "/developer.png",
          language: "Node.js",
        },
        {
          imgLang: "/Socket.io.png",
          language: "Socket.io",
        },
      ],
    },
    {
      image: "/musics.jpg",
      title: "Music Academy",
      link: "https://music-studio-84le.vercel.app/",
      github: "https://github.com/elo369/musicStudio",
      lang: [
        {
          imgLang: "/atom.png",
          language: "React",
        },
        {
          imgLang: "/icons8-tailwind-css-192.png",
          language: "Tailwind",
        },
        {
          imgLang: "/nextjs.svg",
          language: "Next.js",
        },
        {
          imgLang: "/typescript.png",
          language: "Typescript",
        },
      ],
    },
    {
      image: "/vrs.jpg",
      title: "Chat Application",
      link: "https://virtual-r-xi-six.vercel.app/",
      github: "https://github.com/elo369/virtualR",
      lang: [
        {
          imgLang: "/atom.png",
          language: "React",
        },
        {
          imgLang: "/icons8-tailwind-css-192.png",
          language: "Tailwind",
        },
      ],
    },
  ];
  return (
    <div
      id="project"
      className="min-h-screen px-2  bg-black top-25 sm:top-0 md:top-40 relative"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.3,
          }}
          viewport={{ once: true }}
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight bottom-5 sm:text-5xl md:top-1 bg-black"
        >
          Projects
        </motion.h2>
      </div>
      <div className=" justify-center px-2 items-center  flex flex-wrap gap-2">
        {/* <div className='flex flex-col flex-wrap bg-amber-300 w-[55px] h-10 gap-2 '> */}
        <div className="gap-8 flex flex-wrap flex-col  sm:flex-row">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                delay: 0.6,
                ease: "easeInOut",
                duration: 0.3,
              }}
              viewport={{ once: true }}
              key={index}
              className="bg-[rgb(49,49,49)]   w-80 h-70 border border-white rounded-xl hover:shadow-amber-200 hover:shadow-lg "
            >
              <div className="w-80">
                <Image
                  src={project.image}
                  alt="prject"
                  width={2000}
                  height={2000}
                  className="p-2 w-90 h-40 object-fill "
                />
              </div>
              <div>
                <h1 className="font-bold px-2 bg-gradient-to-b from-neutral-500 to-white bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <div className="px-2 flex justify-between">
                  <Link href={project.link} target="_blank">
                    <h3 className="bg-gradient-to-b from-neutral-500 to-white bg-clip-text text-transparent text-sm">
                      {project.link}
                    </h3>
                  </Link>
                  <Link href={project.github} target="_blank">
                    <Image
                      src="/github-logo.png"
                      alt="github"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
                <div className="flex flex-wrap p-2">
                  {project.lang.map((langs, index) => (
                    <div className="flex p-1 gap-1 " key={index}>
                      <Image
                        src={langs.imgLang}
                        alt="language"
                        width={100}
                        height={100}
                        className="w-5"
                      />
                      <p className="sm:text-sm md:text-md text-[15px] bg-gradient-to-b from-neutral-500 to-white bg-clip-text text-transparent">
                        {langs.language}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* </div> */}
      </div>
      <div className=" flex justify-center items-center py-10">
        <motion.button 
        initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.3,
          }}
          viewport={{ once: true }}
        className="shadow-[inset_0_0_0_2px_#616467] text-gray-300 px-8 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 ">
          <Link href={"https://github.com/elo369"} target="_blank">
            All Projects
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;
