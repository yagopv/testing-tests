import React, { useState } from "react";
import "./App.css";
import { sum } from "./lib/math";

function App() {
  const [param1, setParam1] = useState(0);
  const [param2, setParam2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(sum(param1, param2));
    setParam1(0);
    setParam2(0);
  };

  return (
    <div className="App">
      <input
        id="param1"
        type="number"
        value={param1}
        onChange={(e) => setParam1(e.target.value)}
      />

      <input
        id="param2"
        type="number"
        value={param2}
        onChange={(e) => setParam2(e.target.value)}
      />

      <button id="sum" onClick={handleSum}>
        Sumar
      </button>

      <p id="result">{result}</p>
    </div>
  );
}

export default App;
