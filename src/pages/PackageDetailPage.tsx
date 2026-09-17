import React, { useState } from 'react';
import {
  MapPin, Clock, Star, CheckCircle, XCircle, Hotel, Car, ShieldAlert,
  HelpCircle, MessageCircle, Sparkles, ChevronDown, ChevronUp,
  Calendar, ArrowLeft, Check, Phone, ArrowRight
} from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';
import { useNavigation } from '../context/NavigationContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { useCurrency } from '../context/CurrencyContext';
import { generateWhatsAppLink, COMPANY_INFO } from '../data/companyInfo';

export const PackageDetailPage: React.FC = () => {
  const { selectedPackageId, navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();
  const { formatPrice } = useCurrency();

  // Selected package fallback
  const pkg = PACKAGES_DATA.find((p) => p.id === selectedPackageId) || PACKAGES_DATA[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openItineraryDay, setOpenItineraryDay] = useState<number | null>(1);

  const images = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.heroImage];

  const toggleDay = (day: number) => {
    setOpenItineraryDay(openItineraryDay === day ? null : day);
  };

  const whatsappInquiryMessage = `Hi ShamshadCodes Tours & Travel! I am interested in booking or getting a customized quote for "${pkg.title}" (${pkg.duration.nights}N/${pkg.duration.days}D). Starting price: ${formatPrice(pkg.priceINR)} / person. Please share itinerary details.`;

  return (
    <div className="min-h-screen bg-brand-slate-50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigateTo('packages')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-slate-700 hover:text-brand-navy bg-white px-4 py-2 rounded-xl border border-brand-slate-200 shadow-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Packages</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-teal-50 text-brand-teal px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {pkg.region} Tour
            </span>
          </div>
        </div>

        {/* Top Header & Gallery Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-slate-200/80 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Left (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {/* Main Active Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={images[activeImageIndex]}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-navy/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-teal" />
                  <span>{pkg.duration.nights} Nights / {pkg.duration.days} Days</span>
                </div>
              </div>

              {/* Thumbnail Selector */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-20 rounded-xl overflow-hidden border-2 transition ${
                        activeImageIndex === idx ? 'border-brand-teal scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Info & Main Actions Right (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-teal mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{pkg.destination}, {pkg.country}</span>
                  <span className="text-brand-slate-300">•</span>
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                    {pkg.rating} ({pkg.reviewCount} Reviews)
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy leading-tight">
                  {pkg.title}
                </h1>
                <p className="mt-3 text-xs sm:text-sm text-brand-slate-700 leading-relaxed">
                  {pkg.overview}
                </p>
              </div>

              {/* Price Banner */}
              <div className="p-4 bg-brand-slate-50 rounded-2xl border border-brand-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-brand-slate-700 block">Starting from</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold font-display text-brand-navy">
                      {formatPrice(pkg.priceINR)}
                    </span>
                    <span className="text-xs text-brand-slate-700">/ person</span>
                  </div>
                </div>
                {pkg.originalPriceINR && (
                  <div className="text-right">
                    <span className="text-xs text-brand-slate-700 line-through block">
                      {formatPrice(pkg.originalPriceINR)}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Special Rate
                    </span>
                  </div>
                )}
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openQuoteModal(pkg)}
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-bold text-base py-4 px-6 rounded-2xl shadow-glow-accent hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-brand-navy" />
                  <span>Get Free Quote for This Tour</span>
                </button>

                <a
                  href={generateWhatsAppLink(whatsappInquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Ask Details on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs text-brand-slate-700 pt-2 border-t border-brand-slate-100">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>100% Customisable</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>Private Chauffeur</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>Verified Hotels</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>24/7 On-Trip Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-slate-200/80">
              <h2 className="text-xl font-bold font-display text-brand-navy mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-teal" /> Tour Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-slate-700 bg-brand-slate-50 p-3 rounded-2xl border border-brand-slate-100">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Day-by-Day Itinerary */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-slate-200/80">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold font-display text-brand-navy flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-brand-teal" /> Detailed Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs text-brand-slate-700 mt-0.5">
                    Click each day to view full sightseeing activities, meal plans, and night stay details.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {pkg.itinerary.map((day) => {
                  const isOpen = openItineraryDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen ? 'bg-brand-slate-50 border-brand-teal shadow-sm' : 'bg-white border-brand-slate-200 hover:border-brand-slate-300'
                      }`}
                    >
                      <button
                        onClick={() => toggleDay(day.day)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            Day {day.day}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-brand-navy">
                            {day.title}
                          </span>
                        </div>
                        <div className="text-brand-slate-700">
                          {isOpen ? <ChevronUp className="w-4 h-4 text-brand-teal" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-slate-700 space-y-3 border-t border-brand-slate-200/60 animate-in fade-in">
                          <p className="leading-relaxed">{day.description}</p>
                          
                          {/* Activities list */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wider block">Key Activities:</span>
                            {day.activities.map((act, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-brand-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                                <span>{act}</span>
                              </div>
                            ))}
                          </div>

                          {/* Meals & Stay footer */}
                          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-brand-slate-200/60 text-xs font-medium text-brand-slate-700">
                            <span className="bg-white px-2.5 py-1 rounded-lg border border-brand-slate-200">
                              🍽️ {day.meals}
                            </span>
                            <span className="bg-white px-2.5 py-1 rounded-lg border border-brand-slate-200">
                              🏨 {day.stay}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-brand-slate-200/80">
                <h3 className="text-lg font-bold font-display text-brand-navy mb-4 flex items-center gap-2 text-emerald-800">
                  <CheckCircle className="w-5 h-5 text-emerald-600" /> Inclusions
                </h3>
                <ul className="space-y-2.5">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="text-xs sm:text-sm text-brand-slate-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-brand-slate-200/80">
                <h3 className="text-lg font-bold font-display text-brand-navy mb-4 flex items-center gap-2 text-rose-800">
                  <XCircle className="w-5 h-5 text-rose-600" /> Exclusions
                </h3>
                <ul className="space-y-2.5">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="text-xs sm:text-sm text-brand-slate-700 flex items-start gap-2">
                      <span className="text-rose-500 font-bold flex-shrink-0">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hotels & Transportation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-slate-200/80 space-y-6">
              <div>
                <h3 className="text-lg font-bold font-display text-brand-navy mb-3 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-brand-teal" /> Recommended Accommodations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.hotels.map((hotel, i) => (
                    <div key={i} className="bg-brand-slate-50 p-4 rounded-2xl border border-brand-slate-100 flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-brand-navy">{hotel.name}</h4>
                        <p className="text-xs text-brand-slate-700 mt-0.5">{hotel.location} • {hotel.type}</p>
                      </div>
                      <div className="flex items-center text-amber-400 font-bold text-xs bg-white px-2 py-0.5 rounded-lg border border-brand-slate-200">
                        <Star className="w-3 h-3 fill-amber-400 mr-1" />
                        {hotel.starRating}★
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-slate-100">
                <h3 className="text-lg font-bold font-display text-brand-navy mb-2 flex items-center gap-2">
                  <Car className="w-5 h-5 text-brand-teal" /> Transportation Details
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate-700 leading-relaxed bg-brand-slate-50 p-4 rounded-2xl border border-brand-slate-100">
                  {pkg.transportation}
                </p>
              </div>
            </div>

            {/* Important Notes & Advisory */}
            {pkg.importantNotes && pkg.importantNotes.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-3">
                <h3 className="text-lg font-bold font-display text-amber-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600" /> Important Travel Notes & Advisory
                </h3>
                <ul className="space-y-2">
                  {pkg.importantNotes.map((note, i) => (
                    <li key={i} className="text-xs sm:text-sm text-amber-950 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Package Specific FAQs */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-slate-200/80">
                <h3 className="text-lg font-bold font-display text-brand-navy mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-teal" /> Tour Specific FAQs
                </h3>
                <div className="space-y-3">
                  {pkg.faqs.map((f, i) => (
                    <div key={i} className="p-4 bg-brand-slate-50 rounded-2xl border border-brand-slate-100 space-y-1.5">
                      <div className="font-bold text-sm text-brand-navy">{f.question}</div>
                      <div className="text-xs sm:text-sm text-brand-slate-700 leading-relaxed">{f.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Desktop Booking Sidebar (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-brand-slate-200 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-teal to-brand-accent"></div>

              <div className="mb-4">
                <span className="text-xs font-semibold text-brand-slate-700 block">Personalised Package</span>
                <h3 className="text-xl font-bold font-display text-brand-navy leading-tight">
                  Book or Customize Tour
                </h3>
              </div>

              <div className="p-4 bg-brand-slate-50 rounded-2xl border border-brand-slate-200 mb-5">
                <div className="text-xs text-brand-slate-700">Starting Price:</div>
                <div className="text-2xl font-extrabold font-display text-brand-navy">
                  {formatPrice(pkg.priceINR)} <span className="text-xs font-normal text-brand-slate-700">/ person</span>
                </div>
                <div className="text-[11px] text-teal-800 mt-1 font-medium">
                  ✓ Price includes stays, transfers & daily breakfast
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openQuoteModal(pkg)}
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Customised Quote</span>
                </button>

                <a
                  href={generateWhatsAppLink(whatsappInquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Specialist</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-navy font-semibold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-brand-slate-100 text-[11px] text-brand-slate-700 space-y-1.5">
                <p>• Zero hidden booking fees</p>
                <p>• Instant response from destination specialist</p>
                <p>• Flexible payment installment options</p>
              </div>
            </div>

            {/* Need Customization Card */}
            <div className="bg-brand-navy text-white p-6 rounded-3xl space-y-3">
              <h4 className="font-bold font-display text-base text-white">Want to modify this trip?</h4>
              <p className="text-xs text-brand-slate-300 leading-relaxed">
                Add extra days, switch hotels to 5-star, or include unique experiences like helicopter rides or candlelit beach dinners.
              </p>
              <button
                onClick={() => openQuoteModal(pkg)}
                className="text-xs font-bold text-brand-accent hover:text-amber-300 flex items-center gap-1"
              >
                <span>Customize this package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
