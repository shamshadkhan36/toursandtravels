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

  const navLinks: { label: string; page: PageView; color: string }[] = [
    { label: 'Home', page: 'home', color: 'from-teal-500 to-emerald-500' },
    { label: 'Tour Packages', page: 'packages', color: 'from-cyan-500 to-blue-500' },
    { label: 'Destinations', page: 'destinations', color: 'from-purple-500 to-pink-500' },
    { label: 'Services', page: 'services', color: 'from-amber-500 to-orange-500' },
    { label: 'About Us', page: 'about', color: 'from-emerald-500 to-teal-500' },
    { label: 'Contact', page: 'contact', color: 'from-rose-500 to-red-500' },
  ];

  const handleNavClick = (page: PageView) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Colorful Micro Announcement Bar */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white text-[11px] sm:text-xs py-2 px-4 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></span>
              ✨ Plan Your Dream Vacation • 100% Customised Itineraries & Transparent Pricing
            </span>
            <span className="text-white/40">•</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hover:text-amber-200 transition flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-amber-300" /> {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={generateWhatsAppLink('Hi ShamshadCodes! I would like to plan a holiday trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-3 py-0.5 rounded-full text-xs transition flex items-center gap-1.5 font-bold shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              WhatsApp Specialist
            </a>
            
            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold transition"
              >
                <Globe className="w-3 h-3 text-amber-200" />
                <span>{rates[currency].label}</span>
                <ChevronDown className="w-3 h-3 text-white/80" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-white border border-slate-200 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in">
                  {(Object.keys(rates) as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs hover:bg-teal-50 hover:text-teal-700 transition flex items-center justify-between font-medium ${
                        currency === c ? 'text-teal-600 font-bold bg-teal-50/60' : 'text-slate-700'
                      }`}
                    >
                      <span>{rates[c].label}</span>
                      <span className="font-bold text-slate-900">{rates[c].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky White Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-white shadow-md py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Colorful Vibrant Icon */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-500 via-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <div className="font-display font-black text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                SHAMSHAD<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600">CODES</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-teal-700 uppercase mt-0.5 flex items-center gap-1">
                <span>Tours & Travel</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/70">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-teal-600 to-cyan-600 shadow-md font-bold'
                      : 'text-slate-700 hover:text-teal-700 hover:bg-white'
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
              className="hidden xl:flex items-center gap-1.5 text-xs text-slate-700 hover:text-teal-700 bg-slate-50 hover:bg-slate-100 px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Primary Colorful CTA */}
            <button
              onClick={() => openQuoteModal()}
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-glow-accent hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '8s' }} />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Actions & Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="sm:hidden bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-sm"
            >
              Free Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Crisp White Theme) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white/98 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div className="font-display font-black text-base text-slate-900">
                SHAMSHAD<span className="text-teal-600">CODES</span>
                <span className="block text-[10px] text-slate-500 font-semibold uppercase">Tours & Travel</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-xl bg-slate-100 border border-slate-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2.5">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-2xl text-base font-bold transition flex items-center justify-between ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                    : 'text-slate-800 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-70">➔</span>
              </button>
            ))}

            {/* Currency selector on mobile */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700 block mb-2">Display Currency:</label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(rates) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border text-center transition ${
                      currency === c
                        ? 'bg-teal-600 border-teal-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
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
                className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Sparkles className="w-4 h-4" /> Get Free Quote
              </button>

              <a
                href={generateWhatsAppLink('Hi ShamshadCodes! I want to plan a trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 text-sm transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Specialist
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-2xl border border-slate-200 flex items-center justify-center gap-2 text-sm transition"
              >
                <Phone className="w-4 h-4 text-teal-600" /> Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
