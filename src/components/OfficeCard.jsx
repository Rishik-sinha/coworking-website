import React from 'react';

const OfficeCard = ({ image, title, tags, location }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500 mt-3 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default OfficeCard;