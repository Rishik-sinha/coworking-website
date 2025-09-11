import React, { useState } from 'react';
// We are not importing framer-motion in this version
import chooseUsImage from '../assets/why-choose-us.jpg';

const accordionData = [
  {
    title: 'Expertise',
    content: 'Our team consists of industry veterans with years of experience in creating world-class, productive, and inspiring work environments.'
  },
  {
    title: 'Experience',
    content: 'We have a proven track record of delivering exceptional results for a diverse range of clients, from startups to Fortune 500 companies.'
  },
  {
    title: 'End-to-end solutions',
    content: 'From initial design concepts to final implementation, we handle every aspect of your project to ensure a seamless and stress-free process.'
  },
  {
    title: 'Flexibility',
    content: 'We offer flexible solutions tailored to your specific needs and budget, ensuring you get the perfect workspace without compromise.'
  },
  {
    title: 'Design',
    content: 'Our design philosophy is centered on creating spaces that are not only beautiful but also functional, fostering creativity and collaboration.'
  }
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div>
            <img src={chooseUsImage} alt="Team collaborating in a modern office" className="rounded-lg w-full h-full object-cover" />
          </div>

          {/* Right Column: Accordion */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Why choose Lazy Developer</h2>
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left text-xl font-semibold"
                  >
                    <span>{item.title}</span>
                    <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
                  </button>
                  {/* Simple conditional rendering without animation */}
                  {openIndex === index && (
                    <div className="overflow-hidden">
                      <p className="pt-4 text-gray-600">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-8 inline-block">
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;