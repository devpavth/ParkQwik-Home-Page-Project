import React from 'react';
import './services.css';
import NearbyParking from '../../assets/nearby-parking.png'
import EVParking from '../../assets/Ev-parking.png'
import CarInsurance from '../../assets/car-insurance.png'
import RoadAssistance from '../../assets/road-assistance.png'
import TollEstimator from '../../assets/toll-estimator.png'
import CarWash from '../../assets/car-wash.png'
import PayChallan from '../../assets/pay-challan.png'
import ValetParking from '../../assets/valet-parking.png'
// Import additional images

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <img src={NearbyParking} alt="Nearby Parking" />
          <p>Nearby Parking</p>
        </div>
        <div className="service-item">
          <img src={EVParking} alt="EV Parking" />
          <p>EV Parking</p>
        </div>
        <div className="service-item">
          <img src={CarWash} alt="Car Wash" />
          <p>Car Wash</p>
        </div>
        <div className="service-item">
          <img src={CarInsurance} alt="Car Insurance" />
          <p>Vehicle Insurance</p>
        </div>
        <div className="service-item">
          <img src={RoadAssistance} alt="Road Assistance" />
          <p>Roadside Assistance</p>
        </div>
        <div className="service-item">
          <img src={PayChallan} alt="Pay Challan" />
          <p>Pay Challan</p>
        </div>
        <div className="service-item">
          <img src={TollEstimator} alt="Toll Estimator" />
          <p>Toll Estimator</p>
        </div>
        <div className="service-item">
          <img src={ValetParking} alt="Valet Parking" />
          <p>Valet Parking</p>
        </div>
        {/* Add more services here */}
      </div>
    </div>
  )
}

export default Services