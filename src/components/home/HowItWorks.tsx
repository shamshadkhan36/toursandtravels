import React from 'react';
import { MapPin, MessageSquareText, FileCheck2, PlaneTakeoff, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const HowItWorks: React.FC = () => {
  const { navigateTo } = useNavigation();

  const steps = [
    {
      step: '01',
      title: 'Choose Destination',
      desc: 'Browse our curated packages or tell us any dream destination worldwide.',
      icon: MapPin,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      step: '02',
      title: 'Tell Requirements',
      desc: 'Share travel dates, number of people, hotel comfort preference, and budget.',
      icon: MessageSquareText,
      gradient: 'from-teal-500 to-emerald-600',
    },
    {
      step: '03',
      title: 'Get Custom Quote',
      desc: 'Receive a detailed itemized itinerary with transparent pricing and no hidden costs.',
      icon: FileCheck2,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      step: '04',
      title: 'Start Your Journey',
      desc: 'Confirm with token advance and enjoy 24/7 on-trip concierge assistance throughout.',
      icon: PlaneTakeoff,
      gradient: 'from-rose-500 to-purple-600',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Booking your dream holiday has never been this seamless and transparent.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 via-amber-400 to-rose-400 -translate-y-12 z-0 rounded-full opacity-60"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Step badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-black font-display text-slate-300">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-teal-600">
                    <span>Phase 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('enquiry')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-glow-accent hover:shadow-xl transition transform active:scale-98"
          >
            <Sparkles className="w-4 h-4" /> Start Planning Now — It's Free
          </button>
        </div>
      </div>
    </section>
  );
};
