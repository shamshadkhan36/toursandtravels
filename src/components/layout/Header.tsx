import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles, Globe, Compass, ChevronDown } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import type { PageView } from '../../context/NavigationContext';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { useCurrency } from '../../context/CurrencyContext';
import { COMPANY_INFO, generateWhatsAppLink } from '../../data/companyInfo';
import type { Currency } from '../../types';

export const Header: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();
  const { currency, setCurrency, rates } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Tour Packages', page: 'packages' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Services', page: 'services' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-brand-navy-dark text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-brand-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              24/7 Customised Tour Planning & Assistance
            </span>
            <span className="text-white/20">•</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hover:text-white transition flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-teal" /> {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={generateWhatsAppLink('Hi ShamshadCodes! I would like to plan a holiday trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-brand-navy-dark" />
              WhatsApp Support
            </a>
            
            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded text-xs transition"
              >
                <Globe className="w-3 h-3 text-brand-teal" />
                <span>{rates[currency].label}</span>
                <ChevronDown className="w-3 h-3 text-brand-slate-300" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-brand-navy-card border border-white/15 rounded-xl shadow-xl py-1 z-50 animate-in fade-in">
                  {(Object.keys(rates) as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-brand-teal hover:text-white transition flex items-center justify-between ${
                        currency === c ? 'text-brand-teal font-bold' : 'text-brand-slate-200'
                      }`}
                    >
                      <span>{rates[c].label}</span>
                      <span>{rates[c].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-xl border-b border-white/10 py-3'
            : 'bg-brand-navy/95 border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-teal to-brand-cyan flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                SHAMSHAD<span className="text-brand-teal">CODES</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-brand-slate-300 uppercase">
                Tours & Travel
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm font-semibold'
                      : 'text-brand-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-brand-slate-200 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 transition"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Primary CTA */}
            <button
              onClick={() => openQuoteModal()}
              className="bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-glow-accent hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-brand-navy" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="sm:hidden bg-brand-accent text-brand-navy font-bold text-xs px-3 py-1.5 rounded-lg"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-brand-navy-dark/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-teal flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div className="font-display font-bold text-base text-white">
                SHAMSHAD<span className="text-brand-teal">CODES</span>
                <span className="block text-[10px] text-brand-slate-300 font-normal">Tours & Travel</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white p-2 rounded-xl bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-base font-semibold transition ${
                  currentPage === item.page
                    ? 'bg-brand-teal text-white shadow-lg'
                    : 'text-brand-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Currency selector on mobile */}
            <div className="pt-4 border-t border-white/10">
              <label className="text-xs font-semibold text-brand-slate-300 block mb-2">Select Display Currency:</label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(rates) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border text-center transition ${
                      currency === c
                        ? 'bg-brand-teal border-brand-teal text-white font-bold'
                        : 'bg-white/5 border-white/10 text-brand-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {rates[c].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contact & Support CTAs */}
            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full bg-brand-accent text-brand-navy font-bold py-3.5 px-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <Sparkles className="w-4 h-4" /> Get Free Quote
              </button>

              <a
                href={generateWhatsAppLink('Hi ShamshadCodes! I want to plan a trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 text-sm transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Us
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-4 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-sm transition"
              >
                <Phone className="w-4 h-4" /> Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
