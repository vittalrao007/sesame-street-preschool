/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BusinessConfigProvider } from './context/BusinessConfigContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { DaycareSection } from './components/DaycareSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DailyRoutineSection } from './components/DailyRoutineSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialSection } from './components/TestimonialSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { ConfigureButton } from './components/ConfigureButton';
import { ConfigurationDrawer } from './components/ConfigurationDrawer';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  return (
    <BusinessConfigProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF9F3] text-[#203047] font-sans selection:bg-[#FFE8A3] selection:text-[#203047] relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <DaycareSection />
          <FacilitiesSection />
          <WhyChooseUs />
          <DailyRoutineSection />
          <GallerySection />
          <TestimonialSection />
          <AdmissionsSection />
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Actions & Modals */}
        <FloatingContactButtons />
        <ConfigureButton />
        <ConfigurationDrawer />
        <EnquiryModal />
      </div>
    </BusinessConfigProvider>
  );
}
