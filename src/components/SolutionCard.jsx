import React from 'react';

const SolutionCard = ({ icon, title, description }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SolutionCard;