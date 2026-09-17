import React, { useState } from 'react';
import { MapPin, Calendar, Users, Compass, Sparkles, MessageCircle, ShieldCheck, CheckCircle2, Headphones, ArrowRight, Star } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { generateWhatsAppLink } from '../../data/companyInfo';
import { DESTINATIONS_DATA } from '../../data/destinations';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { openQuoteModal } = useQuoteModal();

  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travellers, setTravellers] = useState('2 Travellers');
  const [tripType, setTripType] = useState('Honeymoon / Couple');

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openQuoteModal(null, destination);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 bg-slate-900">
      {/* High-res Travel Background with Vivid Color Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Tropical Travel Experience"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Layered Colorful Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-teal-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Colorful Main CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left text-white">
            {/* Colorful Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-teal-200 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Personalised Tours • 100% Free Travel Consultation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.12]">
              Your Journey.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-amber-300">
                Our Expertise.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover unforgettable destinations with thoughtfully planned tours, comfortable stays and hassle-free travel assistance.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-glow-accent hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Plan My Trip</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={generateWhatsAppLink('Hi ShamshadCodes Tours & Travel! I would like to plan a holiday trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 border border-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick destination tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-300">
              <span className="text-amber-300 font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-300" /> Trending Now:
              </span>
              {[
                { name: 'Kashmir', bg: 'bg-teal-500/30 text-teal-200 border-teal-400/40' },
                { name: 'Dubai', bg: 'bg-cyan-500/30 text-cyan-200 border-cyan-400/40' },
                { name: 'Kerala', bg: 'bg-emerald-500/30 text-emerald-200 border-emerald-400/40' },
                { name: 'Bali', bg: 'bg-purple-500/30 text-purple-200 border-purple-400/40' },
                { name: 'Goa', bg: 'bg-rose-500/30 text-rose-200 border-rose-400/40' },
                { name: 'Maldives', bg: 'bg-blue-500/30 text-blue-200 border-blue-400/40' },
              ].map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => navigateTo('packages', { destination: dest.name })}
                  className={`px-3 py-1 rounded-xl transition border text-xs font-semibold backdrop-blur-sm hover:scale-105 ${dest.bg}`}
                >
                  {dest.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Crisp White Glass Enquiry Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[11px] font-black uppercase px-3.5 py-1 rounded-full shadow-md tracking-wider">
                ⚡ Free Quote in 30 Mins
              </div>

              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  Where Do You Want to Go?
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Fill in your details for an instant customized itinerary and best price.
                </p>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="space-y-3.5">
                {/* Destination field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-teal-600 absolute left-3.5 top-3.5" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 text-slate-800 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-teal-600 focus:bg-white transition font-medium"
                    >
                      <option value="">Select Destination (Kashmir, Dubai, Bali...)</option>
                      {DESTINATIONS_DATA.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.country})
                        </option>
                      ))}
                      <option value="Custom / Other">Other / Custom Destination</option>
                    </select>
                  </div>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Travel Date (Tentative)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-cyan-600 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-slate-50 text-slate-800 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-cyan-600 focus:bg-white transition font-medium"
                    />
                  </div>
                </div>

                {/* Travellers & Trip Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Travellers
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-purple-600 absolute left-3.5 top-3.5" />
                      <select
                        value={travellers}
                        onChange={(e) => setTravellers(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-slate-50 text-slate-800 border border-slate-200 rounded-xl pl-10 pr-3 py-3 focus:outline-none focus:border-purple-600 focus:bg-white transition font-medium"
                      >
                        <option value="1 Solo">1 Traveller</option>
                        <option value="2 Travellers">2 Travellers (Couple)</option>
                        <option value="3-4 Family">3-4 Travellers (Family)</option>
                        <option value="5-8 Group">5-8 Travellers</option>
                        <option value="8+ Large Group">8+ Large Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Trip Type
                    </label>
                    <div className="relative">
                      <Compass className="w-4 h-4 text-rose-500 absolute left-3.5 top-3.5" />
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-slate-50 text-slate-800 border border-slate-200 rounded-xl pl-10 pr-3 py-3 focus:outline-none focus:border-rose-500 focus:bg-white transition font-medium"
                      >
                        <option value="Honeymoon / Couple">Honeymoon</option>
                        <option value="Family Holiday">Family Holiday</option>
                        <option value="Friends Trip">Friends Group</option>
                        <option value="Weekend Break">Weekend Break</option>
                        <option value="Corporate / Group">Corporate Group</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-glow-accent hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2 mt-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get My Free Quote</span>
                </button>
              </form>

              {/* Colorful Trust badges below form */}
              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-1" />
                  <span className="text-[11px] font-bold text-slate-700">Customised Trips</span>
                </div>
                <div className="flex flex-col items-center">
                  <Headphones className="w-4 h-4 text-cyan-500 mb-1" />
                  <span className="text-[11px] font-bold text-slate-700">24/7 Assistance</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-amber-500 mb-1" />
                  <span className="text-[11px] font-bold text-slate-700">Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
