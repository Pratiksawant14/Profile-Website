import { PageContainer } from '../layouts';
import {
  HeroSection,
  MetricsSection,
  FocusedOnSection,
  EngineeringSystemsSection,
  EngineeringProcessSection,
  EngineeringCaseStudiesSection,
  TechnicalExpertiseSection,
  ProfessionalProfileSection,
  CollaborationContactSection,
} from '../sections';

export const HomePage = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      {/* Capability 2: Complete Hero Experience & Engineering Identity */}
      <HeroSection />

      {/* Capability 2: Professional Metrics Section */}
      <MetricsSection />

      {/* Capability 2: Trust Section - Focused On */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <FocusedOnSection />
      </div>

      {/* Capability 3: Flagship Engineering Systems Showcase */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <EngineeringSystemsSection />
      </div>

      {/* Capability 4: Engineering Process & Methodology */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <EngineeringProcessSection />
      </div>

      {/* Capability 5: Comprehensive Engineering Case Studies */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <EngineeringCaseStudiesSection />
      </div>

      {/* Capability 6: Technical Expertise Ecosystem */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <TechnicalExpertiseSection />
      </div>

      {/* Capability 7: Executive Professional Profile */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <ProfessionalProfileSection />
      </div>

      {/* Capability 8: Collaboration & Professional Contact */}
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full pb-16">
        <CollaborationContactSection />
      </div>
    </PageContainer>
  );
};
