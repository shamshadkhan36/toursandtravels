import React, { useState } from 'react';
import { MapPin, Sun, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinations';
import { useNavigation } from '../context/NavigationContext';
import { useCurrency } from '../context/CurrencyContext';

export const DestinationsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'India', 'International', 'Honeymoon', 'Family', 'Adventure', 'Beach'];

  const filteredDestinations = activeTab === 'All'
    ? DESTINATIONS_DATA
    : DESTINATIONS_DATA.filter((d) => d.category.includes(activeTab) || d.region === activeTab);

  return (
    <div className="min-h-screen bg-brand-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Destination Explorer
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Explore Handpicked Destinations
          </h1>
          <p className="mt-3 text-base text-brand-slate-700">
            From the tranquil valleys of Kashmir to the futuristic skyline of Dubai and tropical beaches of Bali.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition ${
                  activeTab === tab
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-white text-brand-slate-700 hover:bg-brand-slate-100 border border-brand-slate-200'
                }`}
              >
                {tab === 'All' ? 'All Destinations' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => navigateTo('packages', { destination: dest.name })}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-brand-slate-200/80 cursor-pointer flex flex-col justify-between"
            >
              {/* Image with Region & Price Pill */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-brand-navy/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {dest.region}
                </div>

                <div className="absolute top-4 right-4 bg-brand-accent text-brand-navy text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  From {formatPrice(dest.startingPriceINR)}
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold text-teal-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {dest.country}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-brand-slate-700 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Travel Highlights & Season */}
                  <div className="mt-4 space-y-2 bg-brand-slate-50 p-3.5 rounded-2xl border border-brand-slate-100 text-xs text-brand-slate-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                      <span><strong>Best Time:</strong> {dest.bestTimeToVisit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span><strong>Weather:</strong> {dest.weatherAvg}</span>
                    </div>
                  </div>

                  {/* Popular spots pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {dest.popularSpots.map((spot, i) => (
                      <span key={i} className="text-[11px] bg-brand-slate-100 text-brand-slate-700 px-2.5 py-0.5 rounded-md">
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-brand-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-teal group-hover:text-brand-teal-hover flex items-center gap-1">
                    View Available Packages
                  </span>
                  <div className="w-8 h-8 rounded-full bg-teal-50 group-hover:bg-brand-teal text-brand-teal group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
