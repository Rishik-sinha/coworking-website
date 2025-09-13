import React from 'react';
import { motion } from 'framer-motion';

const pricingData = [
  {
    plan: 'FlexPass',
    price: '20',
    features: [
      'Shared workspaces during business hours.',
      'High-speed internet and tech amenities.',
      'Community events and networking opportunities.'
    ]
  },
  {
    plan: 'DedicatedDesk Pro',
    price: '60',
    features: [
      '24/7 access to coworking areas.',
      'Premium ergonomic furniture and storage.',
      'All FlexPass benefits.'
    ]
  },
  {
    plan: 'DedicatedDesk Pro',
    price: '150',
    features: [
      '24/7 access to coworking areas.',
      'Premium ergonomic furniture and storage.',
      'All FlexPass benefits.'
    ]
  }
];

const Membership = () => {
  return (
    // CHANGE: Added md:snap-always
    <section id="membership" className="min-h-screen md:h-screen w-full md:snap-start md:snap-always flex items-center bg-black text-white py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16">Membership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((tier, index) => (
            <motion.div 
              key={index}
              className="bg-[#1C1C1C] border border-gray-800 rounded-lg p-8 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // CHANGE: Removed 'once: true'
              viewport={{}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{tier.plan}</h3>
              <p className="text-5xl font-bold mb-2 text-white">${tier.price}<span className="text-lg font-medium text-gray-400">/Mon</span></p>
              <ul className="space-y-4 my-6 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-lime-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-lime-400 text-black font-bold py-3 rounded-lg hover:bg-lime-500 transition-colors mt-4">
                Subscribe
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
