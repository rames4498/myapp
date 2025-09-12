import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [data, setData] = useState(null);

  // useEffect should be outside of the return statement
  useEffect(() => {
    setTimeout(() => {
      setData("Here is some fetched data!");
    }, 5000); // Simulating API delay
  }, []); // Runs once when the component mounts

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <p>The switch is {isOn ? "ON" : "OFF"}</p>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      </div>

      <div>
        <p>{data || "Loading..."}</p>
      </div>
    </div>
  );
}

export default App;

