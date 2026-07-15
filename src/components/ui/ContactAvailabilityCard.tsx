import React from 'react';
import type { AvailabilityCardInfo } from '../../types/contact';
import { Badge } from './Badge';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export interface ContactAvailabilityCardProps {
  info: AvailabilityCardInfo;
}

export const ContactAvailabilityCard: React.FC<ContactAvailabilityCardProps> = ({ info }) => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-background dark:bg-surface-900/40 border-2 border-surface-200 dark:border-surface-800 space-y-6 flex flex-col justify-between hover:border-accent/50 transition-all shadow-md">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-surface-200/60 dark:border-surface-800/60">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700 text-accent">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">
                STRATEGIC BANDWIDTH
              </span>
              <h3 className="font-sans font-bold text-xl text-content-primary">
                Current Status
              </h3>
            </div>
          </div>
          <Badge variant="success" showDot className="font-mono text-xs py-1 px-3">
            AVAILABLE
          </Badge>
        </div>

        <div className="space-y-3 pt-1">
          <h4 className="font-sans font-extrabold text-lg sm:text-xl text-content-primary tracking-tight">
            {info.currentStatus}
          </h4>
          <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed font-medium">
            {info.explanation}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-surface-200/60 dark:border-surface-800/60 flex items-center justify-between font-mono text-[11px] text-content-tertiary">
        <span>QUALITY & ARCHITECTURE FIRST</span>
        <CheckCircle2 className="w-4 h-4 text-accent" />
      </div>
    </div>
  );
};
