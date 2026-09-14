import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/venueData';
import { Logo } from './Logo';
import { Phone, MapPin, ArrowUp, Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-8 border-t-4 border-[#D4AF37] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#38322E]">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div>
              <Logo size="md" className="[&_span]:text-white" />
            </div>
            <p className="text-sm text-[#E8DFC8]/80 leading-relaxed pt-2">
              Faisalabad’s premier destination for luxury weddings, receptions, engagements, and executive corporate events. Creating elegant and unforgettable memories on Main Highway.
            </p>
            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-3">
                Follow Our Stories
              </span>
              <div className="flex space-x-3">
                <span
                  title="Instagram"
                  className="w-9 h-9 rounded-full bg-[#292524] border border-[#44403C] flex items-center justify-center text-[#E8DFC8] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Instagram size={17} />
                </span>
                <span
                  title="Facebook"
                  className="w-9 h-9 rounded-full bg-[#292524] border border-[#44403C] flex items-center justify-center text-[#E8DFC8] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Facebook size={17} />
                </span>
                <span
                  title="WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#292524] border border-[#44403C] flex items-center justify-center text-[#E8DFC8] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <MessageCircle size={17} />
                </span>
                <span
                  title="YouTube"
                  className="w-9 h-9 rounded-full bg-[#292524] border border-[#44403C] flex items-center justify-center text-[#E8DFC8] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Youtube size={17} />
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#D4AF37] border-b border-[#38322E] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="text-[#E8DFC8]/80 hover:text-[#D4AF37] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37] text-xs">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="text-[#E8DFC8]/80 hover:text-[#D4AF37] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37] text-xs">›</span>
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="text-[#E8DFC8]/80 hover:text-[#D4AF37] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37] text-xs">›</span>
                  <span>Events & Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="text-[#E8DFC8]/80 hover:text-[#D4AF37] transition-colors flex items-center space-x-2"
                >
                  <span className="text-[#D4AF37] text-xs">›</span>
                  <span>Contact Us</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] underline underline-offset-4 hover:text-white transition-colors"
                >
                  Book Your Event Online →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#D4AF37] border-b border-[#38322E] pb-2">
              Venue Inquiries
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 text-[#E8DFC8]/90">
                <Phone size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#E8DFC8]/60 uppercase tracking-wider">Direct Phone</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-semibold text-[#FAF8F5] hover:text-[#D4AF37] transition-colors text-base"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[#E8DFC8]/90">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#E8DFC8]/60 uppercase tracking-wider">Venue Location</span>
                  <span className="text-xs leading-relaxed text-[#E8DFC8]/80 block">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Preview */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#D4AF37] border-b border-[#38322E] pb-2">
              Visit Our Venue
            </h3>
            <p className="text-xs text-[#E8DFC8]/70 leading-relaxed">
              Located conveniently near ZEE Garden on Main Lahore - Sheikhupura - Faisalabad Road.
            </p>
            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#292524] text-[#D4AF37] border border-[#D4AF37]/50 px-4 py-2.5 rounded text-xs font-medium hover:bg-[#D4AF37] hover:text-[#1C1917] transition-all duration-300"
            >
              <MapPin size={14} />
              <span>Get Highway Directions</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DFC8]/60 gap-4">
          <p>© 2026 Paradise Pearl Marquee Faisalabad. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#D4AF37] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
