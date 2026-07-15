import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { MainLayout } from './layouts/MainLayout';
import {
  HomePage,
  EngineeringSystemsPage,
  ProcessPage,
  CaseStudiesPage,
  ExpertisePage,
  OpenSourcePage,
  ResumePage,
  ContactPage,
  NotFoundPage,
} from './pages';

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="engineering-systems" element={<EngineeringSystemsPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="case-studies/:id" element={<CaseStudiesPage />} />
            <Route path="expertise" element={<ExpertisePage />} />
            <Route path="open-source" element={<OpenSourcePage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
