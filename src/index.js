import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Components/Calculator.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>
);