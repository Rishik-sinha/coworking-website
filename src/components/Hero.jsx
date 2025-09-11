import React from 'react';
import backgroundVideo from '../assets/main.mp4';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Add pt-32 to this container to push the text down */}
      <div className="relative z-20 container mx-auto px-6 pt-32">
        <div className="max-w-3xl text-left">
          
          <div className="flex items-center space-x-4 mb-4">
            <a href="#" className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider leading-tight">
            Next Level <br /> Coworking Offices
          </h1>
          
          <div className="mt-8">
            <a href="#" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors text-sm uppercase">
              Book a call with us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;