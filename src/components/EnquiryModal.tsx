import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { getWhatsAppUrl } from '../utils/contactUtils';

export const EnquiryModal: React.FC = () => {
  const { config, isEnquiryModalOpen, closeEnquiryModal, selectedProgramForEnquiry } = useBusinessConfig();

  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(selectedProgramForEnquiry || 'Playgroup');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedProgramForEnquiry) {
      setSelectedProgram(selectedProgramForEnquiry);
    }
    if (isEnquiryModalOpen) {
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isEnquiryModalOpen, selectedProgramForEnquiry]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnquiryModalOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnquiryModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!parentName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanDigits = phone.replace(/\D/g, '');
    if (!cleanDigits || cleanDigits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSuccess(true);
  };

  const handleForwardToWhatsApp = () => {
    const text = `Hello Principal,\nI am submitting an admission enquiry for ${config.preschoolName}:\n• Parent Name: ${parentName}\n• Phone: ${phone}\n• Program: ${selectedProgram}\n• Child's Age: ${childAge || 'Not specified'}\n• Preferred Visit: ${visitDate || 'Flexible'}\n• Note: ${notes || 'None'}`;
    const directUrl = getWhatsAppUrl(config.whatsappNumber, text);
    if (directUrl) {
      window.open(directUrl, '_blank', 'noopener,noreferrer');
    }
    closeEnquiryModal();
  };

  if (!isEnquiryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={closeEnquiryModal} />

      <div
        className="relative z-10 w-full max-w-lg bg-[#FFF9F3] rounded-3xl shadow-2xl border border-[#EFE7DE] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#EFE7DE] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#DDF4E7] text-[#25A765] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#203047]">
                Admission Enquiry & Tour
              </h3>
              <p className="text-xs text-[#64748B]">
                {config.preschoolName}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeEnquiryModal}
            className="p-2 rounded-xl text-[#64748B] hover:text-[#203047] hover:bg-[#F3EBE2] transition-colors focus-visible:outline-2 focus-visible:outline-[#203047]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Parent's Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Rohini Deshmukh"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 7337737717"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Child's Age
                  </label>
                  <input
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="e.g. 2 years 4 months"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Program Interested
                  </label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  >
                    {config.programs.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.ageRange})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Questions or Special Requirements
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Requesting fee brochure and morning daycare details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#203047]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#203047] text-white hover:bg-[#2c415e] active:scale-95 transition-all flex items-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Enquiry</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#DDF4E7] text-[#166534] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#25A765]" />
              </div>
              <h4 className="text-xl font-bold text-[#203047]">
                Enquiry Recorded, {parentName}!
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-sm mx-auto">
                Our admissions team will connect with you on {phone}. Would you also like to send this directly to the Principal's WhatsApp right now?
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleForwardToWhatsApp}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25A765] text-white font-bold text-xs sm:text-sm hover:bg-[#1e8d54] flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp to Principal</span>
                </button>
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="text-xs font-semibold text-[#64748B] hover:text-[#203047]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
