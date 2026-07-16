import React from 'react';
import { PageContainer } from '../layouts';
import { EngineeringProcessSection } from '../sections';

export const ProcessPage: React.FC = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="w-full text-left">
        <EngineeringProcessSection />
      </div>
    </PageContainer>
  );
};
