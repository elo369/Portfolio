"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title?: string;
  subtitle?: string;
}

const FigmaDesign = () => {
    const figmaDesigns:Props[] = [
  {
    image: "/book.jpeg",
    title: "Ember – SaaS Landing Page",
    subtitle: "Minimal SaaS UI focused on knowledge-to-action workflow",
  },
  {
    image: "/travels.png",
    title: "SoulTravel – Travel Booking UI",
    subtitle: "High-conversion travel landing page with lifestyle visuals",
  },
  {
    image: "/electric.png",
    title: "EV-B – Electric Vehicle Concept",
    subtitle: "Futuristic product concept with clean typography and specs",
  },
];

  return (
    <div className="top-30 sm:top-0 relative z-1">
    <div >
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
              Figma Designs
            </motion.h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center p-2">
    {figmaDesigns.map((design, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
      
        group
        w-full
        max-w-[380px]
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-[#1a1a1a]
        hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
        transition
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={design.image}
          alt={design.title || 'Figma Design'}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
      </div>

      {/* Optional Text */}
      {(design.title || design.subtitle) && (
        <div className="p-4 space-y-1">
          {design.title && (
            <h3 className="text-sm sm:text-base font-semibold text-white">
              {design.title}
            </h3>
          )}
          {design.subtitle && (
            <p className="text-xs sm:text-sm text-neutral-400">
              {design.subtitle}
            </p>
          )}
        </div>
      )}
    </motion.div>
    ))}
    </div>
    </div>
  );
};

export default FigmaDesign;
