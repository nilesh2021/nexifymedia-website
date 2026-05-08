import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Career from './components/Career';
import Footer from './components/Footer';

import CareerForm from './components/CareerForm';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Career />
    
      <Footer />
    </div>
  );
}