import React from 'react';
import { SectionContainer } from '../layouts';
import {
  SectionHeading,
  Badge,
  ProcessWorkflow,
  EngineeringPrinciplesGrid,
  DecisionComparisons,
  PainAwayWorkflowExample,
} from '../components';

export const EngineeringProcessSection: React.FC = () => {
  return (
    <SectionContainer variant="transparent" id="engineering-process-showcase" className="py-16 md:py-24 space-y-16 sm:space-y-20">
      {/* 1. Main Workflow Section Header */}
      <div>
        <SectionHeading
          eyebrow="METHODOLOGY & SYSTEMIC EXECUTION"
          title="Engineering Process"
          description="Every production system begins with understanding the business problem—not writing code."
          action={
            <Badge variant="accent" showDot className="py-1 px-3 font-mono text-xs">
              CONSULTING RIGOR
            </Badge>
          }
        />
        <ProcessWorkflow />
      </div>

      {/* 2. Engineering Principles Subsection */}
      <div className="pt-8 border-t border-surface-200/60 dark:border-surface-800/60">
        <SectionHeading
          eyebrow="FOUNDATIONAL PHILOSOPHY"
          title="Engineering Principles"
          description="Core tenets that govern system architecture, API cleanliness, and production resilience across every codebase."
        />
        <EngineeringPrinciplesGrid />
      </div>

      {/* 3. Decision Making Subsection */}
      <div className="pt-8 border-t border-surface-200/60 dark:border-surface-800/60">
        <SectionHeading
          eyebrow="ARCHITECTURAL TRADE-OFFS"
          title="How I Make Engineering Decisions"
          description="Pragmatic trade-off comparisons prioritizing long-term business scale and maintainability over temporary technical shortcuts."
        />
        <DecisionComparisons />
      </div>

      {/* 4. Real Workflow Example Subsection (PAIN AWAY) */}
      <div className="pt-8 border-t border-surface-200/60 dark:border-surface-800/60">
        <SectionHeading
          eyebrow="CASE STUDY IN PRACTICE"
          title="Real Workflow Example"
          description="A miniature step-by-step walkthrough demonstrating how our 8-stage consulting methodology was applied to build PAIN AWAY."
        />
        <PainAwayWorkflowExample />
      </div>
    </SectionContainer>
  );
};
