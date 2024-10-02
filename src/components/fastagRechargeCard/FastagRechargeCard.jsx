import React from 'react';
import './fastagRechargeCard.css';
import FastagCard from '../../assets/fastag-recharge-card/fastag-card.png'

const FastagRechargeCard = () => {
  return (
    <div className="fastag-card-section">
        <div className="first-add">
            <h2 className="fastag-card-title">Get 15% off on</h2>
            <h5 className="fastag-card-subtitle">FASTag recharge</h5>
            <p className="fastag-card-text">Pay using Axis bank Credit & Debit Cards</p>
            <div className="fastag-card-button-container">
                <button className="fastag-card-button"> Recharge Now </button>
                <img src={FastagCard} alt="Button 1 Image" className='FastagCard-image'/>
                {/* <button className="button">
                <img src="/path/to/button2-image.png" alt="Button 2 Image" />
                Button 2 Text
                </button> */}
            </div>
        </div>

        <div className="second-ad">
            <h2 className="reserve-fastag-card-title">Reserve a Parking Slot</h2>
            <p className="fastag-card-text">Win 300ml petrol on your first parking!</p>
            <button className="reserve-button">Explore Now</button>
        </div>
    </div>
  )
}

export default FastagRechargeCard