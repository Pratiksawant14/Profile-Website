export interface ProfileIdentity {
  fullName: string;
  professionalTitle: string;
  location: string;
  summary: string;
  links: {
    githubPersonal: string;
    githubOrganization: string;
    linkedin: string;
    email: string;
  };
}

export interface EducationNode {
  degree: string;
  major: string;
  institution: string;
  location: string;
  expectedGraduation: string;
}

export interface EngineeringDomainBadge {
  id: string;
  title: string;
  focusArea: string;
}

export interface TechnicalSnapshotCategory {
  category: 'Programming' | 'AI Stack' | 'Backend' | 'Cloud';
  items: string[];
}

export interface ResumeMetadata {
  title: string;
  fileUrl: string;
  lastUpdated: string;
  fileFormat: string;
}

export interface AvailabilityInfo {
  status: string;
  interestedIn: string[];
}
