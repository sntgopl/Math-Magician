import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="Calculator">
        <p className="result">
          {total}
          {operation}
          {next}
        </p>
        <div className="board">
          <button type="button" onClick={this.clickHandler}>AC</button>
          <button type="button" onClick={this.clickHandler}>+/-</button>
          <button type="button" onClick={this.clickHandler}>%</button>
          <button type="button" onClick={this.clickHandler} className="orange">÷</button>
          <button type="button" onClick={this.clickHandler}>7</button>
          <button type="button" onClick={this.clickHandler}>8</button>
          <button type="button" onClick={this.clickHandler}>9</button>
          <button type="button" onClick={this.clickHandler} className="orange">x</button>
          <button type="button" onClick={this.clickHandler}>4</button>
          <button type="button" onClick={this.clickHandler}>5</button>
          <button type="button" onClick={this.clickHandler}>6</button>
          <button type="button" onClick={this.clickHandler} className="orange">-</button>
          <button type="button" onClick={this.clickHandler}>1</button>
          <button type="button" onClick={this.clickHandler}>2</button>
          <button type="button" onClick={this.clickHandler}>3</button>
          <button type="button" onClick={this.clickHandler} className="orange">+</button>
          <button type="button" onClick={this.clickHandler} className="btn0">0</button>
          <button type="button" onClick={this.clickHandler}>.</button>
          <button type="button" onClick={this.clickHandler} className="orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
