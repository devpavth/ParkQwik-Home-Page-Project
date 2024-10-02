import React from 'react';
import './gonnaTravel.css';
import CarWash from '../../assets/gonnaTravel/car-wash.png';
import EstimateToll from '../../assets/gonnaTravel/estimate-toll.png';
import Shop from '../../assets/gonnaTravel/shop.png';
import Protocols from '../../assets/gonnaTravel/protocols.png';


const GonnaTravel = () => {
  return (
    <div className="gonna-travel-container">
      <h3 className="gonna-travel-heading">Gonna Travel?</h3>
      <div className="gonna-travel-options">
        <div className="travel-option">
          <img src={CarWash} alt="Car Wash" />
          <p>Car Wash</p>
        </div>
        <div className="travel-option">
          <img src={EstimateToll} alt="Estimate Toll" />
          <p>Estimate Toll</p>
        </div>
        <div className="travel-option">
          <img src={Shop} alt="Shop" />
          <p>Shop</p>
        </div>
        <div className="travel-option">
          <img src={Protocols} alt="Protocols" />
          <p>Protocols</p>
        </div>
      </div>
    </div>
  )
}


export default GonnaTravel
