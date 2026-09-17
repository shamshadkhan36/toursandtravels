export type Currency = 'INR' | 'USD' | 'AED' | 'EUR';

export interface CurrencyRate {
  code: Currency;
  symbol: string;
  rateFromINR: number;
  label: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string;
  stay: string;
}

export interface HotelOption {
  name: string;
  starRating: number;
  type: string;
  location: string;
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  region: 'India' | 'International';
  duration: {
    nights: number;
    days: number;
  };
  priceINR: number;
  originalPriceINR?: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  popular: boolean;
  category: string[];
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  hotels: HotelOption[];
  transportation: string;
  importantNotes: string[];
  faqs: { question: string; answer: string }[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'India' | 'International';
  tagline: string;
  description: string;
  image: string;
  category: string[];
  bestTimeToVisit: string;
  weatherAvg: string;
  startingPriceINR: number;
  popularSpots: string[];
  packagesCount: number;
  featured: boolean;
}

export interface TourCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  slug: string;
}

export interface TravelService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tripTaken: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking' | 'Customization' | 'Services' | 'Payments' | 'General';
}

export interface EnquiryFormData {
  fullName: string;
  mobile: string;
  email: string;
  destination: string;
  travelDate: string;
  returnDate: string;
  adults: number;
  children: number;
  budget: string;
  tripType: string;
  hotelPreference: string;
  transportation: string;
  additionalRequirements: string;
  packageInterest?: string;
}
