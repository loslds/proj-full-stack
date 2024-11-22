import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global';

import { AcessoProvider } from './components/contexts/ContextAcesso';
import { AppRoutes } from './components/AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <AppRoutes />
      </AcessoProvider>
    </BrowserRouter>
  </React.StrictMode>
);

