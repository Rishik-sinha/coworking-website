import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page and component files
import Hero from './components/Hero.jsx';
import IdealSpace from './components/IdealSpace.jsx';
import WhyChooseUs from './components/WhyChooseUs';
import WorkSmarter from './components/WorkSmarter';
import Locations from './components/Locations.jsx';
import Sketch from './components/Sketch.jsx';
import Membership from './components/Membership.jsx';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import ListingsPage from './components/ListingsPage.jsx'; // <-- Import the new page
import FindSpace from './components/FindSpace.jsx';


import CityListingsPage from './components/CityListingsPage.jsx';
// A new component to represent the Homepage layout
const HomePage = () => {
  return (
    <>
      <Hero />
      <IdealSpace />
      <WhyChooseUs />
      <WorkSmarter />
      <Locations />
      <Sketch />
      <div className="relative">
        <Membership />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router basename="/coworking-website">
      {/* The Router component wraps the entire application */}
      <div>
        <main className="h-screen overflow-y-scroll">
        <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* ADD THIS NEW ROUTE */}
        <Route path="/find-a-space" element={<FindSpace />} />

         <Route path="/listings/:city" element={<CityListingsPage />} />

        {/* A dynamic route for the different space types */}
        <Route path="/spaces/:spaceType" element={<ListingsPage />} />
      </Routes>
        </main>
        <CookieBanner />
      </div>
    </Router>
    
  );
}

export default App;