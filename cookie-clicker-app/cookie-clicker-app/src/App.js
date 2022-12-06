import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <title>Cookie Clicker</title>
        <p>
          Count is <span id="cookie-count">{count}</span>
        </p>
        <button
          name="cookie-increment"
          rel="noopener noreferrer"
          onClick={() => {
            setCount((oldValue) => oldValue + 1);
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
};

export default App;
