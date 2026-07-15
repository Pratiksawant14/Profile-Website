import React from 'react';
import type { CollaborationArea } from '../../types/contact';
import { CollaborationCard } from './CollaborationCard';
import { Badge } from './Badge';
import { Sparkles, Check } from 'lucide-react';

export interface CollaborationGridProps {
  areas: CollaborationArea[];
  preferredEngagements: string[];
}

export const CollaborationGrid: React.FC<CollaborationGridProps> = ({
  areas,
  preferredEngagements,
}) => {
  return (
    <div className="space-y-10">
      {/* Preferred Engagement Badges Bar (`Open To`) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-950 text-white border-2 border-surface-800 space-y-4 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-surface-800 relative z-10">
          <div className="flex items-center gap-2.5">
            <Badge variant="accent" showDot className="font-mono text-xs uppercase font-bold py-1 px-3">
              Open To
            </Badge>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
              Preferred Engagement Frameworks
            </h3>
          </div>
          <span className="font-mono text-xs text-surface-400">
            STRATEGIC COLLABORATION MODELS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1 relative z-10">
          {preferredEngagements.map((eng) => (
            <div
              key={eng}
              className="p-3.5 rounded-lg bg-surface-900/90 hover:bg-surface-800 border border-surface-700/80 transition-all flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm text-surface-100 shadow-xs group"
            >
              <Check className="w-4 h-4 text-accent shrink-0 group-hover:scale-110 transition-transform" />
              <span>{eng}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 8 Collaboration Area Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-surface-200 dark:border-surface-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <h3 className="font-sans font-bold text-xl text-content-primary">
              Specialized Collaboration Areas
            </h3>
          </div>
          <span className="font-mono text-xs text-content-tertiary">
            8 HIGH-IMPACT DOMAINS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {areas.map((area, idx) => (
            <CollaborationCard key={area.id} area={area} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
