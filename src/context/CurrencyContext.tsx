import React, { createContext, useContext, useState } from 'react';
import type { Currency, CurrencyRate } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (inrAmount: number) => string;
  rates: Record<Currency, CurrencyRate>;
}

const RATES: Record<Currency, CurrencyRate> = {
  INR: { code: 'INR', symbol: '₹', rateFromINR: 1, label: 'INR (₹)' },
  USD: { code: 'USD', symbol: '$', rateFromINR: 0.012, label: 'USD ($)' },
  AED: { code: 'AED', symbol: 'AED ', rateFromINR: 0.044, label: 'AED (د.إ)' },
  EUR: { code: 'EUR', symbol: '€', rateFromINR: 0.011, label: 'EUR (€)' },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('shamshad_travel_currency');
    return (saved as Currency) || 'INR';
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('shamshad_travel_currency', c);
  };

  const formatPrice = (inrAmount: number): string => {
    const rateInfo = RATES[currency];
    const converted = Math.round(inrAmount * rateInfo.rateFromINR);
    
    if (currency === 'INR') {
      return `${rateInfo.symbol}${converted.toLocaleString('en-IN')}`;
    }
    return `${rateInfo.symbol}${converted.toLocaleString('en-US')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, rates: RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
