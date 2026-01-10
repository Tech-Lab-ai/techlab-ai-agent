
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4"><a href="/cliente">Dashboard</a></li>
          <li className="mb-4"><a href="/cliente/servicos">Meus Serviços</a></li>
          <li className="mb-4"><a href="/cliente/dominios">Domínios</a></li>
          <li className="mb-4"><a href="/cliente/faturas">Faturas</a></li>
          <li className="mb-4"><a href="/cliente/suporte">Suporte</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
