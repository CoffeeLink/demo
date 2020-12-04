import './App.css';
import React, { useState } from 'react'

function App() {
  const title = 'App Counter';
  let [number, setNumber] = useState(0)

  const incrementNumber = () => {
    setNumber((prevNumb) => prevNumb + 1)
  }

  return (
    <div data-test="component-app">
      <h1>{ title }</h1>
      <br />
      number clicked { number }
      <br />
      <button onClick={incrementNumber}>Click</button>
    </div>
  );
}

export default App;
