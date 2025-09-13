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
    plan: 'Private Suite',
    price: '150',
    features: [
      'Fully furnished, private office space.',
      'Mail and package handling.',
      'All DedicatedDesk Pro benefits.'
    ]
  }
];

const Membership = () => {
  return (
    // Added position relative and z-index.
    // This ensures this section scrolls OVER the sticky footer.
    <section 
      id="membership"
      className="relative z-10 min-h-screen w-full flex items-center bg-white text-black py-24 px-6 snap-start"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16">Membership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((tier, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-black/20 rounded-lg p-8 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.plan}</h3>
              <p className="text-5xl font-bold mb-2">${tier.price}<span className="text-lg font-medium text-gray-500">/Mon</span></p>
              <ul className="space-y-4 my-6 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors mt-4">
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

