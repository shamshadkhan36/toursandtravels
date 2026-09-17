import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../../data/faqs';
import { generateWhatsAppLink } from '../../data/companyInfo';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Booking', 'Customization', 'Services', 'Payments', 'General'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS_DATA
    : FAQS_DATA.filter((item) => item.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Clear, transparent answers to help you plan your upcoming journey with confidence.
          </p>

          {/* Colorful Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`text-xs font-bold px-4 py-2 rounded-full transition ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-teal-50/40 border-teal-400 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-teal-600 text-white rotate-180 shadow-sm' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-teal-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Colorful Still have questions WhatsApp prompt */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-700 text-white p-6 sm:p-8 rounded-3xl text-center sm:flex items-center justify-between gap-6 shadow-xl">
          <div className="text-left mb-4 sm:mb-0">
            <h3 className="text-xl font-bold font-display">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-cyan-100 mt-1">
              Talk directly to our destination specialists on WhatsApp for instant clarification.
            </p>
          </div>
          <a
            href={generateWhatsAppLink('Hi ShamshadCodes! I have a few questions regarding holiday bookings.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
