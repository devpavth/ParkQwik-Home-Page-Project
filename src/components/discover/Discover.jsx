import React from 'react'
import './discover.css';
import BuyFastag from '../../assets/shopping_bag.png'
import ReplaceFastag from '../../assets/published_with_changes.png'
import ActiveFastag from '../../assets/done_all.png'
import CloseFastag from '../../assets/scan_delete.png'


const Discover = () => {
  return (
    <div className="discover-container">
      <h2 className="discover-heading">Discover</h2>
      <div className="discover-grid">
        <div className="discover-item">
          <img src={BuyFastag} alt="Buy FASTag" /> 
          <p>Buy FASTag</p>
        </div>
        <div className="discover-item">
          <img src={ReplaceFastag} alt="Replace FASTag" /> {/* Add the correct path to your logo */}
          <p>Replace FASTag</p>
        </div>
        <div className="discover-item">
          <img src={ActiveFastag} alt="Active FASTag" /> 
          <p>Active FASTag</p>
        </div>
        <div className="discover-item">
          <img src={CloseFastag} alt="Close FASTag" />
          <p>Close FASTag</p>
        </div>
      </div>
    </div>
  )
}

export default Discover