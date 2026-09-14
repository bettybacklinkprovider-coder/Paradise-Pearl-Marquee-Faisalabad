import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, VENUE_STATS } from '../data/venueData';
import {
  Sparkles,
  Eye,
  Crown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Flame,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#292524]">
      {/* About Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#1C1917] text-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://i.pinimg.com/736x/df/7c/a4/df7ca4e073cf2a2fea565325df1f8372.jpg"
            alt="About Paradise Pearl Marquee Faisalabad"
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
              DISCOVER OUR VENUE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
              About Paradise Pearl Marquee
            </h1>
            <p className="font-serif italic text-xl text-[#D4AF37] mt-3 max-w-2xl mx-auto">
              A Legacy of Grace, Hospitality, and Unmatched Elegance in Faisalabad
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. About Paradise Pearl Marquee (Detailed Introduction) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] bg-[#FCF9EE] px-3.5 py-1.5 rounded-full border border-[#EBD99F] inline-block">
              WHO WE ARE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight">
              Faisalabad's Distinguished Wedding & Event Destination
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] rounded-full" />
            
            <p className="text-base text-[#44403C] leading-relaxed font-normal">
              Located on Main Lahore - Sheikhupura - Faisalabad Road near ZEE Garden, <strong>Paradise Pearl Marquee Faisalabad</strong> was crafted with a singular vision: to offer families and corporate clients a grand, luxurious, and hassle-free sanctuary for life’s most cherished celebrations.
            </p>

            <p className="text-sm text-[#44403C]/80 leading-relaxed font-light">
              From our majestic exterior architecture to our expansive, pillarless interior hall, every inch of Paradise Pearl Marquee has been engineered to provide maximum comfort, breathtaking aesthetic backdrops, and seamless event management.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#EAE3D4]">
              {VENUE_STATS.map((stat, i) => (
                <div key={i} className="text-left">
                  <span className="block font-serif text-xl sm:text-2xl font-bold text-[#B38F48]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#44403C]/70 uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1C1917]">
              <img
                src="https://i.pinimg.com/736x/15/b1/f7/15b1f7fc761359de561529396cf6c45b.jpg"
                alt="Paradise Pearl Marquee Main Hall"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Vision & Mission */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EAE3D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#D9CDB0] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#FCF9EE] border border-[#EBD99F] flex items-center justify-center text-[#D4AF37] mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-4">
                  Our Vision
                </h3>
                <p className="text-sm text-[#44403C] leading-relaxed font-light">
                  Our goal is to create elegant, memorable, and deeply comfortable celebrations where every family feels honored and every guest is treated with warmth. We strive to set the gold standard for event venues across Punjab by combining contemporary architecture with royal Eastern traditions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EAE3D4] flex items-center space-x-2 text-xs font-semibold text-[#B38F48]">
                <Sparkles size={14} />
                <span>Excellence in Event Hosting</span>
              </div>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#D9CDB0] shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#FCF9EE] border border-[#EBD99F] flex items-center justify-center text-[#D4AF37] mb-6">
                  <Crown size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-4">
                  Our Commitment to Hospitality
                </h3>
                <p className="text-sm text-[#44403C] leading-relaxed font-light">
                  We believe that your event should be enjoyable and stress-free. Our on-site operations team oversees security, parking management, generator redundancy, climate regulation, and service protocols so you can focus entirely on celebrating with your loved ones.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EAE3D4] flex items-center space-x-2 text-xs font-semibold text-[#B38F48]">
                <ShieldCheck size={14} />
                <span>Uncompromised Service Standards</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Venue Experience */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block mb-2">
            IMMERSE IN LUXURY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            The Venue Experience
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto my-4" />
          <p className="text-sm sm:text-base text-[#44403C] font-light">
            Designed to impress from the moment your guests arrive on Main Lahore - Sheikhupura - Faisalabad Road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#EAE3D4] shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              Uninterrupted Comfort
            </h3>
            <p className="text-sm text-[#44403C] font-light leading-relaxed">
              Equipped with heavy 24/7 industrial backup power generators and centralized HVAC systems ensuring total temperature control regardless of weather.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#EAE3D4] shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center mb-6">
              <Flame size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              Royal Stage & Lighting
            </h3>
            <p className="text-sm text-[#44403C] font-light leading-relaxed">
              Custom customizable stage setups, spotlights, warm crystal chandelier ambiance, and backdrop lighting created specifically for high-definition wedding photography.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#EAE3D4] shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1C1917] text-[#D4AF37] flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              Punctual Execution
            </h3>
            <p className="text-sm text-[#44403C] font-light leading-relaxed">
              Our venue management ensures your schedule—from guest arrival to buffet service and stage proceedings—runs smoothly and on time.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Perfect for Special Moments & 5. Elegant & Memorable */}
      <section className="py-20 bg-[#1C1917] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] block">
                VERSATILITY & SPLENDOR
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                Perfect for Special Moments
              </h2>
              <p className="text-sm sm:text-base text-[#E8DFC8]/90 font-light leading-relaxed">
                Paradise Pearl Marquee accommodates celebrations of all sizes. Whether you need an expansive hall setup for 1,500 guests or an elegantly partitioned space for an intimate family gathering, our floor plans are flexible and adaptable.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-sm text-[#FAF8F5]">
                  <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Grand Barat & Valima Ceremonies:</strong> Spacious layouts for elaborate processions and royal dining setups.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-[#FAF8F5]">
                  <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Engagements & Mehendi Nights:</strong> Vibrant floral backdrops and dedicated musical staging.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-[#FAF8F5]">
                  <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Corporate Galas & AGMs:</strong> Professional stage setup with HD presentation screens.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.pinimg.com/736x/33/85/02/3385023982f6f491913ff4776d86e248.jpg"
                alt="Paradise Pearl Event Setup"
                referrerPolicy="no-referrer"
                className="rounded-xl shadow-lg border border-[#38322E] h-48 sm:h-56 object-cover w-full"
              />
              <img
                src="https://i.pinimg.com/736x/19/ae/fc/19aefca635b2c5260902a2b0ebe0367c.jpg"
                alt="Paradise Pearl Stage Decor"
                referrerPolicy="no-referrer"
                className="rounded-xl shadow-lg border border-[#38322E] h-48 sm:h-56 object-cover w-full mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section linking to Contact Us */}
      <section className="py-20 bg-[#FAF8F5] text-center border-t border-[#EAE3D4]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4">
            Plan Your Event With Us
          </h2>
          <p className="text-sm sm:text-base text-[#44403C] font-light mb-8">
            Contact Paradise Pearl Marquee Faisalabad to check venue availability, schedule a private tour, or discuss customized event packages.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 bg-[#1C1917] text-[#F6EDD0] px-8 py-4 rounded-lg font-semibold text-sm border border-[#D4AF37] hover:bg-[#292524] transition-all shadow-lg cursor-pointer"
          >
            <span>Plan Your Event With Us</span>
            <ArrowRight size={16} className="text-[#D4AF37]" />
          </button>
        </div>
      </section>
    </div>
  );
};
