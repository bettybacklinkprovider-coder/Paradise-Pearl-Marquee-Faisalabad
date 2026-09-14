import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 32,
    md: 44,
    lg: 56,
    xl: 80
  };

  const currentSize = iconSizes[size];

  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Golden 'P' Monogram Icon Box */}
      <div
        className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#0C0A09] flex items-center justify-center border border-[#D4AF37]/60 shadow-md group-hover:border-[#D4AF37] group-hover:shadow-[#D4AF37]/20 transition-all duration-300 relative overflow-hidden shrink-0`}
      >
        {/* Subtle inner gold glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

        {/* SVG rendering of the Golden Double-Stroke 'P' Monogram Logo */}
        <svg
          width={currentSize * 0.65}
          height={currentSize * 0.65}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F6EDD0" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#8E6F34" />
            </linearGradient>
            <linearGradient id="goldGradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#EBD99F" />
              <stop offset="100%" stopColor="#B38F48" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Loop P path */}
          <path
            d="M 32 82 
               L 32 24 
               C 32 18, 38 14, 55 14 
               C 72 14, 82 24, 82 38 
               C 82 52, 72 62, 55 62 
               L 44 62
               L 44 82
               C 44 87, 39 90, 35 88 
               C 33 86, 32 84, 32 82 Z"
            fill="url(#goldGradient)"
            filter="url(#goldGlow)"
          />

          {/* Inner Counter / Cutout to form double line */}
          <path
            d="M 44 26 
               L 54 26 
               C 65 26, 70 31, 70 38 
               C 70 45, 65 50, 54 50 
               L 44 50 Z"
            fill="#1C1917"
          />

          {/* Inner Accent Line for Luxury Double Stroke Effect */}
          <path
            d="M 50 32 
               L 54 32 
               C 59 32, 63 34, 63 38 
               C 63 42, 59 44, 54 44 
               L 50 44 Z"
            fill="url(#goldGradientInner)"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="text-left">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] block leading-none">
            Paradise Pearl
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#B38F48] block mt-0.5">
            Marquee Faisalabad
          </span>
        </div>
      )}
    </div>
  );
};
