import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TOUR_CATEGORIES } from '../../data/destinations';
import { useNavigation } from '../../context/NavigationContext';

export const PopularCategories: React.FC = () => {
  const { navigateTo } = useNavigation();

  const categoryColors: Record<string, { badge: string; border: string; btn: string }> = {
    'family-holidays': { badge: 'bg-emerald-500 text-white', border: 'hover:border-emerald-300', btn: 'text-emerald-600 group-hover:bg-emerald-500' },
    'honeymoon-packages': { badge: 'bg-rose-500 text-white', border: 'hover:border-rose-300', btn: 'text-rose-600 group-hover:bg-rose-500' },
    'international-tours': { badge: 'bg-cyan-500 text-white', border: 'hover:border-cyan-300', btn: 'text-cyan-600 group-hover:bg-cyan-500' },
    'domestic-tours': { badge: 'bg-amber-500 text-white', border: 'hover:border-amber-300', btn: 'text-amber-600 group-hover:bg-amber-500' },
    'weekend-getaways': { badge: 'bg-purple-500 text-white', border: 'hover:border-purple-300', btn: 'text-purple-600 group-hover:bg-purple-500' },
    'group-tours': { badge: 'bg-indigo-500 text-white', border: 'hover:border-indigo-300', btn: 'text-indigo-600 group-hover:bg-indigo-500' },
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Curated Travel Categories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Find Your Perfect Getaway
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Travel experiences designed for every kind of traveller.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOUR_CATEGORIES.map((cat) => {
            const colors = categoryColors[cat.id] || { badge: 'bg-teal-500 text-white', border: 'hover:border-teal-300', btn: 'text-teal-600 group-hover:bg-teal-500' };
            return (
              <div
                key={cat.id}
                onClick={() => navigateTo('packages', { category: cat.name })}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-200 cursor-pointer flex flex-col ${colors.border}`}
              >
                {/* Image Container with Zoom */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-black/20 to-transparent"></div>
                  
                  {/* Colorful Badge */}
                  <div className={`absolute top-4 left-4 ${colors.badge} text-xs font-bold px-3.5 py-1 rounded-full shadow-md`}>
                    {cat.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-teal-600 transition-colors flex items-center justify-between">
                      <span>{cat.name}</span>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-teal-600 flex items-center gap-1 transition-colors">
                      Explore Tours
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 ${colors.btn} group-hover:text-white flex items-center justify-center transition-colors shadow-sm`}>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
