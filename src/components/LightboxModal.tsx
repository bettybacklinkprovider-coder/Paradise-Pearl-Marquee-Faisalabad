import React from 'react';
import { GalleryItem } from '../types';
import { X, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full bg-[#1C1917] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 text-[#FAF8F5]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-[#1C1917] flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>

          {/* Image container */}
          <div className="relative aspect-video max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details footer */}
          <div className="p-6 bg-[#292524] border-t border-[#38322E] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                <Sparkles size={13} />
                <span>{item.categoryLabel}</span>
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-[#E8DFC8]/80 mt-1 max-w-2xl">{item.caption}</p>
            </div>
            <div className="shrink-0">
              <span className="text-xs text-[#E8DFC8]/60 flex items-center space-x-1">
                <MapPin size={13} className="text-[#D4AF37]" />
                <span>Paradise Pearl Marquee Faisalabad</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
