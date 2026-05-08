import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#202851] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#24c2f2] to-[#202851] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">D</span>
              </div>
              <span className="text-xl">nexifymedia</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming brands through innovative digital marketing strategies and creative excellence.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#24c2f2] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Services', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#24c2f2] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {['SEO Optimization', 'Social Media', 'PPC Advertising', 'Content Marketing', 'Email Marketing', 'Analytics'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#24c2f2] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Copmany Info</h3>
            <ul className="space-y-3 text-gray-400">
               <li className="flex items-start gap-3">
              Careeres
              </li>
              <li className="flex items-start gap-3">
               Blog
              </li>
               <li className="flex items-start gap-3">
               Privacy Policy
              </li>
              <li className="flex items-center gap-3">
                Terms and Conditions
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2026 nexifymedia. All rights reserved. Built with passion for digital excellence.</p>
        </div>
      </div>
    </footer>
  );
}
