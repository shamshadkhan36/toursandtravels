import React, { useState } from 'react';
import {
  Sparkles, Send, CheckCircle2, ShieldCheck, MapPin, Calendar,
  MessageCircle, Clock
} from 'lucide-react';
import { generateWhatsAppLink } from '../data/companyInfo';
import { useToast } from '../context/ToastContext';
import confetti from 'canvas-confetti';

export const EnquiryPage: React.FC = () => {
  const { showToast } = useToast();

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [budget, setBudget] = useState('₹25,000 - ₹50,000 per person');
  const [tripType, setTripType] = useState('Honeymoon / Couple');
  const [hotelPreference, setHotelPreference] = useState('4-Star Deluxe Hotel');
  const [transportation, setTransportation] = useState('Private AC Sedan / SUV with Driver');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile || !destination) {
      showToast('Please fill required fields', 'Full Name, Mobile Number and Destination are required.', 'error');
      return;
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    showToast('🎉 Travel Enquiry Submitted!', 'Your travel expert will contact you shortly.', 'success');

    const formattedMsg = `*New Free Quote Request - ShamshadCodes Tours & Travel*
----------------------------------------
*Traveller Name:* ${fullName}
*Mobile / WhatsApp:* ${mobile}
*Email:* ${email || 'Not provided'}
*Destination:* ${destination}
*Travel Date:* ${travelDate || 'Flexible'}
*Return Date:* ${returnDate || 'Flexible'}
*Adults:* ${adults} | *Children:* ${children}
*Budget Range:* ${budget}
*Trip Type:* ${tripType}
*Hotel Preference:* ${hotelPreference}
*Transportation:* ${transportation}
*Special Notes:* ${additionalRequirements || 'Standard custom package requested'}
----------------------------------------
Please prepare a customized itinerary and quotation.`;

    setTimeout(() => {
      window.open(generateWhatsAppLink(formattedMsg), '_blank');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-slate-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-accent/20 text-brand-navy border border-brand-accent/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" /> 100% Free • No Obligation Quote
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Request Your Free Travel Quote
          </h1>
          <p className="mt-3 text-base text-brand-slate-700 max-w-2xl mx-auto">
            Tell us about your upcoming vacation. Our destination specialists will craft a personalized day-by-day itinerary with exact transparent pricing.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-slate-200/80 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-accent"></div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1: Contact Info */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-display text-brand-navy pb-2 border-b border-brand-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-brand-teal text-white text-xs flex items-center justify-center">1</span>
                  Your Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shamshad Khan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Mobile Number / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Destination & Dates */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold font-display text-brand-navy pb-2 border-b border-brand-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-brand-teal text-white text-xs flex items-center justify-center">2</span>
                  Destination & Travel Dates
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Destination <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kashmir, Dubai, Bali..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Departure Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Return Date (Optional)
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-brand-teal absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Travellers & Stay Preferences */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold font-display text-brand-navy pb-2 border-b border-brand-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-brand-teal text-white text-xs flex items-center justify-center">3</span>
                  Travellers & Stay Preferences
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Adults (12+ yrs)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-3 text-brand-navy focus:outline-none focus:border-brand-teal"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '10+ Group'].map((n, i) => (
                        <option key={i} value={typeof n === 'number' ? n : 10}>
                          {n} {typeof n === 'number' ? (n === 1 ? 'Adult' : 'Adults') : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Children (Below 12)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-3 text-brand-navy focus:outline-none focus:border-brand-teal"
                    >
                      {[0, 1, 2, 3, 4, '5+'].map((n, i) => (
                        <option key={i} value={typeof n === 'number' ? n : 5}>
                          {n} {n === 0 ? 'No Children' : (n === 1 ? 'Child' : 'Children')}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Trip Type
                    </label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-3 text-brand-navy focus:outline-none focus:border-brand-teal"
                    >
                      <option value="Honeymoon / Couple">Honeymoon / Couple</option>
                      <option value="Family Holiday">Family Holiday</option>
                      <option value="Friends Group">Friends Group</option>
                      <option value="Weekend Getaway">Weekend Getaway</option>
                      <option value="Corporate / Group">Corporate Group</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Approx. Budget (per person)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-3 text-brand-navy focus:outline-none focus:border-brand-teal"
                    >
                      <option value="Under ₹20,000">Under ₹20,000</option>
                      <option value="₹20,000 - ₹35,000">₹20,000 – ₹35,000</option>
                      <option value="₹35,000 - ₹55,000">₹35,000 – ₹55,000</option>
                      <option value="₹55,000 - ₹85,000">₹55,000 – ₹85,000</option>
                      <option value="₹85,000+ Luxury">Luxury (₹85,000+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Hotel Preference
                    </label>
                    <select
                      value={hotelPreference}
                      onChange={(e) => setHotelPreference(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-3 text-brand-navy focus:outline-none focus:border-brand-teal"
                    >
                      <option value="3-Star Standard (Budget Friendly)">3-Star Standard (Budget Friendly)</option>
                      <option value="4-Star Deluxe (Recommended)">4-Star Deluxe (Recommended)</option>
                      <option value="5-Star Luxury Resort">5-Star Luxury Resort</option>
                      <option value="Boutique Heritage Haveli / Houseboat">Boutique Heritage / Houseboat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Transportation Requirement
                    </label>
                    <select
                      value={transportation}
                      onChange={(e) => setTransportation(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-3 text-brand-navy focus:outline-none focus:border-brand-teal"
                    >
                      <option value="Private AC Sedan (Dzire / Etios)">Private AC Sedan (Dzire / Etios)</option>
                      <option value="Private AC SUV (Innova Crysta / Ertiga)">Private AC SUV (Innova / Ertiga)</option>
                      <option value="Tempo Traveller (For Groups 8+)">Tempo Traveller (For Groups 8+)</option>
                      <option value="Hotel Stays Only (No Vehicle Needed)">Hotel Stays Only (No Vehicle Needed)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Additional Requirements or Special Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Vegetarian / Jain meals, honeymoon bed decoration, airport pickup time, specific places you must see..."
                    value={additionalRequirements}
                    onChange={(e) => setAdditionalRequirements(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl p-3.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-glow-accent hover:shadow-2xl transition transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 text-brand-navy" />
                  <span>Request My Free Quote</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-brand-slate-700 pt-3 border-t border-brand-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" /> 100% Free Consultation • Zero Obligation
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-teal" /> Instant Quote within 30–60 Minutes
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-navy">
                  Thank you! Your travel enquiry has been received.
                </h2>
                <p className="text-base text-brand-slate-700 max-w-lg mx-auto">
                  Our travel expert will contact you shortly with a tailored itinerary and quotation for <strong>{destination}</strong>.
                </p>
              </div>

              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl max-w-md mx-auto space-y-3 text-left">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Need an Instant Response?</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  You can chat directly with your assigned destination coordinator on WhatsApp right now.
                </p>
                <a
                  href={generateWhatsAppLink(`Hi ShamshadCodes! I just submitted an enquiry for ${destination} for ${adults} adults.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-semibold text-brand-navy hover:text-brand-teal underline"
              >
                Submit another enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
