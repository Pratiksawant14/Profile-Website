import React from 'react';
import { Link } from 'react-router-dom';
import type { ProfessionalContactLinks } from '../../types/contact';
import { ArrowUp, Terminal } from 'lucide-react';

// Zero-dependency GitHub SVG
const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Zero-dependency LinkedIn SVG
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Zero-dependency Instagram SVG
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#E4405F]" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export interface SiteFooterProps {
  links: ProfessionalContactLinks;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ links }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Engineering Systems', to: '/engineering-systems' },
    { name: 'Methodology & Process', to: '/process' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Technical Expertise', to: '/expertise' },
    { name: 'Professional Profile', to: '/resume' },
    { name: 'Collaboration & Contact', to: '/contact' },
  ];

  return (
    <footer className="w-full border-t border-surface-200 dark:border-surface-800 bg-background dark:bg-surface-950 pt-16 pb-12 transition-colors">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Main Footer Split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between items-start">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center text-accent border border-accent/30 font-mono font-bold">
                PS
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-lg text-content-primary tracking-tight">
                  Pratik Santosh Sawant
                </h4>
                <span className="font-mono text-xs text-accent font-semibold">
                  Applied AI Engineer & Software Architect
                </span>
              </div>
            </div>
            <p className="font-sans text-xs sm:text-sm text-content-secondary max-w-md leading-relaxed">
              Engineering deterministic, self-healing cognitive pipelines and resilient production architectures for ambitious business workflows.
            </p>
          </div>

          {/* Navigation Shortcuts */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-content-primary uppercase tracking-wider block">
              System Architecture
            </span>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-content-secondary hover:text-accent transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Social Channels */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-content-primary uppercase tracking-wider block">
              Professional Endpoints
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={links.githubPersonal}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal GitHub"
                className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 flex items-center justify-center text-content-primary hover:text-accent transition-all border border-surface-200 dark:border-surface-700 shadow-xs"
              >
                <GitHubIcon />
              </a>

              <a
                href={links.githubOrganization}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Organization GitHub"
                className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 flex items-center justify-center text-accent transition-all border border-surface-200 dark:border-surface-700 shadow-xs"
              >
                <Terminal className="w-4 h-4" />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Network"
                className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 flex items-center justify-center text-[#0A66C2] transition-all border border-surface-200 dark:border-surface-700 shadow-xs"
              >
                <LinkedInIcon />
              </a>

              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Community"
                className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 flex items-center justify-center text-[#E4405F] transition-all border border-surface-200 dark:border-surface-700 shadow-xs"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll To Top */}
        <div className="pt-8 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-tertiary">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Pratik Santosh Sawant.</span>
            <span className="hidden sm:inline-block">All rights reserved. Built with precision engineering.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-content-secondary hover:text-content-primary transition-all cursor-pointer font-bold select-none"
            aria-label="Scroll to top of page"
          >
            <span>Scroll to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
};
