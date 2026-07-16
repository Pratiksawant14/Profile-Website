import React from 'react';
import { SectionContainer } from '../layouts';
import {
  SectionHeading,
  Badge,
  ProfileHeaderCard,
  ProfileEducationTimeline,
  ProfileDomainsGrid,
  ProfileTechSnapshot,
  ProfileResumeAndAvailability,
} from '../components';
import {
  PROFILE_IDENTITY,
  PROFILE_EDUCATION,
  PROFILE_CORE_DOMAINS,
  PROFILE_TECH_SNAPSHOT,
  PROFILE_COURSEWORK,
  PROFILE_LANGUAGES,
  PROFILE_RESUME_INFO,
  PROFILE_AVAILABILITY,
} from '../constants';

export const ProfessionalProfileSection: React.FC = () => {
  return (
    <SectionContainer variant="transparent" id="professional-profile" className="py-16 md:py-24 space-y-12 sm:space-y-16">
      {/* Section Header */}
      <SectionHeading
        eyebrow="EXECUTIVE SUMMARY & BACKGROUND"
        title="Professional Profile"
        description="A concise overview of my engineering background, education, technical capabilities and career direction."
        action={
          <Badge variant="accent" showDot className="py-1 px-3.5 font-mono text-xs">
            ONE-MINUTE EXECUTIVE BRIEFING
          </Badge>
        }
      />

      {/* Top Profile Header Card */}
      <ProfileHeaderCard identity={PROFILE_IDENTITY} />

      {/* Education & Core Domains Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 items-start text-left">
        {/* Left Column: Education Timeline Block */}
        <div className="lg:col-span-1">
          <ProfileEducationTimeline education={PROFILE_EDUCATION} />
        </div>

        {/* Right Columns: Core Engineering Domains Card Grid */}
        <div className="lg:col-span-2">
          <ProfileDomainsGrid domains={PROFILE_CORE_DOMAINS} />
        </div>
      </div>

      {/* Technical Snapshot, Coursework & Languages */}
      <div className="pt-4">
        <ProfileTechSnapshot
          categories={PROFILE_TECH_SNAPSHOT}
          coursework={PROFILE_COURSEWORK}
          languages={PROFILE_LANGUAGES}
        />
      </div>

      {/* Resume Download Card & Strategic Availability Card */}
      <div className="pt-4 border-t border-surface-200/60 dark:border-surface-800/60">
        <ProfileResumeAndAvailability
          resume={PROFILE_RESUME_INFO}
          availability={PROFILE_AVAILABILITY}
        />
      </div>
    </SectionContainer>
  );
};
