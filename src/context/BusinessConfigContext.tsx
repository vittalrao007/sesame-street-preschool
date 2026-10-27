import React, { createContext, useContext, useState, useEffect } from 'react';
import { BusinessConfig } from '../types/business';
import { DEFAULT_BUSINESS_CONFIG } from '../config/businessDefaults';

const STORAGE_KEY = 'sesame_street_preschool_config_v1';

interface BusinessConfigContextType {
  config: BusinessConfig;
  updateConfig: (newConfig: Partial<BusinessConfig>) => boolean;
  resetConfig: () => void;
  isCustomized: boolean;
  isConfigOpen: boolean;
  openConfig: () => void;
  closeConfig: () => void;
  isEnquiryModalOpen: boolean;
  openEnquiryModal: (programPreselect?: string) => void;
  closeEnquiryModal: () => void;
  selectedProgramForEnquiry: string;
}

const BusinessConfigContext = createContext<BusinessConfigContextType | undefined>(undefined);

export const BusinessConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with defaults to avoid broken fields
        return {
          ...DEFAULT_BUSINESS_CONFIG,
          ...parsed,
          programs: parsed.programs || DEFAULT_BUSINESS_CONFIG.programs,
          facilities: parsed.facilities || DEFAULT_BUSINESS_CONFIG.facilities,
          dailyRoutine: parsed.dailyRoutine || DEFAULT_BUSINESS_CONFIG.dailyRoutine,
          faqs: parsed.faqs || DEFAULT_BUSINESS_CONFIG.faqs,
          testimonials: parsed.testimonials || DEFAULT_BUSINESS_CONFIG.testimonials
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved business config from localStorage', e);
    }
    return DEFAULT_BUSINESS_CONFIG;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProgramForEnquiry, setSelectedProgramForEnquiry] = useState('');

  // Synchronize document title with configured preschool name
  useEffect(() => {
    if (config.preschoolName) {
      document.title = `${config.preschoolName} | Early Childhood & Daycare`;
    }
  }, [config.preschoolName]);

  const updateConfig = (newValues: Partial<BusinessConfig>): boolean => {
    try {
      const merged: BusinessConfig = {
        ...config,
        ...newValues
      };
      setConfig(merged);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return true;
    } catch (err) {
      console.error('Error saving config to localStorage:', err);
      return false;
    }
  };

  const resetConfig = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setConfig(DEFAULT_BUSINESS_CONFIG);
    } catch (err) {
      console.error('Error resetting config:', err);
    }
  };

  const isCustomized = JSON.stringify(config) !== JSON.stringify(DEFAULT_BUSINESS_CONFIG);

  const openConfig = () => setIsConfigOpen(true);
  const closeConfig = () => setIsConfigOpen(false);

  const openEnquiryModal = (programPreselect?: string) => {
    setSelectedProgramForEnquiry(programPreselect || '');
    setIsEnquiryModalOpen(true);
  };
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <BusinessConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        isCustomized,
        isConfigOpen,
        openConfig,
        closeConfig,
        isEnquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal,
        selectedProgramForEnquiry
      }}
    >
      {children}
    </BusinessConfigContext.Provider>
  );
};

export const useBusinessConfig = () => {
  const context = useContext(BusinessConfigContext);
  if (!context) {
    throw new Error('useBusinessConfig must be used within a BusinessConfigProvider');
  }
  return context;
};
