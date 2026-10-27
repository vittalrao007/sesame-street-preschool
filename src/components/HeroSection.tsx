import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { getTelUrl, getWhatsAppUrl } from '../utils/contactUtils';

export const HeroSection: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();
  const [imageError, setImageError] = useState(false);

  const telLink = getTelUrl(config.principalPhone || config.generalPhone);
  const waLink = getWhatsAppUrl(config.whatsappNumber, config.whatsappPrefillMessage);

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Subtle Pastel Background Accent Shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-[#DDF4E7]/60 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#FFE8A3]/50 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-[#FBE5E7]/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Admissions Banner Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF4E7] border border-[#C8EDD7] text-xs font-bold text-[#166534] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#25A765]" />
              <span>Admissions Open for Academic Year 2026–27</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#203047] leading-[1.15] text-balance">
              {config.tagline || 'Little Steps Today, Bright Futures Tomorrow!'}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              A warm, joyful space where young minds explore, create, play, and blossom. Discover developmentally enriched preschool learning and trustworthy, dependable daycare support tailored for busy Indian families.
            </p>

            {/* Three Prominent CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* 1. Call the Principal */}
              {telLink ? (
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#203047] text-white font-bold text-sm sm:text-base hover:bg-[#2c415e] active:scale-95 transition-all shadow-md shadow-[#203047]/10"
                >
                  <Phone className="w-4 h-4 text-[#FFE8A3]" />
                  <span>Call the Principal</span>
                </a>
              ) : (
                <button
                  onClick={() => openEnquiryModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#203047] text-white font-bold text-sm sm:text-base hover:bg-[#2c415e] active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FFE8A3]" />
                  <span>Enquire Now</span>
                </button>
              )}

              {/* 2. WhatsApp the Principal */}
              {waLink && (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25A765] text-white font-bold text-sm sm:text-base hover:bg-[#1e8d54] active:scale-95 transition-all shadow-md shadow-[#25A765]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              )}

              {/* 3. Explore Our Programs */}
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#programs');
                  if (target) {
                    const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-[#E2D9CF] text-[#203047] font-bold text-sm sm:text-base hover:bg-[#FFF9F3] hover:border-[#203047] active:scale-95 transition-all"
              >
                <span>Explore Programs</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Quick Trust Checks */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25A765]" />
                <span>Montessori & Play-Based</span>
              </div>
              <span className="text-[#CBD5E1]">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25A765]" />
                <span>1:5 Low Ratio Care</span>
              </div>
              <span className="text-[#CBD5E1]">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25A765]" />
                <span>Flexible Daycare Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Classroom Photography with Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Pastel Frame */}
              <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-xl shadow-slate-200/60 bg-[#DDF4E7]">
                
                {/* Real Classroom Photo with Graceful Fallback */}
                {!imageError ? (
                  <img
                    src="/images/hero_classroom.jpg"
                    alt="Caring teacher reading an engaging picture book to happy children in a sunlit classroom"
                    className="w-full h-[340px] sm:h-[420px] object-cover transition-transform duration-500 hover:scale-102"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback Container if image asset cannot load */
                  <div className="w-full h-[380px] bg-gradient-to-br from-[#DDF4E7] via-[#DDEFFD] to-[#FFE8A3] flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-[#25A765] mb-4 shadow-sm">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#203047] mb-2">{config.preschoolName}</h3>
                    <p className="text-sm text-[#64748B] max-w-xs">
                      A safe, cheerful haven for early learning, creativity, and caring friendships.
                    </p>
                  </div>
                )}

                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#203047]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white text-xs font-semibold drop-shadow-sm flex items-center justify-between">
                  <span>Interactive Story Hour</span>
                  <span className="bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px]">Daily Routine</span>
                </div>
              </div>

              {/* Floating Badge 1: Play-based learning (Top Left Offset) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl shadow-lg border border-[#FFE8A3] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FFE8A3] flex items-center justify-center text-[#854D0E]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#203047]">Play-Based Learning</div>
                  <div className="text-[11px] text-[#64748B]">Hands-on sensory curiosity</div>
                </div>
              </div>

              {/* Floating Badge 2: Caring educators (Bottom Right Offset) */}
              <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl shadow-lg border border-[#DDF4E7] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#DDF4E7] flex items-center justify-center text-[#166534]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#203047]">Caring Educators</div>
                  <div className="text-[11px] text-[#64748B]">Verified & first-aid trained</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Proof Bar / Trust Highlights (Strip below hero split) */}
        <div className="mt-14 pt-8 border-t border-[#EFE7DE] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/60 border border-[#EFE7DE] shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#203047] tabular-nums">
              Est. {config.establishedYear || '2018'}
            </div>
            <div className="text-xs text-[#64748B] mt-1 font-medium">Years of Trusted Early Care</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 border border-[#EFE7DE] shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#166534] tabular-nums">1:5 Ratio</div>
            <div className="text-xs text-[#64748B] mt-1 font-medium">Individual Attention in Playgroup</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 border border-[#EFE7DE] shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#854D0E] tabular-nums">6:30 PM</div>
            <div className="text-xs text-[#64748B] mt-1 font-medium">Full Extended Daycare Facility</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 border border-[#EFE7DE] shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1E40AF]">Safe Haven</div>
            <div className="text-xs text-[#64748B] mt-1 font-medium">Monitored & Child-Proofed</div>
          </div>
        </div>

      </div>
    </section>
  );
};
