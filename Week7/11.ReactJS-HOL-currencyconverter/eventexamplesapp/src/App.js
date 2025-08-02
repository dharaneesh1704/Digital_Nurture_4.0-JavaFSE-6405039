import React, { useState } from 'react';
import CurrrencyConverter from './CurrrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
    sayHello();
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! This is a static message.");
  }

  function showConverterMessage() {
    alert("Currency Converting to Euro");
  }

  function sayWelcome(msg) {
    alert(msg);
  }

  function onButtonClick() {
    alert("I was clicked");
  }

  return (
    <div>
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increaseCounter}>Increment</button>
      <button onClick={decreaseCounter}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      
      <br /><br />

      <button onClick={sayHello}>Say Hello</button>

      <br /><br />

      <button onClick={onButtonClick}>Click Me</button>

      <br /><br />

      <CurrrencyConverter onConvert={showConverterMessage} />
    </div>
  );
}

export default App;
