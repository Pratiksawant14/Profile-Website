import React from 'react';
import { SectionContainer } from '../layouts';
import {
  SectionHeading,
  Badge,
  CollaborationGrid,
  ContactCard,
  ContactAvailabilityCard,
  ContactCallToAction,
} from '../components';
import {
  COLLABORATION_AREAS,
  PREFERRED_ENGAGEMENTS,
  PROFESSIONAL_CONTACT_LINKS,
  CONTACT_AVAILABILITY,
} from '../constants';

export const CollaborationContactSection: React.FC = () => {
  return (
    <SectionContainer variant="transparent" id="collaboration-and-contact" className="py-16 md:py-24 space-y-12 sm:space-y-16">
      {/* Section Header */}
      <SectionHeading
        eyebrow="STRATEGIC PARTNERSHIPS & INITIATION"
        title="Let's Build Something Meaningful"
        description="I'm always interested in discussing ambitious engineering problems, AI systems and production software. Whether it's a startup, freelance collaboration or enterprise project, I'd be happy to connect."
        action={
          <Badge variant="accent" showDot className="py-1 px-3.5 font-mono text-xs">
            DIRECT ENGINEERING CHANNELS
          </Badge>
        }
      />

      {/* 8 Collaboration Areas & Open To Badges Block */}
      <CollaborationGrid
        areas={COLLABORATION_AREAS}
        preferredEngagements={PREFERRED_ENGAGEMENTS}
      />

      {/* Professional Contact Card & Strategic Availability Card Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 items-start pt-4 text-left">
        <ContactCard links={PROFESSIONAL_CONTACT_LINKS} />
        <ContactAvailabilityCard info={CONTACT_AVAILABILITY} />
      </div>

      {/* Closing Call To Action Box */}
      <div className="pt-6">
        <ContactCallToAction email={PROFESSIONAL_CONTACT_LINKS.email} />
      </div>
    </SectionContainer>
  );
};
