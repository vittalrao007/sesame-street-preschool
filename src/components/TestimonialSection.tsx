import React from 'react';
import { Star, MessageSquareQuote, Info } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';

export const TestimonialSection: React.FC = () => {
  const { config, openConfig } = useBusinessConfig();

  if (!config.showTestimonials || !config.testimonials || config.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-[#FFF9F3] border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9F1239] bg-[#FBE5E7] px-3 py-1 rounded-full border border-[#F8D2D6]">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Parent Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Loved by Parents, Cherished by Children
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Real stories from families whose little ones took their very first academic and social steps with us.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {config.testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EFE7DE] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                  {[...Array(test.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-sm text-[#475569] italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFE8A3] text-[#854D0E] font-bold flex items-center justify-center text-sm shrink-0">
                  {test.parentName.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#203047]">
                    {test.parentName}
                  </div>
                  <div className="text-xs text-[#64748B]">
                    {test.childInfo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo / Placeholder Disclosure Note */}
        <div className="mt-8 max-w-2xl mx-auto p-3.5 rounded-2xl bg-white/70 border border-[#EFE7DE] flex items-center justify-between gap-3 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#854D0E] shrink-0" />
            <span>Sample illustrative parent testimonials. You can edit, replace, or toggle off testimonials anytime in the website configuration.</span>
          </div>
          <button
            onClick={() => openConfig()}
            className="font-bold text-[#203047] underline underline-offset-2 hover:text-[#25A765] whitespace-nowrap shrink-0"
          >
            Configure
          </button>
        </div>

      </div>
    </section>
  );
};
