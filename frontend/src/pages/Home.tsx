import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Bem-vindo à Home</h1>
      <button onClick={handleLogin}>Ir para Login</button>
    </div>
  );
};

export default Home;