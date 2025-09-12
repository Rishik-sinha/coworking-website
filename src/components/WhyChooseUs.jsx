import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionData = [
  {
    title: 'Flexible Workspaces',
    content: 'Find the workspace that suits your unique work style, whether you prefer private offices, collaborative shared spaces, or modern meeting rooms.'
  },
  {
    title: 'Tech-Infused Productivity',
    content: 'Stay at the forefront of technology with our high-speed internet, cutting-edge tech amenities, and modern meeting spaces. Experience a work environment built for success.'
  },
  {
    title: 'Community Collaboration',
    content: 'Connect with a vibrant community of professionals. Our spaces are designed to foster networking, collaboration, and growth.'
  },
  {
    title: 'Premium Comfort Spaces',
    content: 'Enjoy premium amenities and ergonomic furniture designed for comfort and productivity, ensuring you can do your best work every day.'
  }
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.03,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const headingContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, scale: 1.5, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
  };
  
  const headingText = "WHY GECO?";

  return (
    // Added id="about-us" to this section
    <section id="about-us" className="min-h-screen md:h-screen w-full md:snap-start flex items-center justify-center bg-black text-white py-24 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl md:text-8xl font-bold text-center mb-12 md:mb-16 flex justify-center overflow-hidden py-4"
          variants={headingContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariant}
              className={char === " " ? "w-4 md:w-6" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        
        <div 
          className="max-w-4xl mx-auto"
          onMouseLeave={() => setOpenIndex(null)}
        >
          {accordionData.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative border-b border-gray-700 py-6 cursor-pointer"
              onMouseEnter={() => setOpenIndex(index)}
              initial="initial"
              whileHover="hover"
            >
              <div className="w-full flex justify-between items-center text-left text-xl md:text-3xl font-medium">
                <span className="flex-grow">{item.title}</span>
                <span className="text-gray-400 ml-4">0{index + 1}</span>
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-white"
                variants={{
                  initial: { width: '0%' },
                  hover: { width: '100%' }
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      className="text-gray-400 max-w-2xl text-base md:text-lg"
                      variants={sentenceVariant}
                      initial="hidden"
                      animate="visible"
                    >
                      {item.content.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          variants={wordVariant}
                          style={{ display: 'inline-block', marginRight: '5px' }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

