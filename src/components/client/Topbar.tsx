
import React from 'react';

const Topbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div>
        <span>Olá, Cliente</span>
      </div>
    </header>
  );
};

export default Topbar;
