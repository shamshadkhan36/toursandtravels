import React from 'react';
import { Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { generateWhatsAppLink, COMPANY_INFO } from '../../data/companyInfo';

export const FinalCtaBanner: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-light text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=80"
          alt="Travel adventure landscape"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy/85 to-brand-navy-dark/95"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold text-teal-200 shadow-lg">
          <Sparkles className="w-4 h-4 text-brand-accent" />
          <span>Start Planning Today • Zero Obligation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-tight">
          Your Next Adventure{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-300 to-amber-200">
            Starts Here.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-brand-slate-200 max-w-2xl mx-auto leading-relaxed">
          Tell us where you want to go and we'll help you plan the journey with curated stays, private transfers, and 24/7 on-trip assistance.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => openQuoteModal()}
            className="bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-extrabold text-base sm:text-lg px-9 py-4 rounded-2xl shadow-glow-accent hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-brand-navy" />
            <span>Get Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={generateWhatsAppLink('Hi ShamshadCodes Tours & Travel! I would like to plan a custom tour.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
          >
            <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Phone Click-to-Call */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-slate-300">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="hover:text-white transition flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10"
          >
            <Phone className="w-4 h-4 text-brand-teal" />
            <span>Or call us directly: <strong>{COMPANY_INFO.phone}</strong></span>
          </a>
          <span className="flex items-center gap-1.5 text-teal-300">
            <ShieldCheck className="w-4 h-4" /> 100% Free Customised Itinerary
          </span>
        </div>
      </div>
    </section>
  );
};
