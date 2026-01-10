
import React from 'react';
import Sidebar from '@/components/client/Sidebar';
import Topbar from '@/components/client/Topbar';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Topbar />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default ClientLayout;
