import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, clickState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    clickState(calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;
  return (
    <div className="Calculator">
      <p className="result">
        {total}
        {operation}
        {next}
      </p>
      <div className="board">
        <button type="button" onClick={clickHandler}>AC</button>
        <button type="button" onClick={clickHandler}>+/-</button>
        <button type="button" onClick={clickHandler}>%</button>
        <button type="button" onClick={clickHandler} className="orange">÷</button>
        <button type="button" onClick={clickHandler}>7</button>
        <button type="button" onClick={clickHandler}>8</button>
        <button type="button" onClick={clickHandler}>9</button>
        <button type="button" onClick={clickHandler} className="orange">x</button>
        <button type="button" onClick={clickHandler}>4</button>
        <button type="button" onClick={clickHandler}>5</button>
        <button type="button" onClick={clickHandler}>6</button>
        <button type="button" onClick={clickHandler} className="orange">-</button>
        <button type="button" onClick={clickHandler}>1</button>
        <button type="button" onClick={clickHandler}>2</button>
        <button type="button" onClick={clickHandler}>3</button>
        <button type="button" onClick={clickHandler} className="orange">+</button>
        <button type="button" onClick={clickHandler} className="btn0">0</button>
        <button type="button" onClick={clickHandler}>.</button>
        <button type="button" onClick={clickHandler} className="orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
