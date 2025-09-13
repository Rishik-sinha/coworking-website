import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        // CHANGE: Changed positioning to absolute and removed background styles.
        className="absolute top-0 left-0 w-full z-40 text-white"
      >
        <div className="container mx-auto flex justify-between items-center p-6">
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl font-bold"
            >
              Lazy Developer
            </motion.div>

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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              // CHANGE: The mobile menu background is now also fully transparent
              className="lg:hidden bg-transparent text-white"
            >
              <nav className="flex flex-col items-center space-y-6 py-8">
                <NavLinks />
                <button 
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
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
      </motion.header>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;

