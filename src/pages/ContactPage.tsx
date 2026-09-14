import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/venueData';
import { InquiryFormData } from '../types';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    guestCount: '300-500 Guests',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'PPM-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#292524]">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#1C1917] text-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://i.pinimg.com/736x/df/7c/a4/df7ca4e073cf2a2fea565325df1f8372.jpg"
            alt="Contact Paradise Pearl Marquee Faisalabad"
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
              RESERVE YOUR DATE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="font-serif italic text-xl text-[#D4AF37] mt-3 max-w-2xl mx-auto">
              We Are Here to Make Your Celebration Vision a Reality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prominent Call Now Sticky Action Banner */}
      <div className="bg-[#FCF9EE] border-b border-[#EBD99F] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#D4AF37] flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#6B5226] font-semibold">
                Direct Hall Booking & Inquiries
              </span>
              <span className="text-sm font-bold text-[#1C1917]">
                Paradise Pearl Marquee Faisalabad: {BUSINESS_INFO.phone}
              </span>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1C1917] to-[#292524] text-[#F6EDD0] px-6 py-2.5 rounded-lg font-bold text-sm border border-[#D4AF37]/60 shadow hover:from-[#292524] hover:to-[#38322E] transition-all"
          >
            <Phone size={16} className="text-[#D4AF37]" />
            <span>Call Now ({BUSINESS_INFO.phone})</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Form & Contact Info */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block mb-2">
                VENUE LOCATION & DETAILS
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                Contact Information
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] rounded-full my-3" />
              <p className="text-sm text-[#44403C] font-light leading-relaxed">
                Visit our marquee office on Main Highway or call our team directly to verify date availability and discuss customized menu arrangements.
              </p>
            </div>

            {/* Business Info Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE3D4] shadow-md space-y-6">
              {/* Venue Name */}
              <div className="flex items-start space-x-4 border-b border-[#EAE3D4] pb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FCF9EE] border border-[#EBD99F] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <span className="text-xs text-[#6B5226] font-semibold uppercase tracking-wider block">
                    Website / Venue Name
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mt-0.5">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 border-b border-[#EAE3D4] pb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FCF9EE] border border-[#EBD99F] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs text-[#6B5226] font-semibold uppercase tracking-wider block">
                    Phone Number (Click to Call)
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-serif text-2xl font-bold text-[#1C1917] hover:text-[#B38F48] transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-[#44403C]/70">Available 9:00 AM - 10:00 PM Daily</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#FCF9EE] border border-[#EBD99F] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs text-[#6B5226] font-semibold uppercase tracking-wider block">
                    Full Venue Address
                  </span>
                  <address className="not-italic text-sm text-[#1C1917] font-medium leading-relaxed mt-1">
                    {BUSINESS_INFO.address}
                  </address>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-[#B38F48] font-bold mt-2 hover:underline"
                  >
                    <Navigation size={13} />
                    <span>Open in Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Visit Card */}
            <div className="bg-[#1C1917] text-[#FAF8F5] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3">
              <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Clock size={16} />
                <span>Venue Visits & Guided Tours</span>
              </div>
              <p className="text-xs text-[#E8DFC8]/90 leading-relaxed font-light">
                We invite families and event organizers to tour our hall, view stage lighting setups, and inspect dining capacities prior to booking.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D9CDB0] shadow-lg">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block mb-1">
                  EVENT INQUIRY FORM
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-[#44403C]/80 mt-1">
                  Fill out the form below and our booking representative will reach out to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#FCF9EE] border border-[#EBD99F] p-8 rounded-xl text-center space-y-4">
                  <div className="w-16 h-16 bg-[#1C1917] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#1C1917]">
                    Inquiry Successfully Submitted!
                  </h4>
                  <p className="text-sm text-[#44403C] max-w-md mx-auto">
                    Thank you, <strong className="text-[#1C1917]">{formData.fullName}</strong>. We have logged your request for a <strong className="text-[#B38F48]">{formData.eventType}</strong> at Paradise Pearl Marquee Faisalabad.
                  </p>
                  
                  <div className="bg-white border border-[#D9CDB0] p-4 rounded-lg text-left max-w-sm mx-auto text-xs space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-gray-500">Inquiry Ref:</span>
                      <span className="font-mono font-bold text-[#1C1917]">{refId}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-gray-500">Provided Phone:</span>
                      <span className="font-semibold text-[#1C1917]">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Preferred Date:</span>
                      <span className="font-semibold text-[#1C1917]">{formData.eventDate || 'To be confirmed'}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B5226] italic">
                    For urgent date holds, please call our direct helpline at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="underline font-bold">{BUSINESS_INFO.phone}</a>.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          eventType: 'Wedding',
                          eventDate: '',
                          guestCount: '300-500 Guests',
                          message: ''
                        });
                      }}
                      className="bg-[#1C1917] text-[#FAF8F5] px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#292524]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      >
                        <option value="Wedding">Wedding (Barat)</option>
                        <option value="Reception">Reception (Valima)</option>
                        <option value="Engagement">Engagement Ceremony</option>
                        <option value="Mehendi">Mehendi & Sangeet</option>
                        <option value="Corporate Event">Corporate Event / Conference</option>
                        <option value="Family Event">Family Function / Birthday</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                      >
                        <option value="100-300 Guests">100 - 300 Guests</option>
                        <option value="300-500 Guests">300 - 500 Guests</option>
                        <option value="500-800 Guests">500 - 800 Guests</option>
                        <option value="800-1200 Guests">800 - 1,200 Guests</option>
                        <option value="1500+ Guests">1,500+ Guests (Full Marquee)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know your preferred decor, seating arrangements, or catering requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1C1917] to-[#292524] text-[#F6EDD0] py-4 rounded-lg font-bold text-sm border border-[#D4AF37]/50 shadow-lg hover:from-[#292524] hover:to-[#38322E] hover:border-[#D4AF37] transition-all cursor-pointer"
                    >
                      <Send size={16} className="text-[#D4AF37]" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Styled Map Area Section Centered on Venue Address */}
      <section className="py-16 bg-[#F4EFE6] border-t border-[#EAE3D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B38F48] block mb-2">
              LOCATION MAP
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
              Find Paradise Pearl Marquee
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full mx-auto my-3" />
            <p className="text-sm text-[#44403C] font-light">
              Main Lahore - Sheikhupura - Faisalabad Rd, near ZEE Garden, Faisalabad, 38000, Pakistan
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#D9CDB0]">
            {/* Interactive Map Visual */}
            <div className="relative h-[380px] sm:h-[450px] w-full bg-[#1C1917]">
              <iframe
                title="Paradise Pearl Marquee Faisalabad Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4123114921!2d73.1256789!3d31.4321987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922421982736123%3A0x6789abcdef123456!2sParadise%20Pearl%20Marquee!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>

              {/* Map Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto z-10 bg-[#1C1917]/95 backdrop-blur-md p-5 rounded-xl border border-[#D4AF37]/40 text-[#FAF8F5] max-w-md shadow-2xl">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Paradise Pearl Marquee
                    </h4>
                    <p className="text-xs text-[#E8DFC8]/90 mt-1 leading-relaxed">
                      Main Lahore - Sheikhupura - Faisalabad Rd, near ZEE Garden, Faisalabad, 38000
                    </p>
                    <a
                      href={BUSINESS_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#D4AF37] font-semibold mt-3 hover:underline"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
