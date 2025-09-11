import React from 'react';
import OfficeCard from './OfficeCard';
import { officeData } from '../mockData'; // Import our mock data

const Offices = () => {
  const filters = ['ALL', 'CALIFORNIA', 'TEXAS', 'FLORIDA', 'PENNSYLVANIA', 'ILLINOIS', 'NORTH CAROLINA'];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-black text-left mb-12">
          EXPLORE <span className="border-b-4 border-black">OUR</span> OFFICES RANGE
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`text-sm py-2 px-5 rounded-full transition-colors ${
                index === 0 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {officeData.map((office) => (
            <OfficeCard 
              key={office.id}
              image={office.image}
              title={office.title}
              tags={office.tags}
              location={office.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;