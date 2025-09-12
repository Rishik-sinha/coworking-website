import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '150%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '150%', opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          // Updated styles for robust responsiveness and desktop positioning
          className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-[#1C1C1C]/90 backdrop-blur-sm text-white p-4 z-50 flex flex-col items-center gap-4 rounded-2xl shadow-2xl lg:flex-row lg:left-auto lg:right-8 lg:w-auto lg:max-w-xl lg:rounded-full"
        >
          <p className="text-sm text-gray-300 text-center lg:text-left lg:ml-4">
            This site uses <a href="#" className="underline hover:text-white">cookies</a> to improve your experience.
          </p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#" className="text-sm underline hover:text-white whitespace-nowrap">View Policy</a>
            <button 
              onClick={handleAccept}
              className="bg-white text-black font-bold py-2 px-5 rounded-full hover:bg-gray-200 transition-colors text-sm"
            >
              ACCEPT
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

