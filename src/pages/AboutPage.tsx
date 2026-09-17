import React from 'react';
import { Compass, ShieldCheck, Heart, Users, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { useNavigation } from '../context/NavigationContext';
import { useQuoteModal } from '../context/QuoteModalContext';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();

  const values = [
    {
      title: 'Customer-First Approach',
      desc: 'We prioritize your safety, comfort, and satisfaction above everything else. Every itinerary is crafted as if we were traveling ourselves.',
      icon: Heart,
    },
    {
      title: 'Transparent Pricing',
      desc: 'No hidden taxes, surprise driver allowances, or unmentioned entry fees. You get clear itemized invoices upfront.',
      icon: ShieldCheck,
    },
    {
      title: 'Verified Accommodations',
      desc: 'We only partner with handpicked hotels, boutique resorts, and houseboats that consistently receive top hygiene and hospitality reviews.',
      icon: Award,
    },
    {
      title: '24/7 On-Trip Assistance',
      desc: 'Our dedicated travel concierge is always accessible via WhatsApp and direct call to solve any on-ground requirement promptly.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" /> About ShamshadCodes Tours & Travel
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Making Travel Planning Simpler, One Journey at a Time
          </h1>
          <p className="mt-3 text-base sm:text-lg text-brand-slate-700 leading-relaxed">
            We are a modern travel planning company dedicated to turning your dream holidays into seamless, authentic, and unforgettable realities.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-brand-slate-200/80 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
                Who We Are & What We Believe
              </h2>
              <p className="text-sm sm:text-base text-brand-slate-700 leading-relaxed">
                Founded with a passion for genuine exploration and reliable travel logistics, <strong>ShamshadCodes Tours & Travel</strong> was built to eliminate the stress, confusion, and hidden fees often associated with booking holiday packages.
              </p>
              <p className="text-sm sm:text-base text-brand-slate-700 leading-relaxed">
                Whether it's a romantic Kashmir houseboat getaway, an action-packed family vacation in Dubai, a serene backwaters retreat in Kerala, or an exotic honeymoon in Bali, we curate every journey with meticulous attention to detail.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-brand-navy">
                <span className="flex items-center gap-1 bg-teal-50 text-brand-teal px-3 py-1.5 rounded-xl">
                  ✓ Curated Domestic & International Tours
                </span>
                <span className="flex items-center gap-1 bg-teal-50 text-brand-teal px-3 py-1.5 rounded-xl">
                  ✓ Personalised 1-on-1 Itinerary Planning
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                  alt="Travel planning and exploration"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-navy text-white p-4 rounded-2xl shadow-xl border border-white/10 text-center">
                <div className="text-2xl font-black font-display text-brand-accent">100%</div>
                <div className="text-[11px] text-teal-200 font-medium">Personalised Plans</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars / Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate-700 mt-2">
              The four commitments that guide every itinerary we plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-brand-slate-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-brand-navy mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-slate-700 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-brand-navy text-white p-6 rounded-3xl text-center border border-white/10 shadow-lg">
              <div className="text-3xl sm:text-4xl font-black font-display text-brand-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-brand-slate-300">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* CTA Contact Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-brand-slate-200/80 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
            Ready to Plan Your Next Journey With Us?
          </h2>
          <p className="text-sm text-brand-slate-700 max-w-xl mx-auto">
            Speak directly with our friendly travel specialists or request a free customized itinerary today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-navy font-bold text-sm px-8 py-3.5 rounded-2xl shadow-md transition"
            >
              Get Free Quotation
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm px-7 py-3.5 rounded-2xl transition"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
