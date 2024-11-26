import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/styleds/Global';

//import { AcessoProvider } from './components/contexts/ContextAcesso';

import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Global />
      {/* 
      <AcessoProvider> 
        <AppRoutes />
      </AcessoProvider>
      */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
