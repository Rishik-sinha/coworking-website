import React from 'react';
import OfficeCard from './OfficeCard';
import { officeData } from '../mockData';

// 1. Swiper component imports (Navigation module is no longer needed)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

        {/* 2. Updated Swiper component without navigation */}
        <Swiper
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {officeData.map((office) => (
            <SwiperSlide key={office.id}>
              <OfficeCard 
                image={office.image}
                title={office.title}
                tags={office.tags}
                location={office.location}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Offices;