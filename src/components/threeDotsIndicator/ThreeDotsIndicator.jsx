import React from 'react';
import './threeDotsIndicator.css';

const ThreeDotsIndicator = () => {
  return (
    <div className="dots-container">
      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

export default ThreeDotsIndicator;
