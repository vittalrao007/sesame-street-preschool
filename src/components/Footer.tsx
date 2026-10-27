import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { getTelUrl } from '../utils/contactUtils';

export const Footer: React.FC = () => {
  const { config, openConfig } = useBusinessConfig();
  const currentYear = new Date().getFullYear();

  const telLink = getTelUrl(config.principalPhone || config.generalPhone);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Daycare Services', href: '#daycare' },
    { label: 'Campus Facilities', href: '#facilities' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Admissions 2026', href: '#admissions' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer id="contact" className="bg-[#203047] text-white pt-16 pb-24 lg:pb-16 border-t border-[#1a2638]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#DDF4E7] text-[#25A765] flex items-center justify-center font-bold text-lg">
                🌱
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {config.preschoolName}
                </span>
                <span className="text-xs text-slate-400">
                  Preschool & Daycare
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {config.tagline || 'Little Steps Today, Bright Futures Tomorrow!'}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A gentle, cheerful sanctuary where toddlers and young children learn through play, develop strong values, and prepare joyfully for primary schooling.
            </p>

            {/* Social Links if present */}
            <div className="flex items-center gap-3 pt-2">
              {config.instagramUrl && (
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25A765] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {config.facebookUrl && (
                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25A765] flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {config.youtubeUrl && (
                <a
                  href={config.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25A765] flex items-center justify-center text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FFE8A3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Offered (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {config.programs.map((p) => (
                <li key={p.id}>
                  <a
                    href="#programs"
                    onClick={(e) => handleNavClick(e, '#programs')}
                    className="hover:text-[#FFE8A3] transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#25A765] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {config.areaLocality ? `${config.areaLocality}, ` : ''}{config.city}, {config.state}
                </span>
              </div>
              {config.principalPhone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FFE8A3] shrink-0" />
                  <a href={telLink} className="hover:text-white font-medium">
                    {config.principalPhone}
                  </a>
                </div>
              )}
              {config.businessEmail && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5E4FC] shrink-0" />
                  <a href={`mailto:${config.businessEmail}`} className="hover:text-white">
                    {config.businessEmail}
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openConfig()}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
              >
                Website Business Configuration
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {config.preschoolName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with care for little minds</span>
            <Heart className="w-3.5 h-3.5 text-[#FBE5E7] fill-[#FBE5E7]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
