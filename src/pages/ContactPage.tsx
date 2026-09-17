import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO, generateWhatsAppLink } from '../data/companyInfo';
import { useToast } from '../context/ToastContext';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Please enter required details', 'Name and Phone number are required.', 'error');
      return;
    }

    setIsSent(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    showToast('Message Sent Successfully!', 'Our team will contact you within 15–30 minutes.', 'success');

    const formattedMsg = `*Contact Us Message - ShamshadCodes Tours & Travel*
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'Not provided'}
*Subject:* ${subject || 'General Travel Inquiry'}
*Message:* ${message || 'No additional details'}
----------------------------------------`;

    setTimeout(() => {
      window.open(generateWhatsAppLink(formattedMsg), '_blank');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Direct Support & Assistance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-brand-slate-700">
            Have questions about a destination or package? Our travel advisors are available 24/7 to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-slate-200/80 space-y-6">
              <h2 className="text-xl font-bold font-display text-brand-navy">
                Contact Information
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-slate-700 font-semibold uppercase">Phone Support</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base font-bold text-brand-navy hover:text-brand-teal transition mt-0.5 block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-brand-slate-700 mt-0.5">Mon–Sat: 9:00 AM – 8:00 PM IST</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-brand-slate-700 font-semibold uppercase">WhatsApp Chat</div>
                  <a
                    href={generateWhatsAppLink('Hi ShamshadCodes! I have a travel query.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-600 hover:underline transition mt-0.5 block"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                  <p className="text-xs text-brand-slate-700 mt-0.5">Instant chat assistance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-brand-cyan flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-slate-700 font-semibold uppercase">Official Email</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-base font-bold text-brand-navy hover:text-brand-teal transition mt-0.5 block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-brand-slate-700 mt-0.5">Quick email responses</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-brand-slate-700 font-semibold uppercase">Head Office</div>
                  <p className="text-xs sm:text-sm font-semibold text-brand-navy mt-0.5 leading-relaxed">
                    {COMPANY_INFO.officeAddress.line1}, {COMPANY_INFO.officeAddress.line2}, {COMPANY_INFO.officeAddress.city}, {COMPANY_INFO.officeAddress.state} - {COMPANY_INFO.officeAddress.postalCode}, {COMPANY_INFO.officeAddress.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Mockup Card */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-brand-slate-200/80 overflow-hidden">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-brand-slate-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="City Map location"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-brand-navy/30 backdrop-blur-[2px] flex flex-col items-center justify-center text-white text-center p-4">
                  <MapPin className="w-8 h-8 text-brand-accent animate-bounce mb-1" />
                  <span className="text-xs font-bold font-display">{COMPANY_INFO.brandName}</span>
                  <span className="text-[11px] text-brand-slate-200">{COMPANY_INFO.officeAddress.city}, {COMPANY_INFO.officeAddress.country}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-slate-200/80">
            <h2 className="text-2xl font-bold font-display text-brand-navy mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-brand-slate-700 mb-6">
              Fill out the form below and our destination specialist will contact you with free travel suggestions.
            </p>

            {!isSent ? (
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
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
                      Email Address
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
                      Subject / Interested Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kashmir Tour, Dubai Holiday, Custom Visa..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your travel dates, number of people, preferred destinations, or any special requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-sm bg-brand-slate-50 border border-brand-slate-200 rounded-xl p-4 focus:outline-none focus:border-brand-teal focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-hover hover:from-brand-accent-hover hover:to-amber-600 text-brand-navy font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message & Connect on WhatsApp</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">Message Sent Successfully!</h3>
                <p className="text-sm text-brand-slate-700 max-w-sm mx-auto">
                  Thank you for reaching out, {name}. Our team has received your message and will respond promptly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
