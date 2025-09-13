import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import IdealSpace from './components/IdealSpace';
import WhyChooseUs from './components/WhyChooseUs';
import WorkSmarter from './components/WorkSmarter';
import Locations from './components/Locations';
import Membership from './components/Membership';
import Sketch from './components/Sketch';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {

  // This useEffect hook will run once when the component mounts
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      // Lower lerp value makes the scroll slower and smoother.
      // The default is 0.1. We'll use 0.07 for a slower feel.
      // You can adjust this value to your liking!
      lerp: 0.07, 
      smoothWheel: true, // Ensures smooth scrolling for mouse wheels
    });

    // This function will be called on every animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function to destroy Lenis when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    <div className="bg-black">
      <Header />
      {/* Change: Removed scroll container and CSS snap classes.
        This allows the entire page to scroll naturally, which Lenis can then control.
        Removed: `h-screen`, `overflow-y-scroll`, `md:snap-y`, `md:snap-mandatory`
      */}
      <main>
        <Hero />
        <IdealSpace />
        <WhyChooseUs />
        <WorkSmarter />
        <Locations />
        <Sketch />
        <Membership />
        <Footer />
      </main>
      <CookieBanner />
    </div>
  );
}

export default App;

