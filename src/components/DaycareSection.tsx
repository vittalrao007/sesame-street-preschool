import React, { useState } from 'react';
import { Clock, Moon, Utensils, Shield, HeartHandshake, Smile, CheckCircle } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';

export const DaycareSection: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="daycare" className="py-16 lg:py-24 bg-white/70 border-y border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#581C87] bg-[#EAE3FA] px-3 py-1 rounded-full border border-[#DDD4F7]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Reliable Daycare & Extended Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            A Safe, Loving Second Home for Your Child
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Designed for working parents seeking dependable, affectionate care with balanced meals, refreshing afternoon naps, and joyful after-school play.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Daycare Routine & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Timing Highlight Card */}
            <div className="p-5 rounded-2xl bg-[#F9F7FE] border border-[#DDD4F7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAE3FA] text-[#581C87] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-[#581C87] tracking-wider">Operating Timings</div>
                  <div className="text-sm sm:text-base font-extrabold text-[#203047]">
                    {config.daycareHours}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#581C87] border border-[#DDD4F7]">
                Monday – Saturday
              </span>
            </div>

            {/* Core Daycare Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-8 h-8 rounded-lg bg-[#FFE8A3] text-[#854D0E] flex items-center justify-center mb-2.5">
                  <Moon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Cozy Afternoon Naps</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Individual clean cots, fresh laundered bedsheets, calm ambient lighting, and soothing lullabies for peaceful sleep.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-8 h-8 rounded-lg bg-[#DDF4E7] text-[#166534] flex items-center justify-center mb-2.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Meal & Snack Support</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Gentle assistance with feeding, clean dining hygiene, warm water refills, and healthy evening fruit/snack times.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-8 h-8 rounded-lg bg-[#DDEFFD] text-[#1E40AF] flex items-center justify-center mb-2.5">
                  <Smile className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Engaging Hobbies & Play</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Puzzles, clay modeling, picture books, drawing, and supervised social games to prevent screen dependency.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F3] border border-[#EFE7DE]">
                <div className="w-8 h-8 rounded-lg bg-[#FBE5E7] text-[#9F1239] flex items-center justify-center mb-2.5">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#203047]">Verified Female Caregivers</h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Trained support ayahs with police verification, first-aid readiness, and patient, affectionate demeanors.
                </p>
              </div>

            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiryModal('Daycare & Extended Care')}
                className="px-6 py-3 rounded-xl bg-[#203047] text-white font-bold text-sm hover:bg-[#2c415e] active:scale-95 transition-all shadow-xs"
              >
                Enquire for Daycare Seat
              </button>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#166534]">
                <CheckCircle className="w-4 h-4 text-[#25A765]" />
                <span>Half-day & Full-day slots available</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#EFE7DE] shadow-md bg-[#F9F7FE]">
              {!imageError ? (
                <img
                  src="/images/reading_corner.jpg"
                  alt="Comfortable daycare quiet corner with soft cushions, picture books, and plush toys"
                  className="w-full h-[340px] sm:h-[400px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[360px] bg-[#EAE3FA] flex flex-col items-center justify-center p-6 text-center">
                  <Moon className="w-12 h-12 text-[#581C87] mb-3" />
                  <span className="font-bold text-[#203047]">Daycare Quiet Haven</span>
                </div>
              )}

              <div className="p-4 bg-white/95 border-t border-[#EFE7DE] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#203047]">Quiet Nook & Story Bedtime</div>
                  <div className="text-[11px] text-[#64748B]">Gentle environment that feels just like home</div>
                </div>
                <span className="text-[11px] font-semibold text-[#581C87] bg-[#EAE3FA] px-2.5 py-1 rounded-lg">
                  Peaceful
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
