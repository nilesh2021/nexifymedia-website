import { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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

    <>

      {/* SEO */}

      <Helmet>

        <title>
          Nexify Media | Remote SEO & Digital Marketing Agency in Pune
        </title>

        <meta
          name="description"
          content="
            Nexify Media is a remote SEO and digital marketing agency in Pune helping startups and businesses grow through SEO, branding, website design, content marketing, social media marketing, and lead generation services.
          "
        />

        <meta
          name="keywords"
          content="
            remote seo agency pune,
            digital marketing agency pune,
            seo company pune,
            website design company pune,
            social media marketing agency,
            content marketing services,
            seo services india,
            lead generation agency
          "
        />

        <meta
          property="og:title"
          content="Nexify Media | Digital Marketing Agency"
        />

        <meta
          property="og:description"
          content="
            Grow your business with Nexify Media digital marketing services.
          "
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://nexifymedia.co.in/"
        />

        <link
          rel="canonical"
          href="https://nexifymedia.co.in/"
        />

      </Helmet>

      {/* PAGE */}

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

    </>

  );
}