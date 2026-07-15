export type SystemCategory =
  | 'all'
  | 'ai-systems'
  | 'healthcare'
  | 'enterprise'
  | 'developer-tools'
  | 'education';

export type SystemStatus =
  | 'Production'
  | 'Active Development'
  | 'Research'
  | 'Completed';

export interface ArchitectureNode {
  label: string;
  subtext?: string;
}

export interface EngineeringSystem {
  id: string;
  title: string;
  subtitle: string;
  flagship?: boolean;
  category: SystemCategory;
  status: SystemStatus;
  description: string;
  businessProblem: string;
  engineeringSolution: string;
  technologies: string[];
  architecture: ArchitectureNode[];
  highlights?: string[];
  githubUrl?: string;
  caseStudyUrl: string;
}
