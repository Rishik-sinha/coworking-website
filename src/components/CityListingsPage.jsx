import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { listingsData } from '../listingsData'; 
import ListingCard from './ListingCard'; 

import officeSol1 from '../assets/public-space.jpg';
import officeSol2 from '../assets/private-space.jpg';
import officeSol3 from '../assets/meeting-room.jpg';
import loc1 from '../assets/location-1.jpg';

const officeSolutions = [
    {
        img: officeSol1,
        title: 'Private Office',
        description: 'Fully furnished private offices for you and your growing team.'
    },
    {
        img: officeSol2,
        title: 'Managed Office',
        description: 'Customised fully furnished office managed by professionals.'
    },
    {
        img: officeSol3,
        title: 'Enterprise Solution',
        description: 'Fully equipped offices for larger teams with flexibility to scale & customise.'
    },
];

const faqData = [
  {
    question: 'What are the membership plans offered?',
    answer: 'We offer a variety of flexible membership plans, including Hot Desks, Dedicated Desks, and Private Offices, designed to meet your specific needs.'
  },
  {
    question: 'What are the required documents for booking a Coworking Space?',
    answer: 'Typically, you will need a valid ID proof, company registration documents (if applicable), and a signed agreement form. Requirements may vary slightly by location.'
  },
  {
    question: 'Are Coworking Spaces safe?',
    answer: 'Absolutely. All our spaces are equipped with 24/7 security, CCTV surveillance, and secure access systems to ensure a safe and productive environment for all our members.'
  }
];

const Pagination = ({ listingsPerPage, totalListings, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalListings / listingsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="mt-8">
      <ul className="flex justify-center items-center space-x-2">
        <li>
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 border rounded-lg ${currentPage === number ? 'bg-lime-400 font-bold' : 'hover:bg-gray-100'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === pageNumbers.length}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};


const CityListingsPage = () => {
  const { city = 'Delhi' } = useParams();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(8);

  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');

  const filteredListings = useMemo(() => {
    let listings = listingsData.filter(
      (listing) => listing.city.toLowerCase() === city.toLowerCase()
    );
    if (selectedLocalities.length > 0) {
      listings = listings.filter(listing => selectedLocalities.includes(listing.locality));
    }
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-').map(Number);
      listings = listings.filter(listing => {
        const price = listing.pricing.hotDesk || listing.pricing.dedicatedDesk || listing.pricing.privateOffice;
        return price >= min && price <= max;
      });
    }
    return listings;
  }, [city, selectedLocalities, selectedPrice]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLocalities, selectedPrice]);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = filteredListings.slice(indexOfFirstListing, indexOfLastListing);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const localities = useMemo(() => {
    const cityListings = listingsData.filter(l => l.city.toLowerCase() === city.toLowerCase());
    return [...new Set(cityListings.map(l => l.locality))];
  }, [city]);

  const handleLocalityClick = (locality) => {
    setSelectedLocalities(prev => {
        if (prev.includes(locality)) {
            return prev.filter(loc => loc !== locality);
        } else {
            return [...prev, locality];
        }
    });
  };

  return (
    <div className="bg-white">
      <Header variant="light" />
      <main className="pt-24 container mx-auto px-6 py-8 min-h-screen">
        <nav className="text-sm text-gray-500 mb-4">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Coworking Space</span>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{city}</span>
        </nav>

        <h1 className="text-4xl font-bold text-black mb-6">
          Coworking Space in {city}
        </h1>
        
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          {localities.map(loc => (
            <button 
                key={loc} 
                onClick={() => handleLocalityClick(loc)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    selectedLocalities.includes(loc) 
                    ? 'bg-lime-400 text-black font-bold' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {loc}
            </button>
          ))}
        </div>

        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <p className="text-gray-600 w-full md:w-auto">
                  Showing {indexOfFirstListing + 1} - {Math.min(indexOfLastListing, filteredListings.length)} of {filteredListings.length} spaces
                </p>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <select 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                    >
                        <option value="">All Prices</option>
                        <option value="0-10000">Under ₹10,000</option>
                        <option value="10001-20000">₹10,001 - ₹20,000</option>
                        <option value="20001-50000">₹20,001 - ₹50,000</option>
                        <option value="50001-1000000">Above ₹50,000</option>
                    </select>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentListings.length > 0 ? (
                  currentListings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))
                ) : (
                <p className="col-span-full text-center text-gray-500 py-16">
                    No listings match your current filters.
                </p>
                )}
            </div>

            {filteredListings.length > listingsPerPage && (
                <Pagination 
                    listingsPerPage={listingsPerPage}
                    totalListings={filteredListings.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )}
        </div>
        
        {/* --- "FIND YOUR PERFECT OFFICE SOLUTION" SECTION - UPDATED --- */}
        <section className="py-24">
            <div className="bg-gradient-to-b from-lime-50/50 via-white to-white p-8 md:p-12 rounded-3xl">
                <h2 className="text-2xl font-bold mb-8 text-black">Find Your Perfect Office Solution</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {officeSolutions.map((solution, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img src={solution.img} alt={solution.title} className="w-full md:w-2/5 h-40 md:h-full object-cover rounded-xl" />
                        <div className="text-left flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-2 text-black">{solution.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm flex-grow">{solution.description}</p>
                            <button className="bg-lime-400 text-black font-bold py-2 px-5 rounded-lg hover:bg-lime-500 transition-colors self-start">
                                Enquire Now
                            </button>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
        {/* --- END OF UPDATE --- */}

        <section className="py-24 border-t border-gray-100">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Explore Top Coworking Locations in {city}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredListings.slice(0, 4).map((listing, index) => (
                    <a href="#" key={index} className="block border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                        <img src={listing.images[0]} alt={listing.locality} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="font-bold text-lg">Coworking Space in {listing.locality}</h3>
                        <span className="text-lime-500 font-semibold hover:underline">Explore Spaces</span>
                    </a>
                ))}
            </div>
        </section>

        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b">
                        <h3 className="text-xl font-semibold p-6">{faq.question}</h3>
                        <p className="text-gray-600 px-6 pb-6">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CityListingsPage;