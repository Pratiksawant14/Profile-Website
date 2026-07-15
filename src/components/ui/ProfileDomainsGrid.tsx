import React from 'react';
import type { EngineeringDomainBadge } from '../../types/profile';
import { Badge } from './Badge';
import { Layers, CheckCircle2 } from 'lucide-react';

export interface ProfileDomainsGridProps {
  domains: EngineeringDomainBadge[];
}

export const ProfileDomainsGrid: React.FC<ProfileDomainsGridProps> = ({ domains }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-surface-200 dark:border-surface-800">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-accent" />
          <h3 className="font-sans font-bold text-xl text-content-primary">
            Core Engineering Domains
          </h3>
        </div>
        <span className="font-mono text-xs text-content-tertiary">
          7 SPECIALIZED SPECIALTIES
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {domains.map((domain, index) => (
          <div
            key={domain.id}
            className="p-5 rounded-xl bg-background dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800 hover:border-accent/40 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-accent font-bold">
                  DOMAIN 0{index + 1}
                </span>
                <Badge variant="neutral" className="font-mono text-[9px] uppercase px-1.5 py-0">
                  VERIFIED
                </Badge>
              </div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-content-primary">
                {domain.title}
              </h4>
            </div>

            <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
              {domain.focusArea}
            </p>

            <div className="pt-2 border-t border-surface-100 dark:border-surface-800/60 flex items-center justify-between font-mono text-[10px] text-content-tertiary">
              <span>SPECIALIZATION MATRIX</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-status-success" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
