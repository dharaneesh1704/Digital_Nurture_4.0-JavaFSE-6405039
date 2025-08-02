import React, { useState } from 'react';

function CurrrencyConverter({ onConvert }) {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  function convertToEuro() {
    let rate = 0.011; 
    if (rupees === '') {
      alert("Please enter a valid amount in INR.");
      return;
    }
    let result = rupees * rate;
    setEuro(result.toFixed(2));
    if (onConvert) {
      onConvert();
    }
  }

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={convertToEuro}>Convert</button>
      <p>Euro: € {euro}</p>
    </div>
  );
}

export default CurrrencyConverter;
