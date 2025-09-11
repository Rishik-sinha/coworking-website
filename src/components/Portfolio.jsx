import React from 'react';
import mainImage from '../assets/portfolio-main.jpg';
import thumb1 from '../assets/portfolio-thumb1.jpg';
import thumb2 from '../assets/portfolio-thumb2.jpg';

const Pill = ({ children, className }) => (
  <div className={`bg-white text-black text-sm rounded-full px-5 py-2 ${className}`}>
    {children}
  </div>
);

const Portfolio = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text and Pills */}
          <div className="lg:relative lg:h-[500px]">
            <h3 className="text-lg font-light">OUR PORTFOLIO</h3>
            <h2 className="text-4xl font-bold mt-2 mb-8">OUR COMPLETED PROJECTS</h2>
            
            {/* --- Pills for MOBILE screens --- */}
            {/* Added overflow-hidden and px-0 to the parent div here */}
            <div className="flex flex-wrap gap-3 lg:hidden overflow-hidden px-0"> 
              <Pill>OFFICE PROPOSAL</Pill>
              <Pill>NEW YORK</Pill>
              <Pill>HOME OFFICE DESIGN</Pill>
              <Pill>OFFICE RENOVATION</Pill>
              <Pill>24 PROJECTS</Pill>
              <Pill>DESIGN & BUILD</Pill>
            </div>
            
            {/* --- Pills for LARGE screens (original absolute layout) --- */}
            <div className="hidden lg:block">
              <Pill className="absolute top-1/4 left-1/4">OFFICE PROPOSAL</Pill>
              <Pill className="absolute top-1/3 left-3/4">NEW YORK</Pill>
              <Pill className="absolute top-1/2 left-10">HOME OFFICE DESIGN</Pill>
              <Pill className="absolute top-2/3 left-1/2 -translate-x-1/2">OFFICE RENOVATION</Pill>
              <Pill className="absolute bottom-10 left-1/4">24 PROJECTS</Pill>
              <Pill className="absolute bottom-1/4 right-0">DESIGN & BUILD</Pill>
            </div>
          </div>

          {/* Right Column: Image Collage */}
          <div className="lg:relative lg:h-[500px]">
            {/* --- Images for MOBILE screens (simple stack) --- */}
            <div className="space-y-4 lg:hidden">
              <img src={mainImage} alt="Main portfolio project" className="w-full h-auto object-cover rounded-lg" />
              <img src={thumb1} alt="Portfolio thumbnail 1" className="w-full h-auto object-cover rounded-lg" />
              <img src={thumb2} alt="Portfolio thumbnail 2" className="w-full h-auto object-cover rounded-lg" />
            </div>

            {/* --- Images for LARGE screens (the original absolute layout) --- */}
            <div className="hidden lg:block">
              <img src={mainImage} alt="Main portfolio project" className="absolute top-0 right-0 w-3/4 h-full object-cover rounded-lg" />
              <img src={thumb1} alt="Portfolio thumbnail 1" className="absolute bottom-1/4 left-0 w-1/3 object-cover rounded-lg shadow-lg" />
              <img src={thumb2} alt="Portfolio thumbnail 2" className="absolute bottom-0 left-1/3 w-1/3 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;