import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import './app.css';

function App() {
  return (
    <div className="application">
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
