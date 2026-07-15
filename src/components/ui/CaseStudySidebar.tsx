import React from 'react';
import { motion } from 'framer-motion';
import type { CaseStudyDetail } from '../../types/casestudies';
import type { SystemCategory } from '../../types/systems';
import { Badge } from './Badge';
import { cn } from '../../lib/utils';
import { Layers, ChevronRight, Activity } from 'lucide-react';

interface CategoryOption {
  id: SystemCategory;
  label: string;
}

const CATEGORIES: CategoryOption[] = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'ai-systems', label: 'AI Systems' },
  { id: 'enterprise', label: 'Enterprise Software' },
  { id: 'developer-tools', label: 'Developer Tools' },
  { id: 'education', label: 'Education' },
];

export interface CaseStudySidebarProps {
  caseStudies: CaseStudyDetail[];
  selectedId: string;
  onSelectCaseStudy: (id: string) => void;
  activeCategory: SystemCategory;
  onSelectCategory: (category: SystemCategory) => void;
}

export const CaseStudySidebar: React.FC<CaseStudySidebarProps> = ({
  caseStudies,
  selectedId,
  onSelectCaseStudy,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-col space-y-8 w-full">
      {/* Category Filtering Bar (Animated) */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-surface-200/80 dark:border-surface-800/80">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                'relative px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer select-none',
                isActive
                  ? 'text-white font-semibold'
                  : 'text-content-secondary hover:text-content-primary hover:bg-surface-100 dark:hover:bg-surface-800/60'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="case-study-category-pill"
                  className="absolute inset-0 bg-accent rounded-md -z-10 shadow-xs"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Swipe-Friendly Sticky Navigation Switcher (< lg:) */}
      <div className="lg:hidden sticky top-16 z-30 -mx-4 px-4 py-3 bg-background/90 backdrop-blur-md border-b border-surface-200 dark:border-surface-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono text-content-tertiary uppercase shrink-0 mr-1 flex items-center gap-1">
          <Activity className="w-3 h-3 text-accent" />
          CASE INDEX:
        </span>
        {caseStudies.map((study) => {
          const isSelected = study.id === selectedId;
          return (
            <button
              key={study.id}
              onClick={() => onSelectCaseStudy(study.id)}
              className={cn(
                'shrink-0 px-3 py-1.5 rounded text-xs font-sans font-medium transition-all flex items-center gap-1.5 border cursor-pointer',
                isSelected
                  ? 'bg-surface-900 text-white dark:bg-white dark:text-surface-900 border-transparent font-bold shadow-xs'
                  : 'bg-surface-100 dark:bg-surface-800 text-content-secondary border-surface-200 dark:border-surface-700 hover:text-content-primary'
              )}
            >
              {study.flagship && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
              <span>{study.title}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Sidebar Project Index (lg:) */}
      <div className="hidden lg:flex flex-col space-y-2 p-4 rounded-xl bg-surface-50/70 dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 sticky top-24">
        <div className="flex items-center justify-between text-xs font-mono text-content-tertiary pb-3 mb-2 border-b border-surface-200 dark:border-surface-800">
          <span className="flex items-center gap-1.5 font-bold text-content-secondary">
            <Layers className="w-4 h-4 text-accent" />
            ENGINEERING CASE STUDIES
          </span>
          <span>{caseStudies.length} ARCHIVES</span>
        </div>

        <div className="space-y-1.5">
          {caseStudies.map((study, idx) => {
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => onSelectCaseStudy(study.id)}
                className={cn(
                  'w-full text-left p-3 rounded-lg transition-all flex items-start justify-between gap-3 border cursor-pointer group relative overflow-hidden',
                  isSelected
                    ? 'bg-background dark:bg-surface-800 border-accent/60 shadow-md font-semibold text-content-primary'
                    : 'bg-transparent border-transparent hover:bg-surface-100 dark:hover:bg-surface-800/50 text-content-secondary hover:text-content-primary'
                )}
              >
                {isSelected && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
                  />
                )}
                <div className="flex flex-col space-y-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-content-tertiary">
                      0{idx + 1}
                    </span>
                    {study.flagship && (
                      <Badge variant="accent" className="font-mono text-[9px] px-1.5 py-0">
                        FLAGSHIP
                      </Badge>
                    )}
                  </div>
                  <span className="font-sans text-sm tracking-tight truncate font-bold text-content-primary group-hover:text-accent transition-colors">
                    {study.title}
                  </span>
                  <span className="font-sans text-[11px] text-content-tertiary line-clamp-1">
                    {study.subtitle}
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    'w-4 h-4 shrink-0 mt-1 transition-transform',
                    isSelected ? 'text-accent translate-x-0.5' : 'text-content-tertiary group-hover:translate-x-0.5'
                  )}
                />
              </button>
            );
          })}
        </div>

        <div className="pt-3 mt-2 border-t border-surface-200 dark:border-surface-800 text-[10px] font-mono text-content-tertiary text-center">
          CLICK TO INSPECT FULL SPECIFICATION
        </div>
      </div>
    </div>
  );
};
