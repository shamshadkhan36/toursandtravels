import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, MessageCircle, ArrowUp, X } from 'lucide-react';
import { COMPANY_INFO, generateWhatsAppLink } from '../../data/companyInfo';
import { useNavigation } from '../../context/NavigationContext';
import type { PageView } from '../../context/NavigationContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const quickLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Tour Packages', page: 'packages' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Services', page: 'services' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
    { label: 'Request Free Quote', page: 'enquiry' },
  ];

  const popularDests = [
    { name: 'Kashmir Packages', id: 'kashmir-escape' },
    { name: 'Dubai Holidays', id: 'dubai-explorer' },
    { name: 'Kerala Backwaters', id: 'kerala-holiday' },
    { name: 'Goa Getaways', id: 'goa-getaway' },
    { name: 'Rajasthan Heritage', id: 'rajasthan-heritage' },
    { name: 'Bali Honeymoon', id: 'bali-paradise' },
    { name: 'Maldives Luxury', id: 'maldives-luxury' },
    { name: 'Singapore Sentosa', id: 'singapore-sentosa' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-brand-navy-dark text-brand-slate-200 pt-16 pb-24 sm:pb-12 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Column 1: Brand info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-teal to-brand-cyan flex items-center justify-center text-white shadow-glow">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                    SHAMSHAD<span className="text-brand-teal">CODES</span>
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest text-brand-slate-300 uppercase">
                    Tours & Travel
                  </div>
                </div>
              </div>

              <p className="text-sm text-brand-slate-300 leading-relaxed">
                Making travel planning simpler, one journey at a time. Discover handpicked domestic and international tour packages with personalized assistance.
              </p>

              {/* Social Media Icons with SVG */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-teal hover:text-white flex items-center justify-center text-brand-slate-300 transition duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-teal hover:text-white flex items-center justify-center text-brand-slate-300 transition duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-teal hover:text-white flex items-center justify-center text-brand-slate-300 transition duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={generateWhatsAppLink('Hello ShamshadCodes Tours & Travel!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-4 font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal"></span> Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => navigateTo(link.page)}
                      className="text-brand-slate-300 hover:text-white hover:translate-x-1 transition transform duration-200 inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Top Destinations */}
            <div>
              <h4 className="text-white font-bold text-base mb-4 font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Popular Packages
              </h4>
              <ul className="space-y-2.5 text-sm">
                {popularDests.map((dest) => (
                  <li key={dest.id}>
                    <button
                      onClick={() => navigateTo('package-detail', { packageId: dest.id })}
                      className="text-brand-slate-300 hover:text-brand-teal hover:translate-x-1 transition transform duration-200 inline-block"
                    >
                      {dest.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="space-y-3.5">
              <h4 className="text-white font-bold text-base mb-4 font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan"></span> Reach Out to Us
              </h4>

              <div className="flex items-start gap-3 text-sm text-brand-slate-300">
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-brand-slate-400">Phone Support:</div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-brand-teal transition font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-brand-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-brand-slate-400">WhatsApp Chat:</div>
                  <a
                    href={generateWhatsAppLink('Hi ShamshadCodes! I would like to book a trip.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-brand-slate-300">
                <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-brand-slate-400">Official Email:</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-brand-teal transition">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-brand-slate-300">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-brand-slate-400">Office Location:</div>
                  <p className="text-xs text-brand-slate-300 leading-relaxed">
                    {COMPANY_INFO.officeAddress.line1}, {COMPANY_INFO.officeAddress.city}, {COMPANY_INFO.officeAddress.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-slate-400">
            <div className="flex items-center gap-1 text-center sm:text-left">
              <span>© {new Date().getFullYear()} ShamshadCodes Tours & Travel. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => setActivePolicy('privacy')}
                className="hover:text-white transition"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActivePolicy('terms')}
                className="hover:text-white transition"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActivePolicy('cancellation')}
                className="hover:text-white transition"
              >
                Cancellation Policy
              </button>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-teal hover:text-white flex items-center justify-center transition"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy View Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-dark/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white text-brand-navy max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-brand-slate-100 hover:bg-brand-slate-200 flex items-center justify-center transition"
            >
              <X className="w-4 h-4 text-brand-slate-600" />
            </button>

            {activePolicy === 'privacy' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-brand-navy">Privacy Policy</h3>
                <p className="text-sm text-brand-slate-600 leading-relaxed">
                  At ShamshadCodes Tours & Travel, your privacy is paramount. We only collect essential travel information (such as your name, contact phone, travel dates, and destination preferences) required to prepare customized travel quotations and fulfill hotel and transport reservations.
                </p>
                <h4 className="font-semibold text-sm text-brand-navy">Data Security</h4>
                <p className="text-sm text-brand-slate-600 leading-relaxed">
                  We do not sell, rent, or trade your personal information with third-party advertising brokers. Your information is strictly used for your trip planning and direct communication via phone, email, and WhatsApp.
                </p>
              </div>
            )}

            {activePolicy === 'terms' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-brand-navy">Terms & Conditions</h3>
                <p className="text-sm text-brand-slate-600 leading-relaxed">
                  All tour itineraries and pricing quotes provided by ShamshadCodes Tours & Travel are subject to hotel room and flight availability at the time of token advance confirmation.
                </p>
                <ul className="list-disc pl-5 text-sm text-brand-slate-600 space-y-2">
                  <li>Valid government-approved identification (Aadhaar/Passport) is mandatory for check-ins.</li>
                  <li>Flight timings, road conditions, and weather factors may necessitate minor adjustments to sightseeing schedules for passenger safety.</li>
                  <li>Child rates apply as per standard hotel policy (under 5 years complimentary; 5–11 years with/without extra bed).</li>
                </ul>
              </div>
            )}

            {activePolicy === 'cancellation' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-brand-navy">Cancellation & Refund Policy</h3>
                <p className="text-sm text-brand-slate-600 leading-relaxed">
                  We maintain traveler-friendly and transparent cancellation policies:
                </p>
                <div className="space-y-2 text-sm text-brand-slate-600">
                  <div className="p-3 bg-brand-slate-50 rounded-xl border border-brand-slate-200">
                    <span className="font-bold text-brand-navy">30+ Days Before Travel:</span> 90% refund of advance deposit (less airline cancellation fees if applicable).
                  </div>
                  <div className="p-3 bg-brand-slate-50 rounded-xl border border-brand-slate-200">
                    <span className="font-bold text-brand-navy">15 to 29 Days Before Travel:</span> 60% refund or free date-change voucher option.
                  </div>
                  <div className="p-3 bg-brand-slate-50 rounded-xl border border-brand-slate-200">
                    <span className="font-bold text-brand-navy">Less Than 14 Days Before Travel:</span> Subject to individual hotel and transport partner policies.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
