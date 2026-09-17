import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PopularCategories } from '../components/home/PopularCategories';
import { FeaturedDestinations } from '../components/home/FeaturedDestinations';
import { FeaturedPackages } from '../components/home/FeaturedPackages';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CustomTripSection } from '../components/home/CustomTripSection';
import { TravelServices } from '../components/home/TravelServices';
import { HowItWorks } from '../components/home/HowItWorks';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { BlogSection } from '../components/home/BlogSection';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCtaBanner } from '../components/home/FinalCtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Popular Tour Categories */}
      <PopularCategories />

      {/* 3. Featured Destinations */}
      <FeaturedDestinations />

      {/* 4. Featured Tour Packages */}
      <FeaturedPackages />

      {/* 5. Why Choose ShamshadCodes */}
      <WhyChooseUs />

      {/* 6. Custom Trip Section (Have a Destination in Mind?) */}
      <CustomTripSection />

      {/* 7. Travel Services */}
      <TravelServices />

      {/* 8. How It Works (4-Step Timeline) */}
      <HowItWorks />

      {/* 9. Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. Travel Inspiration / Blog */}
      <BlogSection />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Final Call-To-Action Banner */}
      <FinalCtaBanner />
    </div>
  );
};
