import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../layouts';
import { SectionHeading, Badge, SystemFilter, SystemCard, EmptyState } from '../components';
import { ENGINEERING_SYSTEMS } from '../constants';
import type { SystemCategory } from '../types/systems';
import { Terminal } from 'lucide-react';

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
            PROJECT SHOWCASE
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


    </SectionContainer>
  );
};
