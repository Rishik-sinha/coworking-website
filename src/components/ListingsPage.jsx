import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams } from 'react-router-dom';
import { officeData } from '../mockData';
import Filters from './Filters';
import SpaceCard from './SpaceCard';
import Header from './Header';

const ListingsPage = () => {
  const { spaceType } = useParams();

  // State for all our filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [checkedAmenities, setCheckedAmenities] = useState([]);
  
  // State for the spaces that will be displayed
  const [filteredSpaces, setFilteredSpaces] = useState([]);

  // This effect runs whenever the filters change
  useEffect(() => {
    let spaces = officeData.filter(space => space.category === spaceType);

    // 1. Filter by search term
    if (searchTerm) {
      spaces = spaces.filter(space =>
        space.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Filter by city
    if (selectedCity) {
      spaces = spaces.filter(space => space.city === selectedCity);
    }

    // 3. Filter by amenities
    if (checkedAmenities.length > 0) {
      spaces = spaces.filter(space =>
        checkedAmenities.every(amenity => space.amenities.includes(amenity))
      );
    }

    setFilteredSpaces(spaces);
  }, [spaceType, searchTerm, selectedCity, checkedAmenities]); // Re-run when these change

  const handleAmenityChange = (amenity) => {
    setCheckedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(item => item !== amenity) // Uncheck
        : [...prev, amenity] // Check
    );
  };

  const pageTitle = spaceType.charAt(0).toUpperCase() + spaceType.slice(1);

  return (
    <>
      <Header />
      <div className="pt-24 container mx-auto px-6 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">{pageTitle} Spaces</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            {/* Pass state and handler functions to Filters component */}
            <Filters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              checkedAmenities={checkedAmenities}
              onAmenityChange={handleAmenityChange}
            />
          </div>
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Map over the stateful filteredSpaces array */}
              {filteredSpaces.map((space) => (
                <SpaceCard
                  key={space.id}
                  image={space.image}
                  title={space.title}
                  city={space.city}
                  amenities={space.amenities}
                  startingPrice={space.startingPrice}
                />
              ))}
            </div>
            {/* Show a message if no spaces match the filters */}
            {filteredSpaces.length === 0 && (
              <p className="text-center text-gray-500 mt-8">No spaces found matching your criteria.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsPage;