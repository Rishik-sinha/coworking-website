import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/work-smarter-bg.jpg';

const WorkSmarter = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="relative z-30 -mt-24 rounded-t-[40px] h-screen w-full flex flex-col items-center justify-center text-white px-6 pt-24 snap-start"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 rounded-t-[40px]"></div>
      
      <motion.div 
        className="relative z-10 text-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <motion.h2 
          variants={itemVariant}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Work Smarter,<br/>Not Harder
        </motion.h2>

        <motion.a 
          variants={itemVariant}
          href="#" 
          className="mt-8 inline-block bg-lime-400 text-black font-bold py-3 px-8 rounded-full hover:bg-lime-500 transition-colors"
        >
          Book A Space
        </motion.a>
      </motion.div>
    </section>
  );
};

export default WorkSmarter;