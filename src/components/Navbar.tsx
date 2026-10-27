import React, { useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { getTelUrl, getWhatsAppUrl } from '../utils/contactUtils';

export const Navbar: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const telLink = getTelUrl(config.principalPhone || config.generalPhone);
  const waLink = getWhatsAppUrl(config.whatsappNumber, config.whatsappPrefillMessage);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Daycare', href: '#daycare' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF9F3]/95 backdrop-blur-md border-b border-[#EFE7DE] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single-Line) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-[#25A765] rounded-lg"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#DDF4E7] border border-[#C8EDD7] flex items-center justify-center text-[#25A765] shadow-xs group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-9" />
                <path d="M9 15c-3-2-4-7 1-9 1 3 3 5 8 5" />
                <path d="M15 11c3-2 4-6-1-8-1 3-3 5-8 5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#203047] group-hover:text-[#25A765] transition-colors">
                {config.preschoolName || 'Sesame Street Preschool'}
              </span>
              <span className="text-xs text-[#64748B] font-medium hidden sm:block">
                Preschool & Daycare
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-Line, 4-6 links) */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-[#203047]">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-[#25A765] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#25A765] hover:after:w-full after:transition-all focus-visible:outline-2 focus-visible:outline-[#25A765]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {telLink ? (
              <a
                href={telLink}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-[#DDF4E7] text-[#166534] hover:bg-[#C8EDD7] active:scale-95 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#166534]"
                aria-label={`Call the Principal at ${config.principalPhone}`}
              >
                <Phone className="w-4 h-4 text-[#166534]" />
                <span className="whitespace-nowrap">Call Principal</span>
              </a>
            ) : null}

            <button
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-[#203047] text-white hover:bg-[#2c415e] active:scale-95 transition-all shadow-xs whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#203047]"
            >
              Enquire Now
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#203047] hover:bg-[#F3EBE2] transition-colors focus-visible:outline-2 focus-visible:outline-[#203047]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EFE7DE] bg-[#FFF9F3] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#EFE7DE]">
            {telLink && (
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#DDF4E7] text-[#166534]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Principal</span>
              </a>
            )}
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25A765] text-white"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2.5 rounded-xl text-base font-semibold text-[#203047] hover:bg-[#FBE5E7] hover:text-[#9F1239] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquiryModal();
              }}
              className="w-full py-3 rounded-xl bg-[#203047] text-white font-bold text-sm shadow-sm text-center"
            >
              Book Campus Tour / Enquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
