import React from 'react';
import { motion } from 'framer-motion';
import sketchImage from '../assets/sketch.jpg';

const Sketch = () => {
  return (
    <section className="relative h-screen snap-start w-full flex items-center bg-white text-black py-24 px-6">
      <div className="container mx-auto">
        {/* Main grid for the responsive two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={sketchImage} alt="Co-working space layout sketch" className="rounded-lg w-full h-auto object-contain" />
          </motion.div>

          {/* Right Column: Text Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A Blueprint for Productivity
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Every inch of our workspace is meticulously planned to foster a dynamic environment. The layout balances open, collaborative zones with private, focused areas, ensuring a productive workflow for every work style.
            </p>
            <p className="text-gray-600 text-lg">
              From the strategic placement of conference rooms to the flow of our open workstations, the design is engineered to minimize distractions and maximize creativity and connection.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sketch;