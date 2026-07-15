import React from 'react';
import { PageContainer, SectionContainer } from '../layouts';
import { SectionHeading, EmptyState, Badge } from '../components';
import { Terminal } from 'lucide-react';

export const OpenSourcePage: React.FC = () => {
  return (
    <PageContainer>
      <SectionContainer variant="transparent" container={false}>
        <SectionHeading
          eyebrow="COMMUNITY & LIBRARIES"
          title="Open Source Contributions"
          description="Developer tooling, open-source libraries, and architectural standards."
          action={
            <Badge variant="accent" showDot>
              CAPABILITY 2 PIPELINE
            </Badge>
          }
        />

        <EmptyState
          icon={<Terminal className="w-6 h-6 text-accent" />}
          title="Open Source Portal Configured"
          description="Ready to ingest authentic open source repositories, packages, and technical contributions in subsequent capabilities."
        />
      </SectionContainer>
    </PageContainer>
  );
};
