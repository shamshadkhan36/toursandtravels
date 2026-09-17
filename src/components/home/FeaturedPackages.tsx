import React from 'react';
import { Clock, Star, CheckCircle, ArrowRight, Sparkles, MapPin, Eye } from 'lucide-react';
import { PACKAGES_DATA } from '../../data/packages';
import { useNavigation } from '../../context/NavigationContext';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { useCurrency } from '../../context/CurrencyContext';

export const FeaturedPackages: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();
  const { formatPrice } = useCurrency();

  const featured = PACKAGES_DATA.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Best-Selling Itineraries
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
              Popular Tour Packages
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Thoughtfully curated holiday packages with verified stays, transfers, and complete travel support.
            </p>
          </div>

          <button
            onClick={() => navigateTo('packages')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-2xl transition shadow-md self-start md:self-auto group"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-200 flex flex-col justify-between"
            >
              {/* Card Header & Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.heroImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 border border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>{pkg.duration.nights}N / {pkg.duration.days}D</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-xl shadow-md flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                  <span>{pkg.rating}</span>
                </div>

                {/* Destination Name Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm font-bold">
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span>{pkg.destination}, {pkg.country}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => navigateTo('package-detail', { packageId: pkg.id })}
                    className="text-xl font-bold font-display text-slate-900 group-hover:text-teal-600 transition-colors cursor-pointer line-clamp-1"
                  >
                    {pkg.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                {/* Key Inclusions snippet */}
                <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Inclusions Highlight:
                  </div>
                  <ul className="space-y-1">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Area */}
                <div className="pt-2 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold">Starting from</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black font-display text-slate-900">
                        {formatPrice(pkg.priceINR)}
                      </span>
                      <span className="text-[11px] text-slate-500">/ person</span>
                    </div>
                  </div>
                  {pkg.originalPriceINR && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatPrice(pkg.originalPriceINR)}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => navigateTo('package-detail', { packageId: pkg.id })}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-slate-600" />
                    <span>View Package</span>
                  </button>

                  <button
                    onClick={() => openQuoteModal(pkg)}
                    className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs sm:text-sm font-extrabold py-2.5 px-3 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
