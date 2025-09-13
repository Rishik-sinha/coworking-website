import React from 'react';
import { motion } from 'framer-motion';
import backgroundVideo from '../assets/main.mp4';
import Header from './Header.jsx'; // Import the Header component

const Hero = () => {
  const line1 = "Craft your";
  const line2 = "success here";

  const heroTextVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    // The parent section needs to be relative for the sticky header to work correctly within it.
    <section 
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden p-6 snap-start"
    >
      {/* MOVED HEADER HERE */}
      <Header />

      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 container mx-auto w-full">
        <motion.h1 
          className="text-6xl md:text-8xl font-montserrat text-center leading-tight flex flex-col items-center"
          variants={heroTextVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <span className='block md:-translate-x-24 lg:-translate-x-32'>
            {line1}
          </span>
          <span className='block md:translate-x-24 lg:translate-x-32'>
            {line2}
          </span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;

