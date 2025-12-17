import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#D4AF37" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#footer-pattern)" />
            </svg>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-6">
            <div className="flex flex-col">
                <span className="text-3xl font-serif tracking-wider text-white">SAFFRON</span>
                <span className="text-xs tracking-[0.4em] text-gold-500 uppercase">& Silk</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Experience the symphony of authentic Indian spices and modern luxury. A culinary journey beyond boundaries.
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-6 font-bold">Explore</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">Our Heritage</Link></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Private Dining</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>123 Luxury Lane, Mayfair</li>
              <li>London, United Kingdom</li>
              <li>+44 (0) 20 7123 4567</li>
              <li>reservations@saffronandsilk.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 text-xs tracking-widest uppercase mb-6 font-bold">Hours</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white">5pm - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white">5pm - 1am</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">4pm - 10pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; 2024 Saffron & Silk. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;