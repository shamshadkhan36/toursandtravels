import React from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { ToastProvider } from './context/ToastContext';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { FloatingWhatsApp } from './components/conversion/FloatingWhatsApp';
import { ExitIntentModal } from './components/conversion/ExitIntentModal';
import { QuickQuoteModal } from './components/conversion/QuickQuoteModal';

import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryPage } from './pages/EnquiryPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-brand-slate-50 text-brand-navy font-sans antialiased selection:bg-brand-teal selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'packages' && <PackagesPage />}
        {currentPage === 'package-detail' && <PackageDetailPage />}
        {currentPage === 'destinations' && <DestinationsPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'enquiry' && <EnquiryPage />}
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Global Widgets & Modals */}
      <FloatingWhatsApp />
      <MobileBottomBar />
      <ExitIntentModal />
      <QuickQuoteModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <ToastProvider>
        <QuoteModalProvider>
          <NavigationProvider>
            <AppContent />
          </NavigationProvider>
        </QuoteModalProvider>
      </ToastProvider>
    </CurrencyProvider>
  );
};

export default App;
