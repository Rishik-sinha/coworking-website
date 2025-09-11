import React, { useState } from 'react';

const Logo = () => (
  // Added text-white class here
  <div className="text-2xl font-bold text-white">
    Lazy Developer
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Removed "fixed" and related classes, changed background to solid black
    <header className="relative w-full p-6 z-50 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* --- Desktop Navigation (Visible on large screens) --- */}
        <nav className="hidden lg:flex bg-black/30 p-1 rounded-full">
          <ul className="flex items-center space-x-2">
            <li><a href="#" className="text-white text-sm py-2 px-5 block hover:bg-white/10 rounded-full transition-colors">Work</a></li>
            <li><a href="#" className="text-white text-sm py-2 px-5 block hover:bg-white/10 rounded-full transition-colors">About</a></li>
            <li><a href="#" className="bg-white text-black text-sm py-2 px-5 block rounded-full hover:bg-gray-200 transition-colors">Contact Us</a></li>
          </ul>
        </nav>

        {/* --- Hamburger Button (Visible on small screens) --- */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-white z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* --- Mobile Menu Panel --- */}
        <div 
          className={`lg:hidden absolute top-full mt-4 left-0 w-full bg-black/80 backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%] opacity-0'}`
          }
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><a href="#" className="text-white text-lg py-2 px-5 block">Work</a></li>
            <li><a href="#" className="text-white text-lg py-2 px-5 block">About</a></li>
            <li><a href="#" className="text-white text-lg py-2 px-5 block">Contact Us</a></li>
          </ul>
        </div>

      </div>
    </header>
  );
};

export default Header;