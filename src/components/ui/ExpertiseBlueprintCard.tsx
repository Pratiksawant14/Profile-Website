import React from 'react';
import type { ExpertiseDomain, TechNode, MaturityLevel } from '../../types/expertise';
import { Badge } from './Badge';
import { cn } from '../../lib/utils';
import {
  BrainCircuit,
  Server,
  Layout,
  Database,
  Cloud,
  Layers,
  Wrench,
  ArrowRight,
  Info,
} from 'lucide-react';

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-accent" />,
  Server: <Server className="w-5 h-5 text-accent" />,
  Layout: <Layout className="w-5 h-5 text-accent" />,
  Database: <Database className="w-5 h-5 text-accent" />,
  Cloud: <Cloud className="w-5 h-5 text-accent" />,
  Layers: <Layers className="w-5 h-5 text-accent" />,
  Wrench: <Wrench className="w-5 h-5 text-accent" />,
};

const MATURITY_VARIANTS: Record<MaturityLevel, 'success' | 'accent' | 'neutral' | 'warning'> = {
  Production: 'success',
  Advanced: 'accent',
  'Working Knowledge': 'neutral',
  Research: 'warning',
};

export interface ExpertiseBlueprintCardProps {
  domain: ExpertiseDomain;
  activeNodeId: string | null;
  onSelectNode: (node: TechNode | null, domainTitle: string) => void;
}

export const ExpertiseBlueprintCard: React.FC<ExpertiseBlueprintCardProps> = ({
  domain,
  activeNodeId,
  onSelectNode,
}) => {

  return (
    <div className="w-full rounded-xl bg-background dark:bg-surface-900/40 border border-surface-200 dark:border-surface-800 p-6 sm:p-8 space-y-6 transition-all hover:border-accent/40 relative overflow-hidden group">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/5 opacity-40 pointer-events-none" />

      {/* Top Domain Header Bar */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-surface-200 dark:border-surface-800 relative z-10">
        <div className="flex items-start gap-3.5 max-w-2xl">
          <div className="w-11 h-11 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center border border-surface-200 dark:border-surface-700 shrink-0">
            {DOMAIN_ICONS[domain.iconName] || <Layers className="w-5 h-5 text-accent" />}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-content-primary tracking-tight">
                {domain.title}
              </h3>
              <Badge variant="neutral" className="font-mono text-[10px] hidden sm:inline-flex">
                {domain.nodes.length} NODES
              </Badge>
            </div>
            <p className="font-sans text-sm text-content-secondary leading-relaxed font-medium">
              {domain.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1 font-mono text-xs">
          <span className="text-[10px] text-content-tertiary uppercase font-bold">BLUEPRINT FLOW ARCHITECTURE:</span>
          <span className="text-[11px] text-accent font-semibold bg-surface-100 dark:bg-surface-800/80 px-2.5 py-1 rounded border border-surface-200 dark:border-surface-700">
            {domain.flowSequence}
          </span>
        </div>
      </div>

      {/* Domain Description */}
      <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed relative z-10">
        {domain.description}
      </p>

      {/* Technology Graph Node Blueprint Grid */}
      <div className="space-y-3 relative z-10 pt-2">
        <div className="flex items-center justify-between font-mono text-[11px] text-content-tertiary uppercase pb-1 border-b border-surface-100 dark:border-surface-800/60">
          <span>INTERACTIVE TECHNOLOGY NODES (CLICK OR HOVER TO INSPECT RELATIONSHIPS)</span>
          <span>MATURITY RATED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 pt-2 text-left">
          {domain.nodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            const isConnected =
              activeNodeId &&
              domain.nodes.find((n) => n.id === activeNodeId)?.connectedNodes.includes(node.id);

            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(isSelected ? null : node, domain.title)}
                onMouseEnter={() => onSelectNode(node, domain.title)}
                className={cn(
                  'p-4 rounded-lg transition-all cursor-pointer border flex flex-col justify-between space-y-3 relative select-none group/node',
                  isSelected
                    ? 'bg-surface-900 text-white dark:bg-surface-800 border-accent shadow-md scale-[1.01]'
                    : isConnected
                    ? 'bg-accent/10 dark:bg-accent/15 border-accent/60 shadow-xs'
                    : 'bg-surface-50/80 dark:bg-surface-900/60 border-surface-200/80 dark:border-surface-800/80 hover:border-accent/50 text-content-primary hover:bg-background dark:hover:bg-surface-800/80'
                )}
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={cn(
                        'font-sans font-bold text-sm leading-snug transition-colors',
                        isSelected ? 'text-white' : 'text-content-primary group-hover/node:text-accent'
                      )}
                    >
                      {node.name}
                    </span>
                    <Badge
                      variant={MATURITY_VARIANTS[node.maturity]}
                      className="font-mono text-[9px] px-1.5 py-0.5 shrink-0"
                    >
                      {node.maturity}
                    </Badge>
                  </div>

                  <p
                    className={cn(
                      'font-sans text-xs leading-relaxed line-clamp-2',
                      isSelected ? 'text-surface-200' : 'text-content-secondary'
                    )}
                  >
                    {node.role}
                  </p>
                </div>

                {/* Node Footer: Connected relationships & Projects preview */}
                <div
                  className={cn(
                    'pt-2 border-t flex items-center justify-between font-mono text-[10px]',
                    isSelected ? 'border-surface-700 text-surface-300' : 'border-surface-200/60 dark:border-surface-800/60 text-content-tertiary'
                  )}
                >
                  <span className="flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-accent" />
                    <span>{node.connectedNodes.length} CONNECTED</span>
                  </span>

                  <span className="flex items-center gap-1 font-semibold text-accent">
                    <span>{node.projects.length} PROJECTS</span>
                    <Info className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
