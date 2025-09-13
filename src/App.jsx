import React from 'react';

import Hero from './components/Hero.jsx';
import IdealSpace from './components/IdealSpace.jsx';
// Note: These components are still missing. The app won't run without them.
// import WhyChooseUs from './components/WhyChooseUs';
// import WorkSmarter from './components/WorkSmarter';
import Locations from './components/Locations.jsx';
import Sketch from './components/Sketch.jsx';
import Membership from './components/Membership.jsx';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';

function App() {
  return (
    <div>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Hero />
        <IdealSpace />
        {/* <WhyChooseUs /> */}
        {/* <WorkSmarter /> */}
        <Locations />
        <Sketch />
        
        {/* This container creates the positioning context for the sticky footer effect. */}
        <div className="relative">
          <Membership />
          <Footer />
        </div>

      </main>
      <CookieBanner />
    </div>
  );
}

export default App;

