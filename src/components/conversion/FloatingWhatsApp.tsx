import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/companyInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = customMsg.trim() || 'Hi ShamshadCodes Tours & Travel! I would like to plan a holiday trip.';
    window.open(generateWhatsAppLink(msg), '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  const quickPrompts = [
    'I want to plan a family holiday',
    'Looking for Kashmir honeymoon package',
    'Need custom quote for Dubai trip',
    'Looking for international tour packages',
  ];

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-brand-slate-200 overflow-hidden transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-teal p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white border border-white/30">
                  SC
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-brand-navy rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">ShamshadCodes Travel Desk</h4>
                <p className="text-xs text-teal-100 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Typically replies within 10 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-brand-slate-50 space-y-3">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none text-xs sm:text-sm text-brand-slate-700 shadow-sm border border-brand-slate-100">
              <p className="font-medium text-brand-navy mb-1">Hello traveler! 👋</p>
              <p>Where are you looking to travel next? Let us know your destination and dates for an instant free quote.</p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-brand-slate-700 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-teal" /> Quick Inquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      window.open(generateWhatsAppLink(prompt), '_blank');
                      setIsOpen(false);
                    }}
                    className="text-xs bg-white hover:bg-brand-teal hover:text-white text-brand-slate-700 px-3 py-1.5 rounded-full border border-brand-slate-200 transition text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input form */}
            <form onSubmit={handleSend} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message or destination..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-white border border-brand-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-teal"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl transition flex-shrink-0 shadow-md"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-brand-slate-200 text-xs font-semibold text-brand-navy gap-1.5 animate-bounce">
            <span>💬 Chat with a Travel Expert</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group focus:outline-none"
          aria-label="WhatsApp Us"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40"></span>
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-white text-emerald-500" />
        </button>
      </div>
    </div>
  );
};
