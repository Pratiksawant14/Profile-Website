import React from 'react';
import { PageContainer } from '../layouts';
import { TechnicalExpertiseSection } from '../sections';

export const ExpertisePage: React.FC = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="w-full text-left">
        <TechnicalExpertiseSection />
      </div>
    </PageContainer>
  );
};
