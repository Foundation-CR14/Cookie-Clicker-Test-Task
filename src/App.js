import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  return (
    <div className="App-header">
      <div>Cookies earned:</div>
      <div id="cookie-count">{counter}</div>
      <button name="cookie-increment" onClick={increase}>
        Click for a cookie!
      </button>
    </div>
  );
};

export default App;
