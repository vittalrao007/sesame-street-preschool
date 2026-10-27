import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';

export const FAQSection: React.FC = () => {
  const { config } = useBusinessConfig();
  const [openId, setOpenId] = useState<string | null>(config.faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-[#FFF9F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E40AF] bg-[#DDEFFD] px-3 py-1 rounded-full border border-[#C5E4FC]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Clear answers to help you make an informed decision for your little one.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {config.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#EFE7DE] bg-white overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#203047] hover:bg-[#FFF9F3] transition-colors focus-visible:outline-2 focus-visible:outline-[#25A765]"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#FFF9F3] text-[#64748B] border border-[#EFE7DE] hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#203047]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#475569] leading-relaxed border-t border-slate-100 bg-[#FFFDF9]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on Fee & Policy details */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          Still have a specific query? Feel free to contact our admissions desk at{' '}
          <a href={`tel:${config.principalPhone}`} className="font-bold text-[#203047] underline">
            {config.principalPhone}
          </a>.
        </div>

      </div>
    </section>
  );
};
