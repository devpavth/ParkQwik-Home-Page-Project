import React from 'react';
import './premiumplans.css';
import MonthlyParking from '../../assets/premium-plans/monthly-parking.png'
import EliteCarWash from '../../assets/premium-plans/elite-car-wash.png'
import { FaArrowRightLong } from "react-icons/fa6";

const PremiumPlans = () => {
  return (
    <div className="premium-plans-container">
      <h3 className="premium-plans-heading">Premium Plans</h3>
      <div className="premium-plans-options">
        <div className="plan-option">
          
          <div className="plan-details">
            <h4 className='premium-plans-title'>Monthly Parking</h4>
            <p className='premium-plans-subtitle'>Dedicated parking available near you.</p>
            
          </div>
          <div className='plan-btn-img'>
            <button className="explore-btn">Explore Now <FaArrowRightLong /></button>
            <img src={MonthlyParking} alt="Monthly Parking" className='parking-img'/>
          </div>
        </div>
        <div className="plan-option">
          
          <div className="plan-details">
            <h4 className='premium-plans-title'>Elite Car Wash</h4>
            <p className='premium-plans-subtitle'>Elite car grooming at your doorstep.</p>
            
          </div>
          <div className='plan-btn-img'>
            <button className="explore-btn">Explore Now <FaArrowRightLong /></button>
            <img src={EliteCarWash} alt="Elite Car Wash" className='elite-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumPlans