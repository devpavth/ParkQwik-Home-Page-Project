import React from 'react';
import './rechargeBillPayments.css';

import FastagRecharge from '../../assets/RechargeBillPayments/fastag-recharge.png';
import MobileRecharge from '../../assets/RechargeBillPayments/mobile-recharge.png';
import Electricity from '../../assets/RechargeBillPayments/electricity.png';
import Water from '../../assets/RechargeBillPayments/water.png';
import GasCylinder from '../../assets/RechargeBillPayments/gas-cylinder.png';
import LoanPayment from '../../assets/RechargeBillPayments/loan-payment.png';
import DTH from '../../assets/RechargeBillPayments/dth.png';
import HouseRent from '../../assets/RechargeBillPayments/house-rent.png';


const RechargeBillPayments = () => {
  return (
    <div className="recharge-bill-payments-container">
        <h3 className="recharge-bill-payments-heading">Recharge & Bill Payments</h3>
        <div className="recharge-bill-options">
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={FastagRecharge} alt="Fastag Recharge" />
                </div>
                <p>Fastag Recharge</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={MobileRecharge} alt="Mobile Recharge" />
                </div>
                <p>Mobile Recharge</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={Electricity} alt="Electricity" />
                </div>
                <p>Electricity</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={Water} alt="Water" />
                </div>
                <p>Water</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={GasCylinder} alt="Gas Cylinder" />
                </div>
                <p>Gas Cylinder</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={LoanPayment} alt="Loan Payment" />
                </div>
                <p>Loan Payment</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={DTH} alt="DTH" />
                </div>
                <p>DTH</p>
            </div>
            <div className="payment-option">
                <div className="icon-wrapper">
                    <img src={HouseRent} alt="House Rent" />
                </div>
                <p>House Rent</p>
            </div>
        </div>
  </div>
  )
}

export default RechargeBillPayments