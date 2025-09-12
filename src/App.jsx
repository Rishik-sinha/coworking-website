import Header from './components/Header';
import Hero from './components/Hero';
import IdealSpace from './components/IdealSpace';
import WhyChooseUs from './components/WhyChooseUs';
import WorkSmarter from './components/WorkSmarter';
import Locations from './components/Locations';
import Membership from './components/Membership';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner'; // 1. Import the new component

function App() {
  return (
    <div className="bg-black">
      <Header />
      <main className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
        <Hero />
        <IdealSpace />
        <WhyChooseUs />
        <WorkSmarter />
        <Locations />
        <Membership />
        <Footer />
      </main>
      <CookieBanner /> {/* 2. Add the component here */}
    </div>
  )
}

export default App;

