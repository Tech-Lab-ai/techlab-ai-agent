
import React from 'react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
