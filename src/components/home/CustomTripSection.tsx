import React from 'react';
import { Send, FileText, CheckCircle2, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const CustomTripSection: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();

  const steps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      desc: 'Tell us where you want to go, your preferred dates, budget range, and special preferences.',
      icon: Send,
      badgeColor: 'from-cyan-500 to-blue-600',
      iconColor: 'bg-cyan-50 text-cyan-600',
    },
    {
      step: '02',
      title: 'Receive Your Travel Plan',
      desc: 'Our destination experts share a detailed day-by-day customized itinerary with hotel options & transparent price.',
      icon: FileText,
      badgeColor: 'from-amber-500 to-orange-600',
      iconColor: 'bg-amber-50 text-amber-600',
    },
    {
      step: '03',
      title: 'Confirm Your Trip',
      desc: 'Fine-tune the itinerary if needed and secure your booking with a nominal token advance.',
      icon: CheckCircle2,
      badgeColor: 'from-emerald-500 to-teal-600',
      iconColor: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50/80 via-white to-amber-50/60 relative overflow-hidden border-y border-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, text & CTA */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              <span>Tailor-Made Holidays</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
              Have a Destination in Mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us where you want to go, your budget and travel preferences. Our team will help create a trip around your requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigateTo('enquiry')}
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-glow-accent hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Build My Trip</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition"
              >
                Quick Consultation
              </button>
            </div>
          </div>

          {/* Right Column: 3-Step Process Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm relative flex flex-col justify-between hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r ${s.badgeColor}`}>
                        {s.step}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl ${s.iconColor} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-teal-700 font-bold">
                    Step {idx + 1} of 3
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
