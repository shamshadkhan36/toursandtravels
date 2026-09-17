import React from 'react';
import { Sparkles, Hotel, ShieldCheck, Headphones, Car, CheckCircle2, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Customised Itineraries',
      desc: 'No cookie-cutter tours. Every single itinerary is personalized around your pace, preferences, group size, and budget.',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      icon: Hotel,
      title: 'Handpicked Hotels',
      desc: 'We personally verify 3★, 4★, 5★ properties, private villas, and boutique havelis for hygiene, location, and hospitality.',
      color: 'text-teal-600 bg-teal-50 border-teal-200',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Pricing',
      desc: 'All quotations are itemized clearly with taxes, transfers, and inclusions. Zero hidden charges or surprise destination fees.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Headphones,
      title: 'Dedicated Travel Support',
      desc: 'From the moment you arrive until your safe return, your dedicated on-call concierge is available 24/7 on WhatsApp & phone.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    },
    {
      icon: Car,
      title: 'Comfortable Transportation',
      desc: 'Travel safely in sanitized, private AC sedans, SUVs, or luxury tempo travellers driven by polite, experienced chauffeurs.',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: CheckCircle2,
      title: 'Hassle-Free Planning',
      desc: 'We manage everything — hotel reservations, airport pickups, monument tickets, and visa assistance — so you just relax and travel.',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" /> Why ShamshadCodes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Travel With Confidence
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We focus on reliability, authentic experiences, and complete peace of mind for every journey.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-teal-600">
                  <span>✓ 100% Quality Assurance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
