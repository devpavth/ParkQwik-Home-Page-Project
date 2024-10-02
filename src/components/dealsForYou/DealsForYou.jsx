import React from 'react';
import './dealsForYou.css';

const DealsForYou = () => {
  return (
    <div className="deals-section">
      <h3>Deals For You</h3>
      <div className="deals-items">
        <div className="deal-item-1">
            <p className='deal-title'>Recharge FASTag</p>
            <p className='deal-subtitle'>& Get petrol worth ₹30</p>
            <button className="deal-btn">Recharge Now</button>
        </div>
        <div className="deal-item-2">
            <p className='deal-title'>Get 25% off On</p>
            <p className='deal-subtitle'>your first car wash</p>
            <button className="deal-btn">Book Now</button>
        </div>

      </div>
    </div>
  )
}

export default DealsForYou