import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { getTelUrl, getWhatsAppUrl } from '../utils/contactUtils';

export const FloatingContactButtons: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();

  const telLink = getTelUrl(config.principalPhone || config.generalPhone);
  const waLink = getWhatsAppUrl(config.whatsappNumber, config.whatsappPrefillMessage);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right, fixed, z-30) */}
      {waLink && (
        <div className="fixed bottom-6 right-6 z-30 hidden sm:flex flex-col items-end gap-2.5">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with the Principal on WhatsApp"
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25A765] text-white font-bold text-sm shadow-xl hover:bg-[#1e8d54] hover:scale-105 active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#25A765]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="whitespace-nowrap">WhatsApp Principal</span>
          </a>
        </div>
      )}

      {/* Mobile Bottom Sticky Quick Action Bar (Under 15% screen height, fixed bottom) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#EFE7DE] px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
        {telLink && (
          <a
            href={telLink}
            className="flex-1 py-2 px-2 rounded-xl bg-[#DDF4E7] text-[#166534] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        )}

        {waLink && (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2 rounded-xl bg-[#25A765] text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        )}

        <button
          type="button"
          onClick={() => openEnquiryModal()}
          className="flex-1 py-2 px-2 rounded-xl bg-[#203047] text-white font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <span>Enquire</span>
        </button>
      </div>
    </>
  );
};
