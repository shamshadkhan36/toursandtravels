import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO, generateWhatsAppLink } from '../../data/companyInfo';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const MobileBottomBar: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-navy-dark/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
      {/* WhatsApp Button */}
      <a
        href={generateWhatsAppLink('Hi ShamshadCodes Tours & Travel! I would like to inquire about a tour package.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-2 rounded-xl transition shadow-sm"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 active:bg-white/20 text-white font-semibold text-xs py-2.5 px-2 rounded-xl border border-white/15 transition"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>Call Now</span>
      </a>

      {/* Get Quote CTA */}
      <button
        onClick={() => openQuoteModal()}
        className="flex-1 flex items-center justify-center gap-1.5 bg-brand-accent active:bg-brand-accent-hover text-brand-navy font-bold text-xs py-2.5 px-2 rounded-xl transition shadow-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
        <span>Get Quote</span>
      </button>
    </div>
  );
};
