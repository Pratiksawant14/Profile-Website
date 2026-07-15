import React from 'react';
import type { ResumeMetadata, AvailabilityInfo } from '../../types/profile';
import { Badge } from './Badge';
import { FileText, Download, CheckCircle2, Briefcase, Calendar, Check } from 'lucide-react';

export interface ProfileResumeAndAvailabilityProps {
  resume: ResumeMetadata;
  availability: AvailabilityInfo;
}

export const ProfileResumeAndAvailability: React.FC<ProfileResumeAndAvailabilityProps> = ({
  resume,
  availability,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      {/* Resume Download Card */}
      <div className="p-6 sm:p-8 rounded-xl bg-surface-950 text-white border border-surface-800 space-y-6 flex flex-col justify-between relative overflow-hidden shadow-lg group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="flex items-start justify-between gap-3 pb-4 border-b border-surface-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-surface-900 flex items-center justify-center border border-surface-700 text-accent">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-white">
                  Latest Resume
                </h3>
                <span className="font-mono text-xs text-surface-400">
                  {resume.fileFormat}
                </span>
              </div>
            </div>
            <Badge variant="accent" showDot className="font-mono text-[10px]">
              ATS VERIFIED
            </Badge>
          </div>

          <div className="space-y-1">
            <h4 className="font-sans font-bold text-base text-surface-100">
              {resume.title}
            </h4>
            <div className="flex items-center gap-1.5 font-mono text-xs text-surface-400">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>Last Updated: {resume.lastUpdated}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-surface-800 flex flex-wrap items-center justify-between gap-4 relative z-10">
          <span className="font-mono text-[10px] text-surface-400">
            MODERN EXECUTIVE SPECIFICATION
          </span>

          <a
            href={resume.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Pratik_Sawant_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-light text-white font-sans text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>PDF Download</span>
          </a>
        </div>
      </div>

      {/* Availability Card */}
      <div className="p-6 sm:p-8 rounded-xl bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 space-y-6 flex flex-col justify-between hover:border-accent/40 transition-all">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3 pb-4 border-b border-surface-200/60 dark:border-surface-800/60">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700 text-accent">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-content-primary">
                  Strategic Availability
                </h3>
                <span className="font-mono text-xs text-content-tertiary">
                  COLLABORATION DIRECTION
                </span>
              </div>
            </div>
            <Badge variant="success" showDot className="font-mono text-xs">
              AVAILABLE
            </Badge>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-content-tertiary uppercase tracking-wider block">
              Currently Interested In:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {availability.interestedIn.map((interest) => (
                <div
                  key={interest}
                  className="p-3 rounded-lg bg-surface-50 dark:bg-surface-800/60 border border-surface-200/80 dark:border-surface-700/80 flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm text-content-primary"
                >
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-surface-200/60 dark:border-surface-800/60 flex items-center justify-between font-mono text-[10px] text-content-tertiary">
          <span>{availability.status}</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
        </div>
      </div>
    </div>
  );
};
