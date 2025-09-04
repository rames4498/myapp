// src/App.js
import React, { useState } from "react";
import logo from "./logo.svg"; // CRA includes this by default
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>React + CRA Counter</h1>

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
        </div>

        <p className="read-the-docs">
          Click the React logo to learn more
        </p>
      </header>
    </div>
  );
}

export default App;
