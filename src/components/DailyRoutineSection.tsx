import React from 'react';
import { Clock, Calendar, Sparkles } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { PASTEL_SCHEMES } from '../utils/themeUtils';

export const DailyRoutineSection: React.FC = () => {
  const { config } = useBusinessConfig();

  return (
    <section className="py-16 lg:py-24 bg-[#FFF9F3] border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#854D0E] bg-[#FFE8A3] px-3 py-1 rounded-full border border-[#FEE28C]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Structured Yet Playful</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            A Typical Joyful Day at Our Campus
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Predictable daily rhythms give young children a strong sense of emotional security, allowing them to participate and thrive with enthusiasm.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.dailyRoutine.map((item, index) => {
            const scheme = PASTEL_SCHEMES[item.accent] || PASTEL_SCHEMES.mint;

            return (
              <div
                key={item.id}
                className={`p-6 rounded-3xl bg-white border ${scheme.border} shadow-2xs hover:shadow-md transition-all duration-200 relative overflow-hidden`}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#203047]">
                    <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                    <span className="tabular-nums">{item.time}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${scheme.badgeBg} ${scheme.badgeText}`}>
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#203047] mb-1.5">
                  {item.activity}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Illustrative Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          <span className="font-semibold text-[#203047]">Note:</span> Daily schedules are illustrative and slightly adapt based on children's moods, weather, and specific age groups.
        </div>

      </div>
    </section>
  );
};
