import React, { useState } from 'react';
import { Compass, Users, HeartHandshake, Sparkles, BookOpen } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';

export const AboutSection: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-16 lg:py-24 bg-white/70 border-y border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] bg-[#DDF4E7] px-3 py-1 rounded-full border border-[#C8EDD7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Philosophy & Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Nurturing Curiosity in Every Child
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            We understand that early childhood is the foundation of lifelong confidence, creativity, and love for learning.
          </p>
        </div>

        {/* 2-Column Split: Story & Classroom Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#EFE7DE] shadow-md bg-[#FFFDF4]">
              {!imageError ? (
                <img
                  src="/images/art_activity.jpg"
                  alt="Children enthusiastically exploring watercolor painting and wooden building blocks"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[340px] bg-[#FFF8DE] flex flex-col items-center justify-center p-6 text-center">
                  <BookOpen className="w-12 h-12 text-[#854D0E] mb-3" />
                  <span className="font-bold text-[#203047]">Creative Play Area</span>
                </div>
              )}
              
              {/* Photo caption footer */}
              <div className="p-4 bg-white/95 border-t border-[#EFE7DE] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#203047]">Child-Led Creative Studio</div>
                  <div className="text-[11px] text-[#64748B]">Daily sensory art & motor skill activities</div>
                </div>
                <span className="text-[11px] font-semibold text-[#854D0E] bg-[#FFE8A3] px-2.5 py-1 rounded-lg">
                  Hands-on
                </span>
              </div>
            </div>
          </div>

          {/* Description & Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-base text-[#475569] leading-relaxed">
              <p className="font-medium text-lg text-[#203047]">
                Welcome to {config.preschoolName || 'our preschool'}, established in {config.establishedYear || '2018'} to provide a respectful, joyous environment for children in their formative early years.
              </p>
              <p>
                {config.aboutDescription}
              </p>
              <p>
                Rather than rushing children into rigid academic drills, we cultivate joyful observation, gentle problem-solving, and emotional resilience through a proven blend of play-based and Montessori-inspired methods.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-9 h-9 rounded-xl bg-[#DDF4E7] text-[#166534] flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Curiosity-Led</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-snug">
                  Encouraging toddlers to ask questions, experiment with textures, and think independently.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-9 h-9 rounded-xl bg-[#FFE8A3] text-[#854D0E] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Gentle Empathy</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-snug">
                  Patient educators who guide social sharing, manners, and emotional comfort without scolding.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-9 h-9 rounded-xl bg-[#DDEFFD] text-[#1E40AF] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Parent Partnership</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-snug">
                  Open, transparent communication on meals, sleep routines, and developmental milestones.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => openEnquiryModal()}
                className="px-5 py-3 rounded-xl bg-[#203047] text-white font-bold text-sm hover:bg-[#2c415e] active:scale-95 transition-all shadow-xs"
              >
                Schedule an In-Person Walkthrough
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
