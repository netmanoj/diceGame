import React, { useState } from 'react';


const Bottom = () => {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [number3, setNumber3] = useState(1);
  const [message, setMessage] = useState('');

  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    const random3 = Math.floor(Math.random() * 6) + 1;

    setNumber1(random1);
    setNumber2(random2);
    setNumber3(random3);

    if (random1 === random2 && random2 === random3) {
      setMessage('Winner!');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="bottom-container">
        <h1>If no1 = no2 = no3 then Winner!</h1>
      <div className="bottom-big-box">
        <div className="bottom-small-box">{number1}</div>
        <div className="bottom-small-box">{number2}</div>
        <div className="bottom-small-box">{number3}</div>
      </div>
      <button className="bottom-generate-button" onClick={generateRandomNumbers}>
        Roll Dice
      </button>
      {message && <div className="bottom-message">{message}</div>}
    </div>
  );
};

export default Bottom;
