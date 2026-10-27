import React from 'react';
import { ArrowRight, Clock, Check, Sparkles } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { PASTEL_SCHEMES } from '../utils/themeUtils';

export const ProgramsSection: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();

  return (
    <section id="programs" className="py-16 lg:py-24 bg-[#FFF9F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#854D0E] bg-[#FFE8A3] px-3 py-1 rounded-full border border-[#FEE28C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Age-Appropriate Learning Paths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Programs Tailored for Each Growth Stage
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            From early sensory steps in toddlerhood to foundational school readiness, our developmentally sequenced curriculum honors your child’s pace.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {config.programs.map((prog) => {
            const scheme = PASTEL_SCHEMES[prog.accentColor] || PASTEL_SCHEMES.mint;

            return (
              <div
                key={prog.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 border ${scheme.border} ${scheme.bgLight} transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div>
                  {/* Top Bar with Age Range & Timing */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${scheme.badgeBg} ${scheme.badgeText}`}>
                      {prog.ageRange}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#64748B] font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{prog.timing}</span>
                    </div>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-xl font-bold text-[#203047] mb-2.5">
                    {prog.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-5">
                    {prog.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-200/60">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Key Highlights:
                    </div>
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#25A765] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => openEnquiryModal(prog.name)}
                  className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#203047] text-white hover:bg-[#2c415e] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xs group"
                >
                  <span>Enquire for {prog.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Note on Age Eligibility & Customization */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#EFE7DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-[#64748B]">
            <span className="font-bold text-[#203047]">Flexible Enrollment:</span> Age ranges are guidelines for placement. Final classroom grouping is personalized based on your child’s emotional maturity during our friendly campus interaction.
          </div>
          <button
            onClick={() => openEnquiryModal()}
            className="text-xs font-bold text-[#203047] underline underline-offset-4 hover:text-[#25A765] whitespace-nowrap"
          >
            Ask Principal about your child's age
          </button>
        </div>

      </div>
    </section>
  );
};
