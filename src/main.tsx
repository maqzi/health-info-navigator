import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import datadog from './lib/datadog';

const startTime = performance.now(); // Track application startup time

datadog.init();

datadog.log({
  action: 'app_start',
  category: 'performance',
  label: 'Application Startup',
  additionalData: {
    startupTime: `${performance.now() - startTime}ms`,
    timestamp: new Date().toISOString(),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
