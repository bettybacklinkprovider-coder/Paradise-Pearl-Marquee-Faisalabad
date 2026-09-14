import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/venueData';
import { Logo } from './Logo';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (prefilledService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Events & Services', route: 'services' },
    { label: 'Contact Us', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Bar for Quick Contact */}
      <div className="bg-[#1C1917] text-[#E8DFC8] text-xs py-2 px-4 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="font-light tracking-wide text-[#FAF8F5]/90">
              Faisalabad's Premier Wedding & Event Venue on Main Highway
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors duration-200"
              title="Call Paradise Pearl Marquee"
            >
              <Phone size={13} className="text-[#D4AF37]" />
              <span className="font-medium tracking-wider">{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#D9CDB0]/40'
            : 'bg-[#FAF8F5] py-4 border-b border-[#EAE3D4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Text */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none"
            aria-label="Paradise Pearl Marquee Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#B38F48] font-semibold'
                      : 'text-[#44403C] hover:text-[#B38F48]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-full border border-[#D9CDB0] text-[#1C1917] hover:border-[#D4AF37] hover:bg-[#FCF9EE] hover:text-[#B38F48] transition-all duration-200"
              title="Call Us Now"
              aria-label="Call Paradise Pearl Marquee"
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1C1917] to-[#292524] text-[#F6EDD0] px-5 py-2.5 rounded-lg text-sm font-medium border border-[#D4AF37]/40 shadow-sm hover:from-[#292524] hover:to-[#38322E] hover:border-[#D4AF37] hover:shadow transition-all duration-300 cursor-pointer"
            >
              <Calendar size={16} className="text-[#D4AF37]" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#1C1917] text-[#F6EDD0] p-2 rounded-md text-xs font-medium border border-[#D4AF37]/40 flex items-center space-x-1"
            >
              <Calendar size={14} className="text-[#D4AF37]" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1917] hover:bg-[#EAE3D4] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#FAF8F5] border-b border-[#D9CDB0] shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? 'bg-[#FCF9EE] text-[#B38F48] font-semibold border-l-4 border-[#D4AF37]'
                          : 'text-[#292524] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={18} className="text-[#B38F48]/60" />
                    </button>
                  );
                })}

                <div className="pt-4 border-t border-[#EAE3D4] space-y-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center space-x-2 bg-[#F4EFE6] text-[#1C1917] py-3 rounded-lg font-medium border border-[#D9CDB0] text-sm"
                  >
                    <Phone size={16} className="text-[#D4AF37]" />
                    <span>Call Us: {BUSINESS_INFO.phone}</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1C1917] to-[#292524] text-[#F6EDD0] py-3 rounded-lg font-medium text-sm border border-[#D4AF37]/50 shadow-sm"
                  >
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span>Book Your Event</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
