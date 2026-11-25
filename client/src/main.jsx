import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(8, 20, 40, 0.95)',
            color: '#38BDF8',
            border: '1px solid rgba(34, 211, 238, 0.25)',
            backdropFilter: 'blur(12px)',
          },
          success: { iconTheme: { primary: '#22D3EE', secondary: '#030B1A' } },
          error:   { iconTheme: { primary: '#f87171', secondary: '#030B1A' } },
        }}
      />
    </HelmetProvider>
  </React.StrictMode>
);
