export type MaturityLevel = 'Production' | 'Advanced' | 'Working Knowledge' | 'Research';

export interface TechNode {
  id: string;
  name: string;
  maturity: MaturityLevel;
  role: string;
  connectedNodes: string[];
  projects: string[];
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  flowSequence: string;
  description: string;
  nodes: TechNode[];
}
