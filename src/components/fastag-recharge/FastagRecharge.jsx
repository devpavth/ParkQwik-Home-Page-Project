import React from 'react'
import './fastagRecharge.css';
import NETC from '../../assets/NETC.png'
import BharatBillpay from '../../assets/bharat-billpay.png'

const FastagRecharge = () => {
  return (
    <div className="fastag-container">
      <h2 className="fastag-heading">FASTag Recharge</h2>
      <p className="fastag-subheading">Get up to 100% cashback on first 3 FASTag Recharge</p>
      <div className="fastag-input-container">
        <input type="text" className="fastag-input" placeholder="Add vehicle or chassis number" />
        <button className="fastag-button">Recharge</button>
      </div>
      <div className="fastag-powered">
        <p>Powered by</p>
        <div className="fastag-logos">
          <img src={NETC} alt="NETC" className='netc'/> {/* Add the correct path to your logo */}
          <img src={BharatBillpay} alt="Bharat BillPay" className='bharat'/> {/* Add the correct path to your logo */}
        </div>
      </div>
    </div>
  )
}

export default FastagRecharge