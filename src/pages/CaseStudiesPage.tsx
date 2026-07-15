import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../layouts';
import { EngineeringCaseStudiesSection } from '../sections';

export const CaseStudiesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageContainer maxWidth="full" className="!p-0 !py-0">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <EngineeringCaseStudiesSection initialCaseId={id || 'pain-away'} />
      </div>
    </PageContainer>
  );
};
