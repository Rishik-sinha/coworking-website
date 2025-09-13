import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';

import loc1 from '../assets/location-1.jpg';
import loc2 from '../assets/location-2.jpg';
import loc3 from '../assets/location-3.jpg';
import loc4 from '../assets/location-4.jpg';

const locationsData = [
  { img: loc1, title: 'Plan for Productivity' },
  { img: loc2, title: 'Creativity, productivity, and community' },
  { img: loc3, title: 'Crafting Work Harmony' },
  { img: loc4, title: 'Spaces for Success' },
];

const doubledLocationsData = [...locationsData, ...locationsData];

const Locations = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    // CHANGE: Switched to light theme
   <section className="relative h-screen snap-start w-full flex flex-col justify-center bg-white text-black py-24 overflow-hidden">
      <style>
        {`
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex-1 text-left">
            <p className="text-gray-500 mb-2">Choose Your Lazy Location</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold">Locations</h2>
          </div>

          <div className="flex-1 text-right">
            <p className="text-xl font-bold">2 Cities</p>
            <p className="text-gray-500">21 Locations</p>
          </div>
        </div>
      </div>
      
      {/* The Swiper component for the marquee effect */}
      <div className="!pl-4 md:!pl-16 lg:!pl-32">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          slidesPerView={'auto'}
          spaceBetween={30}
          loop={true}
          speed={10000}
          allowTouchMove={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="!overflow-visible"
        >
          {doubledLocationsData.map((loc, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[300px] md:w-[400px] relative"
              >
                <img src={loc.img} alt={loc.title} className="rounded-lg mb-4 h-64 object-cover w-full" />
                <p className="text-gray-600">{loc.title}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Locations;