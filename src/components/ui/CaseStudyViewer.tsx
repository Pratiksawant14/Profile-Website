import React from 'react';
import { motion } from 'framer-motion';
import type { CaseStudyDetail } from '../../types/casestudies';
import { Badge } from './Badge';
import { Tag } from './Tag';
import { Button } from './Button';
import { fadeUpItemVariants, staggerContainerVariants } from '../../lib/motion';
import {
  Briefcase,
  Target,
  Workflow,
  Cpu,
  AlertTriangle,
  Scale,
  Code2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Layers,
  Sparkles,
} from 'lucide-react';

export interface CaseStudyViewerProps {
  study: CaseStudyDetail;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  nextTitle?: string;
  prevTitle?: string;
}

export const CaseStudyViewer: React.FC<CaseStudyViewerProps> = ({
  study,
  onNavigateNext,
  onNavigatePrev,
  nextTitle,
  prevTitle,
}) => {
  const statusVariants: Record<CaseStudyDetail['status'], 'success' | 'accent' | 'warning' | 'default'> = {
    Production: 'success',
    'Active Development': 'accent',
    Research: 'warning',
    Completed: 'default',
  };

  return (
    <motion.div
      key={study.id}
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col space-y-12 sm:space-y-16 w-full max-w-5xl"
    >
      {/* Header Block & SEO Callout */}
      <motion.div variants={fadeUpItemVariants} className="space-y-6 pb-8 border-b border-surface-200 dark:border-surface-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Badge variant="accent" showDot className="font-mono text-xs uppercase tracking-wider font-bold">
              {study.flagship ? 'FLAGSHIP CONSULTING CASE STUDY' : 'TECHNICAL ARCHITECTURE ARCHIVE'}
            </Badge>
            <span className="font-mono text-xs text-content-tertiary">
              DOMAIN: {study.category.toUpperCase()}
            </span>
          </div>
          <Badge variant={statusVariants[study.status]} showDot>
            {study.status}
          </Badge>
        </div>

        <div className="space-y-3">
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-content-primary leading-tight">
            {study.title}
          </h1>
          <p className="font-sans text-xl sm:text-2xl text-content-secondary font-medium leading-relaxed">
            {study.subtitle}
          </p>
        </div>

        {/* SEO Keywords Strip */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="font-mono text-[11px] text-content-tertiary mr-2 uppercase">
            SEO METADATA / TOPICS:
          </span>
          {study.seoMetadata.keywords.map((kw) => (
            <Tag key={kw} className="text-[11px] font-mono bg-surface-100 dark:bg-surface-800/80">
              #{kw}
            </Tag>
          ))}
        </div>
      </motion.div>

      {/* 1. Business Problem Block */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-surface-200 dark:border-surface-800">
          <Briefcase className="w-5 h-5 text-status-warning" />
          <h2 className="font-sans font-bold text-2xl text-content-primary">
            1. Business Problem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-xl bg-surface-50/80 dark:bg-surface-900/40 border border-surface-200/80 dark:border-surface-800/80 space-y-3">
            <h3 className="font-mono text-xs font-bold text-status-warning uppercase tracking-wider">
              Operational Bottleneck Summary
            </h3>
            <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
              {study.businessProblem.summary}
            </p>
          </div>

          <div className="space-y-6 flex flex-col justify-between">
            <div className="p-5 rounded-xl bg-background dark:bg-surface-900/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <h4 className="font-mono text-xs font-bold text-content-primary uppercase">
                Who Experiences It?
              </h4>
              <p className="font-sans text-sm text-content-secondary leading-relaxed">
                {study.businessProblem.whoExperiencesIt}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-background dark:bg-surface-900/60 border border-surface-200 dark:border-surface-800 space-y-2">
              <h4 className="font-mono text-xs font-bold text-accent uppercase">
                Why Does It Matter?
              </h4>
              <p className="font-sans text-sm text-content-secondary leading-relaxed">
                {study.businessProblem.whyItMatters}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. Project Objective Block */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-surface-200 dark:border-surface-800">
          <Target className="w-5 h-5 text-accent" />
          <h2 className="font-sans font-bold text-2xl text-content-primary">
            2. Project Objective
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-surface-900 text-white dark:bg-surface-950 border border-surface-800 space-y-3">
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Engineering Goal
            </span>
            <p className="font-sans text-base leading-relaxed text-surface-200">
              {study.projectObjective.engineeringGoal}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-900 text-white dark:bg-surface-950 border border-surface-800 space-y-3">
            <span className="font-mono text-xs font-bold text-status-success uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Expected Business Outcome
            </span>
            <p className="font-sans text-base leading-relaxed text-surface-200">
              {study.projectObjective.expectedOutcome}
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. Business Workflow (Operational Steps - No Code) */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-surface-200 dark:border-surface-800 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <Workflow className="w-5 h-5 text-accent" />
            <h2 className="font-sans font-bold text-2xl text-content-primary">
              3. Business Workflow
            </h2>
          </div>
          <span className="font-mono text-xs text-content-tertiary uppercase">
            OPERATIONAL STEP SEQUENCE (BEFORE & AFTER AUTOMATION)
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-surface-50/60 dark:bg-surface-900/30 border border-surface-200 dark:border-surface-800">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            {study.businessWorkflow.map((step, index) => {
              const isLast = index === study.businessWorkflow.length - 1;
              return (
                <div key={step.label} className="flex flex-col relative items-center text-center">
                  <div className="w-full h-full p-4 rounded-lg bg-background dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-xs flex flex-col justify-between space-y-2 relative z-10">
                    <span className="font-mono text-[10px] text-accent font-bold">
                      STEP 0{index + 1}
                    </span>
                    <h3 className="font-sans font-bold text-sm text-content-primary">
                      {step.label}
                    </h3>
                    {step.subtext && (
                      <p className="font-sans text-xs text-content-secondary leading-relaxed">
                        {step.subtext}
                      </p>
                    )}
                  </div>

                  {!isLast && (
                    <>
                      <div className="hidden sm:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center justify-center text-accent">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="flex sm:hidden items-center justify-center py-2 text-accent">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 4. Architecture Overview Block */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-surface-200 dark:border-surface-800 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-accent" />
            <h2 className="font-sans font-bold text-2xl text-content-primary">
              4. Architecture Overview
            </h2>
          </div>
          <span className="font-mono text-xs text-content-tertiary uppercase">
            END-TO-END SYSTEM TOPOLOGY
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-surface-950 text-white border border-surface-800 shadow-xl space-y-6">
          <div className="flex flex-col space-y-3 max-w-2xl">
            <span className="font-mono text-xs text-accent font-bold tracking-wider uppercase">
              DECOUPLED 5-TIER PIPELINE
            </span>
            <p className="font-sans text-sm text-surface-300 leading-relaxed">
              Every layer operates independently with strict API boundaries and asynchronous event queues, eliminating single points of failure across the deployment lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-2">
            {study.architectureOverview.map((node, i) => (
              <div
                key={node.label}
                className="p-4 rounded-lg bg-surface-900 border border-surface-800 flex flex-col justify-between space-y-3 relative group hover:border-accent/60 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-accent font-bold">TIER 0{i + 1}</span>
                  <span className="text-surface-500">READY</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-surface-100">
                    {node.label}
                  </h4>
                  {node.subtext && (
                    <p className="font-mono text-xs text-surface-400">
                      {node.subtext}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. Engineering Challenges Block */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-surface-200 dark:border-surface-800">
          <AlertTriangle className="w-5 h-5 text-status-warning" />
          <h2 className="font-sans font-bold text-2xl text-content-primary">
            5. Engineering Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {study.engineeringChallenges.map((challenge) => (
            <div
              key={challenge.title}
              className="p-6 rounded-xl bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 hover:border-surface-300 dark:hover:border-surface-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="neutral" className="font-mono text-[10px] uppercase">
                    CHALLENGE: {challenge.category}
                  </Badge>
                  <span className="font-mono text-[10px] text-content-tertiary">
                    HIGH PRIORITY
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg text-content-primary tracking-tight">
                  {challenge.title}
                </h3>
              </div>
              <p className="font-sans text-sm text-content-secondary leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 6. Key Engineering Decisions Block (Why FastAPI? Why PostgreSQL? Why React? etc.) */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-surface-200 dark:border-surface-800">
          <Scale className="w-5 h-5 text-accent" />
          <h2 className="font-sans font-bold text-2xl text-content-primary">
            6. Key Engineering Decisions
          </h2>
        </div>

        <div className="space-y-4">
          {study.keyDecisions.map((decision) => (
            <div
              key={decision.technology}
              className="p-6 rounded-xl bg-surface-50/80 dark:bg-surface-900/30 border border-surface-200/80 dark:border-surface-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-accent/40 transition-all"
            >
              <div className="space-y-1.5 max-w-xs md:max-w-sm shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <h3 className="font-sans font-bold text-lg text-content-primary">
                    {decision.technology}
                  </h3>
                </div>
                <p className="font-mono text-xs text-content-tertiary font-semibold uppercase">
                  {decision.tradeOff}
                </p>
              </div>

              <div className="flex-1 md:border-l md:border-surface-200 md:dark:border-surface-800 md:pl-6">
                <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed">
                  {decision.justification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 7. Technology Stack (Grouped by Responsibility) */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-surface-200 dark:border-surface-800">
          <Code2 className="w-5 h-5 text-accent" />
          <h2 className="font-sans font-bold text-2xl text-content-primary">
            7. Technology Stack & Responsibilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {study.technologyGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-xl bg-background dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800 space-y-3"
            >
              <div className="flex items-center justify-between border-b border-surface-100 dark:border-surface-800/60 pb-2.5 font-mono text-xs font-bold text-content-primary uppercase">
                <span>{group.category} LAYER</span>
                <span className="text-content-tertiary text-[10px]">{group.items.length} MODULES</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {group.items.map((item) => (
                  <Tag key={item} className="text-xs font-mono bg-surface-100 dark:bg-surface-800">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 8. Flagship Consulting Engagement Deep-Dive Chapters (Only for PAIN AWAY / Flagship) */}
      {study.flagship && study.flagshipSections && study.flagshipSections.length > 0 && (
        <motion.section variants={fadeUpItemVariants} className="space-y-8 pt-8 border-t-2 border-accent/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-200 dark:border-surface-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-accent font-bold">
                <Sparkles className="w-4 h-4" />
                <span>EXPANDED FLAGSHIP CONSULTING ARCHIVE</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-content-primary">
                PAIN AWAY — Comprehensive Systems Breakdown
              </h2>
            </div>
            <Badge variant="accent" showDot className="self-start sm:self-center">
              7 ARCHITECTURAL MODULES
            </Badge>
          </div>

          <div className="space-y-8">
            {study.flagshipSections.map((section, idx) => (
              <div
                key={section.id}
                id={section.id}
                className="p-6 sm:p-8 rounded-xl bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 hover:border-accent/40 transition-all space-y-5"
              >
                <div className="flex items-start justify-between gap-4 border-b border-surface-100 dark:border-surface-800/60 pb-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-bold text-accent">
                      MODULE 0{idx + 1}
                    </span>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-content-primary">
                      {section.title}
                    </h3>
                    <p className="font-mono text-xs font-medium text-content-tertiary">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
                  {section.description}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="font-mono text-xs font-bold text-content-tertiary uppercase">
                    Architectural Guardrails & Technical Specs:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {section.bulletPoints.map((point) => (
                      <div
                        key={point}
                        className="p-3 rounded-lg bg-surface-50 dark:bg-surface-800/60 border border-surface-200/60 dark:border-surface-700/60 flex items-start gap-2.5 text-xs sm:text-sm font-sans text-content-secondary leading-normal"
                      >
                        <Layers className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* 9. Engineering Outcome Block */}
      <motion.section variants={fadeUpItemVariants} className="space-y-6">
        <div className="flex items-center gap-2.5 pb-2 border-b border-surface-200 dark:border-surface-800">
          <CheckCircle2 className="w-5 h-5 text-status-success" />
          <h2 className="font-sans font-bold text-2xl text-content-primary">
            {study.flagship ? '8. Final Consulting & Engineering Outcome' : '8. Engineering Outcome'}
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-surface-950 text-white border-2 border-status-success/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-status-success/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="space-y-4 relative z-10 max-w-4xl">
            <span className="font-mono text-xs text-status-success font-bold uppercase tracking-wider">
              VERIFIED PRODUCTION RESULT
            </span>
            <p className="font-sans text-lg sm:text-xl md:text-2xl leading-relaxed text-surface-100 font-medium">
              "{study.engineeringOutcome}"
            </p>
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-surface-400 border-t border-surface-800">
              <span>CASE STUDY ARCHIVE: {study.title.toUpperCase()}</span>
              <span className="text-status-success font-bold">STATUS: OPERATIONAL & STABLE</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bottom Navigation Switcher (Previous / Next Case Study) */}
      <motion.div
        variants={fadeUpItemVariants}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-surface-200 dark:border-surface-800"
      >
        <div>
          {onNavigatePrev && prevTitle ? (
            <Button
              variant="outline"
              size="lg"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              onClick={onNavigatePrev}
              className="w-full sm:w-auto font-semibold justify-start"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-content-tertiary">PREVIOUS CASE STUDY</span>
                <span>{prevTitle}</span>
              </div>
            </Button>
          ) : (
            <div />
          )}
        </div>

        <div>
          {onNavigateNext && nextTitle ? (
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={onNavigateNext}
              className="w-full sm:w-auto font-semibold justify-end"
            >
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-mono text-surface-200">NEXT CASE STUDY</span>
                <span>{nextTitle}</span>
              </div>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
