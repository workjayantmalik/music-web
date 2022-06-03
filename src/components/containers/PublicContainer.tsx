import React from 'react';
import { PublicFooter } from '~common/PublicFooter';
import { PublicHeader } from '~common/PublicHeader';

interface IPublicContainerProps {
  children: React.ReactNode;
}

export const PublicContainer: React.FC<IPublicContainerProps> = ({ children }) => {
  return (
    <main className="bg-white overflow-hidden">
      <PublicHeader isAuthenticated />

      {children}

      <PublicFooter />
    </main>
  );
};
