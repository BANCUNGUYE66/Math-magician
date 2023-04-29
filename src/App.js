import React from 'react';
import Calculator from './components/Calculator';
import Qoute from './components/qoute';

function App() {
  return (

    <div className="App">
      <div className="qoute_wrapper">
        <Qoute />
      </div>

      <div className="calculator_wrapper">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
