import React from 'react';

const SpaceCard = ({ image, title, city, amenities, startingPrice }) => {
  // A small SVG icon for amenities
  const checkIcon = (
    <svg className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden group text-left">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold truncate mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{city}</p>
        
        {/* Amenities Section */}
        <div className="space-y-2 mb-4">
          {amenities.slice(0, 2).map((amenity, index) => ( // Show first two amenities
            <div key={index} className="flex items-center text-sm">
              {checkIcon}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <hr className="my-3" />

        {/* Pricing and Explore Link */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Starting</p>
            <p className="text-gray-800 font-bold">
              {/* Format number with commas and add currency */}
              ₹{startingPrice.toLocaleString('en-IN')}/month
            </p>
          </div>
          <a href="#" className="text-lime-500 font-bold">Explore More →</a>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;