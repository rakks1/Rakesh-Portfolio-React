import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [count, setCount] = useState('');
  const [error, setError] = useState(false);

  const click = (value) => { 
    setCount(error ? value : count + value); 
    setError(false);
  };

  const isValidExpression = (expression) => {
    return /^[0-9+\-*/%.^()]+$/.test(expression);
  };

  const evaluateExpression = () => {
    if (isValidExpression(count)) {
      try {
        setCount(eval(count).toString());
        setError(false);
      } catch (err) {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <> 
      <div className='calculator-container'> 
        <div className="bg-animation">
          <div id="stars"></div>
        </div>
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
        </div>
        <h2 className="pro_title">React Calculator</h2>
        <form className='calsize'>
          <input type="text" value={error ? "Invalid expression" : count} readOnly className={error ? "error-input" : ""}/>
          <button type="button" className='calbtn' onClick={() => click("1")}>1</button>
          <button type="button" className='calbtn' onClick={() => click("2")}>2</button>
          <button type="button" className='calbtn' onClick={() => click("3")}>3</button>
          <button type="button" className='calbtn' onClick={() => click("4")}>4</button>
          <button type="button" className='calbtn' onClick={() => click("5")}>5</button>
          <button type="button" className='calbtn' onClick={() => click("6")}>6</button>
          <button type="button" className='calbtn' onClick={() => click("7")}>7</button>
          <button type="button" className='calbtn' onClick={() => click("8")}>8</button>
          <button type="button" className='calbtn' onClick={() => click("9")}>9</button>
          <button type="button" className='calbtn' onClick={() => click("0")}>0</button>
          <button type="button" className='calbtn' onClick={() => click(".")}>.</button>
          <button type="button" className='calbtn' onClick={() => click("+")}>+</button>
          <button type="button" className='calbtn' onClick={() => click("-")}>-</button>
          <button type="button" className='calbtn' onClick={() => click("*")}>*</button>
          <button type="button" className='calbtn' onClick={() => click("%")}>%</button>
          <button type="button" className='calbtn' onClick={() => click("**")}>^</button>
          <button type="button" className='calbtn' onClick={() => click("/")}>/</button>
          <button type="button" className='calbtn' onClick={() => { setCount(''); setError(false); }}>C</button>
          <button type="button" className='calbtn' onClick={() => setCount(count.slice(0, -1))}>D</button>
          <button type="button" className='calbtn' onClick={evaluateExpression}>=</button>
        </form>
      </div>
    </>
  );
}

export default Calculator;
