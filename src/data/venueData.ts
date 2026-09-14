import { EventService, GalleryItem, FeatureBlock } from '../types';

export const BUSINESS_INFO = {
  name: 'Paradise Pearl Marquee Faisalabad',
  shortName: 'Paradise Pearl Marquee',
  phone: '+92 328 8124444',
  phoneRaw: '+923288124444',
  address: 'PARADISE PEARL MARQUEE, Main Lahore - Sheikhupura - Faisalabad Rd, near ZEE Garden, Faisalabad, 38000, Pakistan',
  city: 'Faisalabad',
  province: 'Punjab',
  country: 'Pakistan',
  postalCode: '38000',
  tagline: 'A Beautiful Venue for Your Most Beautiful Moments',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4123114921!2d73.1256789!3d31.4321987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922421982736123%3A0x6789abcdef123456!2sParadise%20Pearl%20Marquee!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=PARADISE+PEARL+MARQUEE,+Main+Lahore+-+Sheikhupura+-+Faisalabad+Rd,+near+ZEE+Garden,+Faisalabad,+38000,+Pakistan'
};

export const SERVICES: EventService[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    shortDescription: 'Elegant spaces and a beautiful atmosphere for unforgettable wedding celebrations.',
    fullDescription: 'At Paradise Pearl Marquee, we transform your dream wedding into a majestic reality. Our spacious hall features grand crystal chandeliers, royal stage setups, custom floral decor, climate-controlled comfort, and dedicated bridal suites. From grand Baraat entries to emotional moments, our team ensures your wedding day is flawless, elegant, and deeply memorable for you and your honored guests.',
    image: 'https://i.pinimg.com/736x/c0/7b/fa/c07bfaf2c4c244f4508032fb8c507813.jpg',
    iconName: 'Sparkles',
    features: [
      'Grand Royal Stage & Backdrop Customization',
      'Dedicated Luxury Bridal Lounge & Dressing Suites',
      'Central Climate Control (Air Conditioning & Heating)',
      'Customized Ambient & Dynamic Intelligent Lighting',
      'Ample VIP Parking with Valet Support',
      'Capacity to Host Large Gatherings Comfortably'
    ]
  },
  {
    id: 'receptions',
    title: 'Receptions',
    shortDescription: 'A sophisticated venue designed for memorable reception events and gatherings.',
    fullDescription: 'Celebrate your Valima or post-wedding reception in an atmosphere of warmth, luxury, and refined sophistication. Paradise Pearl Marquee provides exquisite seating arrangements, royal banquet table setups, state-of-the-art sound technology, and immaculate catering coordination to make your reception an unforgettable evening of joy and hospitality.',
    image: 'https://i.pinimg.com/736x/bc/e7/5e/bce75ed9e52a1ad60133c552ebc9801a.jpg',
    iconName: 'Crown',
    features: [
      'Sophisticated Banquet Seating & Round Table Layouts',
      'Exquisite Fine-Dining Serving Infrastructure',
      'Professional Audio Visual System for Speeches & Media',
      'Dedicated Hospitality & Service Coordination',
      'Custom Floral Centerpieces & Table Linens',
      'Seamless Entrance & Reception Foyer Area'
    ]
  },
  {
    id: 'engagements',
    title: 'Engagements & Family Events',
    shortDescription: 'A comfortable and elegant setting for engagements, family celebrations and special occasions.',
    fullDescription: 'From intimate Ring Ceremonies, Mehendi nights, and Dholak celebrations to milestone Birthdays, Anniversaries, and Family Reunions, Paradise Pearl Marquee offers versatile hall layouts that adapt to the warm spirit of family celebrations. Enjoy a festive environment decorated with traditional flair or contemporary elegance.',
    image: 'https://i.pinimg.com/736x/eb/d9/16/ebd916563670dcd9d05b827d3204dcbc.jpg',
    iconName: 'HeartHandshake',
    features: [
      'Flexible Hall Partitioning for Intimate or Medium Events',
      'Themed Decor Setup (Mehendi, Ring Ceremony, Anniversaries)',
      'Stage Setup with Photography-Friendly Backdrops',
      'Background Sound & Music System Integration',
      'Comfortable Seating Layout for Family & Friends',
      'Full Uninterrupted Power Backup Facility'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    shortDescription: 'A professional and polished venue for corporate gatherings, meetings and special events.',
    fullDescription: 'Elevate your corporate profile with high-impact corporate galas, annual general meetings, product launches, award ceremonies, and executive dinners. Paradise Pearl Marquee combines a commanding professional atmosphere with advanced audio-visual capabilities, high-speed connectivity, and executive catering services on Main Lahore - Sheikhupura - Faisalabad Road.',
    image: 'https://i.pinimg.com/1200x/be/eb/60/beeb603f3a3417888a074b6947e37d10.jpg',
    iconName: 'Building2',
    features: [
      'HD Projection Screens & High-Fidelity PA System',
      'Executive Stage & Podium Setup for Speakers',
      'Customized Branding & Banner Mounting Facilities',
      'Buffet & Plated Executive Dining Arrangements',
      'Easy Highway Accessibility & High Capacity Parking',
      'Professional On-Site Technical & Event Support'
    ]
  }
];

