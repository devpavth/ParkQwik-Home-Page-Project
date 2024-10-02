import React from 'react';
import './yourCarsCenter.css'; 
import PayChallan from '../../assets/your-cars-center/pay-challan.png';
import CrimeReporter from '../../assets/your-cars-center/crime-reporter.png';
import RTO from '../../assets/your-cars-center/rto-center.png';
import PUCC from '../../assets/your-cars-center/pucc-center.png';

const YourCarsCenter = () => {
  return (
    <div className="your-cars-center">
      <h2 className="cars-center-header">Your Car's Center</h2>
      <div className="section-container">
        <div className="cars-center-section">
            <div className="icon-wrapper">
                <img src={PayChallan} alt="Pay Challans" />
            </div>
          <p>Pay Challans</p>
        </div>
        <div className="cars-center-section">
            <div className="icon-wrapper">
                <img src={CrimeReporter} alt="Crime Reporter" />
            </div>
          <p>Crime Reporter</p>
        </div>
        <div className="cars-center-section">
            <div className="icon-wrapper">
                <img src={RTO} alt="RTO Center" />
            </div>
          <p>RTO Center</p>
        </div>
        <div className="cars-center-section">
            <div className="icon-wrapper">
                <img src={PUCC} alt="PUCC Center" />
            </div>
          <p>PUCC Center</p>
        </div>
      </div>
    </div>
  )
}

export default YourCarsCenter