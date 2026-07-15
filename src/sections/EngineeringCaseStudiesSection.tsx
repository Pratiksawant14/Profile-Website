import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../layouts';
import {
  SectionHeading,
  Badge,
  CaseStudySidebar,
  CaseStudyViewer,
  EmptyState,
} from '../components';
import { CASE_STUDY_LIST, CASE_STUDY_DETAILS } from '../constants';
import type { SystemCategory } from '../types/systems';
import { Terminal } from 'lucide-react';

export interface EngineeringCaseStudiesSectionProps {
  initialCaseId?: string;
}

export const EngineeringCaseStudiesSection: React.FC<EngineeringCaseStudiesSectionProps> = ({
  initialCaseId = 'pain-away',
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialCaseId);
  const [activeCategory, setActiveCategory] = useState<SystemCategory>('all');

  // Filtered case studies list
  const filteredStudies = useMemo(() => {
    return CASE_STUDY_LIST.filter((study) => {
      return activeCategory === 'all' || study.category === activeCategory;
    });
  }, [activeCategory]);

  // Ensure current selected ID remains valid inside filtered studies
  const activeStudy = useMemo(() => {
    const foundInFilter = filteredStudies.find((s) => s.id === selectedId);
    if (foundInFilter) return foundInFilter;
    if (filteredStudies.length > 0) return filteredStudies[0];
    return CASE_STUDY_DETAILS[selectedId] || CASE_STUDY_LIST[0];
  }, [filteredStudies, selectedId]);

  // Next / Previous calculations
  const currentIndex = useMemo(() => {
    return filteredStudies.findIndex((s) => s.id === activeStudy.id);
  }, [filteredStudies, activeStudy.id]);

  const prevStudy = currentIndex > 0 ? filteredStudies[currentIndex - 1] : undefined;
  const nextStudy =
    currentIndex >= 0 && currentIndex < filteredStudies.length - 1
      ? filteredStudies[currentIndex + 1]
      : undefined;

  const handleNavigatePrev = () => {
    if (prevStudy) {
      setSelectedId(prevStudy.id);
      window.scrollTo({ top: document.getElementById('engineering-case-studies')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const handleNavigateNext = () => {
    if (nextStudy) {
      setSelectedId(nextStudy.id);
      window.scrollTo({ top: document.getElementById('engineering-case-studies')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer variant="transparent" id="engineering-case-studies" className="py-16 md:py-24">
      {/* Section Header */}
      <SectionHeading
        eyebrow="IN-DEPTH CONSULTING ARCHIVES & TRADE-OFFS"
        title="Engineering Case Studies"
        description="Every system begins with a business problem. Every engineering decision follows from understanding that problem."
        action={
          <Badge variant="accent" showDot className="py-1 px-3.5">
            FULL ARCHITECTURAL SPECIFICATIONS
          </Badge>
        }
      />

      {/* Main Grid: Left Sidebar TOC vs Right Case Study Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
        {/* Left TOC Index (Col 3 on desktop, sticky drawer on mobile) */}
        <div className="lg:col-span-4 xl:col-span-3">
          <CaseStudySidebar
            caseStudies={filteredStudies}
            selectedId={activeStudy.id}
            onSelectCaseStudy={setSelectedId}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Right Viewer Block (Col 9 on desktop) */}
        <div className="lg:col-span-8 xl:col-span-9">
          <AnimatePresence mode="wait">
            {activeStudy ? (
              <CaseStudyViewer
                key={activeStudy.id}
                study={activeStudy}
                onNavigatePrev={prevStudy ? handleNavigatePrev : undefined}
                onNavigateNext={nextStudy ? handleNavigateNext : undefined}
                prevTitle={prevStudy?.title}
                nextTitle={nextStudy?.title}
              />
            ) : (
              <EmptyState
                icon={<Terminal className="w-6 h-6 text-accent" />}
                title="No Case Study Matches Category"
                description={`No engineering case studies matched category "${activeCategory.toUpperCase()}".`}
                actionLabel="View All Case Studies"
                onAction={() => setActiveCategory('all')}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
};
