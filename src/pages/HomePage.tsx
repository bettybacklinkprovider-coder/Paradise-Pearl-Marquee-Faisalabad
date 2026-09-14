import React from 'react';
import { PageRoute, GalleryItem } from '../types';
import { BUSINESS_INFO, SERVICES, WHY_CHOOSE_US, GALLERY_ITEMS } from '../data/venueData';
import {
  Sparkles,
  Crown,
  HeartHandshake,
  Building2,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Heart,
  Award,
  CalendarCheck,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (prefilledService?: string) => void;
  onOpenGalleryItem: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenGalleryItem
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#D4AF37]" />;
      case 'Heart':
        return <Heart className="w-8 h-8 text-[#D4AF37]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#D4AF37]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#292524]">
      {/* SECTION 1 — HERO / INTRO */}
      <section className="relative min-h-[90vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#1C1917]">
        {/* Background Image with Dark Soft Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/df/7c/a4/df7ca4e073cf2a2fea565325df1f8372.jpg"
            alt="Paradise Pearl Marquee Faisalabad Hero Venue"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 animate-pulse transition-transform duration-10000 opacity-60"
            style={{ animationDuration: '20s' }}
          />
          {/* Sophisticated Dark Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/75 to-[#1C1917]/50" />
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#FAF8F5]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F6EDD0] text-xs uppercase tracking-[0.25em] font-semibold mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span>Faisalabad's Luxury Event Venue</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Paradise Pearl Marquee Faisalabad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-serif italic text-xl sm:text-3xl text-[#D4AF37] font-normal mt-4 mb-6"
          >
            A Beautiful Venue for Your Most Beautiful Moments
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto text-sm sm:text-base text-[#E8DFC8]/90 font-light leading-relaxed mb-10"
          >
            Paradise Pearl Marquee provides an elegant and memorable setting for weddings, receptions, engagements, family celebrations, and special events on Main Lahore - Sheikhupura - Faisalabad Road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => {
                const welcomeSection = document.getElementById('welcome-section');
                welcomeSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#FAF8F5] text-[#1C1917] font-semibold text-sm hover:bg-[#F6EDD0] border border-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Explore Our Venue
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#1C1917] font-semibold text-sm hover:from-[#C5A059] hover:to-[#B38F48] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center space-x-2"
            >
              <Sparkles size={16} />
              <span>Book Your Event</span>
            </button>
          </motion.div>
        </div>

        {/* Subtle Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center text-[#E8DFC8]/70 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest font-medium mb-1">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce text-[#D4AF37]" />
        </div>
      </section>

      {/* SECTION 2 — WELCOME / ABOUT PREVIEW */}
      <section id="welcome-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: High Quality Interior/Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] bg-[#1C1917]">
              <img
                src="https://i.pinimg.com/736x/15/b1/f7/15b1f7fc761359de561529396cf6c45b.jpg"
                alt="Paradise Pearl Marquee Faisalabad Elegant Interior"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Elegant Accent Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4AF37]/40 rounded-2xl z-0 hidden sm:block" />

            <div className="absolute bottom-6 left-6 z-20 bg-[#1C1917]/90 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30 text-white max-w-xs shadow-xl hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold">1,500+ Guest Capacity</h4>
                  <p className="text-xs text-[#E8DFC8]">Spacious, air-conditioned hall</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Welcome Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] bg-[#FCF9EE] px-3.5 py-1.5 rounded-full border border-[#EBD99F] inline-block">
              WELCOME TO PARADISE PEARL
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
              Where Elegant Celebrations Come to Life
            </h2>

            <div className="w-20 h-1 bg-[#D4AF37] rounded-full" />

            <p className="text-base text-[#44403C] leading-relaxed font-normal">
              Paradise Pearl Marquee Faisalabad stands as a beacon of sophistication and warmth on Main Lahore - Sheikhupura - Faisalabad Road. Designed with grand architectural splendor, crystal lighting, climate control, and unmatched Pakistani hospitality, our marquee creates an enchanting atmosphere for your milestone occasions.
            </p>

            <p className="text-sm text-[#44403C]/80 leading-relaxed font-light">
              Whether you are planning a royal wedding baraat, a graceful valima reception, an intimate engagement, or a high-level corporate dinner, our dedicated team works tirelessly to execute every detail with precision and grace.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="flex items-center space-x-2 text-sm font-semibold text-[#1C1917]">
                <CheckCircle2 size={16} className="text-[#D4AF37]" />
                <span>Prime Highway Location</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-[#1C1917]">
                <CheckCircle2 size={16} className="text-[#D4AF37]" />
                <span>Custom Stage & Lighting</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-[#1C1917]">
                <CheckCircle2 size={16} className="text-[#D4AF37]" />
                <span>Executive Catering Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-[#1C1917]">
                <CheckCircle2 size={16} className="text-[#D4AF37]" />
                <span>24/7 Power Backup</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center space-x-2 bg-[#1C1917] text-[#F6EDD0] px-7 py-3.5 rounded-lg text-sm font-semibold border border-[#D4AF37]/40 hover:bg-[#292524] hover:border-[#D4AF37] transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>Discover More</span>
                <ArrowRight size={16} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — EVENTS & SERVICES */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EAE3D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block mb-2">
              WHAT WE OFFER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
              Events & Services
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto my-4" />
            <p className="text-sm sm:text-base text-[#44403C] font-light">
              Explore our four tailored event experiences designed to make every gathering extraordinary.
            </p>
          </div>

          {/* Exactly 4 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8F5] rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-[#D9CDB0]/70 group transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[#1C1917]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-sm p-2 rounded-lg border border-[#D4AF37]/40">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-3 group-hover:text-[#B38F48] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#44403C] leading-relaxed font-light mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-lg bg-[#FCF9EE] text-[#B38F48] border border-[#EBD99F] font-semibold text-xs hover:bg-[#1C1917] hover:text-[#F6EDD0] hover:border-[#1C1917] transition-all duration-300"
                  >
                    <span>Inquire for {service.title}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center space-x-2 bg-[#1C1917] text-[#FAF8F5] px-8 py-4 rounded-lg text-sm font-semibold border border-[#D4AF37] hover:bg-[#292524] transition-all shadow-md cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight size={16} className="text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE US */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block mb-2">
            OUR PROMISE OF EXCELLENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            Why Choose Paradise Pearl Marquee?
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#44403C] font-light">
            We are dedicated to turning your vision into a seamlessly executed, unforgettable milestone.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#EAE3D4] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FCF9EE] border border-[#EBD99F] flex items-center justify-center mb-6 shadow-sm">
                {getFeatureIcon(block.iconName)}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
                {block.title}
              </h3>
              <p className="text-sm text-[#44403C] leading-relaxed font-light">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — GALLERY / VENUE EXPERIENCE */}
      <section className="py-20 bg-[#1C1917] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              VISUAL HIGHLIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Experience the Paradise Pearl
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto my-4" />
            <p className="text-sm sm:text-base text-[#E8DFC8]/90 font-light italic">
              A setting designed to make every celebration unforgettable.
            </p>
          </div>

          {/* Masonry / Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => onOpenGalleryItem(item)}
                className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-[#292524] border border-[#38322E] shadow-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F6EDD0] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center space-x-1 text-xs text-[#D4AF37] font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <ZoomIn size={14} />
                    <span>Click to view photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA / CONTACT */}
      <section className="relative py-24 bg-[#292524] text-[#FAF8F5] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://i.pinimg.com/736x/19/ae/fc/19aefca635b2c5260902a2b0ebe0367c.jpg"
            alt="Paradise Pearl Marquee Faisalabad Event Venue"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] px-4 py-1.5 rounded-full bg-[#1C1917] border border-[#D4AF37]/40 inline-block">
              RESERVE YOUR DATE TODAY
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Ready to Celebrate Your Special Day?
            </h2>

            <p className="text-base sm:text-lg text-[#E8DFC8]/90 max-w-2xl mx-auto font-light leading-relaxed">
              Let Paradise Pearl Marquee Faisalabad provide the perfect setting for your next unforgettable event.
            </p>

            {/* Address Display */}
            <div className="bg-[#1C1917]/90 border border-[#D4AF37]/30 p-4 rounded-xl max-w-2xl mx-auto text-xs sm:text-sm text-[#E8DFC8] flex items-center justify-center space-x-2">
              <MapPin size={18} className="text-[#D4AF37] shrink-0" />
              <span className="text-center font-medium">{BUSINESS_INFO.address}</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#1C1917] px-8 py-4 rounded-lg font-bold text-sm shadow-xl hover:from-[#C5A059] hover:to-[#B38F48] transition-all"
              >
                <Phone size={18} />
                <span>Call Us ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FAF8F5] text-[#1C1917] px-8 py-4 rounded-lg font-bold text-sm shadow-xl hover:bg-[#F6EDD0] transition-all"
              >
                <MapPin size={18} className="text-[#B38F48]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
