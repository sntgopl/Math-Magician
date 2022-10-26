import React from 'react';
import ReactDOM from 'react-dom/client';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    return (
      
      <div className="Calculator">
        <p className="result">0</p>
        <div className="board">
          <button type="button" onClick={}>AC</button>
          <button type="button" onClick={}>+/-</button>
          <button type="button" onClick={}>%</button>
          <button type="button" onClick={}>/</button>
          <button type="button" onClick={}>7</button>
          <button type="button" onClick={}>8</button>
          <button type="button" onClick={}>9</button>
          <button type="button" onClick={}>X</button>
          <button type="button" onClick={}>4</button>
          <button type="button" onClick={}>5</button>
          <button type="button" onClick={}>6</button>
          <button type="button" onClick={}>-</button>
          <button type="button" onClick={}>1</button>
          <button type="button" onClick={}>2</button>
          <button type="button" onClick={}>3</button>
          <button type="button" onClick={}>+</button>
          <button type="button" onClick={}>0</button>
          <button type="button" onClick={}>.</button>
          <button type="button" onClick={}>=</button>
        </div>
      </div>
    )
  }
}

