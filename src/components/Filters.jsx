import React from 'react';

// Receive all the state values and handler functions as props
const Filters = ({
  searchTerm,
  onSearchChange,
  selectedCity,
  onCityChange,
  checkedAmenities,
  onAmenityChange,
}) => {
  const allCities = ["New York", "Toronto", "San Francisco", "Chicago", "Miami"];
  const allAmenities = ["High-Speed Wifi", "Parking", "24/7 Access", "Coffee & Bar", "Projector", "Catering"];

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white text-left">
      <h3 className="text-xl font-bold mb-6">Filters</h3>
      
      {/* Search by Name */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search by Name</label>
        <input 
          type="text" 
          id="search" 
          placeholder="Enter office name..." 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
          value={searchTerm} // Display the state value
          onChange={(e) => onSearchChange(e.target.value)} // Call parent function on change
        />
      </div>
      
      {/* Filter by City */}
      <div className="mb-6">
        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">City</label>
        <select 
          id="city" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
          value={selectedCity} // Display the state value
          onChange={(e) => onCityChange(e.target.value)} // Call parent function on change
        >
          <option value="">All Cities</option>
          {allCities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>

      {/* Filter by Amenities */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
        <div className="space-y-2">
          {allAmenities.map(amenity => (
            <label key={amenity} className="flex items-center">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-gray-300 text-lime-500 focus:ring-lime-400"
                checked={checkedAmenities.includes(amenity)} // Check based on state array
                onChange={() => onAmenityChange(amenity)} // Call parent function on change
              />
              <span className="ml-2 text-gray-600">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;