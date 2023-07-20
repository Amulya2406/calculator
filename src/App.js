import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleClearLastCharacter = () => {
    const operators = ['+', '-', '*', '/'];
    const lastChar = input.slice(-1);
    if (operators.includes(lastChar)) {
      setInput(input.slice(0, -1));}
    setInput(input.slice(0, -1));
  };

  
  const handleCalculate = () => {
    try {
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
   
    <div className="calculator-container">
      <h1>Calculator</h1>
    
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('+')}>+</button>
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('-')}>-</button>
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('*')}>*</button>
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={() => handleButtonPress('.')}>.</button>
        <button onClick={() => handleButtonPress('/')}>/</button>
        <button onClick={handleClearLastCharacter}>C</button>
        
        <button onClick={handleClear} className="clear">Clear</button>
        <button onClick={handleCalculate} className="equal">=</button>
      </div>
    </div>
  
    </div>

  );
}

export default App;