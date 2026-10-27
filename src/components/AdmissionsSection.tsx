import React from 'react';
import { Phone, MessageCircle, FileText, CheckCircle2, Calendar, ClipboardCheck } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { getTelUrl, getWhatsAppUrl } from '../utils/contactUtils';

export const AdmissionsSection: React.FC = () => {
  const { config, openEnquiryModal } = useBusinessConfig();

  const telLink = getTelUrl(config.principalPhone || config.generalPhone);
  const waLink = getWhatsAppUrl(config.whatsappNumber, config.whatsappPrefillMessage);

  const steps = [
    {
      num: '01',
      title: 'Initial Enquiry & Details',
      desc: 'Submit our online form, call the Principal, or drop a WhatsApp message to check program slot availability.'
    },
    {
      num: '02',
      title: 'Guided Campus Walkthrough',
      desc: 'Visit our campus with your child to experience classrooms, meet caring educators, and observe our daily rhythm.'
    },
    {
      num: '03',
      title: 'Child Interaction & Registration',
      desc: 'A relaxed, stress-free chat to understand your child’s temperament and habits, followed by document submission.'
    },
    {
      num: '04',
      title: 'Warm Welcome & Settling In',
      desc: 'Gentle phased settling-in schedule with gradual hours to make transition completely tear-free and joyful.'
    }
  ];

  const suggestedDocs = [
    'Child\'s Birth Certificate (photocopy)',
    'Recent passport-size photographs of child (4 copies)',
    'Photographs of Parents / Designated Guardians (2 copies each)',
    'Child\'s Immunization / Vaccination record copy',
    'Address proof of parents (Aadhaar / Passport / Electricity bill)'
  ];

  return (
    <section id="admissions" className="py-16 lg:py-24 bg-white/70 border-t border-[#EFE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534] bg-[#DDF4E7] px-3 py-1 rounded-full border border-[#C8EDD7]">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Smooth & Caring Enrollment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#203047] tracking-tight">
            Admissions Process for Academic Year 2026–27
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            {config.admissionEnquiryText}
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-6 rounded-3xl bg-[#FFF9F3] border border-[#EFE7DE] shadow-2xs relative"
            >
              <div className="text-3xl font-black text-[#25A765]/40 mb-3 tabular-nums">
                {st.num}
              </div>
              <h3 className="font-bold text-base text-[#203047] mb-2">
                {st.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column: Checklist & Contact Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Documents Checklist (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FFF9F3] border border-[#EFE7DE] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-[#854D0E]" />
                <h3 className="text-lg font-bold text-[#203047]">
                  Suggested Documents Checklist
                </h3>
              </div>
              <p className="text-xs text-[#64748B] mb-5">
                Parents are requested to carry copies of these documents during the admission confirmation:
              </p>
              
              <div className="space-y-3">
                {suggestedDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#25A765] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFE7DE] text-[11px] text-[#64748B] italic">
              * Note: Document requirements are standard guidelines and subject to final confirmation during the campus visit.
            </div>
          </div>

          {/* Direct Admission Actions Box (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#203047] text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#25A765] text-white inline-block">
                Direct Principal Desk
              </span>
              <h3 className="text-2xl font-bold leading-tight">
                Have questions regarding fees or slot availability?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our Principal for personalized guidance regarding your child’s age eligibility and daycare schedule.
              </p>
            </div>

            <div className="space-y-3 pt-6">
              {/* WhatsApp Principal */}
              {waLink && (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#25A765] hover:bg-[#1e8d54] text-white flex items-center justify-center gap-2.5 transition-all shadow-md shadow-[#25A765]/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Principal Directly</span>
                </a>
              )}

              {/* Call Principal */}
              {telLink && (
                <a
                  href={telLink}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2.5 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FFE8A3]" />
                  <span>Call {config.principalPhone || config.generalPhone}</span>
                </a>
              )}

              {/* Online Form Modal */}
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#FFE8A3] text-[#854D0E] hover:bg-[#ffe082] flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Fill Instant Admission Enquiry Form</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
