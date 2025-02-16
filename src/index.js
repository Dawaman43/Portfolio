// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for React 18+
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// Create the root element using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
