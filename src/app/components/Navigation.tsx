'use client';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Weight, X } from 'lucide-react';



export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll + homepage redirect
 const scrollToSection = (id: string) => {

  // If already on homepage
  if (window.location.pathname === '/') {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }

  } else {

    // Redirect to homepage section
    navigate(`/#${id}`);
  }

  setIsMobileMenuOpen(false);
};

  // Scroll to top
  const scrollToTop = () => {

    if (window.location.pathname === '/') {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    } else {

      window.location.href = '/';
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-[#24c2f2] to-[#202851] rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white text-xl font-bold">
                N
              </span>
            </div>

            <span
              className={`text-2xl font-bold tracking-wide transition-all duration-500 ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              } group-hover:text-[#24c2f2]`}
            >
                 <b>Nexify</b><span style={{fontWeight: "lighter"}}>Media</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {/* Services */}
            <button
              onClick={() => scrollToSection('services')}
              className={`cursor-pointer relative text-[15px] font-medium transition-all duration-300 hover:text-[#24c2f2]
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-[#24c2f2]
              after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              Services
            </button>

            {/* About */}
            <button
              onClick={() => scrollToSection('about')}
              className={`cursor-pointer relative text-[15px] font-medium transition-all duration-300 hover:text-[#24c2f2]
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-[#24c2f2]
              after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              About
            </button>

            {/* Careers */}
           <Link
  to="/careers"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setIsMobileMenuOpen(false);
  }}
  className={`relative text-[15px] font-medium transition-all duration-300 hover:text-[#24c2f2]
  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
  after:w-0 after:bg-[#24c2f2]
  after:transition-all after:duration-300 hover:after:w-full ${
    isScrolled
      ? 'text-[#202851]'
      : 'text-white'
  }`}
>
  Careers
</Link>

            {/* Internship Program */}
            <button
              onClick={() => scrollToSection('internship-program')}
              className={`cursor-pointer relative text-[15px] font-medium transition-all duration-300 hover:text-[#24c2f2]
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-[#24c2f2]
              after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              Internship Program
            </button>

            {/* Blog */}
            <a
              href="https://blog.nexifymedia.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative text-[15px] font-medium transition-all duration-300 hover:text-[#24c2f2]
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-[#24c2f2]
              after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              Blog
            </a>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#24c2f2] to-[#202851]
              text-white rounded-full shadow-lg hover:scale-105
              hover:shadow-2xl transition-all duration-300"
            >
              Contact Us
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-[#202851] hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl">
          <div className="container mx-auto px-6 py-5 space-y-3">

            {/* Services */}
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-[#202851]
              rounded-xl hover:bg-[#f4f9ff]
              hover:text-[#24c2f2] transition-all duration-300"
            >
              Services
            </button>

            {/* About */}
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-[#202851]
              rounded-xl hover:bg-[#f4f9ff]
              hover:text-[#24c2f2] transition-all duration-300"
            >
              About
            </button>

            {/* Careers */}
            <Link
              to="/careers"
              className="block px-4 py-3 text-[#202851]
              rounded-xl hover:bg-[#f4f9ff]
              hover:text-[#24c2f2] transition-all duration-300"
            >
              Careers
            </Link>

            {/* Internship Program */}
            <button
              onClick={() => scrollToSection('seo-program')}
              className="block w-full text-left px-4 py-3 text-[#202851]
              rounded-xl hover:bg-[#f4f9ff]
              hover:text-[#24c2f2] transition-all duration-300"
            >
              Internship Program
            </button>

            {/* Blog */}
            <a
              href="https://blog.nexifymedia.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-[#202851]
              rounded-xl hover:bg-[#f4f9ff]
              hover:text-[#24c2f2] transition-all duration-300"
            >
              Blog
            </a>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-3 px-6 py-3
              bg-gradient-to-r from-[#24c2f2] to-[#202851]
              text-white rounded-full shadow-lg
              hover:scale-[1.02] transition-all duration-300"
            >
              Contact Us
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}