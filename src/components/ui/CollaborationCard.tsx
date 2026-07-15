import React from 'react';
import type { CollaborationArea } from '../../types/contact';
import {
  BrainCircuit,
  Server,
  ShieldCheck,
  Layers,
  Cpu,
  Terminal,
  Database,
  GitPullRequest,
  CheckCircle2,
} from 'lucide-react';

const COLLABORATION_ICONS: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-accent" />,
  Server: <Server className="w-5 h-5 text-accent" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-accent" />,
  Layers: <Layers className="w-5 h-5 text-accent" />,
  Cpu: <Cpu className="w-5 h-5 text-accent" />,
  Terminal: <Terminal className="w-5 h-5 text-accent" />,
  Database: <Database className="w-5 h-5 text-accent" />,
  GitPullRequest: <GitPullRequest className="w-5 h-5 text-accent" />,
};

export interface CollaborationCardProps {
  area: CollaborationArea;
  index: number;
}

export const CollaborationCard: React.FC<CollaborationCardProps> = ({ area, index }) => {
  return (
    <div className="p-5 sm:p-6 rounded-xl bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 hover:border-accent/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-xs hover:shadow-md">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700 transition-colors group-hover:border-accent/40">
            {COLLABORATION_ICONS[area.iconName] || <BrainCircuit className="w-5 h-5 text-accent" />}
          </div>
          <span className="font-mono text-[10px] text-content-tertiary font-bold uppercase tracking-wider">
            AREA 0{index + 1}
          </span>
        </div>

        <h4 className="font-sans font-bold text-base sm:text-lg text-content-primary group-hover:text-accent transition-colors tracking-tight">
          {area.title}
        </h4>
      </div>

      <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
        {area.explanation}
      </p>

      <div className="pt-3 border-t border-surface-100 dark:border-surface-800/60 flex items-center justify-between font-mono text-[10px] text-content-tertiary">
        <span>COLLABORATION SCOPE</span>
        <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};
