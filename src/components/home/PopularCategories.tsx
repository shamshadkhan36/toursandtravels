import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TOUR_CATEGORIES } from '../../data/destinations';
import { useNavigation } from '../../context/NavigationContext';

export const PopularCategories: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Curated Travel Categories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Find Your Perfect Getaway
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-slate-700">
            Travel experiences designed for every kind of traveller.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOUR_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo('packages', { category: cat.name })}
              className="group relative bg-brand-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-brand-slate-200/80 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {cat.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold font-display text-brand-navy group-hover:text-brand-teal transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-slate-700 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-brand-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-teal group-hover:text-brand-teal-hover flex items-center gap-1">
                    Explore Tours
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
    </section>
  );
};
