import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { BLOGS_DATA } from '../../data/blogs';
import type { BlogPost } from '../../types';
import { useQuoteModal } from '../../context/QuoteModalContext';

export const BlogSection: React.FC = () => {
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const blogBadgeColors: Record<string, string> = {
    'Destination Guide': 'bg-cyan-500 text-white',
    'Travel Tips': 'bg-amber-500 text-white',
    'Travel Advice': 'bg-emerald-500 text-white',
    'Family Travel': 'bg-purple-500 text-white',
  };

  return (
    <>
      <section className="py-16 sm:py-24 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Destination Guides & Insights
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
              Travel Inspiration
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Expert advice, packing checklists, and seasonal insights to plan your upcoming adventure.
            </p>
          </div>

          {/* 4 Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BLOGS_DATA.map((blog) => {
              const badgeClass = blogBadgeColors[blog.category] || 'bg-teal-500 text-white';
              return (
                <div
                  key={blog.id}
                  onClick={() => setActiveBlog(blog)}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className={`absolute top-3 left-3 ${badgeClass} text-[11px] font-bold px-3 py-1 rounded-full shadow-sm`}>
                        {blog.category}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-teal-600" /> {blog.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-teal-600" /> {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600 group-hover:text-teal-700">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Detail Reader Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-in fade-in">
          <div className="bg-white text-slate-900 max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden relative max-h-[85vh] flex flex-col border border-slate-200">
            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-64 w-full flex-shrink-0">
              <img
                src={activeBlog.image}
                alt={activeBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <button
                onClick={() => setActiveBlog(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2 shadow-md">
                  {activeBlog.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display text-white leading-tight">
                  {activeBlog.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100 font-medium">
                <span>By {activeBlog.author}</span>
                <span>•</span>
                <span>Published on {activeBlog.date}</span>
                <span>•</span>
                <span>{activeBlog.readTime}</span>
              </div>

              <div className="space-y-3.5 text-sm text-slate-700 leading-relaxed">
                {activeBlog.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* In-blog CTA */}
              <div className="mt-6 p-5 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Inspired to visit this destination?</h4>
                  <p className="text-xs text-slate-600">Get a tailor-made travel itinerary with hotels and transfers included.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveBlog(null);
                    openQuoteModal();
                  }}
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-black px-6 py-3 rounded-xl shadow-md flex-shrink-0 transition"
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
