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
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-slate-700">
            Clear, transparent answers to help you plan your upcoming journey with confidence.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-brand-slate-100 text-brand-slate-700 hover:bg-brand-slate-200'
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
                    ? 'bg-brand-slate-50 border-brand-teal/40 shadow-md'
                    : 'bg-white border-brand-slate-200 hover:border-brand-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-brand-navy font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-brand-teal text-white rotate-180' : 'bg-brand-slate-100 text-brand-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-brand-slate-700 leading-relaxed border-t border-brand-slate-200/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp prompt */}
        <div className="mt-12 bg-gradient-to-r from-brand-navy to-brand-teal text-white p-6 sm:p-8 rounded-3xl text-center sm:flex items-center justify-between gap-6 shadow-xl">
          <div className="text-left mb-4 sm:mb-0">
            <h3 className="text-xl font-bold font-display">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              Talk directly to our destination specialists on WhatsApp for instant clarification.
            </p>
          </div>
          <a
            href={generateWhatsAppLink('Hi ShamshadCodes! I have a few questions regarding holiday bookings.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
