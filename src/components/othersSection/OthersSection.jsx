import React from 'react';
import './othersSection.css';
import RentoutHelmet from '../../assets/others-section/rentout-helmet.png'
import FuelPrice from '../../assets/others-section/fuel-price.png'
import ShopBag from '../../assets/others-section/shop-bag.png'
import MyVehicle from '../../assets/others-section/my-vehicle.png'


const OthersSection = () => {
  return (
    <div className="others-section">
      <h3>Others</h3>
      <div className="others-items">
        <div className="others-item">
            <img src={RentoutHelmet} alt="Rentout Helmet" />
            <p>Rentout Helmet</p>
        </div>
        <div className="others-item">
            <img src={FuelPrice} alt="Fuel Price" />
            <p>Fuel Price</p>
        </div>
        <div className="others-item">
            <img src={ShopBag} alt="Shop" />
            <p>Shop</p>
        </div>
        <div className="others-item">
            <img src={MyVehicle} alt="My Vehicles" />
            <p>My Vehicles</p>
        </div>
      </div>
    </div>
  );
}

export default OthersSection;
