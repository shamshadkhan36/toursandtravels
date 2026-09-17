import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageView =
  | 'home'
  | 'packages'
  | 'package-detail'
  | 'destinations'
  | 'services'
  | 'about'
  | 'contact'
  | 'enquiry';

interface NavigationContextType {
  currentPage: PageView;
  selectedPackageId: string | null;
  selectedCategory: string | null;
  selectedDestinationFilter: string | null;
  navigateTo: (
    page: PageView,
    params?: {
      packageId?: string;
      category?: string;
      destination?: string;
    }
  ) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDestinationFilter, setSelectedDestinationFilter] = useState<string | null>(null);

  // Sync with browser history and URL paths
  const parseUrl = () => {
    const path = window.location.pathname;
    const hash = window.location.hash.replace('#', '');
    const searchParams = new URLSearchParams(window.location.search);

    const pkgParam = searchParams.get('packageId') || (path.startsWith('/package/') ? path.split('/package/')[1] : null);
    const catParam = searchParams.get('category');
    const destParam = searchParams.get('destination');

    if (pkgParam) {
      setCurrentPage('package-detail');
      setSelectedPackageId(pkgParam);
      return;
    }

    if (path === '/packages' || hash === 'packages') {
      setCurrentPage('packages');
      if (catParam) setSelectedCategory(catParam);
      if (destParam) setSelectedDestinationFilter(destParam);
    } else if (path === '/destinations' || hash === 'destinations') {
      setCurrentPage('destinations');
    } else if (path === '/services' || hash === 'services') {
      setCurrentPage('services');
    } else if (path === '/about' || hash === 'about') {
      setCurrentPage('about');
    } else if (path === '/contact' || hash === 'contact') {
      setCurrentPage('contact');
    } else if (path === '/enquiry' || path === '/get-quote' || hash === 'enquiry') {
      setCurrentPage('enquiry');
    } else {
      setCurrentPage('home');
    }
  };

  useEffect(() => {
    parseUrl();
    const handlePopState = () => parseUrl();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (
    page: PageView,
    params?: {
      packageId?: string;
      category?: string;
      destination?: string;
    }
  ) => {
    setCurrentPage(page);
    setSelectedPackageId(params?.packageId || null);
    setSelectedCategory(params?.category || null);
    setSelectedDestinationFilter(params?.destination || null);

    let newPath = '/';
    const query = new URLSearchParams();

    if (page === 'package-detail' && params?.packageId) {
      newPath = `/package/${params.packageId}`;
    } else if (page === 'packages') {
      newPath = '/packages';
      if (params?.category) query.set('category', params.category);
      if (params?.destination) query.set('destination', params.destination);
    } else if (page === 'destinations') {
      newPath = '/destinations';
    } else if (page === 'services') {
      newPath = '/services';
    } else if (page === 'about') {
      newPath = '/about';
    } else if (page === 'contact') {
      newPath = '/contact';
    } else if (page === 'enquiry') {
      newPath = '/enquiry';
      if (params?.destination) query.set('destination', params.destination);
    }

    const fullUrl = query.toString() ? `${newPath}?${query.toString()}` : newPath;
    window.history.pushState({ page, params }, '', fullUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        selectedPackageId,
        selectedCategory,
        selectedDestinationFilter,
        navigateTo,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
