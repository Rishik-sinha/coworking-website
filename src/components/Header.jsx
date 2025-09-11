import React, { useState } from 'react';

const Logo = () => (
  <div className="text-2xl font-bold text-black">
    Lazy Developer
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const centresData = {
    cities: ["Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Mumbai", "Noida", "Pune"],
    locations: ["Cunningham Road", "Whitefield", "Marathahalli", "Koramangala", "MG Road", "Bannerghatta Main Rd", "Infantry Road", "Domlur", "Bellandur", "Hebbal", "Mahadevapura"],
  };

  return (
    // Changed "relative" to "fixed top-0 left-0" to make it static
    <header 
      className="fixed top-0 left-0 w-full p-6 z-50 bg-white shadow-md text-black"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-600">About us</a>
          
          {/* Centres Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveMenu('centres')}>
            <button className="flex items-center hover:text-gray-600">
              Centres <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeMenu === 'centres' && (
              <div className="absolute top-full mt-2 w-[500px] bg-white shadow-lg rounded-lg p-8">
                <div className="flex gap-8">
                  <ul className="space-y-2 w-1/3">
                    {centresData.cities.map(city => <li key={city}><a href="#" className="block hover:font-semibold">{city}</a></li>)}
                  </ul>
                  <ul className="space-y-2 w-2/3">
                    {centresData.locations.map(loc => <li key={loc}><a href="#" className="block text-gray-600 hover:text-black">{loc}</a></li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Workspaces Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveMenu('workspaces')}>
            <button className="flex items-center hover:text-gray-600">
              Workspaces <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {activeMenu === 'workspaces' && (
              <div className="absolute top-full mt-2 w-[600px] bg-white shadow-lg rounded-lg p-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold mb-2">Office Spaces</h3>
                        <p className="text-sm text-gray-600">Ready-to-move-in or customisable private offices.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Workplace</h3>
                        <p className="text-sm text-gray-600">One platform for workspace management.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Coworking spaces</h3>
                        <p className="text-sm text-gray-600">Coworking spaces for the hour, day, or month.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Virtual Office</h3>
                        <p className="text-sm text-gray-600">Give your business a premium address.</p>
                    </div>
                </div>
              </div>
            )}
          </div>
          
          <a href="#" className="hover:text-gray-600">Enterprise</a>
        </nav>
        
        {/* Updated the button styles and text */}
        <a href="#" className="hidden lg:block bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors">
            Contact Us
        </a>

        {/* --- Hamburger Button --- */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-black z-50"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>

        {/* --- Mobile Menu Panel --- */}
        <div className={`lg:hidden absolute top-full mt-4 left-0 w-full bg-white shadow-lg rounded-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><a href="#" className="text-lg py-2 px-5 block">About us</a></li>
            <li><a href="#" className="text-lg py-2 px-5 block">Centres</a></li>
            <li><a href="#" className="text-lg py-2 px-5 block">Workspaces</a></li>
            <li><a href="#" className="text-lg py-2 px-5 block">Enterprise</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;