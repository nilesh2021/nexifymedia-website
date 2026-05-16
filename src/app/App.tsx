import { useEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Career from './components/Internship-program'; // Updated import for Career component
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import CareerForm from './components/CareerForm';
import ContactSection from './components/ContactSection';
import FeaturedWork from './components/FeaturedWork';

export default function App() {

  // Auto scroll to section after redirect
  useEffect(() => {

    const handleHashScroll = () => {

      const hash = window.location.hash;

      if (hash) {

        const id = hash.replace('#', '');

        setTimeout(() => {

          const element = document.getElementById(id);

          if (element) {

            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });

          }

        }, 300);
      }
    };

    handleHashScroll();

    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };

  }, []);
  return (
    <div className="min-h-screen">


      <Navigation />

      <div id="home">
        <Hero />
      </div>


      <div id="services">
        <Services />
      </div>


      <div id="about">
        <About />
      </div>
      <div id="featured-work">
        <FeaturedWork />
      </div>


      <div id="contact">
        <ContactSection />
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}