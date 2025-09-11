import React from 'react';
import backgroundImage from '../assets/footer-bg.jpg';

const Logo = () => (
  <div className="text-2xl font-bold text-white">
    GECO
  </div>
);

const Footer = () => {
  return (
    // Changed the height from h-[600px] to h-[300px]
    <footer 
      className="relative h-[300px] text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        
        {/* Rotating Text Circle - positioned in the middle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-spin-slow cursor-pointer">
            <svg viewBox="0 0 100 100" width="150" height="150">
              <defs>
                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
              </defs>
              <text fontSize="9">
                <textPath xlinkHref="#circle">
                  AWARD WINNING DESIGN STUDIO • GECO • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Bottom Bar: Logo, Links, Copyright */}
        <div className="container mx-auto mt-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center border-t border-white/20 pt-4 space-y-4 lg:space-y-0">
            <Logo />
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-center">
              <a href="#" className="hover:underline">PRIVACY POLICY</a>
              <a href="#" className="hover:underline">TERMS & CONDITIONS</a>
            </div>
            <p className="text-sm text-center">&copy; ALL RIGHTS ARE RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;