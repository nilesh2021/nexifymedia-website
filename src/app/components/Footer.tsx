import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";

// Update path if needed
import logo from "../../assets/images/nexify_n_logo.png";

export default function Footer() {
  // Smooth scroll logic
  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16 mb-16">
          
          {/* Column 1 - Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-5">
              <Link
                to="/"
                className="flex items-center gap-3 group"
              >
                <div className="w-14 h-14 flex items-center justify-center duration-300">
                  <img
                    src={logo}
                    alt="Nexify Media Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-xl font-bold text-white">
                    Nexify
                    <span className="font-medium text-gray-300">
                      Media
                    </span>
                  </span>

                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#24c2f2] mt-1">
                    Digital Agency
                  </span>
                </div>
              </Link>
            </div>

            <p className="text-gray-400 mb-6 leading-8 text-[17px]">
              Helping brands grow through SEO, performance marketing,
              social media, and creative digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#24c2f2] hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Services
                </button>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Careers
                </Link>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/#case-studies"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  to="/#learning-hub"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Learning Hub
                </Link>
              </li>

              <li>
                <Link
                  to="/#digital-products"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Digital Products
                </Link>
              </li>

              <li>
                <Link
                  to="/#free-tools"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Free Tools
                </Link>
              </li>

              <li>
                <Link
                  to="/#templates"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  to="/#seo-services"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  SEO Services
                </Link>
              </li>

              <li>
                <Link
                  to="/#web-design"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Web Design
                </Link>
              </li>

              <li>
                <Link
                  to="/ui-ux-design"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  UI/UX Design
                </Link>
              </li>

              <li>
                <Link
                  to="/#social-media-marketing"
                  className="block hover:text-[#24c2f2] transition-all duration-300 hover:translate-x-1"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            © 2026 Nexify Media. All rights reserved.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              to="/privacy-policy"
              className="hover:text-[#24c2f2] transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-[#24c2f2] transition-all duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/disclaimer"
              className="hover:text-[#24c2f2] transition-all duration-300"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}