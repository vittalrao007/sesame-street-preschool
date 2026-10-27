import React from 'react';
import { Sliders, Sparkles } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';

export const ConfigureButton: React.FC = () => {
  const { openConfig, isCustomized } = useBusinessConfig();

  return (
    <div className="fixed bottom-14 sm:bottom-6 left-4 sm:left-6 z-40">
      <button
        type="button"
        onClick={openConfig}
        aria-label="Configure Preschool Website Details"
        title="Open Business Configuration Drawer"
        className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-white/95 text-[#203047] hover:bg-[#FFF9F3] border-2 border-[#FFE8A3] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm font-bold group backdrop-blur-md focus-visible:outline-2 focus-visible:outline-[#25A765]"
      >
        <div className="w-6 h-6 rounded-full bg-[#FFE8A3] text-[#854D0E] flex items-center justify-center group-hover:rotate-45 transition-transform">
          <Sliders className="w-3.5 h-3.5" />
        </div>
        
        <span className="whitespace-nowrap">Configure Website</span>

        {isCustomized && (
          <span className="w-2 h-2 rounded-full bg-[#25A765]" title="Custom settings applied" />
        )}
      </button>
    </div>
  );
};
