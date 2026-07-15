import React from 'react';
import { motion } from 'framer-motion';
import type { SystemCategory } from '../../types/systems';
import { cn } from '../../lib/utils';
import { Search, X, Filter } from 'lucide-react';

interface FilterOption {
  id: SystemCategory;
  label: string;
  count?: number;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All Systems' },
  { id: 'ai-systems', label: 'AI Systems' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'developer-tools', label: 'Developer Tools' },
  { id: 'education', label: 'Education' },
];

export interface SystemFilterProps {
  activeCategory: SystemCategory;
  onSelectCategory: (category: SystemCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
}

export const SystemFilter: React.FC<SystemFilterProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full mb-12">
      {/* Search Input Bar & Results Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 w-full">
        <div className="relative flex-1 max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-tertiary">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by project name, technology (e.g. FastAPI, React), or category..."
            className="w-full pl-10 pr-10 py-2.5 rounded-md bg-surface-100 dark:bg-surface-900/80 border border-surface-200 dark:border-surface-800 text-content-primary placeholder:text-content-tertiary text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-content-tertiary hover:text-content-primary transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-content-tertiary self-end sm:self-center">
          <Filter className="w-3.5 h-3.5 text-accent" />
          <span>SHOWING:</span>
          <span className="font-bold text-content-primary px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800">
            {totalResults} {totalResults === 1 ? 'SYSTEM' : 'SYSTEMS'}
          </span>
        </div>
      </div>

      {/* Animated Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-200/60 dark:border-surface-800/60">
        {FILTER_OPTIONS.map((option) => {
          const isActive = activeCategory === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelectCategory(option.id)}
              className={cn(
                'relative px-4 py-2 rounded-md text-xs sm:text-sm font-sans font-medium transition-colors select-none cursor-pointer',
                isActive
                  ? 'text-white font-semibold'
                  : 'text-content-secondary hover:text-content-primary hover:bg-surface-100 dark:hover:bg-surface-800/50'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="system-filter-pill"
                  className="absolute inset-0 bg-accent rounded-md -z-10 shadow-xs"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
