import React, { useState } from 'react';


const Top = () => {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [message, setMessage] = useState('');

  
  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    setNumber1(random1);
    setNumber2(random2);

    if (random1 + random2 <= 4) {
      setMessage('Winner!');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="top-container">
        <h1>If no1 + no2 is less than or equals to 4 = winner! </h1>
      <div className="top-big-box">
        <div className="top-small-box">{number1}</div>
        <div className="top-small-box">{number2}</div>
      </div>
      <button className="top-generate-button" onClick={generateRandomNumbers}>
        Roll Dice
      </button>
      {message && <div className="top-message">{message}</div>}
    </div>
  );
};

export default Top;
