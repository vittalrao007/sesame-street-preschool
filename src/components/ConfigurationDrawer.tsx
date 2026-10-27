import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Check, AlertCircle, Info, Building, Phone, MapPin, Clock, Globe } from 'lucide-react';
import { useBusinessConfig } from '../context/BusinessConfigContext';
import { BusinessConfig } from '../types/business';

export const ConfigurationDrawer: React.FC = () => {
  const { config, updateConfig, resetConfig, isConfigOpen, closeConfig } = useBusinessConfig();

  // Local form state
  const [formData, setFormData] = useState<BusinessConfig>(config);
  const [activeTab, setActiveTab] = useState<'identity' | 'contact' | 'address' | 'hours' | 'social'>('identity');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Sync form data when drawer opens or config changes externally
  useEffect(() => {
    if (isConfigOpen) {
      setFormData(config);
      setSuccessMessage('');
      setErrorMessage('');
      setHasChanges(false);
    }
  }, [isConfigOpen, config]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isConfigOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConfigOpen, hasChanges]);

  // Lock background scroll when open
  useEffect(() => {
    if (isConfigOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isConfigOpen]);

  const handleChange = (field: keyof BusinessConfig, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    setHasChanges(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleClose = () => {
    if (hasChanges) {
      const confirmDiscard = window.confirm('You have unsaved changes. Discard them?');
      if (!confirmDiscard) return;
    }
    closeConfig();
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.preschoolName.trim()) {
      setErrorMessage('Preschool Name cannot be empty.');
      return;
    }
    if (!formData.principalPhone.trim() && !formData.generalPhone.trim()) {
      setErrorMessage('Please provide at least one contact phone number.');
      return;
    }
    if (formData.businessEmail && !formData.businessEmail.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const saved = updateConfig(formData);
    if (saved) {
      setHasChanges(false);
      setSuccessMessage('Business configuration updated successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
    } else {
      setErrorMessage('Could not save changes to browser storage.');
    }
  };

  const handleReset = () => {
    resetConfig();
    setShowResetConfirm(false);
    setHasChanges(false);
    setSuccessMessage('Reset to factory demo defaults successfully!');
  };

  if (!isConfigOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={handleClose} />

      {/* Drawer Container */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#FFF9F3] h-full shadow-2xl flex flex-col border-l border-[#EFE7DE] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#EFE7DE] bg-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#FFE8A3] text-[#854D0E]">
                Client Customizer
              </span>
              <h2 className="text-xl font-bold text-[#203047]">
                Configure Website
              </h2>
            </div>
            <p className="text-xs text-[#64748B] mt-1">
              Customize preschool identity, contact numbers, address, and offerings in real-time.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-xl text-[#64748B] hover:text-[#203047] hover:bg-[#F3EBE2] transition-colors focus-visible:outline-2 focus-visible:outline-[#203047]"
            aria-label="Close configuration panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Browser Local Storage Info Banner */}
        <div className="bg-[#FFFDF4] px-5 py-2.5 border-b border-[#FEE28C] flex items-center justify-between gap-3 text-xs text-[#854D0E]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 shrink-0 text-[#854D0E]" />
            <span>
              Changes persist in this browser via localStorage for live client demonstration.
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EFE7DE] bg-white px-4 overflow-x-auto no-scrollbar gap-2 py-2">
          <button
            type="button"
            onClick={() => setActiveTab('identity')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'identity' ? 'bg-[#203047] text-white' : 'text-[#64748B] hover:bg-[#FFF9F3]'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Identity</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'contact' ? 'bg-[#203047] text-white' : 'text-[#64748B] hover:bg-[#FFF9F3]'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact & WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('address')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'address' ? 'bg-[#203047] text-white' : 'text-[#64748B] hover:bg-[#FFF9F3]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Address & Map</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hours')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'hours' ? 'bg-[#203047] text-white' : 'text-[#64748B] hover:bg-[#FFF9F3]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Hours & Timings</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              activeTab === 'social' ? 'bg-[#203047] text-white' : 'text-[#64748B] hover:bg-[#FFF9F3]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Social & Options</span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Notifications */}
          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-[#DDF4E7] border border-[#C8EDD7] text-xs font-bold text-[#166534] flex items-center gap-2">
              <Check className="w-4 h-4 text-[#25A765]" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs font-bold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* TAB 1: BUSINESS IDENTITY */}
          {activeTab === 'identity' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Preschool Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.preschoolName}
                  onChange={(e) => handleChange('preschoolName', e.target.value)}
                  placeholder="e.g. Sesame Street Preschool"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Tagline / Hero Headline
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => handleChange('tagline', e.target.value)}
                  placeholder="e.g. Little Steps Today, Bright Futures Tomorrow!"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Established Year
                  </label>
                  <input
                    type="text"
                    value={formData.establishedYear}
                    onChange={(e) => handleChange('establishedYear', e.target.value)}
                    placeholder="e.g. 2018"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Preschool Age Range
                  </label>
                  <input
                    type="text"
                    value={formData.preschoolAgeRange}
                    onChange={(e) => handleChange('preschoolAgeRange', e.target.value)}
                    placeholder="e.g. 1.5 years to 6 years"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  About Us Description
                </label>
                <textarea
                  rows={4}
                  value={formData.aboutDescription}
                  onChange={(e) => handleChange('aboutDescription', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: CONTACT & WHATSAPP */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Principal's Phone Number (for "Call the Principal") *
                </label>
                <input
                  type="text"
                  required
                  value={formData.principalPhone}
                  onChange={(e) => handleChange('principalPhone', e.target.value)}
                  placeholder="e.g. +91 73377 37717"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
                <span className="text-[11px] text-[#64748B] mt-0.5 block">
                  Used directly in the "Call the Principal" buttons via tel: URL.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Principal's WhatsApp Number (with country code) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.whatsappNumber}
                  onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                  placeholder="e.g. +91 73377 37717 or 917337737717"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
                <span className="text-[11px] text-[#64748B] mt-0.5 block">
                  Automatically converted to clean digits for wa.me links.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  General Desk / Landline Contact
                </label>
                <input
                  type="text"
                  value={formData.generalPhone}
                  onChange={(e) => handleChange('generalPhone', e.target.value)}
                  placeholder="e.g. +91 73377 37717"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Admissions Email
                </label>
                <input
                  type="email"
                  value={formData.businessEmail}
                  onChange={(e) => handleChange('businessEmail', e.target.value)}
                  placeholder="e.g. admissions@sesamestreetpreschool.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  WhatsApp Prefilled Welcome Message
                </label>
                <textarea
                  rows={2}
                  value={formData.whatsappPrefillMessage}
                  onChange={(e) => handleChange('whatsappPrefillMessage', e.target.value)}
                  placeholder="e.g. Hello Principal, I would like to enquire about preschool admissions."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>
            </div>
          )}

          {/* TAB 3: ADDRESS & MAP */}
          {activeTab === 'address' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => handleChange('streetAddress', e.target.value)}
                  placeholder="e.g. Plot 42, 4th Cross, 12th Main Road, HAL 2nd Stage"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    Area / Locality
                  </label>
                  <input
                    type="text"
                    value={formData.areaLocality}
                    onChange={(e) => handleChange('areaLocality', e.target.value)}
                    placeholder="e.g. Indiranagar"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    placeholder="e.g. Bengaluru"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                    placeholder="e.g. Karnataka"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203047] mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    value={formData.pinCode}
                    onChange={(e) => handleChange('pinCode', e.target.value)}
                    placeholder="e.g. 560038"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Google Maps URL
                </label>
                <input
                  type="url"
                  value={formData.googleMapsUrl}
                  onChange={(e) => handleChange('googleMapsUrl', e.target.value)}
                  placeholder="https://maps.google.com/?q=..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>
            </div>
          )}

          {/* TAB 4: HOURS & TIMINGS */}
          {activeTab === 'hours' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Preschool & General Timings
                </label>
                <input
                  type="text"
                  value={formData.openingHours}
                  onChange={(e) => handleChange('openingHours', e.target.value)}
                  placeholder="e.g. 8:30 AM – 12:30 PM (Preschool) | 8:30 AM – 6:30 PM (Full Daycare)"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Working Days
                </label>
                <input
                  type="text"
                  value={formData.workingDays}
                  onChange={(e) => handleChange('workingDays', e.target.value)}
                  placeholder="e.g. Monday to Saturday"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Daycare Operating Hours
                </label>
                <input
                  type="text"
                  value={formData.daycareHours}
                  onChange={(e) => handleChange('daycareHours', e.target.value)}
                  placeholder="e.g. Full Day: 8:30 AM – 6:30 PM | Half Day: 12:30 PM – 6:30 PM"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Admission Enquiry Notice / Text
                </label>
                <textarea
                  rows={2}
                  value={formData.admissionEnquiryText}
                  onChange={(e) => handleChange('admissionEnquiryText', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Fee Structure Policy Note
                </label>
                <textarea
                  rows={2}
                  value={formData.feeInformation}
                  onChange={(e) => handleChange('feeInformation', e.target.value)}
                  placeholder="e.g. Transparent fee structure based on program selection..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>
            </div>
          )}

          {/* TAB 5: SOCIAL & OPTIONS */}
          {activeTab === 'social' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Instagram Profile URL
                </label>
                <input
                  type="url"
                  value={formData.instagramUrl}
                  onChange={(e) => handleChange('instagramUrl', e.target.value)}
                  placeholder="https://instagram.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  Facebook Page URL
                </label>
                <input
                  type="url"
                  value={formData.facebookUrl}
                  onChange={(e) => handleChange('facebookUrl', e.target.value)}
                  placeholder="https://facebook.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203047] mb-1">
                  YouTube Channel URL
                </label>
                <input
                  type="url"
                  value={formData.youtubeUrl}
                  onChange={(e) => handleChange('youtubeUrl', e.target.value)}
                  placeholder="https://youtube.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D9CF] text-sm text-[#203047] focus:outline-2 focus:outline-[#25A765]"
                />
              </div>

              <div className="pt-4 border-t border-[#EFE7DE]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#203047]">Show Parent Testimonials</div>
                    <div className="text-xs text-[#64748B]">Toggle parent feedback section visibility</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.showTestimonials}
                    onChange={(e) => handleChange('showTestimonials', e.target.checked)}
                    className="w-5 h-5 rounded text-[#25A765] accent-[#25A765]"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#EFE7DE] bg-white flex flex-wrap items-center justify-between gap-3">
          
          <div>
            {!showResetConfirm ? (
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 py-2 px-2.5 rounded-xl hover:bg-red-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-700">Are you sure?</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold px-2.5 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
                >
                  Yes, Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="text-xs font-bold px-2 py-1 text-[#64748B] hover:text-[#203047]"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#203047] hover:bg-[#FFF9F3] border border-[#EFE7DE] transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#203047] text-white hover:bg-[#2c415e] active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-3.5 h-3.5 text-[#FFE8A3]" />
              <span>Save Changes</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
