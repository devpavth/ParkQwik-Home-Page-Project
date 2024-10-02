import React from 'react';
import './exclusiveOffers.css';
import Reward from '../../assets/exclusive-offers/redeem.png';
import Discount from '../../assets/exclusive-offers/discount.png';
import ReferWin from '../../assets/exclusive-offers/refer-win.png';

const ExclusiveOffers = () => {
  return (
    <div className="exclusive-offers-container">
      <h3 className="exclusive-offers-heading">Exclusive Offers</h3>
      <div className="exclusive-offers-options">
        <div className="offer-option">
            <div className="offer-option-img">
                <img src={Reward} alt="Rewards" />
            </div>
          <p>Rewards</p>
        </div>
        <div className="offer-option">
            <div className="offer-option-img">
                <img src={Discount} alt="Discounts" />
            </div>
          <p>Discounts</p>
        </div>
        <div className="offer-option">
            <div className="offer-option-img">
                <img src={ReferWin} alt="Refer & Win" />
            </div>
          <p>Refer & Win</p>
        </div>
      </div>
    </div>
  )
}

export default ExclusiveOffers