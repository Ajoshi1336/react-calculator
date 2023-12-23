import React, { useState } from 'react';

function Operators({ setCurrentOperator, onEnter, onReset }) {
    return (
    <>
    <button className="operator" id="plus" onClick={() => setCurrentOperator("+")}>+</button>
    <button className="operator" id="minus" onClick={() => setCurrentOperator("-")}>-</button>
    <button className="operator" id="times" onClick={() => setCurrentOperator("*")}>*</button>
    <button className="operator" id="divide" onClick={() => setCurrentOperator("/")}>%</button>
    <button className="operator" id="enter" onClick={onEnter}>Enter</button>
    <button className="operator" id="reset" onClick={onReset}>Reset</button>
    </>
    )
}

export default Operators;