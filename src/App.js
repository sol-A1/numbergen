import React, { useState } from 'react';
import './App.css';

function App() {
  const [maxNumber, setMaxNumber] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const handleChange = (event) => {
    setMaxNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNumber = Math.floor(Math.random() * maxNumber) + 1;
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter max number:
          <input type="number" value={maxNumber} onChange={handleChange} />
        </label>
        <button type="submit">Generate</button>
      </form>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
