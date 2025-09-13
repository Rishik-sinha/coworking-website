import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      <a href="#spaces" onClick={(e) => handleNavClick(e, 'spaces')} className="hover:opacity-70 transition-opacity">Spaces</a>
      <a href="#membership" onClick={(e) => handleNavClick(e, 'membership')} className="hover:opacity-70 transition-opacity">Membership</a>
      <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')} className="hover:opacity-70 transition-opacity">About Us</a>
    </>
  );

  return (
    <>
      <header
        // CHANGE: Switched from 'fixed' to 'absolute' to make it part of the hero scroll
        className="absolute top-0 left-0 w-full z-40 bg-transparent text-white"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="container mx-auto flex justify-between items-center p-6"
        >
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">
              Lazy Developer
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLinks />
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="hover:opacity-70 transition-opacity"
            >
              Log In
            </button>
            <a href="#" className="bg-lime-400 text-black font-bold py-2 px-6 rounded-full hover:bg-lime-500 transition-colors">
              Book A Space
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              // CHANGE: Simplified mobile menu background
              className="lg:hidden bg-black/80 backdrop-blur-md text-white"
            >
              <nav className="flex flex-col items-center space-y-6 py-8">
                <NavLinks />
                <button
                  onClick={() => { setIsLoginModalOpen(true); setIsMobileMenuOpen(false); }}
                  className="hover:opacity-70 transition-opacity"
                >
                  Log In
                </button>
                <a href="#" className="bg-lime-400 text-black font-bold py-2 px-6 rounded-full hover:bg-lime-500 transition-colors">
                  Book A Space
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;

