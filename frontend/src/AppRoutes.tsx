import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/home/Home';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;
