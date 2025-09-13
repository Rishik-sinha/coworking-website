import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import IdealSpace from './components/IdealSpace';
import WhyChooseUs from './components/WhyChooseUs';
import WorkSmarter from './components/WorkSmarter';
import Locations from './components/Locations';
import Sketch from './components/Sketch';
import Membership from './components/Membership';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // CHANGE: Imported the CookieBanner

function App() {
  const mainRef = useRef(null);
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex]
  = useState(0);
  const isScrolling = useRef(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, 
      duration: 1.0, 
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (mainRef.current) {
      const sectionElements = mainRef.current.querySelectorAll('.scroll-section');
      setSections(Array.from(sectionElements));
    }

    const handleWheel = (event) => {
      if (isScrolling.current || sections.length === 0) {
        event.preventDefault();
        return;
      };
      
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = currentSectionIndex + direction;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        isScrolling.current = true;
        setCurrentSectionIndex(nextIndex);
        lenisRef.current.scrollTo(sections[nextIndex], {
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); 
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      lenis.destroy();
      window.removeEventListener('wheel', handleWheel);
    };
  }, [sections.length, currentSectionIndex]);

  return (
    <div>
      <Header />
      <main ref={mainRef}>
        <Hero />
        <IdealSpace />
        <WhyChooseUs />
        <WorkSmarter />
        <Locations />
        <Sketch />
        <Membership />
        <Footer />
      </main>
      <CookieBanner /> {/* CHANGE: Added the CookieBanner component here */}
    </div>
  );
}

export default App;