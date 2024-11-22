import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global';
import { App } from './App';
import { AcessoProvider } from './components/contexts/ContextAcesso';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <App />
      </AcessoProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
