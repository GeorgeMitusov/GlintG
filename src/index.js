import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataProvider from './context/Context';
import './styles/Index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);