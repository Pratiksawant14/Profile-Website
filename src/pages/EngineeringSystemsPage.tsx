import React from 'react';
import { PageContainer } from '../layouts';
import { EngineeringSystemsSection } from '../sections';

export const EngineeringSystemsPage: React.FC = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="w-full text-left">
        <EngineeringSystemsSection />
      </div>
    </PageContainer>
  );
};
