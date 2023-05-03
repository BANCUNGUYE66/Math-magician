import { useState, useCallback } from 'react';
import calculate from '../logic/calculate';
import './style.css';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const clickHandler = useCallback((e) => {
    const results = calculate(state, e.target.innerText);
    setState(results);
  }, [state]);
  const { total, next, operation } = state;
  return (
    <div className="calc">
      <div className="calcWrapper">
        <p>
          {total}
          {' '}
          {operation}
          {' '}
          {next}

        </p>
        <div className="buttonWrapper">

          <button onClick={clickHandler} type="button">AC</button>
          <button onClick={clickHandler} type="button">+/-</button>
          <button onClick={clickHandler} type="button">%</button>
          <button onClick={clickHandler} type="button" className="sign">÷</button>

          <button onClick={clickHandler} type="button">7</button>
          <button onClick={clickHandler} type="button">8</button>
          <button onClick={clickHandler} type="button">9</button>
          <button onClick={clickHandler} type="button" className="sign">x</button>

          <button onClick={clickHandler} type="button">4</button>
          <button onClick={clickHandler} type="button">5</button>
          <button onClick={clickHandler} type="button">6</button>
          <button onClick={clickHandler} type="button" className="sign">-</button>

          <button onClick={clickHandler} type="button">1</button>
          <button onClick={clickHandler} type="button">2</button>
          <button onClick={clickHandler} type="button">3</button>
          <button onClick={clickHandler} type="button" className="sign">+</button>

          <button onClick={clickHandler} type="button" className="zero">0</button>
          <button onClick={clickHandler} type="button">.</button>
          <button onClick={clickHandler} type="button" className="sign">=</button>

        </div>
      </div>
    </div>
  );
}

export default Calculator;
