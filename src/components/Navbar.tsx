import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
    isScrolled 
      ? 'bg-midnight/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
      : 'bg-transparent py-8'
  }`;

  const linkClasses = (path: string) => `
    relative text-xs tracking-[0.25em] uppercase font-bold transition-all duration-500 hover:text-gold-400
    ${location.pathname === path ? 'text-gold-500' : 'text-white/90'}
    group overflow-hidden
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 border border-gold-500/30 rotate-45 transition-transform duration-700 group-hover:rotate-180 group-hover:border-gold-500"></div>
              <div className="absolute inset-0 border border-white/10 -rotate-12 scale-75 transition-transform duration-700 group-hover:-rotate-90"></div>
              <span className="relative z-10 font-decorative font-bold text-2xl text-gold-500">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-decorative tracking-wider text-white group-hover:text-gold-200 transition-colors duration-500">Saffron</span>
              <span className="text-[0.55rem] tracking-[0.6em] text-gold-500 uppercase -mt-1 ml-1">& Silk</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className={linkClasses('/')}>
              <span className="block" data-text="Sanctuary">Sanctuary</span>
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
            </Link>
            <Link to="/about" className={linkClasses('/about')}>
               <span className="block" data-text="Legacy">Legacy</span>
               <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
            </Link>
            <button className="relative px-8 py-3 bg-transparent border border-gold-500/50 text-gold-500 text-xs font-bold tracking-[0.2em] uppercase overflow-hidden group hover:border-gold-500 transition-colors duration-500">
              <span className="absolute inset-0 w-0 bg-gold-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></span>
              <span className="relative group-hover:text-gold-200 transition-colors">Reserve</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-gold-500 cursor-pointer p-2 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-8 flex flex-col items-end gap-1.5 group">
               <span className={`h-[2px] bg-gold-500 transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'}`}></span>
               <span className={`h-[2px] bg-gold-500 transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
               <span className={`h-[2px] bg-gold-500 transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-midnight/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-saffron-500/5 rounded-full blur-[100px]"></div>
          </div>

          <div className="flex flex-col items-center gap-12 relative z-10">
              <Link to="/" className="text-4xl font-decorative text-white hover:text-gold-500 transition-colors duration-300">Sanctuary</Link>
              <Link to="/about" className="text-4xl font-decorative text-white hover:text-gold-500 transition-colors duration-300">Legacy</Link>
              <a href="#" className="text-4xl font-decorative text-white hover:text-gold-500 transition-colors duration-300">Menu</a>
              <div className="w-12 h-[1px] bg-white/10"></div>
              <button className="px-12 py-4 bg-gold-500 text-midnight font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300">
                  Reserve Table
              </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;