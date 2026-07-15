import React from 'react';
import { PageContainer } from '../layouts';
import { CollaborationContactSection } from '../sections';

export const ContactPage: React.FC = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <CollaborationContactSection />
      </div>
    </PageContainer>
  );
};
