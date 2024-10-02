import React from 'react';
import './header.css';
import Avatar from '../../assets/avatar-1.jpg'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";
import { TfiWallet } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi"; // Hamburger menu icon

const Header = () => {
  return (
    <header className="header">
        <div className="user-info">
            <img src={Avatar} alt="User Avatar" className="avatar" />
            <div className="hamburger-menu">
                <FiMenu className="menu-icon" />
            </div>
        </div>
        <button className="add-vehicle-btn">
            <span className="plus-icon">+</span>
            Add Vehicle</button>
        <div className="icons">
            <span className="icon"><TfiWallet /></span>
            <span className="icon"><IoMdNotificationsOutline /></span>
            <span className="icon"><IoIosShareAlt /></span>
        </div>
        
    </header>
  )
}

export default Header