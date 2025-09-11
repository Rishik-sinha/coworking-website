import React from 'react';
import SolutionCard from './SolutionCard';

const solutionsData = [
  {
    icon: <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>,
    title: 'Private Office',
    description: 'Fully-equipped, ready-to-move-in or customisable private offices.',
  },
  {
    icon: <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>,
    title: 'All Access Plus',
    description: 'Access to shared workspaces with a prepaid, monthly WeWork membership.',
  },
  {
    icon: <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>,
    title: 'On-demand day pass',
    description: 'Book day passes at productive workspace on-the-go and pay per use.',
  },
];

const Solutions = () => {
  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Explore our host of solutions</h2>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            View all &rarr;
          </a>
        </div>
        <p className="text-gray-600 mb-12 max-w-3xl">
          From coworking spaces to private offices, you can choose from a range of solutions or even bundle our offerings to tailor solutions to suit your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard 
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;