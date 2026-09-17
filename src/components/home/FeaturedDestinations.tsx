import React from 'react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinations';
import { useNavigation } from '../../context/NavigationContext';
import { useCurrency } from '../../context/CurrencyContext';

export const FeaturedDestinations: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { formatPrice } = useCurrency();

  return (
    <section className="py-16 sm:py-24 bg-brand-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Handpicked Locations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
              Explore Popular Destinations
            </h2>
            <p className="mt-2 text-base text-brand-slate-700 max-w-xl">
              From snow-capped Himalayan peaks to sun-kissed tropical islands and vibrant metropolises.
            </p>
          </div>

          <button
            onClick={() => navigateTo('destinations')}
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl transition shadow-md self-start md:self-auto group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              onClick={() => navigateTo('packages', { destination: dest.name })}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent"></div>
              
              {/* Region Pill */}
              <div className="absolute top-4 left-4">
                <span className="bg-brand-navy-dark/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20">
                  {dest.region}
                </span>
              </div>

              {/* Starting Price Pill */}
              <div className="absolute top-4 right-4 bg-brand-accent text-brand-navy text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                From {formatPrice(dest.startingPriceINR)}
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-1.5 text-xs text-teal-300 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.country}</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-teal-200 transition-colors">
                  {dest.name}
                </h3>

                <p className="text-xs text-brand-slate-200 mt-1.5 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                {/* Explore Link */}
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-teal-300 group-hover:text-white transition-colors">
                  <span>Explore Destination</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-brand-teal flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
