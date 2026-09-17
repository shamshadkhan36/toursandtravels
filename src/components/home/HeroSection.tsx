import React, { useState } from 'react';
import { MapPin, Calendar, Users, Compass, Sparkles, MessageCircle, ShieldCheck, CheckCircle2, Headphones, ArrowRight } from 'lucide-react';
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
    <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden py-16 sm:py-24">
      {/* High-res Background Image with dynamic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Tropical Travel Experience"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-subtle"
        />
        {/* Layered Gradient Overlays for contrast and brand harmony */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy/85 to-brand-navy-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Main CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-teal-200 shadow-lg animate-in fade-in">
              <Sparkles className="w-4 h-4 text-brand-accent animate-spin" style={{ animationDuration: '6s' }} />
              <span>Premium Tour Packages & Personalised Planning</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.12]">
              Your Journey.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-400">
                Our Expertise.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover unforgettable destinations with thoughtfully planned tours, comfortable stays and hassle-free travel assistance.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-bold text-sm sm:text-base px-7 py-4 rounded-2xl shadow-glow-accent hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-brand-navy" />
                <span>Plan My Trip</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={generateWhatsAppLink('Hi ShamshadCodes Tours & Travel! I would like to plan a holiday trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick destination tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-brand-slate-300">
              <span className="text-brand-slate-400">Popular Now:</span>
              {['Kashmir', 'Dubai', 'Kerala', 'Bali', 'Goa', 'Maldives'].map((dest) => (
                <button
                  key={dest}
                  onClick={() => navigateTo('packages', { destination: dest })}
                  className="bg-white/10 hover:bg-brand-teal hover:text-white px-2.5 py-1 rounded-lg transition border border-white/10"
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Enquiry Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="glass-card-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 relative">
              <div className="absolute -top-3 right-6 bg-brand-accent text-brand-navy text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                ⚡ Free Itinerary in 30 Mins
              </div>

              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Get Your Free Travel Quote
                </h3>
                <p className="text-xs text-teal-100 mt-1">
                  Tell us your requirements and receive a customized quote with zero booking fee.
                </p>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                {/* Destination field */}
                <div>
                  <label className="block text-xs font-semibold text-brand-slate-200 mb-1.5">
                    Where do you want to go?
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-sm bg-brand-navy/90 text-white border border-white/20 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-brand-teal transition"
                    >
                      <option value="" className="text-gray-400">Select Destination (Kashmir, Dubai, Bali...)</option>
                      {DESTINATIONS_DATA.map((d) => (
                        <option key={d.id} value={d.name} className="text-brand-navy bg-white">
                          {d.name} ({d.country})
                        </option>
                      ))}
                      <option value="Custom / Other" className="text-brand-navy bg-white">Other / Custom Destination</option>
                    </select>
                  </div>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-brand-slate-200 mb-1.5">
                    Travel Date (Tentative)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full text-sm bg-brand-navy/90 text-white border border-white/20 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-brand-teal transition"
                    />
                  </div>
                </div>

                {/* Travellers & Trip Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-slate-200 mb-1.5">
                      Travellers
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                      <select
                        value={travellers}
                        onChange={(e) => setTravellers(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-brand-navy/90 text-white border border-white/20 rounded-xl pl-10 pr-3 py-3 focus:outline-none focus:border-brand-teal transition"
                      >
                        <option value="1 Solo" className="text-brand-navy bg-white">1 Traveller</option>
                        <option value="2 Travellers" className="text-brand-navy bg-white">2 Travellers (Couple)</option>
                        <option value="3-4 Family" className="text-brand-navy bg-white">3-4 Travellers (Family)</option>
                        <option value="5-8 Group" className="text-brand-navy bg-white">5-8 Travellers</option>
                        <option value="8+ Large Group" className="text-brand-navy bg-white">8+ Large Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-slate-200 mb-1.5">
                      Trip Type
                    </label>
                    <div className="relative">
                      <Compass className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-brand-navy/90 text-white border border-white/20 rounded-xl pl-10 pr-3 py-3 focus:outline-none focus:border-brand-teal transition"
                      >
                        <option value="Honeymoon / Couple" className="text-brand-navy bg-white">Honeymoon</option>
                        <option value="Family Holiday" className="text-brand-navy bg-white">Family Holiday</option>
                        <option value="Friends Trip" className="text-brand-navy bg-white">Friends Group</option>
                        <option value="Weekend Break" className="text-brand-navy bg-white">Weekend Break</option>
                        <option value="Corporate / Group" className="text-brand-navy bg-white">Corporate Group</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-glow-accent hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2 mt-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get My Free Quote</span>
                </button>
              </form>

              {/* Trust badges below form */}
              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal mb-1" />
                  <span className="text-[11px] font-medium text-brand-slate-200">Customised Trips</span>
                </div>
                <div className="flex flex-col items-center">
                  <Headphones className="w-4 h-4 text-brand-cyan mb-1" />
                  <span className="text-[11px] font-medium text-brand-slate-200">Travel Assistance</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-brand-accent mb-1" />
                  <span className="text-[11px] font-medium text-brand-slate-200">Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
