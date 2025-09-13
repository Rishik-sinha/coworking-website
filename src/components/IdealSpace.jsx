import React from 'react';
import { motion } from 'framer-motion';

import publicSpaceImg from '../assets/public-space.jpg';
import privateSpaceImg from '../assets/private-space.jpg';
import meetingRoomImg from '../assets/meeting-room.jpg';

const IdealSpace = () => {
  const sentence = "Finding the ideal space is a thing of the past. Welcome to a new era of productivity and collaboration.";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.2 * i },
    }),
  };

  const letter = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const cardData = [
    { img: publicSpaceImg, title: 'Public Space', description: 'Embrace the energy of our public spaces' },
    { img: privateSpaceImg, title: 'Private Space', description: 'Focus of your own private space' },
    { img: meetingRoomImg, title: 'Meeting Room', description: 'We provide the ideal setting for productive collaboration' }
  ];

  return (
    <section id="spaces" className="min-h-screen md:h-screen w-full md:snap-start md:snap-always flex items-center py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl text-white font-serif max-w-4xl mx-auto text-center mb-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          // CHANGE: Removed 'once: true'
          viewport={{}}
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 md:mb-16">Discover Our Membership Plans</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              // CHANGE: Removed 'once: true'
              viewport={{}}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.3 + (index * 0.15) 
              }}
            >
              <img src={card.img} alt={card.title} className="rounded-lg mb-4 h-64 w-full object-cover" />
              <h3 className="text-xl text-white font-bold">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealSpace;

