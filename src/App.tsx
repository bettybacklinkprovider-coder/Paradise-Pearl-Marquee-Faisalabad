import React, { useState, useEffect } from 'react';
import { PageRoute, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>('home');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Handle URL hash / path syncing and SEO title updates
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes: PageRoute[] = ['home', 'about', 'services', 'contact'];
      if (validRoutes.includes(hash as PageRoute)) {
        setActiveRoute(hash as PageRoute);
      } else {
        setActiveRoute('home');
      }
    };

    // Initial check
    handleLocationChange();

    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  // Synchronize document title & meta tags for SEO per route requirement
  useEffect(() => {
    let pageTitle = 'Paradise Pearl Marquee Faisalabad | Elegant Event Venue';
    let metaDescription = 'Paradise Pearl Marquee Faisalabad - A beautiful and luxurious venue for weddings, receptions, engagements, and corporate events in Faisalabad, Pakistan.';

    switch (activeRoute) {
      case 'home':
        pageTitle = 'Paradise Pearl Marquee Faisalabad | Elegant Event Venue';
        metaDescription = 'Paradise Pearl Marquee Faisalabad - A beautiful and luxurious venue for weddings, receptions, engagements, and corporate events in Faisalabad, Pakistan.';
        break;
      case 'about':
        pageTitle = 'About Paradise Pearl Marquee Faisalabad';
        metaDescription = 'Learn about Paradise Pearl Marquee Faisalabad, our vision, capacity, and commitment to creating memorable event experiences.';
        break;
      case 'services':
        pageTitle = 'Events & Services | Paradise Pearl Marquee Faisalabad';
        metaDescription = 'Explore our event services for weddings, receptions, engagements, and corporate galas at Paradise Pearl Marquee Faisalabad.';
        break;
      case 'contact':
        pageTitle = 'Contact Paradise Pearl Marquee Faisalabad';
        metaDescription = 'Contact Paradise Pearl Marquee Faisalabad for hall availability, venue tours, and event booking. Phone: +92 328 8124444.';
        break;
    }

    document.title = pageTitle;

    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', metaDescription);
    }
  }, [activeRoute]);

  const navigateTo = (route: PageRoute) => {
    setActiveRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    } else {
      setPrefilledService('');
    }
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#292524] font-sans antialiased">
      {/* Sticky Top Navigation Bar */}
      <Navbar
        activeRoute={activeRoute}
        onNavigate={navigateTo}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page View Routing */}
      <main className="flex-1">
        {activeRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
            onOpenGalleryItem={(item) => setLightboxItem(item)}
          />
        )}

        {activeRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeRoute === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeRoute === 'contact' && <ContactPage />}
      </main>

      {/* Shared Footer across all 4 pages */}
      <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} />

      {/* Lightbox Modal for Gallery Photos */}
      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        prefilledEventType={prefilledService}
      />
    </div>
  );
}
