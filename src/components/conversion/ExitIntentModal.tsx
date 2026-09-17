import React, { useState, useEffect } from 'react';
import { X, Gift, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { generateWhatsAppLink } from '../../data/companyInfo';
import confetti from 'canvas-confetti';

export const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [isClaimed, setIsClaimed] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    // Check if previously dismissed in this session
    const dismissed = sessionStorage.getItem('shamshad_exit_modal_dismissed');
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves near the top edge
      if (e.clientY <= 20 && !hasTriggered && !isVisible) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('shamshad_exit_modal_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      showToast('Please enter your mobile number', 'We need your number to send the discount voucher code.', 'error');
      return;
    }

    setIsClaimed(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    showToast('🎉 Voucher Code: SHAMSHAD2500 Claimed!', 'Your travel specialist will reach out with the discount quote.', 'success');

    // WhatsApp handoff
    setTimeout(() => {
      const msg = `Hi ShamshadCodes! I would like to claim my ₹2,500 holiday voucher (Code: SHAMSHAD2500) for destination: ${destination || 'any upcoming holiday'}. My mobile is ${phone}.`;
      window.open(generateWhatsAppLink(msg), '_blank');
    }, 1200);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-dark/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-slate-200 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy-light text-white p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 bg-amber-400 text-brand-navy font-bold text-xs uppercase px-3 py-1 rounded-full mb-2 tracking-wider shadow-sm">
            <Gift className="w-3.5 h-3.5" /> Exclusive Website Special
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Wait! Take <span className="text-amber-400">₹2,500 Off</span> Your Next Trip
          </h3>
          <p className="text-teal-100 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            Planning a vacation? Lock in your exclusive early-bird travel discount voucher before you go!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isClaimed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-brand-navy flex items-center justify-center font-bold text-lg flex-shrink-0">
                  %
                </div>
                <div className="text-xs text-amber-900">
                  <span className="font-bold">Coupon Code: SHAMSHAD2500</span>
                  <p className="text-[11px] text-amber-700">Valid on all 4+ days Kashmir, Dubai, Kerala, Goa & Bali packages.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1">
                  Where are you planning to travel?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kashmir, Dubai, Kerala, Bali..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-navy mb-1">
                  Mobile Number / WhatsApp <span className="text-red-500">*</span>
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

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-brand-navy font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" /> Claim My ₹2,500 Travel Voucher
              </button>

              <p className="text-center text-[11px] text-brand-slate-700 flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5 text-brand-teal" /> 100% Free Consultation • No Spam Guarantee
              </p>
            </form>
          ) : (
            <div className="text-center py-4 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-navy">Voucher Claimed Successfully!</h4>
              <p className="text-xs sm:text-sm text-brand-slate-700 max-w-sm mx-auto">
                We're redirecting you to WhatsApp with voucher code <strong>SHAMSHAD2500</strong> to finalize your free itinerary and quotation.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition"
              >
                Back to Website <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
