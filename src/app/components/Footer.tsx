import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Footer() {

  // Smooth scroll logic
  const scrollToSection = (id: string) => {

    if (window.location.pathname === '/') {

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

    } else {

      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-[#202851] text-white pt-24 pb-10 border-t border-white/10">

      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">

        {/* Top Gradient Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#24c2f2]/40 to-transparent mb-16"></div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-12 xl:gap-24 mb-16">

          {/* Column 1 - Brand */}
          <div className="max-w-md">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 bg-gradient-to-br from-[#24c2f2] to-[#202851] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">
                  N
                </span>
              </div>

              <span className="text-3xl font-semibold">
              <b>Nexify</b><span style={{fontWeight: "lighter"}}>Media</span>
              </span>

            </div>

            <p className="text-gray-400 mb-6 leading-8 text-[17px]">
              Helping brands grow through SEO, performance marketing,
              social media, and creative digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10
                  flex items-center justify-center
                  hover:bg-[#24c2f2]
                  hover:scale-110
                  transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

            </div>

          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:justify-self-center">

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#24c2f2]
                  transition-all duration-300
                  hover:translate-x-1"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#24c2f2]
                  transition-all duration-300
                  hover:translate-x-1"
                >
                  Services
                </button>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="block hover:text-[#24c2f2]
                  transition-all duration-300
                  hover:translate-x-1"
                >
                  Careers
                </Link>
              </li>

              <li>
                <a
                  href="https://blog.nexifymedia.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#24c2f2]
                  transition-all duration-300
                  hover:translate-x-1"
                >
                  Blog
                </a>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#24c2f2]
                  transition-all duration-300
                  hover:translate-x-1"
                >
                  Contact
                </button>
              </li>

            </ul>

          </div>

          {/* Column 3 - Legal */}
          <div className="space-y-4 lg:justify-self-end">

            <h3 className="text-xl font-semibold mb-6">
              Legal
            </h3>

            <Link
              to="/privacy-policy"
              className="block text-gray-400 hover:text-[#24c2f2]
              transition-all duration-300
              hover:translate-x-1"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="block text-gray-400 hover:text-[#24c2f2]
              transition-all duration-300
              hover:translate-x-1"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/disclaimer"
              className="block text-gray-400 hover:text-[#24c2f2]
              transition-all duration-300
              hover:translate-x-1"
            >
              Disclaimer
            </Link>

            <Link
              to="/affiliate-disclosure"
              className="block text-gray-400 hover:text-[#24c2f2]
              transition-all duration-300
              hover:translate-x-1"
            >
              Affiliate Disclosure
            </Link>

            <Link
              to="/cookie-policy"
              className="block text-gray-400 hover:text-[#24c2f2]
              transition-all duration-300
              hover:translate-x-1"
            >
              Cookie Policy
            </Link>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">

          <p className="text-gray-400 text-sm leading-7">
            © 2026 NexifyMedia. All rights reserved.
            <br />
            Helping businesses grow through modern digital marketing solutions.
          </p>

        </div>

      </div>

    </footer>
  );
}