import React, { useState } from 'react';

function Numbers({ setOperand1, setOperand2, operand1, operand2 }) {
    const handleNumberClick = (number) => {
        if (operand1 === null || operand1 === 0) {
          setOperand1(number);
        } else {
          setOperand2(number);
        }
      };
    
    return (
    <>
    <button className="number" id="zero" onClick={() => handleNumberClick(0)}>0</button>
    <button className="number" id="one" onClick={() => handleNumberClick(1)}>1</button>
    <button className="number" id="two" onClick={() => handleNumberClick(2)}>2</button>
    <button className="number" id="three" onClick={() => handleNumberClick(3)}>3</button>
    <button className="number" id="four" onClick={() => handleNumberClick(4)}>4</button>
    <button className="number" id="five" onClick={() => handleNumberClick(5)}>5</button>
    <button className="number" id="six" onClick={() => handleNumberClick(6)}>6</button>
    <button className="number" id="seven" onClick={() => handleNumberClick(7)}>7</button>
    <button className="number" id="eight" onClick={() => handleNumberClick(8)}>8</button>
    <button className="number" id="nine" onClick={() => handleNumberClick(9)}>9</button>
    </>
    )
    }

export default Numbers;