import React from 'react';
import { BookOpen, Smile, Heart, Palette, Moon, ShieldCheck, Sparkles } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { PASTEL_SCHEMES } from '../utils/themeUtils';

export const FacilitiesSection: React.FC = () => {
  const { config } = useBusinessConfig();

  // Helper to render icon by name
  const renderIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Moon': return <Moon className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-[#FFF9F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E40AF] bg-[#DDEFFD] px-3 py-1 rounded-full border border-[#C5E4FC]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Designed for Child Safety & Active Wonder
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Every corner of our campus is scaled to toddler heights with soft safety corners, non-toxic finishes, and sanitization protocols.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.facilities.map((fac) => {
            const scheme = PASTEL_SCHEMES[fac.accentColor] || PASTEL_SCHEMES.mint;

            return (
              <div
                key={fac.id}
                className={`p-6 sm:p-7 rounded-3xl border ${scheme.border} ${scheme.bgLight} transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className={`w-12 h-12 rounded-2xl ${scheme.iconBg} flex items-center justify-center mb-4 shadow-2xs`}>
                  {renderIcon(fac.icon)}
                </div>
                <h3 className="text-lg font-bold text-[#203047] mb-2">
                  {fac.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {fac.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note on Campus Customization */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#64748B] italic">
            * Specific facility amenities may vary based on branch location. We encourage parents to take an in-person walkthrough.
          </p>
        </div>

      </div>
    </section>
  );
};
