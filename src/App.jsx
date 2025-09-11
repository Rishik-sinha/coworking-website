import Header from './components/Header';
import Hero from './components/Hero';
import Offices from './components/Offices';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'; // Import the new component

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Offices />
        <Portfolio />
        <Footer /> {/* Add it here */}
      </main>
    </div>
  )
}

export default App;