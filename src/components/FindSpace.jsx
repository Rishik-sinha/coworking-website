import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header'; 
import Footer from './Footer'; 
import { Link } from 'react-router-dom';

// Images for all sections
import heroImage from '../assets/location-1.jpg';
import coworkingImg from '../assets/public-space.jpg';
import colivingImg from '../assets/private-space.jpg';
import loc1 from '../assets/location-1.jpg';
import loc2 from '../assets/location-2.jpg';
import loc3 from '../assets/location-3.jpg';
import loc4 from '../assets/location-4.jpg';
import virtualOfficeBg from '../assets/sketch.jpg'; 
import benefitsImage from '../assets/sketch.jpg';

// Data for the city icons
const citiesData = [
    { name: 'Gurugram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 21V10l8-6 8 6v11h-6v-6h-4v6H4z"></path></svg> },
    { name: 'Hyderabad', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M2 21h20M7 21v-4m10 4v-4M3 17h18v-4a8 4 0 00-18 0v4zM12 7a2 2 0 100-4 2 2 0 000 4z"></path></svg> },
    { name: 'Bengaluru', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 21h16M6 21l.8-4.8M18 21l-.8-4.8M9 16.2V11h6v5.2M9 11a3 3 0 016 0M12 3l3 4.5h-6L12 3z"></path></svg> },
    { name: 'Mumbai', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 21h18M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12M9 21V12a3 3 0 016 0v9M12 7a2 2 0 100-4 2 2 0 000 4z"></path></svg> },
    { name: 'Chennai', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 21h18M5 21v-8l-2-3h18l-2 3v8M9 21v-5h6v5m-3-5V9"></path><path d="M12 9l-2-2h4l-2 2z"></path></svg> },
    { name: 'Lucknow', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 21h16M6 21v-7a6 6 0 0112 0v7M12 3a2 2 0 012 2v2a2 2 0 01-4 0V5a2 2 0 012-2z"></path></svg> },
    { name: 'Pune', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M2 21h20M5 21V10l3-3h8l3 3v11M10 21v-5a2 2 0 114 0v5"></path></svg> },
    { name: 'Delhi', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 21h18M7 21V10a2 2 0 012-2h6a2 2 0 012 2v11M7 8a5 5 0 0110 0"></path></svg> },
    { name: 'Noida', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 21v-7m4 7v-9m4 9v-5m4 5V3L6 9v12h12z"></path></svg> },
    { name: 'Kolkata', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 10a9 9 0 019-9 9 9 0 019 9v11H3V10zM12 21v-9m-4 9v-5m8 5v-5"></path></svg> },
    { name: 'Ahmedabad', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M2 21h20M7 21v-4m10 4v-4M3 17h18v-4a8 4 0 00-18 0v4zM12 7a2 2 0 100-4 2 2 0 000 4z"></path></svg> },
    { name: 'Jaipur', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 21h18M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12M9 21V12a3 3 0 016 0v9M12 7a2 2 0 100-4 2 2 0 000 4z"></path></svg> },
];

// Data for the image cards
const topLocationsData = [
    { img: coworkingImg, city: 'Gurugram', subtitle: 'Millennium City' },
    { img: colivingImg, city: 'Hyderabad', subtitle: 'A City of Pearls' },
    { img: loc1, city: 'Bangalore', subtitle: 'India\'s Silicon Valley' },
    { img: loc2, city: 'Mumbai', subtitle: 'A City of Dreams' },
    { img: loc3, city: 'Pune', subtitle: 'Queen of the Deccan' },
    { img: loc4, city: 'Delhi', subtitle: 'The Nation Capital' },
    { img: heroImage, city: 'Noida', subtitle: 'The Hitech City' },
    { img: coworkingImg, city: 'Lucknow', subtitle: 'The City of Nawabs' }
];

// Data for the featured logos (using placeholders)
const featuredLogos = ['wework', 'awfis', 'innov8', '91SPRINGBOARD', 'InstaOffice', 'INDIQUBE', 'BHIVE GROUP'];

// Data for virtual office services
const virtualOfficeServices = [
    { name: 'Company Registration', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"></path></svg> },
    { name: 'GST Registration', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> },
    { name: 'Business Address', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> },
    { name: 'Mailing Address', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
    { name: 'Reception Services', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> },
    { name: 'Meeting Room Access', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.001 3.001 0 015.658 0M12 6V3m0 3c-1.333 0-4 1.333-4 4v4h8v-4c0-2.667-2.667-4-4-4z"></path></svg> },
];

// Data for the 'What You Get From Us' section
const benefitsData = [
    { text: 'Exclusive pricing for Lazy members', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"></path></svg> },
    { text: 'Verified Spaces and Trusted Partners', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
    { text: 'No booking service fee', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg> },
    { text: '100% offline support', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h.01M15 10h.01M10 14a2 2 0 100 4 2 2 0 000-4z"></path></svg> },
    { text: 'Exclusive Brand Coupon Codes', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-5-5A2 2 0 013 12V7a4 4 0 014-4z"></path></svg> },
];


// Animation variants
const gridContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const gridCardVariants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } };

const FindSpace = () => {
    const StarIcon = () => ( <svg className="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> );

  return (
    <>
      <Header variant="light" />
      <main>
        {/* --- SECTION 1: CITY SELECTION --- */}
        <section className="bg-white text-black grid grid-cols-1 lg:grid-cols-2">
           <div className="pt-24 order-2 lg:order-1">
                <div className="container mx-auto px-6 sm:px-12 py-12">
                <h1 className="text-4xl md:text-5xl font-bold max-w-lg">
                    Choose from 100,000+ spaces to <span className="text-yellow-500">Work</span> & <span className="text-yellow-500">Live</span>
                </h1>
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                    <label htmlFor="lookingFor" className="text-sm font-medium text-gray-500">Looking For</label>
                    <select id="lookingFor" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black">
                        <option>Coworking</option>
                        <option>Coliving</option>
                        <option>Office Space</option>
                    </select>
                    </div>
                    <div className="flex-1">
                    <label htmlFor="selectCity" className="text-sm font-medium text-gray-500">Select City</label>
                    <select id="selectCity" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black">
                        <option>All Cities</option>
                        {citiesData.map(city => (
                        <option key={city.name} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
                    {citiesData.map((city) => (
                    <Link to={`/listings/${city.name.toLowerCase()}`} key={city.name} className="flex flex-col items-center justify-start text-center group">
                        <div className="w-16 h-16 p-4 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-yellow-100 group-hover:border-yellow-400 transition-colors duration-300">
                        <div className="w-8 h-8 text-gray-700">
                            {city.icon}
                        </div>
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-800">{city.name}</p>
                    </Link>
                    ))}
                </div>
                </div>
            </div>
            <div className="hidden lg:block h-full w-full order-1 lg:order-2">
                <div className="h-full w-full p-4">
                    <div 
                        className="h-full w-full bg-cover bg-center rounded-tl-[150px] rounded-br-[150px]"
                        style={{ backgroundImage: `url(${heroImage})` }}
                    >
                    </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 2: PROMOTION --- */}
        <section className="relative bg-white text-black w-full py-24 px-6 overflow-hidden border-t border-gray-100">
             <div className="absolute top-20 left-[-200px] w-[600px] h-[600px] bg-gray-50 rounded-full"></div>
            <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-gray-50 rounded-full"></div>
            <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-96 flex items-center justify-center">
                    <motion.div 
                        className="absolute top-0 left-0 w-72 bg-white text-black rounded-lg shadow-2xl p-4 transform -rotate-6 border"
                        initial={{ opacity: 0, y: 50, rotate: -10 }} whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }} viewport={{ once: false }}
                    >
                        <img src={coworkingImg} alt="Coworking Space" className="rounded-md w-full h-32 object-cover"/>
                        <div className="absolute top-6 left-6 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md">Coworking</div>
                        <h3 className="font-bold mt-3">WeWork Forum</h3>
                        <p className="text-sm text-gray-500">DLF Cyber City, Gurugram</p>
                        <p className="font-bold mt-1">₹28,000/ <span className="font-normal text-gray-500">month</span></p>
                    </motion.div>
                    <motion.div 
                        className="absolute bottom-0 right-0 w-72 bg-white text-black rounded-lg shadow-2xl p-4 transform rotate-3 border"
                        initial={{ opacity: 0, y: -50, rotate: 10 }} whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }} viewport={{ once: false }}
                    >
                        <img src={colivingImg} alt="Coliving Space" className="rounded-md w-full h-32 object-cover"/>
                        <div className="absolute top-6 left-6 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md">Coliving</div>
                        <h3 className="font-bold mt-3">Stanza Living Dunkirk House</h3>
                        <p className="text-sm text-gray-500">Sector 48, Gurgaon</p>
                        <p className="font-bold mt-1">₹11,799/ <span className="font-normal text-gray-500">month</span></p>
                    </motion.div>
                </div>
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Boost your Revenue, Visibility & Leads with Lazy Plans
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        India's <span className="font-bold">#1 online platform</span> for Coworking & Coliving Spaces
                    </p>
                    <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <button className="bg-lime-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-500 transition-colors">List Your Space</button>
                        <button className="border border-gray-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">Business Plans</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto relative z-10 mt-24 grid grid-cols-3 gap-8 text-center">
                <div><p className="text-4xl font-bold">100,000+</p><p className="text-gray-600">Live Spaces</p></div>
                <div><p className="text-4xl font-bold">1,000+</p><p className="text-gray-600">Locations</p></div>
                <div><p className="text-4xl font-bold">25+</p><p className="text-gray-600">Cities</p></div>
            </div>
        </section>

        {/* --- SECTION 3: TOP COWORKING IN INDIA, ETC. --- */}
        <section className="bg-gray-50 py-24 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold inline-block relative">
                        <span className="relative z-10">
                            <span className="bg-yellow-300/80 px-4 py-2 rounded-full">Top</span> Coworking in India
                        </span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-4"></div>
                </div>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    {topLocationsData.map((loc, index) => (
                        <motion.div key={index} variants={gridCardVariants} className="relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-lg">
                            <img src={loc.img} alt={loc.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold">{loc.city}</h3>
                                <p className="text-gray-200">{loc.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold inline-block relative">
                            <span className="relative z-10"><span className="bg-lime-300/80 px-4 py-2 rounded-full">Featured</span> Coworking</span>
                        </h2>
                        <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-8">
                        {featuredLogos.map((logoName) => (
                            <p key={logoName} className="text-2xl font-bold text-gray-500 tracking-wider grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300">{logoName}</p>
                        ))}
                    </div>
                </div>

                <motion.div 
                    className="mt-24"
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="relative rounded-3xl p-8 md:p-12 bg-black overflow-hidden">
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold text-white">
                                    Book Your Virtual Office with <span className="text-lime-400">Lazy</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {virtualOfficeServices.map(service => (
                                        <div key={service.name} className="flex items-center gap-3">
                                            <span className="text-lime-400">{service.icon}</span>
                                            <span className="font-medium text-gray-300">{service.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                                    <p className="font-bold text-white">+91 9311 32 8049</p>
                                    <p className="text-gray-400">hello@lazydeveloper.com</p>
                                </div>
                            </div>
                            <div className="hidden md:block relative h-full w-full">
                                <motion.div 
                                    className="absolute -right-20 -top-20 w-48 h-48 bg-lime-400/20 rounded-full"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                ></motion.div>
                                <motion.div 
                                    className="absolute -left-10 bottom-10 w-32 h-32 bg-lime-400/20 rounded-full"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                ></motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* --- SECTION 4: WHAT YOU GET FROM US --- */}
        <section className="bg-white py-24 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <motion.div 
                            className="absolute bg-lime-200/50 rounded-full -top-12 -left-12 w-72 h-72"
                            initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}
                        ></motion.div>
                         <motion.div 
                            className="absolute bg-gray-200/50 rounded-full -bottom-12 -right-12 w-48 h-48"
                            initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}
                        ></motion.div>
                        <motion.div 
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}
                        >
                            <img src={benefitsImage} alt="Team working in a modern office" className="w-full h-full object-cover"/>
                        </motion.div>
                    </div>
                    <div>
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold inline-block relative">
                                <span className="relative z-10">
                                    <span className="bg-lime-300/80 px-4 py-2 rounded-full">What</span> You Get From Us
                                </span>
                            </h2>
                        </div>
                        <div className="space-y-8">
                            {benefitsData.map((benefit, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex items-center gap-6"
                                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }} viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 text-lime-500 bg-lime-100/80 p-3 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <p className="text-xl font-medium text-gray-800">{benefit.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default FindSpace;

