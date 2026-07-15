import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-content-primary selection:bg-accent selection:text-white transition-colors duration-normal">
      <Navbar />
      <main className="flex-1 flex flex-col w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
