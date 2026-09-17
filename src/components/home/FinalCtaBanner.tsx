import React from 'react';
import { Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { generateWhatsAppLink, COMPANY_INFO } from '../../data/companyInfo';

export const FinalCtaBanner: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-teal-700 via-cyan-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=80"
          alt="Travel adventure landscape"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-cyan-900/80 to-indigo-950/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold text-teal-200 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Start Planning Today • Zero Obligation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight">
          Your Next Adventure{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300">
            Starts Here.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium">
          Tell us where you want to go and we'll help you plan the journey with curated stays, private transfers, and 24/7 on-trip assistance.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => openQuoteModal()}
            className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 hover:from-amber-500 hover:to-rose-600 text-slate-950 font-black text-base sm:text-lg px-9 py-4 rounded-2xl shadow-glow-accent hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Get Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={generateWhatsAppLink('Hi ShamshadCodes Tours & Travel! I would like to plan a custom tour.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 border border-emerald-300/40"
          >
            <MessageCircle className="w-6 h-6 fill-slate-950 text-emerald-500" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Phone Click-to-Call */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="hover:text-white transition flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 font-semibold"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Or call us directly: <strong>{COMPANY_INFO.phone}</strong></span>
          </a>
          <span className="flex items-center gap-1.5 text-teal-200 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-300" /> 100% Free Customised Itinerary
          </span>
        </div>
      </div>
    </section>
  );
};
