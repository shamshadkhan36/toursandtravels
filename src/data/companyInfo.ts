export const COMPANY_INFO = {
  brandName: 'ShamshadCodes Tours & Travel',
  shortName: 'ShamshadCodes',
  tagline: 'Your Journey. Our Expertise.',
  subTagline: 'Discover unforgettable destinations with thoughtfully planned tours, comfortable stays and hassle-free travel assistance.',
  mission: 'Making travel planning simpler, more transparent, and truly unforgettable — one journey at a time.',
  
  phone: '+91 98765 43210',
  phoneRaw: '+919876543210',
  whatsapp: '+91 98765 43210',
  whatsappRaw: '919876543210',
  email: 'info@shamshadcodes.com',
  supportEmail: 'support@shamshadcodes.com',
  
  officeAddress: {
    line1: 'Level 4, Business Central Tower, 100 Feet Road',
    line2: 'Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560038',
    country: 'India',
  },
  
  workingHours: 'Mon - Sat: 9:00 AM - 8:00 PM IST | 24/7 On-Trip Emergency Support',

  socialLinks: {
    instagram: 'https://instagram.com/shamshadcodes',
    facebook: 'https://facebook.com/shamshadcodes',
    youtube: 'https://youtube.com/@shamshadcodes',
    linkedin: 'https://linkedin.com/company/shamshadcodes',
  },

  trustBadges: [
    { title: 'Customised Trips', desc: 'Crafted around your pace & budget', icon: 'Sparkles' },
    { title: '24/7 Travel Assistance', desc: 'Dedicated concierge on trip', icon: 'Headphones' },
    { title: 'Transparent Pricing', desc: 'Zero hidden taxes or surprise fees', icon: 'ShieldCheck' },
    { title: 'Handpicked Stays', desc: 'Verified 3★, 4★ & 5★ luxury stays', icon: 'Hotel' },
  ],

  stats: [
    { value: '100%', label: 'Personalised Planning', note: 'Tailored for every group' },
    { value: '4.9/5', label: 'Average Traveller Rating', note: 'Based on genuine reviews' },
    { value: '50+', label: 'Curated Destinations', note: 'Across India & Globe' },
    { value: '24/7', label: 'On-Trip Assistance', note: 'Always a call away' },
  ],
};

export const generateWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encoded}`;
};
