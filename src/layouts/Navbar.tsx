import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS, SITE_METADATA } from '../constants';
import { useTheme, useScrollDirection } from '../hooks';
import { cn } from '../lib/utils';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { isScrolled } = useScrollDirection();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-normal backdrop-blur-md',
        isScrolled
          ? 'bg-background/85 border-b border-surface-200 dark:border-surface-800 shadow-xs'
          : 'bg-background/60 border-b border-transparent'
      )}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand / Engineering Identity */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2.5 font-mono font-bold text-sm tracking-tighter text-content-primary hover:text-accent transition-colors group"
        >
          <div className="w-8 h-8 rounded bg-surface-900 text-white dark:bg-white dark:text-surface-900 flex items-center justify-center font-mono text-xs font-black transition-transform group-hover:scale-105">
            PS
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight leading-none text-content-primary">
              {SITE_METADATA.name}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-content-tertiary uppercase mt-0.5">
              {SITE_METADATA.identity} • ARCHITECT
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={cn(
                  'relative px-3.5 py-2 rounded text-sm font-sans font-medium transition-colors select-none',
                  isActive
                    ? 'text-content-primary font-semibold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-100 dark:hover:bg-surface-800/50'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-surface-100 dark:bg-surface-800 rounded -z-10 border border-surface-200/80 dark:border-surface-700/80"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md bg-surface-100 dark:bg-surface-800 text-content-secondary hover:text-content-primary border border-surface-200 dark:border-surface-700 transition-colors cursor-pointer"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-status-warning" />
            ) : (
              <Moon className="w-4 h-4 text-surface-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-md bg-surface-100 dark:bg-surface-800 text-content-secondary hover:text-content-primary border border-surface-200 dark:border-surface-700 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer without horizontal scrolling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-surface-200 dark:border-surface-800 bg-background/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-1">
              <div className="pb-3 mb-2 border-b border-surface-100 dark:border-surface-800 flex items-center justify-between text-xs font-mono text-content-tertiary">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  NAVIGATION PORTAL
                </span>
                <span>STATUS: OPERATIONAL</span>
              </div>
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={cn(
                      'flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-sans font-medium transition-colors',
                      isActive
                        ? 'bg-surface-100 dark:bg-surface-800 text-accent font-semibold border border-surface-200 dark:border-surface-700'
                        : 'text-content-secondary hover:text-content-primary hover:bg-surface-50 dark:hover:bg-surface-900'
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-content-tertiary">
                      {item.path}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
