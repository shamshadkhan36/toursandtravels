import React from 'react';
import { Compass, Hotel, Plane, Car, FileCheck, Navigation, Users, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { useNavigation } from '../../context/NavigationContext';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const TravelServices: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();

  // Map icon name to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Hotel': return Hotel;
      case 'Plane': return Plane;
      case 'Car': return Car;
      case 'FileCheck': return FileCheck;
      case 'Navigation': return Navigation;
      case 'Users': return Users;
      case 'Sparkles': return Sparkles;
      default: return Compass;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> End-to-End Travel Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
              Everything You Need For Your Journey
            </h2>
            <p className="mt-2 text-base text-brand-slate-700 max-w-xl">
              From hotel bookings and private transfers to visa processing and tailor-made holidays.
            </p>
          </div>

          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition shadow-md self-start md:self-auto group"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((svc) => {
            const Icon = getIcon(svc.iconName);
            return (
              <div
                key={svc.id}
                onClick={() => openQuoteModal()}
                className="group bg-brand-slate-50 hover:bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-brand-slate-200/80 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 group-hover:bg-brand-teal text-brand-teal group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-slate-700 leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-brand-slate-100">
                  {svc.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="text-[11px] text-brand-slate-700 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
