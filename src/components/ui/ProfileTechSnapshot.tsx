import React from 'react';
import type { TechnicalSnapshotCategory } from '../../types/profile';
import { Tag } from './Tag';
import { Badge } from './Badge';
import { Code2, BookOpen, Languages as LanguagesIcon } from 'lucide-react';

export interface ProfileTechSnapshotProps {
  categories: TechnicalSnapshotCategory[];
  coursework: string[];
  languages: string[];
}

export const ProfileTechSnapshot: React.FC<ProfileTechSnapshotProps> = ({
  categories,
  coursework,
  languages,
}) => {
  return (
    <div className="space-y-8">
      {/* Technical Snapshot Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-surface-200 dark:border-surface-800">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-accent" />
            <h3 className="font-sans font-bold text-xl text-content-primary">
              Technical Snapshot
            </h3>
          </div>
          <span className="font-mono text-xs text-content-tertiary">
            CONCISE CAPABILITY OVERVIEW
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-xl bg-surface-50/80 dark:bg-surface-900/40 border border-surface-200/80 dark:border-surface-800/80 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <Tag key={item} className="text-xs font-mono bg-background dark:bg-surface-800">
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="pt-2 text-[10px] font-mono text-content-tertiary border-t border-surface-200/60 dark:border-surface-800/40">
                {cat.items.length} CORE CAPABILITIES
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coursework & Languages Split Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coursework Block (Col 2) */}
        <div className="lg:col-span-2 p-6 rounded-xl bg-background dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-surface-100 dark:border-surface-800/60">
            <div className="flex items-center gap-2 font-sans font-bold text-base text-content-primary">
              <BookOpen className="w-4 h-4 text-accent" />
              <span>Academic Coursework & Focus</span>
            </div>
            <Badge variant="neutral" className="font-mono text-[10px]">
              VIT PUNE SPECIALIZATION
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <Badge
                key={course}
                variant="accent"
                className="font-mono text-xs py-1 px-3 bg-accent/15 text-accent border border-accent/30"
              >
                ✓ {course}
              </Badge>
            ))}
          </div>
        </div>

        {/* Languages Block (Col 1) */}
        <div className="p-6 rounded-xl bg-background dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-surface-100 dark:border-surface-800/60">
              <div className="flex items-center gap-2 font-sans font-bold text-base text-content-primary">
                <LanguagesIcon className="w-4 h-4 text-accent" />
                <span>Languages</span>
              </div>
              <span className="font-mono text-[10px] text-content-tertiary">
                PROFICIENCY
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-3">
              {languages.map((lang) => (
                <Tag key={lang} className="text-xs font-mono font-semibold px-3 py-1">
                  {lang}
                </Tag>
              ))}
            </div>
          </div>
          <div className="text-[10px] font-mono text-content-tertiary pt-2 border-t border-surface-100 dark:border-surface-800/60">
            MULTILINGUAL COLLABORATION
          </div>
        </div>
      </div>
    </div>
  );
};
