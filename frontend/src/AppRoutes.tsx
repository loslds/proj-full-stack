import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;
