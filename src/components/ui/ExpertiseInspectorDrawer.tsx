import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { TechNode } from '../../types/expertise';
import { Badge } from './Badge';
import { Tag } from './Tag';
import {
  Briefcase,
  Layers,
  ExternalLink,
  X,
  Cpu,
} from 'lucide-react';

export interface ExpertiseInspectorDrawerProps {
  activeNode: TechNode | null;
  domainTitle: string | null;
  onClose: () => void;
}

export const ExpertiseInspectorDrawer: React.FC<ExpertiseInspectorDrawerProps> = ({
  activeNode,
  domainTitle,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleOpenCaseStudy = (projectName: string) => {
    const slugMap: Record<string, string> = {
      'PAIN AWAY': '/case-studies/pain-away',
      'Mem-Rooted': '/case-studies/mem-rooted',
      TranslateIQ: '/case-studies/translate-iq',
      'Intelli-Credit': '/case-studies/intelli-credit',
      'Autonomous CI/CD Healing Agent': '/case-studies/autonomous-cicd-healing-agent',
      Learnify: '/case-studies/learnify',
    };
    if (slugMap[projectName]) {
      navigate(slugMap[projectName]);
    }
  };

  return (
    <AnimatePresence>
      {activeNode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="sticky bottom-6 z-40 max-w-4xl mx-auto p-6 rounded-xl bg-surface-900 text-white dark:bg-surface-950 border-2 border-accent shadow-2xl relative overflow-hidden my-6"
        >
          {/* Background Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Top Bar: Node Name & Close Button */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-surface-800 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-accent font-bold uppercase">
                <Cpu className="w-4 h-4" />
                <span>ECOSYSTEM NODE INSPECTOR — {domainTitle}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  {activeNode.name}
                </h4>
                <Badge variant="accent" showDot className="font-mono text-xs">
                  MATURITY: {activeNode.maturity.toUpperCase()}
                </Badge>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md bg-surface-800 hover:bg-surface-700 text-surface-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Inspector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Node Role & Blueprint Chain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 relative z-10">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-surface-400 uppercase">
                Engineering Responsibility & Production Role:
              </span>
              <p className="font-sans text-sm sm:text-base text-surface-200 leading-relaxed">
                {activeNode.role}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-accent uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Connected Ecosystem Nodes:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.connectedNodes.map((cId) => (
                  <Tag
                    key={cId}
                    className="text-xs font-mono bg-surface-800 text-surface-200 border border-surface-700"
                  >
                    → {cId.replace(/-/g, ' ').toUpperCase()}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Connected Portfolio Projects */}
          <div className="pt-4 mt-4 border-t border-surface-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-surface-300 font-bold flex items-center gap-1.5 mr-1">
                <Briefcase className="w-3.5 h-3.5 text-accent" />
                PRODUCTION PROJECTS USING THIS:
              </span>
              {activeNode.projects.map((proj) => (
                <button
                  key={proj}
                  onClick={() => handleOpenCaseStudy(proj)}
                  className="px-3 py-1 rounded bg-accent/20 hover:bg-accent/30 text-accent border border-accent/40 font-sans text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{proj}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              ))}
            </div>

            <span className="font-mono text-[10px] text-surface-500 self-end sm:self-center">
              CLICK PROJECT PILL TO OPEN CASE STUDY
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
