import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../layouts';
import { SectionHeading, Badge, SystemFilter, SystemCard, EmptyState, Button } from '../components';
import { ENGINEERING_SYSTEMS } from '../constants';
import type { SystemCategory } from '../types/systems';
import { Cpu, ArrowRight, Terminal } from 'lucide-react';

export const EngineeringSystemsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SystemCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Instant filtering and searching logic
  const filteredSystems = useMemo(() => {
    return ENGINEERING_SYSTEMS.filter((system) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || system.category === activeCategory;

      if (!matchesCategory) return false;

      // Search match (if query exists)
      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const nameMatch = system.title.toLowerCase().includes(query);
      const subtitleMatch = system.subtitle.toLowerCase().includes(query);
      const descMatch = system.description.toLowerCase().includes(query);
      const categoryMatch = system.category.toLowerCase().includes(query);
      const techMatch = system.technologies.some((t) =>
        t.toLowerCase().includes(query)
      );

      return nameMatch || subtitleMatch || descMatch || categoryMatch || techMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <SectionContainer variant="transparent" id="engineering-systems-showcase" className="py-16 md:py-24">
      {/* Section Header */}
      <SectionHeading
        eyebrow="PRODUCTION ARCHITECTURE & BUSINESS PLATFORMS"
        title="Engineering Systems"
        description="A curated collection of production-grade systems designed to solve real business workflows using AI, backend architecture and scalable software engineering."
        action={
          <Badge variant="accent" showDot className="py-1 px-3">
            VERIFIED CASE STUDIES
          </Badge>
        }
      />

      {/* Instant Search Bar & Animated Category Filters */}
      <SystemFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalResults={filteredSystems.length}
      />

      {/* Systems Grid / List with AnimatePresence */}
      <div className="space-y-12 sm:space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredSystems.length > 0 ? (
            filteredSystems.map((system, index) => (
              <SystemCard key={system.id} system={system} index={index} />
            ))
          ) : (
            <motion.div
              key="empty-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmptyState
                icon={<Terminal className="w-6 h-6 text-accent" />}
                title="No Engineering Systems Match Query"
                description={`No production systems or architecture modules matched "${searchQuery}" under the selected category. Try resetting your search query or selecting "All Systems".`}
                actionLabel="Reset Search & Filters"
                onAction={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Concluding Consulting CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 sm:mt-24 p-8 sm:p-12 rounded-xl bg-surface-900 text-white dark:bg-surface-950 border border-surface-800 shadow-xl flex flex-col md:flex-row items-start justify-between gap-8 text-left relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-3 max-w-2xl relative z-10 text-left items-start">
          <div className="flex items-center justify-start gap-2 text-xs font-mono text-accent font-bold">
            <Cpu className="w-4 h-4" />
            <span>ARCHITECTURAL METHODOLOGY</span>
          </div>
          <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-snug">
            Interested in how these systems were designed?
          </h3>
          <p className="font-sans text-base text-surface-300 leading-relaxed">
            Explore deep-dive technical RFCs, high-concurrency database trade-off analyses, and comprehensive architectural breakdowns for each production system.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => alert('Redirecting to comprehensive engineering case study index')}
            className="shadow-lg hover:shadow-xl font-semibold"
          >
            View detailed engineering case studies
          </Button>
        </div>
      </motion.div>
    </SectionContainer>
  );
};
