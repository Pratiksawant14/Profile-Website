import React from 'react';
import type { EducationNode } from '../../types/profile';
import { Badge } from './Badge';
import { GraduationCap, MapPin, Calendar, Building2 } from 'lucide-react';

export interface ProfileEducationTimelineProps {
  education: EducationNode;
}

export const ProfileEducationTimeline: React.FC<ProfileEducationTimelineProps> = ({ education }) => {
  return (
    <div className="p-6 sm:p-8 rounded-xl bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 space-y-5 hover:border-accent/40 transition-all">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-surface-200/60 dark:border-surface-800/60">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700 text-accent">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-lg text-content-primary">
              Academic Foundation
            </h3>
            <span className="font-mono text-xs text-content-tertiary">
              HIGHER ENGINEERING EDUCATION
            </span>
          </div>
        </div>

        <Badge variant="accent" showDot className="font-mono text-xs py-1 px-3">
          Expected Graduation: {education.expectedGraduation}
        </Badge>
      </div>

      {/* Timeline Node Block */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-accent/60 space-y-3 py-1">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background dark:bg-surface-900 border-4 border-accent" />

        <div className="space-y-1">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
            {education.degree}
          </span>
          <h4 className="font-sans font-extrabold text-xl sm:text-2xl text-content-primary tracking-tight">
            {education.major}
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-sans text-content-secondary pt-1">
          <span className="flex items-center gap-1.5 font-semibold text-content-primary">
            <Building2 className="w-4 h-4 text-accent" />
            <span>{education.institution}</span>
          </span>
          <span className="flex items-center gap-1 text-content-tertiary">
            <MapPin className="w-3.5 h-3.5" />
            <span>{education.location}</span>
          </span>
          <span className="flex items-center gap-1 font-mono text-xs bg-surface-100 dark:bg-surface-800 px-2 py-0.5 rounded text-content-secondary">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>Class of {education.expectedGraduation}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
