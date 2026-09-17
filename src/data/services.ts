import type { TravelService } from '../types';

export const SERVICES_DATA: TravelService[] = [
  {
    id: 'tour-packages',
    title: 'Curated Tour Packages',
    description: 'All-inclusive domestic and international holiday packages with handpicked stays, transfers, and sightseeing.',
    iconName: 'Compass',
    features: ['Fixed & flexible departure dates', 'Pre-arranged entry tickets', 'Verified quality standards', 'Best price guarantee'],
  },
  {
    id: 'custom-itineraries',
    title: 'Customised Itineraries',
    description: 'Tailor-made trips designed completely around your travel style, pace, preferences, and budget.',
    iconName: 'Sparkles',
    features: ['1-on-1 travel planner consultation', 'Flexible day-by-day customization', 'Exclusive local experiences', 'Transparent pricing'],
  },
  {
    id: 'hotel-booking',
    title: 'Hotel & Resort Booking',
    description: 'Exclusive negotiated rates at verified 3★, 4★, 5★ luxury hotels, boutique heritage havelis, and private villas.',
    iconName: 'Hotel',
    features: ['Instant room confirmation', 'Complimentary room upgrades where available', 'Free breakfast inclusions', 'Special honeymoon perks'],
  },
  {
    id: 'flight-assistance',
    title: 'Flight Assistance',
    description: 'Best flight route recommendations, seat selection, extra baggage assistance, and multi-city flight booking.',
    iconName: 'Plane',
    features: ['Domestic & international airlines', 'Competitive group airfares', 'Web check-in assistance', 'Rebooking & reschedule support'],
  },
  {
    id: 'visa-assistance',
    title: 'Visa & Forex Assistance',
    description: 'Hassle-free tourist visa guidance, document checklist review, submission support, and currency exchange.',
    iconName: 'FileCheck',
    features: ['UAE, Bali, Singapore & Europe visas', 'High approval success rate', 'Express processing options', 'Mandatory travel insurance'],
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers & Cabs',
    description: 'Prompt, sanitized, and punctual private airport pickups and drop-offs with courteous professional drivers.',
    iconName: 'Car',
    features: ['Flight tracking for zero wait-time', 'Pre-booked clean private vehicles', 'English & Hindi speaking drivers', 'All tolls & parking included'],
  },
  {
    id: 'transportation',
    title: 'Private Transportation',
    description: 'Dedicated sedans, luxury SUVs (Innova Crysta), and tempo travellers for comfortable sightseeing throughout your trip.',
    iconName: 'Navigation',
    features: ['Experienced mountain & highway drivers', 'AC vehicles with GPS tracking', 'Flexible sightseeing hours', 'Zero hidden fuel costs'],
  },
  {
    id: 'group-travel',
    title: 'Group & Corporate Travel',
    description: 'Seamless group tours, family reunions, destination weddings, and corporate offsite retreats with dedicated managers.',
    iconName: 'Users',
    features: ['Dedicated on-ground tour coordinator', 'Buffet group meal arrangements', 'Team building activities & banquets', 'Discounted group slab pricing'],
  },
];
