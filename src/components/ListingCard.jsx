import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ListingCard = ({ listing }) => {
  const getStartingPrice = () => {
    const prices = [
      listing.pricing.hotDesk,
      listing.pricing.dedicatedDesk,
      listing.pricing.privateOffice,
    ].filter(p => p !== null && p > 0);

    if (prices.length === 0) return null;

    const minPrice = Math.min(...prices);
    return `₹${minPrice.toLocaleString('en-IN')}`;
  };

  const startingPrice = getStartingPrice();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group">
      {/* Image Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          }}
          loop={true}
          className="h-56"
        >
          {listing.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`${listing.title} ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
          {/* Custom Navigation Buttons visible on hover */}
          <div className="swiper-button-prev opacity-0 group-hover:opacity-100 transition-opacity after:!text-white after:!text-2xl"></div>
          <div className="swiper-button-next opacity-0 group-hover:opacity-100 transition-opacity after:!text-white after:!text-2xl"></div>
        </Swiper>
        <div className="absolute top-3 left-3 flex gap-2">
          {listing.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-bold text-black bg-white/80 rounded-lg backdrop-blur-sm shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-base font-bold text-gray-800 truncate">{listing.title}</h3>
                <p className="text-xs text-gray-500">{listing.locality}, {listing.city}</p>
            </div>
            <div className="text-base font-bold text-gray-600 flex items-center">
                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                4.5 
            </div>
        </div>

        {/* Pricing and Action Button */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div>
            {startingPrice ? (
              <p className="font-bold text-base text-gray-800">{startingPrice}<span className="text-xs font-normal text-gray-500">/month</span></p>
            ) : (
              <p className="text-xs text-gray-500">On Request</p>
            )}
          </div>
          <button className="bg-lime-400 text-black font-bold text-sm py-2 px-5 rounded-lg hover:bg-lime-500 transition-colors whitespace-nowrap">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;