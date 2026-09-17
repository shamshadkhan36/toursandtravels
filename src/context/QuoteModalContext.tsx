import React, { createContext, useContext, useState } from 'react';
import type { Package } from '../types';

interface QuoteModalContextType {
  isOpen: boolean;
  selectedPackage: Package | null;
  initialDestination: string;
  openQuoteModal: (pkg?: Package | null, destination?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [initialDestination, setInitialDestination] = useState<string>('');

  const openQuoteModal = (pkg: Package | null = null, destination: string = '') => {
    setSelectedPackage(pkg);
    setInitialDestination(destination || (pkg ? pkg.destination : ''));
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setSelectedPackage(null);
    setInitialDestination('');
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        selectedPackage,
        initialDestination,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
