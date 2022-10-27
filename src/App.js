import React from 'react';
import Calculator from './Components/Calculator';
import './app.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="application">
        <Calculator />
      </div>
    );
  }
}

export default App;
