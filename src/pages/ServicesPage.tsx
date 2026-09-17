import React from 'react';
import { Compass, Hotel, Plane, Car, FileCheck, Navigation, Users, Sparkles, Check, MessageCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { useQuoteModal } from '../context/QuoteModalContext';
import { generateWhatsAppLink } from '../data/companyInfo';

export const ServicesPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

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
    <div className="min-h-screen bg-brand-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Full-Service Travel Agency
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Our Travel Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-brand-slate-700">
            Comprehensive, transparent, and seamless travel logistics crafted to make your journey effortless.
          </p>
        </div>

        {/* 8 Services Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES_DATA.map((svc) => {
            const Icon = getIcon(svc.iconName);
            return (
              <div
                key={svc.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-brand-navy">
                        {svc.title}
                      </h3>
                      <span className="text-xs text-brand-teal font-medium">Verified Quality Guarantee</span>
                    </div>
                  </div>

                  <p className="text-sm text-brand-slate-700 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2 bg-brand-slate-50 p-4 rounded-2xl border border-brand-slate-100">
                    <div className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                      What's Included:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.features.map((feat, i) => (
                        <div key={i} className="text-xs text-brand-slate-700 flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openQuoteModal()}
                    className="text-xs font-bold text-brand-teal hover:text-brand-teal-hover flex items-center gap-1"
                  >
                    <span>Inquire About This Service</span>
                  </button>

                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold px-4 py-2 rounded-xl transition shadow-sm"
                  >
                    Request Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy-light text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            Need a Combined Flight + Hotel + Visa Package?
          </h2>
          <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto">
            Our team bundles flights, boutique accommodations, private cabs, and visa clearance into a single discounted package.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-navy font-bold text-sm px-8 py-3.5 rounded-2xl shadow-lg transition"
            >
              Get Custom Package Quote
            </button>
            <a
              href={generateWhatsAppLink('Hi ShamshadCodes! I need a custom package with flights, hotels and visa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl border border-white/20 transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
