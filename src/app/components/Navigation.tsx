import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#24c2f2] to-[#202851] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">N</span>
            </div>
            <span className={`text-xl transition-colors cursor-pointer ${isScrolled ? 'text-[#202851]' : 'text-white'}`}>
              nexifymedia
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 ">
            {['services', 'about', 'careers'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize cursor-pointer transition-colors hover:text-[#24c2f2] ${
                  isScrolled ? 'text-[#202851]' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-2 bg-[#24c2f2] text-white rounded-full hover:bg-[#1da8d4] transition-all duration-300">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-[#202851]' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 space-y-3">
            {['services', 'about', 'careers'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer block w-full text-left px-4 py-2 text-[#202851] hover:bg-gray-50 rounded-lg capitalize transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full px-4 py-2 bg-[#24c2f2] text-white rounded-lg hover:bg-[#1da8d4] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
