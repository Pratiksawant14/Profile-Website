import React from 'react';
import { PageContainer } from '../layouts';
import { CollaborationContactSection } from '../sections';

export const ContactPage: React.FC = () => {
  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="w-full text-left">
        <CollaborationContactSection />
      </div>
    </PageContainer>
  );
};
