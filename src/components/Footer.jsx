import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TermsModal from './TermsModal'; // Import the new modal component

const Footer = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <footer className="relative z-20 -mt-32 scroll-section">
        <motion.div
          className="h-[60vh] rounded-t-[40px] bg-black text-white flex items-center"
          variants={footerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="container mx-auto px-6 sm:px-8">
            <motion.nav
              variants={itemVariant}
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12"
            >
              <a href="#spaces" onClick={(e) => handleNavClick(e, 'spaces')} className="text-gray-400 hover:text-white transition-colors">Spaces</a>
              <a href="#membership" onClick={(e) => handleNavClick(e, 'membership')} className="text-gray-400 hover:text-white transition-colors">Membership</a>
              <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')} className="text-gray-400 hover:text-white transition-colors">About Us</a>
            </motion.nav>

            <div className="text-center">
              <motion.h2 variants={itemVariant} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-wider">STAY CONNECTED</motion.h2>
              <motion.form variants={itemVariant} className="max-w-md mx-auto flex items-center border border-gray-700 rounded-full p-2 mb-12">
                <input
                  type="email"
                  placeholder="Email address..."
                  className="bg-transparent text-white placeholder-gray-500 w-full focus:outline-none px-4"
                />
                <button
                  type="submit"
                  className="bg-white rounded-full p-3 hover:bg-gray-200 transition-colors flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </motion.form>
            </div>

            <motion.div variants={itemVariant} className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-center md:text-left space-y-6 md:space-y-0">
              <p className="text-2xl font-bold text-white">Lazy Developer</p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 order-last md:order-none">
                <p className="text-sm">&copy; 2025 All Rights Reserved. Lazy Developer.</p>
                {/* CHANGE: Added button to open the terms modal */}
                <button onClick={() => setIsTermsModalOpen(true)} className="text-sm underline hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors" aria-label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058-1.644.07-4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg></a>
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </footer>
      {/* CHANGE: Added the modal component, controlled by state */}
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  );
};

export default Footer;

