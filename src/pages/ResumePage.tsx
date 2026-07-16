import React from 'react';
import { PageContainer } from '../layouts';
import { ProfessionalProfileSection } from '../sections';

export const ResumePage: React.FC = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="w-full text-left">
        <ProfessionalProfileSection />
      </div>
    </PageContainer>
  );
};
