import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { EngineeringSystem } from '../../types/systems';
import { Button } from './Button';
import { Badge } from './Badge';
import { Tag } from './Tag';
import { cn } from '../../lib/utils';
import {
  ArrowRight,
  ExternalLink,
  Briefcase,
  Wrench,
  Cpu,
  Layers,
  Terminal,
  Activity,
} from 'lucide-react';

// Zero-dependency GitHub SVG
const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export interface SystemCardProps {
  system: EngineeringSystem;
  index: number;
}

export const SystemCard: React.FC<SystemCardProps> = ({ system, index }) => {
  const navigate = useNavigate();
  const isFlagship = Boolean(system.flagship);
  const isAlternateRow = index % 2 !== 0 && !isFlagship;

  const statusVariants: Record<EngineeringSystem['status'], 'success' | 'accent' | 'warning' | 'default'> = {
    Production: 'success',
    'Active Development': 'accent',
    Research: 'warning',
    Completed: 'default',
  };

  const handleOpenCaseStudy = () => {
    navigate(system.caseStudyUrl || `/case-studies/${system.id}`);
  };

  if (isFlagship) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-xl bg-background dark:bg-surface-900/50 border-2 border-accent/40 dark:border-accent/50 shadow-lg hover:shadow-xl hover:border-accent/70 transition-all duration-normal overflow-hidden p-6 sm:p-8 md:p-10 relative group"
      >
        {/* Top Flagship Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-surface-200 dark:border-surface-800">
          <div className="flex items-center gap-3">
            <Badge variant="accent" showDot className="py-1 px-3 text-xs font-mono font-bold tracking-wider uppercase">
              FLAGSHIP PLATFORM
            </Badge>
            <span className="font-mono text-xs font-semibold text-content-tertiary">
              {system.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={statusVariants[system.status]} showDot>
              {system.status}
            </Badge>
          </div>
        </div>

        {/* Flagship Title & Professional Description */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-content-primary">
              {system.title}
            </h3>
            <span className="font-mono text-xs uppercase px-3 py-1 rounded bg-surface-100 dark:bg-surface-800 text-content-secondary border border-surface-200 dark:border-surface-700">
              CATEGORY: {system.category.toUpperCase()}
            </span>
          </div>
          <p className="font-sans text-lg sm:text-xl text-content-secondary leading-relaxed max-w-4xl">
            {system.description}
          </p>
        </div>

        {/* Flagship Highlights Grid */}
        {system.highlights && system.highlights.length > 0 && (
          <div className="mb-8 p-6 rounded-lg bg-surface-50/80 dark:bg-surface-900/80 border border-surface-200/80 dark:border-surface-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold">
              <Layers className="w-4 h-4" />
              <span>CORE PLATFORM MODULES</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {system.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-sans font-medium text-content-primary px-3 py-2 rounded bg-background dark:bg-surface-800/80 border border-surface-200/60 dark:border-surface-700/60 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consulting Breakdown: Problem vs Solution & Architecture Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Business Problem */}
          <div className="p-6 rounded-lg bg-surface-50/60 dark:bg-surface-900/40 border border-surface-200/80 dark:border-surface-800/80 flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-status-warning uppercase">
              <Briefcase className="w-4 h-4" />
              <span>Business Bottleneck</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed">
              {system.businessProblem}
            </p>
          </div>

          {/* Engineering Solution */}
          <div className="p-6 rounded-lg bg-surface-50/60 dark:bg-surface-900/40 border border-surface-200/80 dark:border-surface-800/80 flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-accent uppercase">
              <Wrench className="w-4 h-4" />
              <span>Engineering Architecture</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed">
              {system.engineeringSolution}
            </p>
          </div>

          {/* Compact Architecture Flow Diagram */}
          <div className="p-6 rounded-lg bg-surface-900 text-white dark:bg-surface-950 border border-surface-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-accent pb-3 border-b border-surface-800">
              <span className="flex items-center gap-1.5 font-bold">
                <Cpu className="w-4 h-4" />
                SYSTEM TOPOLOGY
              </span>
              <span>PREVIEW</span>
            </div>
            <div className="flex flex-col space-y-2 py-3">
              {system.architecture.map((node, i) => (
                <div key={node.label} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-accent/20 text-accent flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                    0{i + 1}
                  </div>
                  <div className="flex-1 min-w-0 bg-surface-800/60 rounded px-2.5 py-1.5 border border-surface-700/60 flex items-center justify-between">
                    <span className="font-mono text-xs font-medium truncate text-surface-100">
                      {node.label}
                    </span>
                    {node.subtext && (
                      <span className="font-mono text-[10px] text-surface-400 ml-2 shrink-0">
                        {node.subtext}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-surface-400 text-right pt-2 border-t border-surface-800">
              END-TO-END DATA PIPELINE
            </div>
          </div>
        </div>

        {/* Technologies & CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-surface-200 dark:border-surface-800">
          <div className="flex flex-wrap items-center gap-1.5 flex-1">
            <span className="text-xs font-mono text-content-tertiary mr-2 hidden md:inline">
              STACK:
            </span>
            {system.technologies.map((tech) => (
              <Tag key={tech} className="px-2.5 py-1 text-xs bg-surface-100 dark:bg-surface-800">
                {tech}
              </Tag>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {system.githubUrl && (
              <a
                href={system.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-sans font-medium bg-surface-100 dark:bg-surface-800 text-content-primary hover:bg-surface-200 dark:hover:bg-surface-700 border border-surface-200 dark:border-surface-700 transition-colors"
              >
                <GitHubIcon />
                <span>Source Code</span>
              </a>
            )}
            <Button
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={handleOpenCaseStudy}
            >
              View Case Study
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Non-Flagship Systems: Alternating Desktop Layouts (Left-to-Right vs Right-to-Left)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'w-full rounded-lg bg-background dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800 shadow-card hover:shadow-card-hover hover:border-surface-300 dark:hover:border-surface-700 transition-all duration-normal p-6 sm:p-8 flex flex-col gap-8',
        isAlternateRow ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
    >
      {/* Left / Right Column: Project Information & Consulting Breakdown */}
      <div className="flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Status & Subtitle Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              {system.subtitle}
            </span>
            <Badge variant={statusVariants[system.status]} showDot>
              {system.status}
            </Badge>
          </div>

          {/* System Name */}
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-content-primary tracking-tight mb-3">
            {system.title}
          </h3>

          {/* Professional Description */}
          <p className="font-sans text-base text-content-secondary leading-relaxed mb-6">
            {system.description}
          </p>

          {/* Problem / Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-md bg-surface-50 dark:bg-surface-900/50 border border-surface-200/80 dark:border-surface-800/80 space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-status-warning uppercase flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Problem
              </span>
              <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
                {system.businessProblem}
              </p>
            </div>
            <div className="p-4 rounded-md bg-surface-50 dark:bg-surface-900/50 border border-surface-200/80 dark:border-surface-800/80 space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-accent uppercase flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                Solution
              </span>
              <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
                {system.engineeringSolution}
              </p>
            </div>
          </div>
        </div>

        {/* Technology Badges & Action Buttons */}
        <div className="space-y-6 pt-4 border-t border-surface-100 dark:border-surface-800/60">
          <div className="flex flex-wrap gap-1.5">
            {system.technologies.map((tech) => (
              <Tag key={tech} className="text-xs">
                {tech}
              </Tag>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            {system.githubUrl ? (
              <a
                href={system.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-content-secondary hover:text-content-primary transition-colors"
              >
                <GitHubIcon />
                <span>View Source Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-xs font-mono text-content-tertiary flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                PROPRIETARY ENTERPRISE CORE
              </span>
            )}

            <Button
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5 text-accent" />}
              onClick={handleOpenCaseStudy}
            >
              View Case Study
            </Button>
          </div>
        </div>
      </div>

      {/* Right / Left Column: Compact Architecture Preview Box */}
      <div className="lg:w-80 xl:w-96 shrink-0 flex flex-col">
        <div className="h-full p-5 rounded-md bg-surface-900 text-white dark:bg-surface-950 border border-surface-800 flex flex-col justify-between space-y-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono text-accent pb-2.5 border-b border-surface-800">
            <span className="flex items-center gap-1.5 font-bold">
              <Activity className="w-4 h-4" />
              ARCHITECTURE FLOW
            </span>
            <span className="text-[10px] text-surface-400">5-TIER PIPELINE</span>
          </div>

          {/* Flow Steps */}
          <div className="flex flex-col space-y-2 py-2 flex-1 justify-center">
            {system.architecture.map((node, i) => (
              <div key={node.label} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded bg-surface-800 text-accent font-mono text-[10px] font-bold flex items-center justify-center shrink-0 border border-surface-700">
                  {i + 1}
                </div>
                <div className="flex-1 bg-surface-800/50 rounded px-2.5 py-1.5 border border-surface-700/50 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-surface-100">
                    {node.label}
                  </span>
                  {node.subtext && (
                    <span className="font-mono text-[10px] text-surface-400 truncate ml-2 max-w-[110px]">
                      {node.subtext}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[10px] font-mono text-surface-400 text-left pt-2.5 border-t border-surface-800">
            STATUS: HIGH AVAILABILITY ENFORCED
          </div>
        </div>
      </div>
    </motion.div>
  );
};
