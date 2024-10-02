import React from 'react';
import './addMoneyWallet.css';
import Frame from '../../assets/Frame.png'

const AddMoneyWallet = () => {
  return (
    <div className="add-money-wallet">
        <div className="wallet-content">
            <p className="wallet-title">Add money to wallet</p>
            <p className="wallet-subtitle">Get 2% cashback</p>
            <button className="add-money-btn">Add Money</button>
        </div>
        <div className="wallet-image">
            <img src={Frame} alt="Wallet illustration" />
        </div>
    </div>
  )
}

export default AddMoneyWallet