export const WHY_CHOOSE_US: FeatureBlock[] = [
  {
    id: 'atmosphere',
    title: 'Elegant Atmosphere',
    description: 'A refined environment designed to make every celebration feel special with grand architectural layout and crystal lighting.',
    iconName: 'Sparkles'
  },
  {
    id: 'memorable',
    title: 'Memorable Events',
    description: 'A beautiful setting for creating lasting memories with family, friends and guests through flawless presentation.',
    iconName: 'Heart'
  },
  {
    id: 'experience',
    title: 'Professional Experience',
    description: 'A polished venue experience focused on making your event smooth and enjoyable from booking to farewell.',
    iconName: 'Award'
  },
  {
    id: 'versatile',
    title: 'Perfect for Every Celebration',
    description: 'Suitable for grand weddings, receptions, engagements, family events and executive corporate occasions.',
    iconName: 'CalendarCheck'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Marquee Exterior & Fairy Lights',
    category: 'exterior',
    categoryLabel: 'Marquee Exterior',
    image: 'https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg',
    caption: 'Majestic exterior facade welcoming guests with glowing fairy lights on Main Highway.'
  },
  {
    id: 'gal-2',
    title: 'Royal Crystal Chandelier Hall',
    category: 'interior',
    categoryLabel: 'Elegant Interior',
    image: 'https://i.pinimg.com/736x/df/7c/a4/df7ca4e073cf2a2fea565325df1f8372.jpg',
    caption: 'Spacious interior featuring sparkling chandeliers, plush carpeting, and high ceilings.'
  },
  {
    id: 'gal-3',
    title: 'Floral Stage & Bridal Backdrop',
    category: 'stage',
    categoryLabel: 'Stage & Decor',
    image: 'https://i.pinimg.com/736x/eb/d9/16/ebd916563670dcd9d05b827d3204dcbc.jpg',
    caption: 'Exquisite bridal stage with fresh floral arrangements and warm ambient spotlights.'
  },
  {
    id: 'gal-4',
    title: 'Wedding Reception Banquet',
    category: 'reception',
    categoryLabel: 'Reception Setup',
    image: 'https://i.pinimg.com/736x/c0/7b/fa/c07bfaf2c4c244f4508032fb8c507813.jpg',
    caption: 'Immaculate banquet setup for grand wedding receptions and valima dinners.'
  },
  {
    id: 'gal-5',
    title: 'Luxury Dining & Table Detailing',
    category: 'dining',
    categoryLabel: 'Dining & Event Setup',
    image: 'https://i.pinimg.com/736x/bc/e7/5e/bce75ed9e52a1ad60133c552ebc9801a.jpg',
    caption: 'Premium dining table arrangements with gold cutlery and elegant glassware.'
  },
  {
    id: 'gal-6',
    title: 'Evening Illumination & Ambience',
    category: 'exterior',
    categoryLabel: 'Evening Venue Atmosphere',
    image: 'https://i.pinimg.com/1200x/be/eb/60/beeb603f3a3417888a074b6947e37d10.jpg',
    caption: 'Enchanting evening lights creating a romantic atmosphere for night celebrations.'
  },
  {
    id: 'gal-7',
    title: 'Custom Floral Table Centerpieces',
    category: 'decor',
    categoryLabel: 'Wedding Decorations',
    image: 'https://i.pinimg.com/736x/33/85/02/3385023982f6f491913ff4776d86e248.jpg',
    caption: 'Handcrafted floral centerpieces and candle arrangements for exquisite table aesthetics.'
  },
  {
    id: 'gal-8',
    title: 'VIP Entrance & Welcome Foyer',
    category: 'interior',
    categoryLabel: 'Elegant Interior',
    image: 'https://i.pinimg.com/736x/3f/2e/c9/3f2ec927d4e194114f73afa1c8251d55.jpg',
    caption: 'Red carpet entrance foyer for receiving esteemed guests with honor and warmth.'
  }
];

export const VENUE_STATS = [
  { label: 'Event Capacity', value: '1,500+ Guests' },
  { label: 'Prime Location', value: 'Main Highway Faisalabad' },
  { label: 'Climate Control', value: '100% AC & Heating' },
  { label: 'Power Backup', value: '24/7 Heavy Generators' }
];
