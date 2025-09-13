import React from 'react';
import { motion } from 'framer-motion';

import publicSpaceImg from '../assets/public-space.jpg';
import privateSpaceImg from '../assets/private-space.jpg';
import meetingRoomImg from '../assets/meeting-room.jpg';

const IdealSpace = () => {
  const sentence = "Finding the ideal space is a thing of the past. Welcome to a new era of productivity and collaboration.";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.2 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardData = [
    { img: publicSpaceImg, title: 'Public Space', description: 'Embrace the energy of our public spaces' },
    { img: privateSpaceImg, title: 'Private Space', description: 'Focus of your own private space' },
    { img: meetingRoomImg, title: 'Meeting Room', description: 'We provide the ideal setting for productive collaboration' }
  ];

  return (
    <section 
      id="spaces" 
      className="relative z-20 -mt-24 rounded-t-[40px] min-h-screen w-full flex items-center bg-white text-black snap-start"
    >
      <div className="container mx-auto pt-40 pb-24 px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-sans max-w-4xl mx-auto text-center mb-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-center text-gray-500 mb-12 md:mb-16">Discover Our Membership Plans</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + (index * 0.1) 
              }}
            >
              <img src={card.img} alt={card.title} className="rounded-lg mb-4 h-64 w-full object-cover" />
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-gray-500">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealSpace;