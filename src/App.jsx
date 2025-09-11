import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Offices from './components/Offices';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      {/* Remove pt-24 from this line */}
      <main>
        <Hero />
        <Solutions />
        <Offices />
        <Portfolio />
        <WhyChooseUs />
        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}

export default App;