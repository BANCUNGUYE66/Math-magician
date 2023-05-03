import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/Calculator';
import Home from './pages/Home';
import Navbar from './nav';
import QoutePage from './pages/Qoute';

function App() {
  return (

    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/qoute" element={<QoutePage />} />
          </Routes>
        </div>
      </>

    </div>
  );
}

export default App;
