import React from 'react';
import { Sparkles, Heart, Users, Compass, BellRing, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Play-Based Curriculum',
      description: 'Hands-on sensory games, rhythm, and imaginative play that build real cognitive and social confidence.',
      icon: Sparkles,
      color: 'bg-[#DDF4E7] text-[#166534]',
      border: 'border-[#C8EDD7]'
    },
    {
      title: 'Gentle & Trained Educators',
      description: 'Experienced early childhood teachers certified in gentle guidance, safety, and toddler communication.',
      icon: Heart,
      color: 'bg-[#FBE5E7] text-[#9F1239]',
      border: 'border-[#F8D2D6]'
    },
    {
      title: 'Low Child-to-Teacher Ratio',
      description: 'Small group batches (1:5 in toddler groups) ensuring no child feels overlooked or rushed.',
      icon: Users,
      color: 'bg-[#FFE8A3] text-[#854D0E]',
      border: 'border-[#FEE28C]'
    },
    {
      title: 'Curiosity-Driven Exploration',
      description: 'Montessori-style activity trays and sensory corners where children choose tasks and learn by doing.',
      icon: Compass,
      color: 'bg-[#DDEFFD] text-[#1E40AF]',
      border: 'border-[#C5E4FC]'
    },
    {
      title: 'Transparent Parent Updates',
      description: 'Regular notes on daily feeding, nap patterns, learning highlights, and milestone progress.',
      icon: BellRing,
      color: 'bg-[#EAE3FA] text-[#581C87]',
      border: 'border-[#DDD4F7]'
    },
    {
      title: 'Preschool + Daycare Under One Roof',
      description: 'Seamless transition from morning classes to afternoon daycare without relocating or disrupting routines.',
      icon: Clock,
      color: 'bg-[#DDF4E7] text-[#166534]',
      border: 'border-[#C8EDD7]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white/60 border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] bg-[#DDF4E7] px-3 py-1 rounded-full border border-[#C8EDD7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Families Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Thoughtful Early Care, Rooted in Warmth
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            We focus on what truly matters to parents: safety, affection, hygiene, and genuine happiness for their little ones.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-[#FFF9F3] border ${pt.border} hover:bg-white hover:shadow-md transition-all duration-200`}
              >
                <div className={`w-11 h-11 rounded-2xl ${pt.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#203047] mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
