import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/venueData';
import { InquiryFormData } from '../types';
import { X, Calendar, Phone, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledEventType = ''
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: prefilledEventType || 'Wedding',
    eventDate: '',
    guestCount: '300-500 Guests',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'PPM-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative max-w-xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-[#D9CDB0] my-8"
      >
        {/* Header */}
        <div className="bg-[#1C1917] text-[#FAF8F5] p-6 border-b-2 border-[#D4AF37] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#E8DFC8]/70 hover:text-white p-1 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="flex items-center space-x-2 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-1">
            <Sparkles size={14} />
            <span>Event Reservation Request</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white">Book Paradise Pearl Marquee</h2>
          <p className="text-xs text-[#E8DFC8]/80 mt-1">
            Main Lahore - Sheikhupura - Faisalabad Rd • Call: {BUSINESS_INFO.phone}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#FCF9EE] border-2 border-[#D4AF37] text-[#B38F48] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Inquiry Received!</h3>
              <p className="text-sm text-[#44403C] max-w-md mx-auto">
                Thank you, <strong className="text-[#1C1917]">{formData.fullName}</strong>. Your event reservation inquiry for a <strong className="text-[#B38F48]">{formData.eventType}</strong> has been logged.
              </p>
              
              <div className="bg-[#FCF9EE] border border-[#EBD99F] p-4 rounded-xl text-left max-w-md mx-auto text-xs space-y-1.5">
                <div className="flex justify-between border-b border-[#EBD99F]/60 pb-1">
                  <span className="text-[#6B5226]">Reference Code:</span>
                  <span className="font-mono font-bold text-[#1C1917]">{refId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5226]">Requested Date:</span>
                  <span className="font-semibold text-[#1C1917]">{formData.eventDate || 'Flexible / To be discussed'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B5226]">Contact Phone:</span>
                  <span className="font-semibold text-[#1C1917]">{formData.phone}</span>
                </div>
              </div>

              <p className="text-xs text-[#6B5226] italic">
                Our venue reservation team will contact you shortly to confirm hall availability and menu selections.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center space-x-2 bg-[#1C1917] text-[#F6EDD0] px-5 py-2.5 rounded-lg text-sm font-semibold border border-[#D4AF37]"
                >
                  <Phone size={16} className="text-[#D4AF37]" />
                  <span>Call Venue Direct ({BUSINESS_INFO.phone})</span>
                </a>
                <button
                  onClick={handleReset}
                  className="bg-[#EAE3D4] text-[#1C1917] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#D9CDB0]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Malik Usman"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="Wedding">Wedding (Barat)</option>
                    <option value="Reception">Reception (Valima)</option>
                    <option value="Engagement">Engagement & Ring Ceremony</option>
                    <option value="Mehendi">Mehendi & Dholak</option>
                    <option value="Corporate Event">Corporate Event / Gala</option>
                    <option value="Family Function">Family Function / Birthday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                    Expected Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="100-300 Guests">100 - 300 Guests</option>
                    <option value="300-500 Guests">300 - 500 Guests</option>
                    <option value="500-800 Guests">500 - 800 Guests</option>
                    <option value="800-1200 Guests">800 - 1,200 Guests</option>
                    <option value="1500+ Guests">1,500+ Guests (Full Hall)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403C] mb-1">
                  Additional Notes / Catering Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about stage preferences, decor themes, or specific arrangements needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D9CDB0] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-medium text-[#B38F48] hover:underline flex items-center space-x-1"
                >
                  <Phone size={13} />
                  <span>Or call immediately: {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1C1917] to-[#292524] text-[#F6EDD0] px-6 py-3 rounded-lg text-sm font-semibold border border-[#D4AF37]/50 shadow-md hover:from-[#292524] hover:to-[#38322E] hover:border-[#D4AF37] transition-all"
                >
                  <Send size={16} className="text-[#D4AF37]" />
                  <span>Submit Event Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
