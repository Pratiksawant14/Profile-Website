import React from 'react';
import { SiteFooter } from '../components/ui/SiteFooter';
import { PROFESSIONAL_CONTACT_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return <SiteFooter links={PROFESSIONAL_CONTACT_LINKS} />;
};
