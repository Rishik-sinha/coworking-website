import React from 'react';

const Footer = () => {
  return (
    // Updated: Uses natural height on mobile, full screen on medium+
    <footer className="min-h-screen md:h-screen w-full md:snap-start flex items-center bg-black text-white py-16 px-6 font-sans">
      <div className="container mx-auto">
        
        {/* Top Navigation - now stacks on mobile */}
        <nav className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 md:mb-16">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Spaces</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Membership</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
        </nav>

        <div className="text-center">
          {/* Adjusted heading size for mobile */}
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider">STAY CONNECTED</h2>
          <form className="max-w-md mx-auto flex items-center bg-[#1C1C1C] rounded-full p-2 mb-16 md:mb-24">
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
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-center md:text-left">
          <p className="text-2xl font-bold text-white mb-4 md:mb-0">Lazy Developer</p>
          <p className="text-sm mb-4 md:mb-0 order-last md:order-none">&copy; 2025 All Rights Reserved. Lazy Developer.</p>
          <div className="flex space-x-4">
            {/* Real SVG Icons */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058-1.644.07-4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
            </a>
             <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

