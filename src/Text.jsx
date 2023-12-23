import React from 'react';

function Text({ operand1, operand2, currentOperator, result }) {
    let displayValue = result !== null ? result : `${operand1 || ''} ${currentOperator || ''} ${operand2 || ''}`;
    return <h1 className="heading">{displayValue}</h1>;
  }

export default Text;

