export interface CollaborationArea {
  id: string;
  title: string;
  explanation: string;
  iconName: string;
}

export interface ProfessionalContactLinks {
  email: string;
  linkedin: string;
  githubPersonal: string;
  githubOrganization: string;
  instagram: string;
  location: string;
}

export interface AvailabilityCardInfo {
  currentStatus: string;
  explanation: string;
  preferredEngagement: string[];
}
