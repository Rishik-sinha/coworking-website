import React from 'react';
import { motion } from 'framer-motion';
import sketchImage from '../assets/sketch.jpg'; // We will add this image to the assets folder

const Sketch = () => {
  return (
    <section className="min-h-screen md:h-screen w-full md:snap-start md:snap-always flex items-center bg-black text-white py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={sketchImage} alt="Co-working space layout sketch" className="rounded-lg w-full h-auto object-contain" />
          </motion.div>

          {/* Text/Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Designed for <br/>Productivity & Flow</h2>
            <p className="text-gray-400 mb-4">
              Our spaces are meticulously planned to foster collaboration while respecting the need for individual focus. Every zone is crafted to enhance workflow and spark creativity.
            </p>
            <p className="text-gray-400">
              From open workstations that encourage interaction to private cabins for deep work, the layout is optimized for a seamless transition between different work modes. Conference rooms are strategically placed for easy access without disrupting the quiet zones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sketch;
