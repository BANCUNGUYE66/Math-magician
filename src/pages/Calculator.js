import React from 'react';
import Calculator from '../components/Calculator';
import './style.css';

const CalculatorPage = () => (
  <div className="page_container">
    <div className="qoute_wrapper">
      <h1>Let&rsquo;s Do Some Math!</h1>
    </div>
    <div className="digit_wrapper">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
