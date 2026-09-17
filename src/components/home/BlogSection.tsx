import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '../../data/blogs';
import type { BlogPost } from '../../types';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const BlogSection: React.FC = () => {
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <section className="py-16 sm:py-24 bg-brand-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-brand-teal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Destination Guides & Insights
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
              Travel Inspiration
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-slate-700">
              Expert advice, packing checklists, and seasonal insights to plan your upcoming adventure.
            </p>
          </div>

          {/* 4 Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BLOGS_DATA.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setActiveBlog(blog)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-brand-slate-200/80 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-brand-navy/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {blog.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-brand-slate-700 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-brand-teal" /> {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-teal" /> {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-display text-brand-navy group-hover:text-brand-teal transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="mt-2 text-xs text-brand-slate-700 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-5 pb-5 pt-3 border-t border-brand-slate-100 flex items-center justify-between text-xs font-semibold text-brand-teal group-hover:text-brand-teal-hover">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Reader Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-dark/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white text-brand-navy max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden relative max-h-[85vh] flex flex-col">
            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-64 w-full flex-shrink-0">
              <img
                src={activeBlog.image}
                alt={activeBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-black/30 to-transparent"></div>
              
              <button
                onClick={() => setActiveBlog(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  {activeBlog.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                  {activeBlog.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-4 text-xs text-brand-slate-700 pb-3 border-b border-brand-slate-100">
                <span>By {activeBlog.author}</span>
                <span>•</span>
                <span>Published on {activeBlog.date}</span>
                <span>•</span>
                <span>{activeBlog.readTime}</span>
              </div>

              <div className="space-y-3.5 text-sm text-brand-slate-700 leading-relaxed">
                {activeBlog.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* In-blog CTA */}
              <div className="mt-6 p-5 bg-teal-50 border border-teal-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-brand-navy">Inspired to visit?</h4>
                  <p className="text-xs text-brand-slate-700">Get a tailor-made travel itinerary with hotels and transfers included.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveBlog(null);
                    openQuoteModal();
                  }}
                  className="bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md flex-shrink-0 transition"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
