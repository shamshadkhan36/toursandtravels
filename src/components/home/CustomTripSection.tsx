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
    },
    {
      step: '02',
      title: 'Receive Your Travel Plan',
      desc: 'Our destination experts share a detailed day-by-day customized itinerary with hotel options & transparent price.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Confirm Your Trip',
      desc: 'Fine-tune the itinerary if needed and secure your booking with a nominal token advance.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light text-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, text & CTA */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold text-teal-200 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-brand-accent" />
              <span>Tailor-Made Holidays</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight">
              Have a Destination in Mind?
            </h2>

            <p className="text-base sm:text-lg text-brand-slate-200 leading-relaxed">
              Tell us where you want to go, your budget and travel preferences. Our team will help create a trip around your requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigateTo('enquiry')}
                className="bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-glow-accent hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-brand-navy" />
                <span>Build My Trip</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl border border-white/20 transition"
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
                  className="glass-card-dark p-6 sm:p-7 rounded-3xl border border-white/15 relative flex flex-col justify-between hover:border-brand-teal transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-200">
                        {s.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-teal-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-brand-slate-200 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-teal-200 font-medium">
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
