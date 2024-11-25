import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import About from './components/pages/About';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* Adicione mais rotas aqui conforme necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
