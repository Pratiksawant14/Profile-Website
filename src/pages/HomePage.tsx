import { PageContainer } from '../layouts';
import {
  HeroSection,
  EngineeringSystemsSection,
  TechnicalExpertiseSection,
  ProfessionalProfileSection,
  CollaborationContactSection,
} from '../sections';

export const HomePage = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0 text-left">
      {/* Capability 2: Complete Hero Experience & Engineering Identity */}
      <HeroSection />

      {/* Capability 3: Flagship Engineering Systems Showcase */}
      <div className="w-full text-left">
        <EngineeringSystemsSection />
      </div>

      {/* Capability 6: Technical Expertise Ecosystem */}
      <div className="w-full text-left">
        <TechnicalExpertiseSection />
      </div>

      {/* Capability 7: Executive Professional Profile */}
      <div className="w-full text-left">
        <ProfessionalProfileSection />
      </div>

      {/* Capability 8: Collaboration & Professional Contact */}
      <div className="w-full text-left pb-16">
        <CollaborationContactSection />
      </div>
    </PageContainer>
  );
};
