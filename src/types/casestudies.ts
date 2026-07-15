import type { SystemCategory, SystemStatus } from './systems';

export interface WorkflowStepNode {
  label: string;
  subtext?: string;
}

export interface EngineeringChallengeCard {
  title: string;
  category: 'Scaling' | 'Data Flow' | 'Performance' | 'Business Rules' | 'Security' | 'Synchronization' | 'Validation';
  description: string;
}

export interface EngineeringDecisionCard {
  technology: string;
  tradeOff: string;
  justification: string;
}

export interface TechGroup {
  category: 'AI' | 'Backend' | 'Frontend' | 'Database' | 'Cloud' | 'DevOps';
  items: string[];
}

export interface FlagshipExpandedSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
}

export interface CaseStudyDetail {
  id: string;
  title: string;
  subtitle: string;
  category: SystemCategory;
  status: SystemStatus;
  flagship: boolean;
  businessProblem: {
    summary: string;
    whoExperiencesIt: string;
    whyItMatters: string;
  };
  projectObjective: {
    engineeringGoal: string;
    expectedOutcome: string;
  };
  businessWorkflow: WorkflowStepNode[];
  architectureOverview: WorkflowStepNode[];
  engineeringChallenges: EngineeringChallengeCard[];
  keyDecisions: EngineeringDecisionCard[];
  technologyGroups: TechGroup[];
  engineeringOutcome: string;
  flagshipSections?: FlagshipExpandedSection[];
  seoMetadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}
