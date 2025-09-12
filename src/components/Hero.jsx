import React from 'react';
import { motion } from 'framer-motion';
import backgroundVideo from '../assets/main.mp4';

const Hero = () => {
  const sentence = "Craft your success here";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 * i },
    }),
  };

  const letter = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    // Updated: Uses full screen height on medium screens+, and natural height on mobile
    <section 
      className="relative h-screen w-full md:snap-start flex items-end justify-center text-white overflow-hidden pb-20 pt-40 md:pt-20"
    >
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 container mx-auto px-6 w-full">
        <motion.h1 
          className="text-6xl md:text-8xl font-serif text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;

