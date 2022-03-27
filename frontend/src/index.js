import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContextProvider } from './AppContextProvider';
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
  <AppContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AppContextProvider>,
  document.getElementById('root')
);
