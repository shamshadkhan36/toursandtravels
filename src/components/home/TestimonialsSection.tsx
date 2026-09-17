import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Real Traveler Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            What Our Travellers Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real experiences and authentic reviews from families, honeymooners, and explorers.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-2xl shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900">4.9 / 5 Average Rating</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-600 font-medium">Verified Travel Enquiries & Bookings</span>
          </div>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6" />

              <div>
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Traveller
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shadow-sm"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">{item.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="text-teal-600 font-bold">{item.tripTaken}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
