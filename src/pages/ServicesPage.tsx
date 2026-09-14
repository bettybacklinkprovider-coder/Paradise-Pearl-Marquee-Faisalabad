import React from 'react';
import { PageRoute } from '../types';
import { SERVICES } from '../data/venueData';
import {
  Sparkles,
  Crown,
  HeartHandshake,
  Building2,
  CheckCircle2,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (prefilledService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#D4AF37]" />;
      case 'Crown':
        return <Crown className="w-7 h-7 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#D4AF37]" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#292524]">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#1C1917] text-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://i.pinimg.com/736x/19/ae/fc/19aefca635b2c5260902a2b0ebe0367c.jpg"
            alt="Events & Services Paradise Pearl Marquee"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] px-4 py-1.5 rounded-full bg-[#292524] border border-[#D4AF37]/40 inline-block mb-4">
              OUR OFFERINGS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
              Events & Services
            </h1>
            <p className="font-serif italic text-xl text-[#D4AF37] mt-3 max-w-2xl mx-auto">
              Bespoke Venue Experience Tailored for Every Celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Detailed Services List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-2xl border border-[#EAE3D4] shadow-md hover:shadow-xl transition-all ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#D9CDB0] h-[320px] sm:h-[400px] bg-[#1C1917]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1917]/90 backdrop-blur-sm p-3 rounded-xl border border-[#D4AF37]/40">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>
              </div>

              {/* Text Content Column */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#B38F48]">
                  <Sparkles size={14} />
                  <span>Service {index + 1} of 4</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                  {service.title}
                </h2>

                <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />

                <p className="text-base text-[#44403C] leading-relaxed font-light">
                  {service.fullDescription}
                </p>

                {/* Key Feature Bullets */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Key Highlights & Amenities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#44403C]">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1C1917] to-[#292524] text-[#F6EDD0] px-6 py-3.5 rounded-lg text-sm font-semibold border border-[#D4AF37]/40 hover:from-[#292524] hover:to-[#38322E] hover:border-[#D4AF37] transition-all shadow-md cursor-pointer"
                  >
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span>Inquire for {service.title}</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center space-x-1.5 bg-[#FCF9EE] text-[#B38F48] px-6 py-3.5 rounded-lg text-sm font-semibold border border-[#EBD99F] hover:bg-[#EAE3D4] transition-all cursor-pointer"
                  >
                    <span>Contact Direct</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Final Section */}
      <section className="py-20 bg-[#F4EFE6] border-t border-[#EAE3D4] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block">
            CUSTOM EVENT PLANNING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Have a Special Event in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#44403C] font-light leading-relaxed">
            Our experienced venue coordinators are ready to assist you with hall dimensions, stage themes, seating layouts, and menu selections for your upcoming occasion.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 bg-[#1C1917] text-[#FAF8F5] px-8 py-4 rounded-lg font-semibold text-sm border border-[#D4AF37] hover:bg-[#292524] transition-all shadow-lg cursor-pointer"
            >
              <span>Contact Paradise Pearl Marquee</span>
              <ArrowRight size={16} className="text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
