import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/work-smarter-bg.jpg';

const WorkSmarter = () => {
  const line1 = "Work Smarter,";
  const line2 = "Not Harder";

  const sentenceVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    // Updated: Uses natural height on mobile, full screen on medium+
    <section 
      className="relative min-h-[70vh] md:h-screen w-full md:snap-start flex flex-col items-center justify-center text-white py-24 px-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // This creates the parallax effect
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 text-center">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold leading-tight"
          variants={sentenceVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="flex justify-center">
            {line1.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
          </span>
          <span className="flex justify-center">
            {line2.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        <motion.a 
          href="#" 
          className="mt-8 inline-block bg-lime-400 text-black font-bold py-3 px-8 rounded-full hover:bg-lime-500 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Book A Space
        </motion.a>
      </div>
    </section>
  );
};

export default WorkSmarter;

