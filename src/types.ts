export type PageRoute = 'home' | 'about' | 'services' | 'contact';

export interface EventService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'decor' | 'stage' | 'dining' | 'reception';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface FeatureBlock {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}
