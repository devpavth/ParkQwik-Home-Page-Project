import React from 'react';
import './trending.css';
import HappyCustomers from '../../assets/trending/happy-customers.png';
// import BackgroundTrending from '../../assets/trending/background-of-trending.png';

const Trending = () => {
  return (
    <div className="trending-container">
    {/* <div className="trending-image">
        <img src={BackgroundTrending} alt="EV Parking" />
    </div> */}
      <h3 className="trending-heading">Trending</h3>
      <div className="trending-content">
        <div className="trending-text">
          <h4>Save ₹500</h4>
          <h6>On Your First EV Parking</h6>
          <p>We provide dedicated monthly parking with surveillance</p>
          <div className="customer-count">
            <img src={HappyCustomers} alt="Happy Customers" className="customer-img"/>
            <h3>100+ </h3>
          </div>
          <div className='customer-count-para'>
            <p className='customer-count-para-p'>Happy Customers</p>
          </div>
        </div>
        <div className="trending-indicator">
            <div className="indicator">
                <div className='active'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trending