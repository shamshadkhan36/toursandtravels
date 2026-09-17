import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MapPin, Clock, Star, CheckCircle, Eye, Sparkles, X, RotateCcw } from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';
import { useNavigation } from '../context/NavigationContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { useCurrency } from '../context/CurrencyContext';

export const PackagesPage: React.FC = () => {
  const { selectedCategory, selectedDestinationFilter, navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();
  const { formatPrice } = useCurrency();

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [destinationFilter, setDestinationFilter] = useState(selectedDestinationFilter || 'All');
  const [durationFilter, setDurationFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState(selectedCategory || 'All');
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Available unique destinations and categories
  const destinationsList = ['All', 'Kashmir', 'Dubai', 'Kerala', 'Goa', 'Bali', 'Maldives', 'Singapore', 'Rajasthan'];
  const categoriesList = ['All', 'Honeymoon', 'Family', 'Domestic', 'International', 'Weekend', 'Luxury', 'Group'];

  // Filtering logic
  const filteredPackages = useMemo(() => {
    return PACKAGES_DATA.filter((pkg) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesDest = pkg.destination.toLowerCase().includes(query);
        const matchesCountry = pkg.country.toLowerCase().includes(query);
        const matchesOverview = pkg.overview.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDest && !matchesCountry && !matchesOverview) {
          return false;
        }
      }

      // Destination filter
      if (destinationFilter !== 'All' && pkg.destination !== destinationFilter) {
        return false;
      }

      // Duration filter
      if (durationFilter === 'short' && pkg.duration.days > 4) return false;
      if (durationFilter === 'medium' && (pkg.duration.days < 5 || pkg.duration.days > 6)) return false;
      if (durationFilter === 'long' && pkg.duration.days < 7) return false;

      // Budget filter (INR base)
      if (budgetFilter === 'under20k' && pkg.priceINR > 20000) return false;
      if (budgetFilter === '20k-40k' && (pkg.priceINR < 20000 || pkg.priceINR > 40000)) return false;
      if (budgetFilter === '40k-60k' && (pkg.priceINR < 40000 || pkg.priceINR > 60000)) return false;
      if (budgetFilter === 'above60k' && pkg.priceINR < 60000) return false;

      // Category filter
      if (categoryFilter !== 'All') {
        const matchesCat = pkg.category.some((c) => c.toLowerCase().includes(categoryFilter.toLowerCase()));
        if (!matchesCat) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceINR - b.priceINR;
      if (sortBy === 'price-high') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return a.duration.days - b.duration.days;
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    });
  }, [searchQuery, destinationFilter, durationFilter, budgetFilter, categoryFilter, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setDestinationFilter('All');
    setDurationFilter('All');
    setBudgetFilter('All');
    setCategoryFilter('All');
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen bg-brand-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Handcrafted Holiday Packages
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Discover Tour Packages
          </h1>
          <p className="mt-3 text-base text-brand-slate-700">
            Explore all-inclusive tours with verified hotels, private chauffeurs, daily breakfasts, and 24/7 travel assistance.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-brand-slate-200/80 mb-8 space-y-4">
          {/* Top row: Search input + Sort + Mobile filter button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-brand-slate-700 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search by destination, package name, or keyword (e.g. Kashmir, Safari, Cruise)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-3.5 text-brand-slate-700 hover:text-brand-navy"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="sm:hidden flex-1 flex items-center justify-center gap-2 bg-brand-slate-100 px-4 py-3 rounded-2xl text-xs font-bold text-brand-navy border border-brand-slate-200"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto text-xs sm:text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-2xl px-4 py-3 font-semibold text-brand-navy focus:outline-none focus:border-brand-teal"
              >
                <option value="popular">Sort: Popular & Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Traveller Rating</option>
                <option value="duration">Trip Duration</option>
              </select>
            </div>
          </div>

          {/* Desktop Filter Pills */}
          <div className={`space-y-3 ${showMobileFilters ? 'block' : 'hidden sm:block'}`}>
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-brand-slate-700 whitespace-nowrap">Category:</span>
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl whitespace-nowrap transition ${
                    categoryFilter === cat
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-brand-slate-100 text-brand-slate-700 hover:bg-brand-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dropdowns Row */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 border-t border-brand-slate-100">
              <div>
                <label className="block text-[11px] font-bold text-brand-slate-700 uppercase mb-1">Destination</label>
                <select
                  value={destinationFilter}
                  onChange={(e) => setDestinationFilter(e.target.value)}
                  className="w-full text-xs bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-2 text-brand-navy focus:outline-none focus:border-brand-teal"
                >
                  {destinationsList.map((d) => (
                    <option key={d} value={d}>{d === 'All' ? 'All Destinations' : d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-brand-slate-700 uppercase mb-1">Duration</label>
                <select
                  value={durationFilter}
                  onChange={(e) => setDurationFilter(e.target.value)}
                  className="w-full text-xs bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-2 text-brand-navy focus:outline-none focus:border-brand-teal"
                >
                  <option value="All">Any Duration</option>
                  <option value="short">Short (3–4 Days)</option>
                  <option value="medium">Medium (5–6 Days)</option>
                  <option value="long">Extended (7+ Days)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-brand-slate-700 uppercase mb-1">Budget Range</label>
                <select
                  value={budgetFilter}
                  onChange={(e) => setBudgetFilter(e.target.value)}
                  className="w-full text-xs bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-2 text-brand-navy focus:outline-none focus:border-brand-teal"
                >
                  <option value="All">All Budgets</option>
                  <option value="under20k">Under ₹20,000</option>
                  <option value="20k-40k">₹20,000 – ₹40,000</option>
                  <option value="40k-60k">₹40,000 – ₹60,000</option>
                  <option value="above60k">Luxury (₹60,000+)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={resetFilters}
                  className="w-full flex items-center justify-center gap-1.5 bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700 text-xs font-semibold py-2 px-3 rounded-xl transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-brand-slate-700 font-medium">
            Showing <strong className="text-brand-navy">{filteredPackages.length}</strong> available tour packages
          </p>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-brand-slate-200/80 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-transparent to-black/20"></div>

                  <div className="absolute top-4 left-4 bg-brand-navy/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{pkg.duration.nights}N / {pkg.duration.days}D</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-brand-navy text-xs font-bold px-2.5 py-1 rounded-xl shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-brand-teal" />
                    <span>{pkg.destination}, {pkg.country}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => navigateTo('package-detail', { packageId: pkg.id })}
                      className="text-xl font-bold font-display text-brand-navy group-hover:text-brand-teal transition-colors cursor-pointer line-clamp-1"
                    >
                      {pkg.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-brand-slate-700 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>
                  </div>

                  {/* Highlights snippet */}
                  <div className="space-y-1.5 bg-brand-slate-50 p-3.5 rounded-2xl border border-brand-slate-100">
                    <div className="text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                      Tour Inclusions:
                    </div>
                    <ul className="space-y-1">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="text-xs text-brand-slate-700 flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-brand-slate-100 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] text-brand-slate-700 font-medium">Starting from</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold font-display text-brand-navy">
                          {formatPrice(pkg.priceINR)}
                        </span>
                        <span className="text-[11px] text-brand-slate-700">/ person</span>
                      </div>
                    </div>
                    {pkg.originalPriceINR && (
                      <span className="text-xs text-brand-slate-700 line-through">
                        {formatPrice(pkg.originalPriceINR)}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      onClick={() => navigateTo('package-detail', { packageId: pkg.id })}
                      className="w-full bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-navy text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-4 h-4 text-brand-slate-700" />
                      <span>View Details</span>
                    </button>

                    <button
                      onClick={() => openQuoteModal(pkg)}
                      className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-slate-200 p-8">
            <MapPin className="w-12 h-12 text-brand-slate-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-brand-navy">No packages found matching your criteria</h3>
            <p className="text-xs sm:text-sm text-brand-slate-700 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms, destination, or budget filters, or contact us directly for a custom quote.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-bold px-5 py-2.5 rounded-xl transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
