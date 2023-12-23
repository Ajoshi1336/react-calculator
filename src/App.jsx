import React, { useState } from 'react';
import './App.css';
import Numbers from './Numbers';
import Text from './Text';
import Operators from './Operators';


function App() {
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);


  const calculateResult = () => {
    switch (currentOperator) {
      case '+':
        setResult(operand1 + operand2);
        break;
      case '-':
        setResult(operand1 - operand2);
        break;
      case '*':
        setResult(operand1 * operand2);
        break;
      case '/':
        setResult(operand1 / operand2);
        break;
      default:
       
    }
  
  

    setOperand1(null)
    setOperand2(null)
    setCurrentOperator(null)
  }

  const resetCalculator = () => {
    setOperand1(null);
    setOperand2(null);
    setCurrentOperator(null);
    setResult(null);
};
  
  
  return (
    <>
    <Text
  operand1={operand1}
  operand2={operand2}
  currentOperator={currentOperator}
  result={result}
/>
<Numbers operand1={operand1} setOperand1={setOperand1} operand2={operand2} setOperand2={setOperand2} /> 
    <br></br>
    <Operators 
    setCurrentOperator={setCurrentOperator} 
    currentOperator={currentOperator}
    onEnter={calculateResult}
    onReset={resetCalculator} />
    </>
  );
}



export default App
