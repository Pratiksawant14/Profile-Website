import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../layouts';
import { Button } from '../components';
import { Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-status-error/10 text-status-error flex items-center justify-center mb-6 font-mono font-bold text-xl">
          404
        </div>
        <h1 className="font-sans font-bold text-3xl sm:text-4xl text-content-primary tracking-tight mb-3">
          Route Not Found
        </h1>
        <p className="font-sans text-base text-content-secondary max-w-md leading-relaxed mb-8">
          The requested system route does not exist or has been deprecated in this architectural iteration.
        </p>
        <Button variant="primary" leftIcon={<Terminal className="w-4 h-4" />} onClick={() => navigate('/')}>
          Return to Navigation Portal
        </Button>
      </div>
    </PageContainer>
  );
};
