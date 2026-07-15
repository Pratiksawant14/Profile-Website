import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../layouts';
import {
  SectionHeading,
  Badge,
  ExpertiseBlueprintCard,
  ExpertiseInspectorDrawer,
  LearningPhilosophyCallout,
} from '../components';
import { EXPERTISE_DOMAINS } from '../constants';
import type { ExpertiseDomain, TechNode } from '../types/expertise';
import { cn } from '../lib/utils';

export const TechnicalExpertiseSection: React.FC = () => {
  const [activeDomainFilter, setActiveDomainFilter] = useState<string>('all');
  const [selectedNode, setSelectedNode] = useState<{ node: TechNode | null; domainTitle: string | null }>({
    node: null,
    domainTitle: null,
  });

  const domainOptions = [
    { id: 'all', label: 'All Ecosystem Domains' },
    { id: 'applied-ai', label: 'Applied AI' },
    { id: 'backend-engineering', label: 'Backend' },
    { id: 'frontend-engineering', label: 'Frontend' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'cloud-infrastructure', label: 'Cloud & Infra' },
    { id: 'software-architecture', label: 'Architecture' },
    { id: 'engineering-tools', label: 'DevOps & Tools' },
  ];

  const filteredDomains = useMemo(() => {
    if (activeDomainFilter === 'all') return EXPERTISE_DOMAINS;
    return EXPERTISE_DOMAINS.filter((d) => d.id === activeDomainFilter);
  }, [activeDomainFilter]);

  const handleNodeSelect = (node: TechNode | null, domainTitle: string) => {
    setSelectedNode({
      node,
      domainTitle: node ? domainTitle : null,
    });
  };

  return (
    <SectionContainer variant="transparent" id="technical-expertise-ecosystem" className="py-16 md:py-24 space-y-12 sm:space-y-16">
      {/* Section Header */}
      <div>
        <SectionHeading
          eyebrow="HOLISTIC ENGINEERING BLUEPRINTS"
          title="Technical Expertise"
          description="Building production systems requires connecting technologies into scalable engineering ecosystems—not simply learning frameworks."
          action={
            <Badge variant="accent" showDot className="py-1 px-3.5 font-mono text-xs">
              INTERACTIVE ECOSYSTEM ARCHIVE
            </Badge>
          }
        />

        {/* Domain Filtering Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6 pb-2">
          {domainOptions.map((opt) => {
            const isActive = activeDomainFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  setActiveDomainFilter(opt.id);
                  setSelectedNode({ node: null, domainTitle: null });
                }}
                className={cn(
                  'relative px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer select-none',
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-100 dark:hover:bg-surface-800/60'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="expertise-domain-filter-pill"
                    className="absolute inset-0 bg-accent rounded-md -z-10 shadow-xs"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Domain Ecosystem Cards Grid */}
      <motion.div layout className="space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredDomains.map((domain: ExpertiseDomain) => (
            <motion.div
              key={domain.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <ExpertiseBlueprintCard
                domain={domain}
                activeNodeId={selectedNode.node?.id || null}
                onSelectNode={handleNodeSelect}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Sticky Bottom Node Inspector Drawer when hovering/clicking any node */}
      <ExpertiseInspectorDrawer
        activeNode={selectedNode.node}
        domainTitle={selectedNode.domainTitle}
        onClose={() => setSelectedNode({ node: null, domainTitle: null })}
      />

      {/* Learning Philosophy Callout Box */}
      <div className="pt-8 border-t border-surface-200/60 dark:border-surface-800/60">
        <LearningPhilosophyCallout />
      </div>
    </SectionContainer>
  );
};
