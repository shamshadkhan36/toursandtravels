import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, PhoneCall, Calendar, Users, MapPin, MessageCircle } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { useCurrency } from '../../context/CurrencyContext';
import { useToast } from '../../context/ToastContext';
import { generateWhatsAppLink } from '../../data/companyInfo';
import confetti from 'canvas-confetti';

export const QuickQuoteModal: React.FC = () => {
  const { isOpen, selectedPackage, initialDestination, closeQuoteModal } = useQuoteModal();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [tripType, setTripType] = useState('Honeymoon');
  const [hotelPreference, setHotelPreference] = useState('4-Star Deluxe');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setDestination(selectedPackage.destination);
      setTripType(selectedPackage.category[0] || 'Family');
    } else if (initialDestination) {
      setDestination(initialDestination);
    }
    setIsSubmitted(false);
  }, [selectedPackage, initialDestination, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      showToast('Please fill required fields', 'Full Name and Phone Number are required.', 'error');
      return;
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    showToast('🎉 Enquiry Received Successfully!', 'Connecting you to our travel specialist on WhatsApp...', 'success');

    // Build rich message for WhatsApp
    const pkgTitle = selectedPackage ? ` (${selectedPackage.title})` : '';
    const formattedMsg = `*New Travel Enquiry - ShamshadCodes Tours & Travel*
----------------------------------------
*Name:* ${fullName}
*Phone:* ${phone}
*Email:* ${email || 'Not provided'}
*Destination:* ${destination}${pkgTitle}
*Travel Date:* ${travelDate || 'Flexible'}
*Travellers:* ${adults} Adults
*Trip Type:* ${tripType}
*Hotel Category:* ${hotelPreference}
*Special Notes:* ${notes || 'Standard custom quote requested'}
----------------------------------------
Please share best customized itinerary and quotation.`;

    setTimeout(() => {
      window.open(generateWhatsAppLink(formattedMsg), '_blank');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-navy-dark/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-slate-200 my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy-light p-6 text-white relative">
          <button
            onClick={closeQuoteModal}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-brand-accent text-brand-navy font-bold text-xs uppercase px-3 py-1 rounded-full mb-2 tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Instant Free Travel Quotation
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display">
            {selectedPackage ? `Plan Trip: ${selectedPackage.title}` : 'Get Your Customised Travel Plan & Quote'}
          </h3>
          <p className="text-xs sm:text-sm text-teal-100 mt-1">
            Personalised itinerary • Transparent rates • 100% Free consultation
          </p>

          {selectedPackage && (
            <div className="mt-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs">
              <span className="text-brand-slate-200">Starting from:</span>
              <span className="text-amber-300 font-bold text-sm">
                {formatPrice(selectedPackage.priceINR)} / person
              </span>
              <span className="text-brand-slate-300">({selectedPackage.duration.nights}N/{selectedPackage.duration.days}D)</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shamshad Khan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    WhatsApp / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-brand-slate-700 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kashmir, Dubai, Kerala..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Tentative Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-brand-slate-700 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl pl-10 pr-3 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Adults (12+ yrs)
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-brand-slate-700 absolute left-3.5 top-3" />
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl pl-10 pr-3 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    >
                      {[1, 2, 3, 4, 5, 6, '7+ (Group)'].map((num, i) => (
                        <option key={i} value={typeof num === 'number' ? num : 8}>
                          {num} {typeof num === 'number' ? (num === 1 ? 'Adult' : 'Adults') : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Trip Type
                  </label>
                  <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  >
                    <option value="Honeymoon">Honeymoon / Couple</option>
                    <option value="Family">Family Holiday</option>
                    <option value="Friends">Friends Group</option>
                    <option value="Solo">Solo Explorer</option>
                    <option value="Corporate">Corporate / Offsite</option>
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
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  >
                    <option value="3-Star Comfort">3-Star Comfort (Budget Friendly)</option>
                    <option value="4-Star Deluxe">4-Star Deluxe (Recommended)</option>
                    <option value="5-Star Luxury">5-Star Luxury / Premium</option>
                    <option value="Private Pool Villa / Houseboat">Private Villa / Houseboat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Special Notes / Preferences (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vegetarian food, airport pickup..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover text-brand-navy font-bold text-base py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Request My Free Quote on WhatsApp
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-brand-slate-700 pt-1 border-t border-brand-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" /> 100% Privacy & No Spam
                </span>
                <span className="flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-teal" /> Response within 15–30 mins
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-brand-navy">Thank You, {fullName}!</h4>
              <p className="text-sm text-brand-slate-700 max-w-md mx-auto">
                Your enquiry for <strong>{destination}</strong> has been received. Our senior travel expert is reviewing your details to provide the best tailored itinerary and price.
              </p>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-md mx-auto text-left flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900">
                  <span className="font-bold">Instant WhatsApp Support:</span>
                  <p className="mt-0.5">We're opening WhatsApp so you can instantly chat with your assigned destination specialist.</p>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={closeQuoteModal}
                  className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
